import { generateText, streamObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { join } from "path";
import z from "zod/v4";

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

// await Bun.write(journalFile, journalContent);
const workDoneFile = join(process.cwd(), "results", "work_ive_done.md");
const workDone = await Bun.file(workDoneFile).text();
const sections = workDone.split(/^## /m).slice(1); // Remove empty first element

// Read daily journal and find the last entry date
const journalFile = join(process.cwd(), "results", "daily_journal.md");
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

// Process sections after the last journal date
let newEntries = "";
for (const section of sections) {
  const lines = section.trim().split("\n");
  const dateLine = lines[0];
  const dateMatch = dateLine.match(/^(\d{4}-\d{2}-\d{2})/);
  if (!dateMatch) continue;
  const date = dateMatch[1];
  if (date <= lastJournalDate) continue;

  const commits = lines.slice(1).join("\n").trim();
  if (!commits) continue;

  const { object } = streamObject({
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

            FORMATTING NOTES:
            - Project names should match exactly what's in the commits (e.g., "Project 72", "Project 12")
            - Section titles should be descriptive and professional
            - Bullet points should be concise but informative
            - Use subsections for things like "bug fixes" under main sections when appropriate

            `,
    prompt: `Analyze and summarize these commits into a structured daily report: ${commits}`,
    temperature: 0.4,
    schema: dailyReportSchema,
  });

  const now = new Date();
  const dateTime = now.toISOString().slice(0, 19).replace("T", " ");
  // parse the new object into new entries it is no longer a string. object
  newEntries += `## ${dateTime}\n\n${text}\n\n`;
}

// Append new entries to daily journal
if (newEntries) {
  const current = await Bun.file(journalFile).text();
  await Bun.write(journalFile, current + newEntries);
}
