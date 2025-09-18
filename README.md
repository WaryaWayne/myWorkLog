# My Work Log Quest

This is my personal quest to put myself out there and share my progress publicly. I'm making the commits I've made in my personal projects visible to the world, documenting my daily work and updates.

## What This Is

- A log of commits from various personal projects
- Updated daily via the `scripts/push-progres.ts` script
- AI-generated daily summaries in `results/daily_journal.md`
- A way to track and showcase my coding journey

## How It Works

The `scripts/push-progres.ts` script scans git repositories in the parent directory, collects recent commits, filters out irrelevant ones (like lockfiles or initial commits), and appends them to `results/work_ive_done.md` in an anonymized format.

The `scripts/explain_progres.ts` script uses AI to generate a markdown-formatted summary of the latest day's commits and appends it to `results/daily_journal.md`.

## Daily Updates

I commit to updating this log every day, reflecting on what I've worked on and sharing it openly.

## Prerequisites

- **Bun JS**: You must have Bun installed. If not, install it from [bun.sh](https://bun.sh).
- **Directory Structure**: The script assumes your personal projects are in the parent directory of this script (i.e., `../` relative to the script's location). If your projects are in a different location, you may need to modify the `PROJECTS_DIR` variable in `scripts/push-progres.ts`.
- **Git Repositories**: Ensure your projects are git repositories with commits.
- **AI API Key**: For `scripts/explain_progres.ts`, set `AI_API_KEY` environment variable for Google Generative AI.

## Usage

### Update Work Log
Run the script to update the work log:

```bash
cd /path/to/myWorkLog
bun run scripts/push-progres.ts
```

This will:
1. Check if the projects directory exists (parent directory by default).
2. Detect your global git identity (optional, for filtering commits).
3. Read and parse the existing `results/work_ive_done.md` log.
4. Determine the date since the last update.
5. Scan for git repositories in the projects directory.
6. Gather new commits from each repository since the last run.
7. Filter out irrelevant commits (e.g., lockfiles, initial commits).
8. Merge new commits with existing data.
9. Anonymize the data for privacy.
10. Update `results/work_ive_done.md` with the new content.

### Generate Daily Summary
Run the AI script to summarize the latest day's progress:

```bash
bun run scripts/explain_progres.ts
```

This generates a markdown summary and appends it to `results/daily_journal.md`.

### Alias (Mac Example)
For convenience, you can create aliases. On macOS (using zsh or bash), add to your `~/.zshrc` or `~/.bashrc`:

```bash
alias push-progress="bun run /path/to/myWorkLog/scripts/push-progres.ts"
alias explain-progress="bun run /path/to/myWorkLog/scripts/explain_progres.ts"
```

Then, simply run:

```
push-progress
explain-progress
```

**Note for Windows/Linux**: Paths and shell configurations may differ. On Windows, you might use Command Prompt or PowerShell, and adjust paths accordingly (e.g., use backslashes or different drive letters). On Linux, use your shell's config file like `~/.bashrc`.

### Folder Structure Notes
The scripts are in the `scripts/` folder, and results are in `results/`. The script is designed for a specific folder structure where this `myWorkLog` directory is inside a `projects` folder containing your git repos. If your setup differs, edit the `PROJECTS_DIR` in the script to point to your projects directory.