import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  apiKey: process.env.AI_API_KEY,
});

const workDone = await Bun.file('work_ive_done.md').text();
const sections = workDone.split(/^## /m);
const lastSection = sections[sections.length - 1];
const commits = lastSection.trim();

const { text } = await generateText({
  model: google('models/gemini-1.5-flash'),
  system: "Summarize and explain the daily progress from the following commits in a concise paragraph.",
  prompt: commits,
});

// Append to daily journal
const date = new Date().toISOString().split('T')[0];
const entry = `## ${date}\n\n${text}\n\n`;
const current = await Bun.file('daily_journal.md').text();
await Bun.write('daily_journal.md', current + entry); Promise<number>



