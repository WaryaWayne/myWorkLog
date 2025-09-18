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

function anonymizeData(data: Record<string, Record<string, {hash: string, message: string}[]>>) {
  for (const date in data) {
    const repos = Object.keys(data[date]).sort();
    const map = new Map<string, string>();
    repos.forEach((repo, i) => map.set(repo, `Project ${i + 1}`));
    const newRepos: Record<string, {hash: string, message: string}[]> = {};
    for (const repo of repos) {
      const generic = map.get(repo)!;
      const msgs = data[date][repo].map(item => {
        let newMsg = item.message;
        for (const [actual, gen] of map) {
          newMsg = newMsg.replace(new RegExp(escapeRegExp(actual), 'g'), gen);
          const parts = actual.split('/');
          for (const part of parts) {
            if (part) newMsg = newMsg.replace(new RegExp(escapeRegExp(part), 'g'), gen);
          }
        }
        return {hash: item.hash, message: newMsg};
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

// Parse existing log into structure { header, data: {date: { repo: [{hash, message}] }}, lastDate, lastTime}
function parseExistingLog(content: string) {
  const data: Record<string, Record<string, {hash: string, message: string}[]>> = {};
  let initialHeader = "";
  let lastDate: string | null = null;
  let lastTime: string | null = null;
  const dateMatches = [...content.matchAll(/^## (\d{4}-\d{2}-\d{2})(?: (\d{2}:\d{2}))?/gm)];
  if (dateMatches.length === 0) {
    initialHeader = content;
    return { initialHeader, data, lastDate, lastTime };
  }
  const firstIndex = dateMatches[0].index ?? 0;
  initialHeader = content.slice(0, firstIndex);

  for (let i = 0; i < dateMatches.length; i++) {
    const m = dateMatches[i];
    const date = m[1];
    const time = m[2] || null;
    lastDate = date;
    lastTime = time;
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
          data[date][currentRepo].push({hash: '', message: l.slice(2).trim()});
        }
        continue;
      }
      // ignore Total commits lines while parsing; total will be recomputed
    }
  }
  return { initialHeader, data, lastDate, lastTime };
}

function buildLogContent(initialHeader: string, data: Record<string, Record<string, {hash: string, message: string}[]>>, currentTime: string) {
  const dates = Object.keys(data).sort(); // chronological ascending
  let out = initialHeader ? initialHeader.trimEnd() + "\n\n" : "";
  for (let i = 0; i < dates.length; i++) {
    const date = dates[i];
    const isLatest = i === dates.length - 1;
    const headerTime = isLatest ? ` ${currentTime}` : '';
    out += `## ${date}${headerTime}\n\n`;
    const repos = Object.keys(data[date]).sort();
    let dayTotal = 0;
    for (const repo of repos) {
      const msgs = data[date][repo];
      dayTotal += msgs.length;
      out += `**${repo}**\n\n`;
      for (const item of msgs) out += `- ${item.message}\n`;
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

  // parse existing log to get repos and last date/time
  const { initialHeader, data, lastDate, lastTime } = parseExistingLog(logContent || "");
  const existingRepos = new Set<string>();
  for (const date in data) {
    for (const repo in data[date]) {
      existingRepos.add(repo);
    }
  }

  // determine sinceDate
  let sinceDate: string;
  if (lastDate) {
    sinceDate = lastTime ? `${lastDate} ${lastTime}` : lastDate;
  } else {
    sinceDate = DEFAULT_START;
  }

  const repos = findGitRepos(PROJECTS_DIR);
  if (repos.length === 0) {
    console.log("No git repos found under", PROJECTS_DIR);
    return;
  }

  const newGrouped: Record<string, Record<string, {hash: string, message: string}[]>> = {};

  for (const repoPath of repos) {
    const repoRelative = relative(PROJECTS_DIR, repoPath) || repoPath;
    try {
      // gather commits with file lists
      // format: a commit marker, then header line with hash|date|author|email|subject, then body, then --FILES--, then changed paths
      const raw = await $`git -C ${repoPath} log --since=${sinceDate} --pretty=format="--COMMIT--%n%H|%ad|%an|%ae|%s%n%b%n--FILES--%n" --date=short --name-only`.text();
      

      if (!raw) continue;
      const parts = raw.split("--COMMIT--\n").map(p => p.trim()).filter(Boolean);
      for (const part of parts) {
        const sections = part.split("\n--FILES--\n");
        if (sections.length !== 2) continue;
        const [commitInfo, filesStr] = sections;
        const lines = commitInfo.split("\n").filter(Boolean);
        if (lines.length === 0) continue;
        const header = lines[0];
        const headerParts = header.split("|");
        if (headerParts.length < 5) continue;
        const [hash, date, authorName, authorEmail, subjectParts] = headerParts;
        // subject may contain '|' in unusual repos; join remaining
        const subject = headerParts.slice(4).join("|").trim();
        const bodyLines = lines.slice(1);
        const body = bodyLines.join("\n").trim();
        const files = filesStr.split("\n").map(s => s.trim()).filter(Boolean);

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
        // format message with body indented
        let message = subject || "(no subject)";
        if (body) {
          message += "\n  -- " + body.replace(/\n/g, "\n  -- ");
        }

        // otherwise accept commit
        if (!newGrouped[date]) newGrouped[date] = {};
        if (!newGrouped[date][repoRelative]) newGrouped[date][repoRelative] = [];
        newGrouped[date][repoRelative].push({hash, message});
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

  // merge with existing
  const merged: Record<string, Record<string, {hash: string, message: string}[]>> = data;

  for (const date of newDates) {
    if (!merged[date]) merged[date] = {};
    for (const repo of Object.keys(newGrouped[date])) {
      if (!merged[date][repo]) merged[date][repo] = [];
      // dedupe by full message
      const existingMessages = new Set(merged[date][repo].map(item => item.message));
      for (const item of newGrouped[date][repo]) {
        if (!existingMessages.has(item.message)) {
          merged[date][repo].push(item);
          existingMessages.add(item.message);
        }
      }
    }
  }

  anonymizeData(merged);

  const currentTime = new Date().toTimeString().slice(0, 5);
  const newContent = buildLogContent(initialHeader, merged, currentTime);
  writeFileSync(LOG_FILE, newContent);
  console.log(`✅ work_ive_done.md updated. Dates added/merged: ${newDates.join(", ")}`);
}

await main();
