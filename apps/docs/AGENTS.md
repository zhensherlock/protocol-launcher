# AGENTS.md - Protocol Launcher Docs

## Scope

- This file applies to `apps/docs`, the VitePress documentation app for Protocol Launcher.
- Keep the root `AGENTS.md` in mind for workspace, package, and release rules; this file only adds docs-specific guidance.
- Do not edit generated output such as `.vitepress/dist`, `.vitepress/cache`, `.turbo`, `dist`, or coverage files.

## Commands

- From the repo root, use path filters because multiple packages are named `protocol-launcher`.
- Docs dev server: `pnpm --filter ./apps/docs dev`; root `pnpm dev` starts all apps plus workspace dependency watchers.
- Docs build: `pnpm --filter ./apps/docs build`.
- CI-equivalent docs path: `pnpm build`, which builds docs and its workspace dependencies.
- There is no docs-specific test script. For docs changes, run the docs build when practical.

## Docs Shape

- English pages live in `apps/docs/en`; Simplified Chinese pages live in `apps/docs/zh`.
- App docs are paired as `en/apps/<name>.md` and `zh/apps/<name>.md`.
- Shared example payloads live in `.vitepress/constants/<name>.ts` when examples need reusable params or OS-specific values.
- VitePress config lives in `.vitepress/config.ts`; Chinese locale sidebar/search config lives in `zh/config.ts`.
- The root docs config also owns English rewrites, the English sidebar, and the `vitepress-plugin-llms` sidebar.

## Adding Or Updating App Docs

- Mirror the actual library implementation in `packages/protocol-launcher/src/<name>`; do not invent functions that the package does not export.
- Keep English and Chinese app pages structurally aligned: same sections, same function coverage, translated prose and link text.
- Use direct subpath imports for On-Demand examples, such as `protocol-launcher/vscode`, and namespace imports from `protocol-launcher` for Full Import examples.
- Keep `<SelectInstallationMethod v-model="currentMethod" />` on app pages that show On-Demand vs Full Import examples.
- Each documented function should include a `ts-vue` code example and a preview `VPLink` when the generated URL is safe to open from the docs.
- For examples that depend on Windows vs POSIX paths, read `useAppStore()` and put the platform-specific payload helper in `.vitepress/constants/<name>.ts`.
- Match nearby Markdown/Vue style instead of reformatting whole files. Existing docs often use semicolons in `<script setup>` blocks and 2-space TypeScript object indentation.

## Required Sync Points For A New App Page

- Add or update `apps/docs/.vitepress/constants/<name>.ts` when shared sample payloads are needed.
- Add `apps/docs/en/apps/<name>.md`.
- Add `apps/docs/zh/apps/<name>.md`.
- Update `apps/docs/.vitepress/config.ts` in all relevant places:
  - `rewrites`
  - English `themeConfig.sidebar`
  - `llmstxt({ sidebar })` English and Chinese application lists
- Update `apps/docs/zh/config.ts` Chinese sidebar.
- Update app links in both `apps/docs/en/guide/getting-started.md` and `apps/docs/zh/guide/getting-started.md`.
- Update supported app links in both `apps/docs/en/guide/what-is-it.md` and `apps/docs/zh/guide/what-is-it.md`.
- Preserve the existing list order used by the surrounding file; it is not perfectly alphabetical in every place.

## Content Rules

- Keep app introductions concise and user-facing; explain what the app is and what Protocol Launcher enables.
- Use official product names consistently, including existing casing such as `CodeBuddy`, `OpenCode`, `VS Code`, and `macOS`.
- Prefer realistic but non-sensitive example values. Use placeholders such as `REPLACE_WITH_YOUR_TOKEN` for credentials.
- Do not hardcode absolute site paths. `.vitepress/config.ts` sets `base` to `/protocol-launcher/` unless `VERCEL` is set.
- Avoid touching unrelated guide copy or generated `llms.txt` output.
