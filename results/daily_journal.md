## 2025-09-02-03:27

### Project 67

#### Performance Improvements

- Removed the splash screen from the site to enhance UI loading speed and user experience.

## 2025-09-03-03:27

### Project 67

#### Refactoring

- Refactored a component to utilize a form-based approach instead of `useState` and `useID` for improved state management.

## 2025-09-04-03:27

### Project 67

#### Feature Enhancements

- Implemented an empty email search functionality for signup, accommodating scenarios where user emails are not immediately available.
- Introduced new Shad/CN UI components.
- Enhanced user authentication and analytics by adding 'last login method' functionality to social buttons, login forms, and the authentication configuration.

#### Backend Updates

- Migrated the `users` table to include a `last login method` column for improved analytics and user tracking.

#### Refactoring

- Refactored navigation to use a `callbackUrl` for more robust routing, replacing direct `window.location.href` usage.

#### Frontend Updates

- Applied consistent formatting across pages, including the removal of unused imports and unnecessary spacing.

#### Maintenance

- Removed obsolete comments.

## 2025-09-05-03:27

### Project 67

#### Feature Enhancements

- Integrated Shad/CN and AI-elements UI components to style and build the chat interface.
- Established core chat functionality by adding tables for chat sessions and chat messages, linking messages to users and sessions.
- Introduced `user preferences` and `user actions` tables to track global user settings (theme, city, language) and user interactions (likes, notes) with listings.

#### Backend Updates

- Migrated schema changes to support new chat-related tables.

## 2025-09-06-03:27

### Project 67

#### Feature Enhancements

- Added a `sharedChat` column to chat sessions, enabling easier display of shared chats without requiring user information checks.

## 2025-09-07-03:27

### Project 67

#### Feature Enhancements

- Implemented a comprehensive SEO utility with a hook for structured data and a component for JSX meta tags to improve searchability.
- Developed a left sidebar featuring sign-out logic, quick links to policies and other sections, avatar display, and a loading skeleton.
- Integrated additional Shad/CN components into the project.

## 2025-09-09-03:27

### Project 67

#### Refactoring

- Refactored the chat schema to utilize "message parts" for more flexible and dynamic content handling within chat messages.

## 2025-09-12-03:27

### Project 67

#### Feature Enhancements

- Developed a custom chat area component to centralize chat context management and replace existing logic for `/chat/chatId` routes.
- Implemented insert and delete dialogs for chat entries in the left sidebar, providing users with immediate title updates or chat removal options, including optimistic updates.

## 2025-09-14-03:27

### Project 67

#### Feature Enhancements

- Enhanced sidebar components to include dynamic chat management and a right sidebar.
- Integrated AI SDK elements components to facilitate the creation of the chat interface, including an update script.
- Implemented an Electric SQL adapter with start/stop scripts in `package.json` for real-time database synchronization with Project 71.

#### Backend Updates

- Improved and created new message, chat, and other related tables to optimize the chat schema.

#### Maintenance

- Updated and installed several libraries.

## 2025-09-15-03:27

### Project 72

#### Feature Enhancements

- Established core chat route UI components, including left and right sidebars and a chat header, applying a consistent layout to all chat-related routes.
- Implemented a chat session collection endpoint with GET, PATCH, and DELETE methods, returning session ID, title, and creation date.
- Integrated robust authentication across client and server, including schema, necessary libraries, a catch-all API route, a username generation function, and migrated auth-related tables.
- Developed comprehensive SEO functionality, allowing dynamic meta tag setting per page and configuring robots.
- Created dedicated policy pages (e.g., Privacy Policy) and a "delete my data" API route, with improved error handling and user feedback.
- Introduced a page layout component for consistent page structuring with title, URL, and content wrapping.
- Added Shad/CN and AI-elements UI component libraries.
- Implemented error code mapping and a utility function for generating usernames.
- Integrated `t3-env` for typesafe management of environment variables.
- Enabled an Electric SQL server (Project 71) for real-time database synchronization.
- Installed and configured Drizzle-ORM, Drizzle-Kit, and Bun SQL client for Project 82 database interactions.

#### Backend Updates

- Migrated chat and related tables, including schema.
- Refactored database URL configuration, moving from `pg bouncer` to a direct Project 82 URL and updating proxy port.
- Ensured typesafe database URL imports from `serverEnv` and implemented Zod validation for `.env` variables.

#### Refactoring

- Improved component props to reduce data returned from endpoints.
- Enhanced the "delete my data" process with new fields, better error handling (Project 6), and post-submission user alerts.
- Removed unused component props.
- Refactored environment variable handling for greater security and type safety.

#### Maintenance

- Added and updated various packages and dependencies.
- Included server and client configurations for Tanstack Start.
- Added site URL to client environment variables.
- Formatted files and code consistently.
- Added shortcuts in `package.json` for service management.
- Configured server section in Vite.

## 2025-09-16-03:27

### Project 72

#### Maintenance

- Updated project dependencies.
- Established a checkpoint prior to implementing significant breaking changes.

## 2025-09-17-03:27

### Project 72

#### Feature Enhancements

- Configured Vite to allow specific hosts.
- Disabled Server-Side Rendering (SSR) for chat routes.
- Implemented a stop button for chat message streams, allowing users to halt generation.
- Added a button to insert the old chat title into the input field for easier editing.
- Introduced a simple error handler for chat sessions live queries.
- Added a data stream provider to the `/chat` route to enable resumable streams.
- Re-enabled and refined resumable stream functionality and its handler, including an endpoint to retrieve pending streams.
- Enabled Tanstack dev tools and AI dev tools.

#### Refactoring

- Refactored the right sidebar to dynamically retrieve environment variables and to float.
- Separated chat header title and buttons, made the header sticky, and added title truncation with a settings dropdown.
- Improved chat area actions positioning and spacing.
- Enhanced the `convertToUIMessages` function to return an empty list if messages are not an array.
- Cleaned up chat area components by removing unused imports and hooks, and passing `chatId` via route parameters.
- Moved messages query and main chat area logic to the `chatId` route for better context management.
- Updated the left sidebar to use a message circle icon and highlight the active chat based on `chatId`.
- Refactored the `get messages` endpoint by temporarily removing the `userId` check.
- Improved the `generate text` endpoint to return a response on error, use dedicated Redis instances for streaming, and generate UUIDs with a utility function.
- Streamlined chat hook calls by destructuring from `useChat`.
- Optimized usage tokens display by passing from state and removing `initialLast` context.
- Adjusted dynamic chat title setting to only use LLM for messages longer than 10 words.
- Migrated `chatId` to `chat_id` in database schema and queries to resolve query breaking issues.
- Improved Drizzle configuration to handle `.env` imports more effectively.

#### Bug Fixes

- Corrected a bug where a function was returning a boolean instead of text.

#### Maintenance

- Added `react scan`.
- Updated dependencies.
- Auto-generated route tree.
- Added console logs for data parts during development.

## 2025-09-18-03:27

### Project 12

#### Tooling & Scripting

- Developed an AI-powered script to summarize daily commit messages and append them to a journal file (`daily_journal.md`).
- Enhanced the script to track repository names using a hash, preventing duplicate entries and improving performance across runs.
- Refactored the script to prevent duplication of commits from "today" and "yesterday" and to include date/time in the journal header for better tracking.
- Updated the script to extract and include full commit messages alongside titles.
- Added AI SDK and Gemini integration.
- Introduced a new argument for full synchronization.

#### Documentation

- Created and updated `README.md` and `work_ive_done.md` files.
- Initiated `daily_journal.md` for progress tracking.

#### Maintenance

- Organized files by moving them into `scripts` and `results` directories.
- Corrected a typo in a file name.
- Added console logs for debugging script processes.

### Project 72

#### Feature Enhancements

- Implemented upvotes and downvotes functionality for chat messages.
- Developed a live query for votes, allowing association of user votes in loaders.

#### Refactoring

- Refactored schema naming conventions to use all lowercase with underscores to resolve query and migration issues.
- Improved security by adding `allowed_hosts` from `.env` variables, preventing their exposure.
- Refactored Project 6 queries to append `WHERE` clauses, avoiding exposure of query details in Project 7 UI.
- Cleaned up unused imports and applied formatting.
- Temporarily hardcoded valid `userId` for development purposes.

#### Maintenance

- Updated `routeTree.gen.ts`.

## 2025-09-21-03:27

### Project 12

#### Tooling & Scripting

- Implemented verbose logging with CLI help, allowing quiet operation by default.
- Refactored the system prompt for better formatting of daily reports, adhering to a standard schema.
- Improved script execution to run since the last successful run.
- Addressed and fixed commit duplication issues by implementing a persistent repository map.
- Updated the `push-progress` script to leverage Bun's hash API and persistent repo mapping.
- Migrated file system operations from Node.js `fs` to Bun's `fs` API for significant performance improvements.

#### Refactoring

- Corrected file path issues where the "work done" file was incorrectly referencing the journal, leading to doubled summaries.
- Standardized file path resolution using `process.cwd` instead of hardcoded paths.
- Removed unneeded constraints.

#### Maintenance

- Updated dependencies, including adding Zod.
- Fixed file names.
- Updated `work_ive_done.md`.
- Added types for Bun to resolve LSP errors.
- Applied consistent formatting.

