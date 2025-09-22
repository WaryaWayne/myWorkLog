import { join } from "path";

const journalFile = join(process.cwd(), "results", "work_ive_done.md");
const input = await Bun.file(journalFile).text();

// Split by date headings
const sections = input.split(/^## /m).filter(Boolean);

const entries = sections.map((section) => {
  const lines = section.trim().split("\n");
  const date = lines[0].trim();

  // Split projects inside a date section
  const projectSections = section
    .split(/\*\*Project\s+/)
    .slice(1) // remove the part before the first project
    .map((projSec) => {
      const projLines = projSec.trim().split("\n");

      const projectName = projLines[0].replace("**", "").trim();

      const commits = [];
      let currentCommit: { title: string; details: string[] } | null = null;

      for (let i = 1; i < projLines.length; i++) {
        const line = projLines[i].trim();
        if (line.startsWith("- ")) {
          if (currentCommit) {
            commits.push(currentCommit);
          }
          currentCommit = { title: line.replace("- ", "").trim(), details: [] };
        } else if (line.startsWith("--")) {
          if (currentCommit) {
            currentCommit.details.push(line.replace(/^--\s*/, "").trim());
          }
        }
      }
      if (currentCommit) {
        commits.push(currentCommit);
      }

      return {
        project: projectName,
        commits,
      };
    });

  const totalCommits = projectSections.reduce(
    (sum, proj) => sum + proj.commits.length,
    0
  );

  return {
    date,
    totalCommits,
    projects: projectSections,
  };
});

try {
  console.log("Starting conversion");
  const outputFile = join(process.cwd(), "results", "work_ive_done.json");
  Bun.write(outputFile, JSON.stringify(entries, null, 2));
  console.log("conversion complete!");
  console.log("✅ work_ive_done.json created");
} catch (err) {
  console.warn(`Error happened: ${err}`);
}
