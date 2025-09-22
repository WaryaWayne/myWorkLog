import { join } from "path";

const journalFile = join(process.cwd(), "results", "daily_journal.md");
const input = await Bun.file(journalFile).text();

// Split by date headings
const sections = input.split(/^## /m).filter(Boolean);

const entries = sections.map((section) => {
  const lines = section.trim().split("\n");

  const date = lines[0].trim();
  const projectHeader = lines.find((l) => l.startsWith("### ")) || "";
  const project = projectHeader.replace("### ", "").trim();

  const sectionBlocks: { type: string; comments: string[] }[] = [];
  let currentType = "";
  let currentComments: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("#### ")) {
      // Save previous block
      if (currentType) {
        sectionBlocks.push({
          type: currentType,
          comments: currentComments,
        });
      }
      // Start new block
      currentType = line.replace("#### ", "").trim();
      currentComments = [];
    } else if (line.startsWith("- ")) {
      currentComments.push(line.replace("- ", "").trim());
    }
  }

  if (currentType) {
    sectionBlocks.push({
      type: currentType,
      comments: currentComments,
    });
  }

  return {
    date,
    project,
    sections: sectionBlocks,
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
