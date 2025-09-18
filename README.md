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

## Usage

Run the script with Bun:

```bash
bun run push-progres.ts
```

This will update `work_ive_done.md` with new commits since the last run.