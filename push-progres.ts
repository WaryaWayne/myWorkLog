#!/usr/bin/env bun

import { $ } from "bun";
import {
  existsSync,
  readFileSync,
  writeFileSync,
  readdirSync,
  statSync,
} from "fs";
import { join, relative } from "path";

const PROJECTS_DIR = join(process.cwd(), "..");
const LOG_FILE = join(process.cwd(), "work_ive_done.md");
const DEFAULT_START = "2023-01-01"; // start date if no log exists

// --- helpers ---
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function anonymizeData(data: Record<string, Record<string, string[]>>) {
  for (const date in data) {
    const repos = Object.keys(data[date]).sort();
    const map = new Map<string, string>();
    repos.forEach((repo, i) => map.set(repo, `Project ${i + 1}`));
    const newRepos: Record<string, string[]> = {};
    for (const repo of repos) {
      const generic = map.get(repo)!;
      const msgs = data[date][repo].map(msg => {
        let newMsg = msg;
        for (const [actual, gen] of map) {
          newMsg = newMsg.replace(new RegExp(escapeRegExp(actual), 'g'), gen);
          const parts = actual.split('/');
          for (const part of parts) {
            if (part) newMsg = newMsg.replace(new RegExp(escapeRegExp(part), 'g'), gen);
          }
        }
        return newMsg;
      });
      newRepos[generic] = msgs;
    }
    data[date] = newRepos;
  }
}

function findGitRepos(baseDir: string): string[] {
  const repos: string[] = [];
  function scan(dir: string) {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === ".git") {
          repos.push(dir);
        } else {
          // skip common large dirs quickly
          if (
            entry.name === "node_modules" ||
            entry.name === ".venv" ||
            entry.name === "venv"
          )
            continue;
          scan(full);
        }
      }
    }
  }
  scan(baseDir);
  return repos;
}

function isExcludedPath(p: string) {
  const low = p.toLowerCase();
  if (low.includes("/node_modules/") || low.startsWith("node_modules/")) return true;
  // virtual envs
  if (/(^|\/)(venv|\.venv|env|virtualenv)(\/|$)/.test(p)) return true;
  // lockfiles / package-only churn
  const name = p.split("/").pop() || "";
  if (["package-lock.json", "yarn.lock", "pnpm-lock.yaml", "package.json", "bun.lock"].includes(name))
    return true;
  return false;
}

// Parse existing log into structure { header, data: {date: { repo: [msgs] }}}
function parseExistingLog(content: string) {
  const data: Record<string, Record<string, string[]>> = {};
  let initialHeader = "";
  const dateMatches = [...content.matchAll(/^## (\d{4}-\d{2}-\d{2})/gm)];
  if (dateMatches.length === 0) {
    initialHeader = content;
    return { initialHeader, data };
  }
  const firstIndex = dateMatches[0].index ?? 0;
  initialHeader = content.slice(0, firstIndex);

  for (let i = 0; i < dateMatches.length; i++) {
    const m = dateMatches[i];
    const date = m[1];
    const start = (m.index ?? 0) + m[0].length;
    const end = i + 1 < dateMatches.length ? (dateMatches[i + 1].index ?? content.length) : content.length;
    const block = content.slice(start, end).trim();

    const lines = block.split("\n");
    let currentRepo: string | null = null;
    for (let l of lines) {
      l = l.trim();
      if (!l) continue;
      const repoMatch = l.match(/^\*\*(.+?)\*\*$/);
      if (repoMatch) {
        currentRepo = repoMatch[1].trim();
        if (!data[date]) data[date] = {};
        if (!data[date][currentRepo]) data[date][currentRepo] = [];
        continue;
      }
      if (l.startsWith("- ")) {
        if (currentRepo) {
          data[date][currentRepo].push(l.slice(2).trim());
        }
        continue;
      }
      // ignore Total commits lines while parsing; total will be recomputed
    }
  }
  return { initialHeader, data };
}

function buildLogContent(initialHeader: string, data: Record<string, Record<string, string[]>>) {
  const dates = Object.keys(data).sort(); // chronological ascending
  let out = initialHeader ? initialHeader.trimEnd() + "\n\n" : "";
  for (const date of dates) {
    out += `## ${date}\n\n`;
    const repos = Object.keys(data[date]).sort();
    let dayTotal = 0;
    for (const repo of repos) {
      const msgs = data[date][repo];
      dayTotal += msgs.length;
      out += `**${repo}**\n\n`;
      for (const m of msgs) out += `- ${m}\n`;
      out += `\n`;
    }
    out += `**Total commits:** ${dayTotal}\n\n`;
  }
  return out.trimEnd() + "\n";
}

// --- main ---
async function main() {
  if (!existsSync(PROJECTS_DIR)) {
    console.error("Projects dir not found:", PROJECTS_DIR);
    process.exit(1);
  }

  // Detect your global git identity (optional, used to prefer your commits)
  let globalEmail = "";
  let globalName = "";
  try {
    globalEmail = (await $`git config --global user.email`.text()).trim();
    globalName = (await $`git config --global user.name`.text()).trim();
  } catch {
    // ignore — we'll still run but won't filter by author
  }

  // read existing log
  let logContent = "";
  if (existsSync(LOG_FILE)) {
    logContent = readFileSync(LOG_FILE, "utf8");
  }

  // determine sinceDate
  let sinceDate = DEFAULT_START;
  if (logContent) {
    const matches = [...logContent.matchAll(/^## (\d{4}-\d{2}-\d{2})/gm)];
    if (matches.length > 0) {
      sinceDate = matches[matches.length - 1][1];
    }
  }

  const repos = findGitRepos(PROJECTS_DIR);
  if (repos.length === 0) {
    console.log("No git repos found under", PROJECTS_DIR);
    return;
  }

  const newGrouped: Record<string, Record<string, string[]>> = {};

  for (const repoPath of repos) {
    const repoRelative = relative(PROJECTS_DIR, repoPath) || repoPath;
    try {
      // gather commits with file lists
      // format: a commit marker, then header line with hash|date|author|email|subject, then changed paths
      const raw = await $`git -C ${repoPath} log --since=${sinceDate} --pretty=format="--COMMIT--%n%H|%ad|%an|%ae|%s" --date=short --name-only`.text();
      

      if (!raw) continue;
      const parts = raw.split("--COMMIT--\n").map(p => p.trim()).filter(Boolean);
      for (const part of parts) {
        const lines = part.split("\n").filter(Boolean);
        if (lines.length === 0) continue;
        const header = lines[0];
        const headerParts = header.split("|");
        if (headerParts.length < 5) continue;
        const [, date, authorName, authorEmail, subjectParts] = headerParts;
        // subject may contain '|' in unusual repos; join remaining
        const subject = headerParts.slice(4).join("|").trim();
        const files = lines.slice(1).map(s => s.trim()).filter(Boolean);

        // filter by author if we know your identity
        if (globalEmail || globalName) {
          let matchAuthor = false;
          if (globalEmail && authorEmail && authorEmail === globalEmail) matchAuthor = true;
          if (!matchAuthor && globalName && authorName && authorName.toLowerCase().includes(globalName.toLowerCase()))
            matchAuthor = true;
          if (!matchAuthor) {
            // skip commits not by you (ideal behaviour)
            continue;
          }
        }

        // if commit touches only excluded paths (node_modules, venv, lockfiles), skip
        if (files.length > 0) {
          const meaningful = files.some(f => !isExcludedPath(f));
          if (!meaningful) continue; // skip this commit
        }
        // otherwise accept commit
        if (!newGrouped[date]) newGrouped[date] = {};
        if (!newGrouped[date][repoRelative]) newGrouped[date][repoRelative] = [];
        newGrouped[date][repoRelative].push(subject || "(no subject)");
      }
    } catch (err: any) {
      const stderr = String(err?.stderr || "");
      if (stderr.includes("does not have any commits yet")) {
        // skip empty repos
        continue;
      }
      console.error(`Error reading ${repoRelative}:`, stderr || err);
    }
  }

  // nothing new?
  const newDates = Object.keys(newGrouped);
  if (newDates.length === 0) {
    console.log("No new commits since last entry (or filtered out).");
    return;
  }

  // parse existing log and merge
  const parsed = parseExistingLog(logContent || "");
  const merged = parsed.data;

  for (const date of newDates) {
    if (!merged[date]) merged[date] = {};
    for (const repo of Object.keys(newGrouped[date])) {
      if (!merged[date][repo]) merged[date][repo] = [];
      // append, preserve order and dedupe
      const combined = merged[date][repo].concat(newGrouped[date][repo]);
      const seen = new Set<string>();
      merged[date][repo] = combined.filter(m => {
        if (seen.has(m)) return false;
        seen.add(m);
        return true;
      });
    }
  }

  anonymizeData(merged);

  const newContent = buildLogContent(parsed.initialHeader, merged);
  writeFileSync(LOG_FILE, newContent);
  console.log(`✅ work_ive_done.md updated. Dates added/merged: ${newDates.join(", ")}`);
}

await main();
