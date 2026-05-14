# AGENTS.md - Protocol Launcher Package

## Scope

- This file applies to `packages/protocol-launcher`, the published `protocol-launcher` URL generator library.
- Keep the root `AGENTS.md` in mind for workspace, release, formatting, and changeset rules.
- Do not edit generated `dist` output; source lives in `src` and tests live in `tests`.

## Commands

- From the repo root, use path filters because the root package and this package are both named `protocol-launcher`.
- Dev watcher: `pnpm --filter ./packages/protocol-launcher dev`.
- Package build: `pnpm --filter ./packages/protocol-launcher build`.
- Type declarations only: `npx tsc -p packages/protocol-launcher/tsconfig.json --noEmit`.
- Focused tests: `pnpm test packages/protocol-launcher/tests/vscode.test.ts`, `pnpm test vscode`, or `pnpm test -t "test name"`.
- CI coverage still runs from the root with `pnpm coverage`.

## Protocol Shape

- `rolldown.config.ts` emits subpath bundles from `src/*/index.ts`; a new protocol without `src/<name>/index.ts` will not produce a subpath bundle.
- A protocol usually needs `src/<name>/index.ts`, a namespace export in `src/index.ts`, a package `exports["./<name>"]` entry, and `tests/<name>.test.ts`.
- Match nearby ordering in source exports and `package.json` exports; numeric app names make the lists not perfectly alphabetical.
- Not every protocol should expose bare `open()`; mirror the real app URL scheme and nearby implementations.

## Implementation Rules

- Query-string URLs should use `qs()` from `@protocol-launcher/shared`; it skips `null`/`undefined`, URL-encodes values, and repeats array keys.
- Encoded payload URLs should use `encodeUrlPayload()` from `@protocol-launcher/shared`; tests often assert exact base64 and URL-encoded strings.
- Required payloads use `payload: Type`; all-optional payloads default to `payload: Type = {}`.
- Keep JSDoc examples on public functions because they feed the public docs style.
- Tests import the namespace from `../src` and assert exact URL strings, including omitted optional values and precedence rules.
