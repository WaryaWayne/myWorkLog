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
const sections = workDone.split(/^## /m);
const lastSection = sections[sections.length - 1];
const commits = lastSection.trim();

const { text } = await generateText({
  model: google('models/gemini-2.5-flash-lite'),
  system: "Summarize and explain the daily progress from the following commits in a well-formatted markdown format suitable for GitHub. Use headings, bullet points, and code blocks where appropriate to make it readable and professional.",
  prompt: commits,
});

// Append to daily journal
const date = new Date().toISOString().split('T')[0];
const entry = `## ${date}\n\n${text}\n\n`;
const current = await Bun.file('../results/daily_journal.md').text();
await Bun.write('../results/daily_journal.md', current + entry);
