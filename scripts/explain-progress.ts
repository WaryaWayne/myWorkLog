import { generateObject, generateText, streamObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { join } from "path";
import z from "zod/v4";

// Parse command line arguments
const args = process.argv.slice(2);
const verbose = args.includes("-v") || args.includes("--verbose");

// Show help if requested
if (args.includes("-h") || args.includes("--help")) {
  console.log(`
Usage: bun run scripts/explain-progress.ts [options]

Options:
  -v, --verbose    Enable verbose logging to see detailed progress
  -h, --help       Show this help message

Examples:
  bun run scripts/explain-progress.ts
  bun run scripts/explain-progress.ts -v
  bun run scripts/explain-progress.ts --verbose
  `);
  process.exit(0);
}

if (verbose) {
  console.log("🚀 Starting explain-progress script...");
}

const google = createGoogleGenerativeAI({
  apiKey: process.env.AI_API_KEY,
});

const dailyReportSchema = z.object({
  dates: z.array(
    z.object({
      dateTime: z.string().describe("Date in YYYY-MM-DD-HH-MM format"),
      projects: z.array(
        z.object({
          projectName: z
            .string()
            .describe("Name of the project (e.g., 'Project 72', 'Project 12')"),
          sections: z.array(
            z.object({
              sectionTitle: z
                .string()
                .describe(
                  "Section title like 'Feature Enhancements', 'Backend Updates', 'Bug Fixes', etc."
                ),
              items: z.array(
                z
                  .string()
                  .describe("Individual bullet points summarizing commits")
              ),
              subsections: z
                .array(
                  z.object({
                    title: z
                      .string()
                      .describe(
                        "Subsection title like 'bug fixes', 'refactoring', etc."
                      ),
                    items: z.array(z.string()),
                  })
                )
                .optional(),
            })
          ),
        })
      ),
    })
  ),
});

type DailyReport = z.infer<typeof dailyReportSchema>;

function formatReport(obj: DailyReport) {
  let md = "";
  for (const dateEntry of obj.dates) {
    md += `## ${dateEntry.dateTime}\n\n`;
    for (const project of dateEntry.projects) {
      md += `### ${project.projectName}\n\n`;
      for (const section of project.sections) {
        md += `#### ${section.sectionTitle}\n\n`;
        for (const item of section.items) {
          md += `- ${item}\n`;
        }
        md += "\n";
        if (section.subsections) {
          for (const sub of section.subsections) {
            md += `##### ${sub.title}\n\n`;
            for (const subitem of sub.items) {
              md += `- ${subitem}\n`;
            }
            md += "\n";
          }
        }
      }
    }
  }
  return md;
}

const workDoneFile = join(process.cwd(), "results", "work_ive_done.md");
if (verbose) {
  console.log(`📖 Reading work done file: ${workDoneFile}`);
}
const workDone = await Bun.file(workDoneFile).text();
const sections = workDone.split(/^## /m).slice(1); // Remove empty first element
if (verbose) {
  console.log(`📊 Found ${sections.length} sections in work done file`);
}

// Read daily journal and find the last entry date
const journalFile = join(process.cwd(), "results", "daily_journal.md");
if (verbose) {
  console.log(`📖 Reading daily journal file: ${journalFile}`);
}
const journalContent = await Bun.file(journalFile).text();

const journalSections = journalContent.split(/^## /m).slice(1);
let lastJournalDate = "2025-09-01"; // Default start date
if (journalSections.length > 0) {
  const lastJournalSection = journalSections[journalSections.length - 1];
  const dateMatch = lastJournalSection.match(/^(\d{4}-\d{2}-\d{2})/);
  if (dateMatch) {
    lastJournalDate = dateMatch[1];
  }
}
if (verbose) {
  console.log(`📅 Last journal date found: ${lastJournalDate}`);
}

// Collect sections after the last journal date
let newSections = [];
for (const section of sections) {
  const lines = section.trim().split("\n");
  const dateLine = lines[0];
  const dateMatch = dateLine.match(/^(\d{4}-\d{2}-\d{2})/);
  if (!dateMatch) continue;
  const date = dateMatch[1];
  if (date <= lastJournalDate) continue;

  const commits = lines.slice(1).join("\n").trim();
  if (!commits) continue;

  newSections.push({ date, commits });
}

let newEntries = "";
if (newSections.length > 0) {
  if (verbose) {
    console.log(`🔍 Found ${newSections.length} new sections to process`);
  }

  // Build concatenated commits for single API call
  let allCommits = "";
  for (const sec of newSections) {
    allCommits += `Date: ${sec.date}\nCommits:\n${sec.commits}\n\n`;
  }

  if (verbose) {
    console.log(`🤖 Analyzing all commits with AI in single call`);
  }

  const { object } = await generateObject({
    model: google("models/gemini-2.5-flash"),
    system: `
            You are a professional daily report creator. Your job is to analyze commit messages and create a structured summary in markdown.

            ANALYSIS RULES:
            1. Group commits by date, then by project
            2. Within each project, categorize commits into logical sections like:
              - Feature Enhancements/New Features
              - Bug Fixes
              - Refactoring
              - Backend Updates
              - Frontend Updates
              - Documentation
              - Performance Improvements
              - etc.

            3. Summarize related commits together - don't just list them individually
            4. Use clear, professional language
            5. Focus on what was accomplished, not just what was changed
            6. When you see patterns like multiple similar commits, group them intelligently
            7. The commits are grouped by date. Create a separate entry in the dates array for each date provided.
            8. For each date, set the dateTime as the provided date followed by the current time in HH-MM format (e.g., "2025-09-01-13-45")

            FORMATTING NOTES:
            - Project names should match exactly what's in the commits (e.g., "Project 72", "Project 12")
            - Section titles should be descriptive and professional
            - Bullet points should be concise but informative
            - Use subsections for things like "bug fixes" under main sections when appropriate

            `,
    prompt: `Analyze and summarize these commits from multiple dates into a structured daily report: ${allCommits}`,
    temperature: 0.4,
    schema: dailyReportSchema,
  });

  // Post-process to ensure dateTime includes current time
  const now = new Date();
  const currentTime = now.toISOString().slice(11, 16); // HH:MM
  for (const dateEntry of object.dates) {
    const datePart = dateEntry.dateTime.split('-').slice(0, 3).join('-'); // YYYY-MM-DD
    dateEntry.dateTime = `${datePart}-${currentTime}`;
  }

  newEntries = formatReport(object);
  if (verbose) {
    console.log(`✅ Completed AI analysis for ${newSections.length} dates`);
  }
}

// Append new entries to daily journal
if (newEntries) {
  if (verbose) {
    console.log(`💾 Appending ${newSections.length} new entries to daily journal`);
  }
  const current = await Bun.file(journalFile).text();
  await Bun.write(journalFile, current + newEntries);
  if (verbose) {
    console.log(`✅ Successfully updated daily journal with new entries`);
  }
} else {
  if (verbose) {
    console.log(`📭 No new entries to add to daily journal`);
  }
}

if (verbose) {
  console.log(`🎉 Script completed successfully!`);
}
