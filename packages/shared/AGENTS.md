# AGENTS.md - Shared Package

## Scope

- This file applies to `packages/shared`, the tiny runtime helper package consumed by `packages/protocol-launcher`.
- Keep the root `AGENTS.md` in mind for workspace, release, formatting, and changeset rules.
- Do not edit generated `dist` output; source lives in `src/index.ts` and tests live in `tests/index.test.ts`.

## Commands

- Dev watcher: `pnpm --filter ./packages/shared dev`.
- Package build: `pnpm --filter ./packages/shared build`.
- Type declarations only: `npx tsc -p packages/shared/tsconfig.json --noEmit`.
- Focused tests: `pnpm test packages/shared/tests/index.test.ts` or `pnpm test packages/shared`.
- Run root `pnpm coverage` when changing behavior used by `packages/protocol-launcher`.

## Helper Semantics

- `qs()` returns `''` for no params and `?key=value` otherwise; it skips `null`/`undefined`, preserves `Object.entries` order, encodes via `encodeURIComponent`, and repeats array keys.
- `encodeUrlPayload()` stringifies non-string payloads, defaults to URL-safe output, and falls back to the safe Unicode path when `btoa()` cannot encode the input directly.
- Changes here affect many protocol URL snapshots; update shared tests and protocol tests when helper behavior intentionally changes.
- Avoid runtime dependencies unless the helper cannot stay small and dependency-free.
