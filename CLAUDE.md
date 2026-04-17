# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

No test runner is configured.

## Stack

- **Next.js 16** with App Router (`src/app/`)
- **React 19**
- **Tailwind CSS v4** (configured via `postcss.config.mjs`, no `tailwind.config` file)
- **TypeScript**
- Fonts: Geist Sans and Geist Mono via `next/font/google`

## Architecture

This is a fresh Next.js App Router project. All routes live under `src/app/`. The root layout (`src/app/layout.tsx`) sets up fonts and a full-height flex column body. Dark mode is handled via Tailwind's `dark:` variants — no theme provider.
