import { join } from "path";

const journalFile = join(process.cwd(), "results", "daily_journal.md");
const input = await Bun.file(journalFile).text();

// Split by date headings
const sections = input.split(/^## /m).filter(Boolean);

const entries = sections.map((section) => {
  const lines = section.trim().split("\n");

  const date = lines[0].trim();
  const project =
    lines
      .find((l) => l.startsWith("### "))
      ?.replace("### ", "")
      .trim() || "";
  const type =
    lines
      .find((l) => l.startsWith("#### "))
      ?.replace("#### ", "")
      .trim() || "";

  const commentLines = lines
    .filter((l) => l.startsWith("- "))
    .map((l) => l.replace("- ", "").trim());

  return {
    date,
    project,
    type,
    comment: commentLines,
  };
});

try {
  console.log("Starting conversion");
  const outputFile = join(process.cwd(), "results", "daily_journal.json");
  Bun.write(outputFile, JSON.stringify(entries, null, 2));
  console.log("conversion complete!");
  console.log("✅ daily_journal.json created");
} catch (err) {
  console.warn(`Error happened: ${err}`);
}
