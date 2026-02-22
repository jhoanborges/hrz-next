# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HRZ Logistics marketing website built with Next.js 16, React 19, and Tailwind CSS 4. Static site with no backend/API — pages are Home (`/`), Services (`/services`), and Contact (`/contact`).

## Commands

- `yarn dev` — Start dev server
- `yarn build` — Production build
- `yarn lint` — Run ESLint (flat config, `eslint.config.mjs`)
- `yarn start` — Serve production build

Package manager is **yarn** (yarn.lock present, no package-lock.json).

## Architecture

- **App Router** — All pages under `src/app/` using Next.js App Router (RSC by default)
- **Layout** — `src/app/layout.tsx` wraps all pages with `<Header />` and `<Footer />`, uses Poppins + Open Sans fonts
- **Client components** — Header (`src/components/header.tsx`) and StatsCounter (`src/components/stats-counter.tsx`) are `"use client"` — everything else is server components
- **UI library** — shadcn/ui (new-york style) with components in `src/components/ui/`. Add new ones via `npx shadcn@latest add <component>`
- **Path alias** — `@/*` maps to `./src/*`

## Styling

- Tailwind CSS v4 with PostCSS (`postcss.config.mjs`)
- Brand colors defined as CSS custom properties in `src/app/globals.css`:
  - `hrz-blue` (`#0d2f5e`) — primary brand color for text/headings
  - `hrz-red` (`#c1272d`) — accent color for CTAs and highlights
  - `hrz-light` (`#f5f7fa`) — light background sections
- Uses `tw-animate-css` for animations and `shadcn/tailwind.css` for shadcn theme variables
- Icons from `lucide-react`

## Static Assets

- Images in `public/img/` (logo, hero) and `public/assets/img/` (service photos)
- Favicons in `public/` root
