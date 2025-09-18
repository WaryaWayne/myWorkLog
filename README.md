# My Work Log Quest

This is my personal quest to put myself out there and share my progress publicly. I'm making the commits I've made in my personal projects visible to the world, documenting my daily work and updates.

## What This Is

- A log of commits from various personal projects
- Updated daily via the `push-progres.ts` script
- A way to track and showcase my coding journey

## How It Works

The `push-progres.ts` script scans git repositories in the parent directory, collects recent commits, filters out irrelevant ones (like lockfiles or initial commits), and appends them to `work_ive_done.md` in an anonymized format.

## Daily Updates

I commit to updating this log every day, reflecting on what I've worked on and sharing it openly.

## Prerequisites

- **Bun JS**: You must have Bun installed. If not, install it from [bun.sh](https://bun.sh).
- **Directory Structure**: The script assumes your personal projects are in the parent directory of this script (i.e., `../` relative to the script's location). If your projects are in a different location, you may need to modify the `PROJECTS_DIR` variable in `push-progres.ts`.
- **Git Repositories**: Ensure your projects are git repositories with commits.

## Usage

### Basic Run
Run the script with Bun from the script's directory:

```bash
cd /path/to/myWorkLog
bun run push-progres.ts
```

This will:
1. Check if the projects directory exists (parent directory by default).
2. Detect your global git identity (optional, for filtering commits).
3. Read and parse the existing `work_ive_done.md` log.
4. Determine the date since the last update.
5. Scan for git repositories in the projects directory.
6. Gather new commits from each repository since the last run.
7. Filter out irrelevant commits (e.g., lockfiles, initial commits).
8. Merge new commits with existing data.
9. Anonymize the data for privacy.
10. Update `work_ive_done.md` with the new content.

### Alias (Mac Example)
For convenience, you can create an alias. On macOS (using zsh or bash), add to your `~/.zshrc` or `~/.bashrc`:

```bash
alias push-progress="bun run /path/to/myWorkLog/push-progres.ts"
```

Then, simply run:

```bash
push-progress
```

**Note for Windows/Linux**: Paths and shell configurations may differ. On Windows, you might use Command Prompt or PowerShell, and adjust paths accordingly (e.g., use backslashes or different drive letters). On Linux, use your shell's config file like `~/.bashrc`.

### Folder Structure Notes
The script is designed for a specific folder structure where this `myWorkLog` directory is inside a `projects` folder containing your git repos. If your setup differs, edit the `PROJECTS_DIR` in the script to point to your projects directory.