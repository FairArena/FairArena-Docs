<p align="center">
  <img src="https://fra.cloud.appwrite.io/v1/storage/buckets/697b974d001a7a80496e/files/697b9764002453409e98/view?project=69735edc00127d2033d8&mode=admin" alt="FairArena Logo" width="140" height="140">
</p>

---

# FairArena Docs

Documentation hub for FairArena, built with Next.js 16, React 19, and Fumadocs MDX. Content lives in MDX under [content/docs](content/docs), surfaced through a fast, search-first UI.

## Highlights

- MDX with validated frontmatter and processed markdown for LLM consumption.
- Built-in advanced search (Orama Cloud) via [app/api/search/route.ts](app/api/search/route.ts).
- Auto-generated OG/Twitter images, theme toggle, responsive nav, and notebook-inspired layout components.
- Quality gates on commit: ESLint (core web vitals) via Husky pre-commit.

## Stack

- Framework: Next.js 16 (App Router) + React 19
- Docs engine: Fumadocs MDX + custom MDX shortcodes in [mdx-components.tsx](mdx-components.tsx)
- Styling: Tailwind (via Fumadocs UI), Radix primitives, lucide-react icons
- Search: Orama Cloud through [fumadocs-core](https://fumadocs.dev/docs/headless/search/orama-cloud)
- Package manager: pnpm 9+

## Getting started

Prerequisites: Node 18.18+ (or LTS), pnpm 9+, Git.

```bash
pnpm install            # installs deps and sets up Husky hooks (prepare)
pnpm dev                # start dev server at http://localhost:3000
pnpm lint               # ESLint (core web vitals)
pnpm types:check        # fumadocs-mdx, next typegen, tsc --noEmit
pnpm build && pnpm start  # production build and serve
```

If hooks are missing, run `pnpm exec husky install` once.

## Project layout

- [app](app) – Routes for landing `(home)`, docs, search API, OG images, robots/sitemap/manifest.
- [content/docs](content/docs) – MDX pages plus `meta.json` per section for ordering/group metadata.
- [lib/source.ts](lib/source.ts) – Fumadocs source loader, lucide plugin, helper utilities.
- [source.config.ts](source.config.ts) – Fumadocs collections and schema definitions.
- [components](components) – Sidebar, TOC, search, theme toggle, notebook layout, UI primitives.
- [mdx-components.tsx](mdx-components.tsx) – MDX shortcode/component mapping.
- [public](public) – Static assets (robots.txt, icons, etc.).

## Authoring content

- Create or edit pages in [content/docs](content/docs). Required frontmatter: `title`, `description`, `icon` (Lucide icon name).
- Use provided shortcodes (Callout, Steps, Tabs, etc.) from [mdx-components.tsx](mdx-components.tsx).
- Control navigation and ordering with `meta.json` files in each section folder.
- Processed markdown for LLMs is exposed via `getLLMText` in [lib/source.ts](lib/source.ts).

Example frontmatter:

```mdx
---
title: Getting Started
description: Welcome to FairArena
icon: Rocket
---

# Page content here
```

## Search

- Search indexes are built from the Fumadocs source and exposed through [app/api/search/route.ts](app/api/search/route.ts) using `createSearchAPI('advanced')`.
- Orama Cloud powers the search backend; configure via the Fumadocs guide: https://fumadocs.dev/docs/headless/search/orama-cloud.

## Quality gates and automation

- `pnpm lint` runs ESLint with `eslint-config-next` (core web vitals).
- `pnpm types:check` runs MDX preprocessing, Next typegen, and TypeScript checks.
- Husky pre-commit hook runs `pnpm lint` automatically (installed via the `prepare` script).

## Deployment

1. `pnpm build` to create the production bundle. 2) `pnpm start` to serve it (Next.js server mode). Suitable for Vercel or any Node 18+ host.

## Troubleshooting

- Prompt about ignored native builds during install? Run `pnpm approve-builds` to allow SWC and other optional binaries.
- MDX changes not showing? Rerun `pnpm types:check` or restart `pnpm dev` to refresh caches.
- Hooks not running? Execute `pnpm exec husky install` once locally.

---

## 📄 License

This project is licensed under the **Proprietary License** — see [LICENSE](LICENSE).

---

<p align="center">
  <a href="https://fairarena.app">🌐 Website</a> •
  <a href="https://github.com/FairArena/FairArena">💻 GitHub</a> •
  <a href="mailto:support@fairarena.app">📧 Support</a>
</p>

<p align="center">
  <sub>Built with ❤️ by the FairArena Team</sub>
</p>
