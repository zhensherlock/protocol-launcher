# Contributing to Protocol Launcher

Thank you for helping improve `protocol-launcher`. Contributions to protocol integrations, tests, documentation,
examples, and issue triage are welcome.

By participating, you agree to follow the project [Code of Conduct](CODE_OF_CONDUCT.md).

## Choose the right channel

- Use [GitHub Discussions](https://github.com/zhensherlock/protocol-launcher/discussions) for usage questions,
  integration help, ideas, and showcases.
- Use [GitHub Issues](https://github.com/zhensherlock/protocol-launcher/issues/new/choose) for reproducible bugs,
  concrete feature proposals, and documentation problems.
- Search existing issues and discussions before opening a new one.

A bug report should include the `protocol-launcher` version, the generated URL, the expected URL, the affected app
and app version, the operating system, and a public minimal reproduction when possible. Remove API keys, tokens, and
other sensitive values before sharing URLs or payloads.

## Development setup

This repository is a pnpm workspace managed with Turbo. It uses the Node.js version declared in
[.nvmrc](.nvmrc) and the pnpm version declared in [package.json](package.json).

```bash
git clone https://github.com/zhensherlock/protocol-launcher.git
cd protocol-launcher
nvm use
corepack enable
pnpm install
```

Run the documentation site, promo video app, and their package watchers together:

```bash
pnpm dev
```

Use a focused development command when working on one workspace:

```bash
pnpm --filter ./packages/protocol-launcher dev
pnpm --filter ./apps/docs dev
pnpm --filter ./apps/promo-video dev
```

Use path filters rather than package-name filters because the root package and the published library package are
both named `protocol-launcher`.

## Making a change

1. Create a focused branch from the current `main` branch.
2. Keep the change limited to one problem or feature.
3. Add or update Vitest coverage for behavior changes.
4. Update both `apps/docs/en` and `apps/docs/zh` when changing user-facing APIs or documentation.
5. Add a changeset with `pnpm changeset` for package-visible changes.
6. Use a [Conventional Commit](https://www.conventionalcommits.org/) message such as
   `feat: add raycast protocol support` or `fix: encode vscode file paths`.

When adding a protocol integration, keep the implementation, exports, tests, and documentation in sync. A typical
addition includes:

- `packages/protocol-launcher/src/<name>/index.ts`
- the namespace export in `packages/protocol-launcher/src/index.ts`
- the `./<name>` export in `packages/protocol-launcher/package.json`
- `packages/protocol-launcher/tests/<name>.test.ts`
- matching English and Chinese documentation pages and navigation entries

Follow the ordering and conventions of nearby integrations. Do not edit generated output such as `dist`, `coverage`,
VitePress build/cache directories, Turbo caches, or rendered promo-video files.

## Verification

Run the checks relevant to your change before opening a pull request. The CI-equivalent library and documentation
checks are:

```bash
npx biome check .
pnpm build
pnpm coverage
```

For a focused library change, run the closest test and package build first:

```bash
pnpm test packages/protocol-launcher/tests/vscode.test.ts
pnpm --filter ./packages/protocol-launcher build
```

For promo-video changes, run:

```bash
pnpm check:promo
pnpm build:promo
```

## Pull requests

- Link the related issue or discussion when one exists.
- Explain the problem, the chosen solution, and any tradeoffs.
- Include generated URL examples and the source of the app's official URL-scheme behavior for protocol changes.
- Include screenshots or recordings for visible documentation or promo-video changes.
- Call out breaking changes and migration steps explicitly.
- Keep unrelated formatting, dependency, and generated-file changes out of the pull request.
- Make sure the relevant checks pass and package-visible changes include an appropriate changeset.

Maintainers may ask for a smaller reproduction, official protocol documentation, or additional exact-string tests
before reviewing an implementation. This keeps reviews focused and helps prevent invalid or unsafe launch URLs.
