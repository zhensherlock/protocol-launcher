# AGENTS.md - Protocol Launcher

## Repo Shape

- PNPM workspace + Turbo monorepo; main CI uses Node 22 and `packageManager` is `pnpm@10.33.4` (npm-publish builds with Node 22, then publishes the packed tgz with Node 24).
- Workspaces are `packages/shared` (`qs`, `encodeUrlPayload`), `packages/protocol-launcher` (published URL generator library), `apps/docs` (VitePress EN/ZH docs), and `apps/promo-video` (HyperFrames composition).
- The root package and library package are both named `protocol-launcher`; use path filters like `pnpm --filter ./packages/protocol-launcher build`, not name filters.
- Respect nested workspace instructions before editing package/app code: `packages/shared/AGENTS.md`, `packages/protocol-launcher/AGENTS.md`, `apps/docs/AGENTS.md`, and `apps/promo-video/AGENTS.md`.
- Build outputs are ignored (`dist`, `coverage`, `apps/docs/.vitepress/dist`, `.vitepress/cache`, `.turbo`, `apps/*/renders`, `apps/*/.thumbnails`, `apps/*/.waveform-cache`); do not edit generated output.

## Commands That Matter

- Install: `pnpm install`.
- Root dev loop: `pnpm dev` runs Turbo with `--filter=./apps/*...`, so docs, promo-video, and dependency package watchers start together. Use focused dev commands when you only need one app.
- Focused dev: `pnpm --filter ./apps/docs dev` for VitePress, `pnpm --filter ./apps/promo-video dev` for HyperFrames preview.
- CI-equivalent build/test: `pnpm build` then `pnpm coverage`; the build workflow runs both and deploys `apps/docs/.vitepress/dist`.
- Root `pnpm build` only filters `./apps/docs...`; promo video is separate via `pnpm build:promo`, `pnpm check:promo`, and `pnpm render:promo`.
- Focused builds: `pnpm --filter ./packages/shared build`, `pnpm --filter ./packages/protocol-launcher build`, `pnpm --filter ./apps/docs build`.
- Tests: `pnpm test` for all Vitest projects; focus with `pnpm test packages/protocol-launcher/tests/vscode.test.ts`, `pnpm test vscode`, or `pnpm test -t "test name"`.
- Coverage gate: `pnpm coverage` matches the build workflow's test step.
- Formatting/linting: there is no root lint script; use `npx biome check .` or `npx biome check --write .`. Pre-commit only runs `biome check --write` on staged `packages/**/*.{ts,js}`.
- Type checking: do not use bare `npx tsc --noEmit` from the root; there is no root `tsconfig.json`. Use package builds or `npx tsc -p packages/protocol-launcher/tsconfig.json --noEmit`.

## Protocol Library

- `packages/protocol-launcher/rolldown.config.ts` discovers subpath entrypoints from `src/*/index.ts`; a new protocol needs that `index.ts` or it will not emit a subpath bundle.
- A protocol usually needs three registrations: `packages/protocol-launcher/src/<name>/index.ts`, namespace export in `packages/protocol-launcher/src/index.ts`, and a matching subpath in `packages/protocol-launcher/package.json` `exports`.
- Match nearby ordering in each edited list instead of assuming every list is truly alphabetical; current source, docs, and package exports differ around numeric names.
- Not every protocol has or should have a bare `open()` export (for example `cursor` and `zed` do not). Mirror the app's real URL capabilities and nearby protocol patterns.
- Query-string URLs should use `qs()` from `@protocol-launcher/shared`; it skips `null`/`undefined`, encodes values, and repeats array keys.
- Encoded payload URLs should use `encodeUrlPayload()` from `@protocol-launcher/shared`; several MCP/deeplink protocols assert exact base64/URL-encoded strings.
- Public function pattern: required payloads are `payload: Type`; all-optional payloads default to `payload: Type = {}`. Keep JSDoc examples because they are part of the public API docs style.
- Tests live in `packages/protocol-launcher/tests/<name>.test.ts`, import the namespace from `../src`, and assert exact URL strings, including omitted optional values and precedence rules.

## Docs

- Docs app pages are duplicated under `apps/docs/en` and `apps/docs/zh`; shared example params live in `apps/docs/.vitepress/constants/<name>.ts`.
- Adding an app doc usually touches EN/ZH app pages, constants, `apps/docs/.vitepress/config.ts` rewrites + sidebar + `llmstxt` sidebar, `apps/docs/zh/config.ts`, and the EN/ZH guide lists.
- Docs examples import direct subpaths (`protocol-launcher/<name>`) for on-demand usage and the namespace from `protocol-launcher` for full import examples.
- `apps/docs/.vitepress/config.ts` sets `base` to `/protocol-launcher/` unless `VERCEL` is set; avoid hardcoding absolute site paths in docs changes.

## Promo Video

- `apps/promo-video` uses HyperFrames, not Vite/React. Run `pnpm --filter ./apps/promo-video check` after editing HTML compositions; root `pnpm check:promo` is the same check.
- HyperFrames render outputs go under ignored `renders`/`.thumbnails`; keep source edits in `index.html`, `compositions`, assets, and metadata.

## Repo Workflow

- Existing OpenCode playbooks can help with protocol/docs work, but treat executable config and this file as higher authority if they conflict: `.opencode/agents/protocol-builder.md`, `.opencode/agents/docs-builder.md`.
- Commit messages are conventional via `.husky/commit-msg` (`commitlint --edit $1`); allowed types are `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`, and `release`.
- For package-visible changes, create a changeset with `pnpm changeset`; current Changesets config uses `main` as the base branch and updates internal dependencies at patch level.
