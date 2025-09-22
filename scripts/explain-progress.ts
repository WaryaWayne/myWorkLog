import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  apiKey: process.env.AI_API_KEY,
});

// const workDone = await Bun.file('../results/work_ive_done.md').text();
// const sections = workDone.split(/^## /m).slice(1); // Remove empty first element

// const startDate = '2025-09-04';

// let journalContent = await Bun.file('../results/daily_journal.md').text();

// for (const section of sections) {
//   const lines = section.trim().split('\n');
//   const dateLine = lines[0];
//   const dateMatch = dateLine.match(/^(\d{4}-\d{2}-\d{2})/);
//   if (!dateMatch) continue;
//   const date = dateMatch[1];
//   if (date < startDate) continue;

//   const commits = lines.slice(1).join('\n').trim();
//   if (!commits) continue;

//   const { text } = await generateText({
//     model: google('models/gemini-1.5-flash'),
//     system: "Summarize and explain the daily progress from the following commits in a well-formatted markdown format suitable for GitHub. Use headings, bullet points, and code blocks where appropriate to make it readable and professional.",
//     prompt: commits,
//   });

//   const entry = `## ${date}\n\n${text}\n\n`;
//   journalContent += entry;
// }

// await Bun.write('../results/daily_journal.md', journalContent);

const workDone = await Bun.file('../results/work_ive_done.md').text();
const sections = workDone.split(/^## /m).slice(1); // Remove empty first element

// Read daily journal and find the last entry date
const journalContent = await Bun.file('../results/daily_journal.md').text();
const journalSections = journalContent.split(/^## /m).slice(1);
let lastJournalDate = '2025-09-01'; // Default start date
if (journalSections.length > 0) {
  const lastJournalSection = journalSections[journalSections.length - 1];
  const dateMatch = lastJournalSection.match(/^(\d{4}-\d{2}-\d{2})/);
  if (dateMatch) {
    lastJournalDate = dateMatch[1];
  }
}

// Process sections after the last journal date
let newEntries = '';
for (const section of sections) {
  const lines = section.trim().split('\n');
  const dateLine = lines[0];
  const dateMatch = dateLine.match(/^(\d{4}-\d{2}-\d{2})/);
  if (!dateMatch) continue;
  const date = dateMatch[1];
  if (date <= lastJournalDate) continue;

  const commits = lines.slice(1).join('\n').trim();
  if (!commits) continue;

  const { text } = await generateText({
    model: google('models/gemini-2.5-flash-lite'),
    system: "Summarize and explain the daily progress from the following commits in a well-formatted markdown format suitable for GitHub. Use headings, bullet points, and code blocks where appropriate to make it readable and professional.",
    prompt: commits,
  });

  const now = new Date();
  const dateTime = now.toISOString().slice(0, 19).replace('T', ' ');
  newEntries += `## ${dateTime}\n\n${text}\n\n`;
}

// Append new entries to daily journal
if (newEntries) {
  const current = await Bun.file('../results/daily_journal.md').text();
  await Bun.write('../results/daily_journal.md', current + newEntries);
}
