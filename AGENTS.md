# AGENTS.md - Protocol Launcher

## Project Overview

Monorepo (pnpm workspaces + Turbo) for generating one-click launch URLs for protocol-based apps (VS Code, Windsurf, Zed, etc.).

**Packages:**

- `packages/protocol-launcher` - Main library with protocol implementations
- `packages/shared` - Shared utilities
- `apps/docs` - VitePress documentation site

## Commands

### Install & Build

```bash
pnpm install                    # Install dependencies
pnpm build                      # Build all packages (uses Turbo)
pnpm dev                        # Start docs dev server
```

### Testing (Vitest)

```bash
pnpm test                       # Run all tests
pnpm test <path>                # Run single file or directory
pnpm test -t <test-name>        # Run tests matching test name
pnpm coverage                   # Run with coverage report
```

**Run a single test file or directory:**

```bash
pnpm test packages/shared/tests/index.test.ts   # Single file
pnpm test packages/shared                       # All tests in directory
pnpm test vscode                                # Match filename pattern
pnpm test -t "test name"                        # Match test name
```

### Linting & Formatting

```bash
npx biome check --write .       # Auto-fix all issues (Biome + ESLint)
npx biome check .               # Check issues without fixing
npx biome format --write .      # Format only
npx tsc --noEmit                # Type check all packages
```

### Versioning

```bash
pnpm changeset                  # Create a changeset for release
pnpm version                    # Version bump packages
```

## Code Style

### Formatting (Biome)

- 2-space indentation, LF line endings, 120 char line width
- Single quotes, no semicolons, trailing commas (all)
- Run: `npx biome format --write .` or `npx biome check --write .`

### Linting (Biome + ESLint)

- Biome handles most rules; ESLint handles imports and Vue
- **Critical:** `noExplicitAny` is error (avoid `any` type)
- Run: `npx biome check --write .` before committing

### TypeScript

- Strict mode enabled; target ES2022, module ESNext, moduleResolution bundler
- Path alias: `@/*` → `./src/*` (see tsconfig.root.json)
- Use `const` over `var`; avoid explicit `any` (Biome errors)
- Export interfaces for public APIs; use type inference where possible

### Naming Conventions

- Files: kebab-case (`open.ts`, `vscode-settings.ts`)
- Functions: camelCase (`openFolder()`, `encodeUrlPayload()`)
- Interfaces/Types: PascalCase (`EncodeOptions`, `ProtocolConfig`)
- Constants: UPPER_SNAKE_CASE for magic values, camelCase otherwise

### Imports

- Sort imports with Biome (organizeImports action enabled)
- Relative imports for intra-package; package imports for external
- Use path alias `@/` within packages (check tsconfig.json)

### Error Handling

- Use try/catch for operations that may fail
- Throw meaningful errors; never expose raw errors to users
- Use Result pattern for recoverable errors

### Vue Files (apps/docs)

- Use `<script setup lang="ts">` syntax
- Component names: PascalCase
- Biome has limited rules for `.vue`; ESLint handles Vue linting

### Testing (Vitest)

- Test files: `packages/*/tests/*.test.ts`
- Use `describe`/`it` syntax with descriptive names
- Async tests: use async/await (not done callback)
- Run single file: `pnpm test packages/shared/tests/index.test.ts`
- Run by pattern: `pnpm test vscode` or `pnpm test -t "test name"`

### Git Commits

- Conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `build:`, `ci:`, `chore:`, `revert:`
- Subject line lowercase; lint-staged runs `biome check --write` pre-commit

## Project Structure

```
protocol-launcher/
├── apps/
│   └── docs/           # VitePress documentation
├── packages/
│   ├── protocol-launcher/
│   │   ├── src/       # Protocol implementations (vscode/, windsurf/, etc.)
│   │   ├── tests/     # Integration tests
│   │   └── rolldown.config.ts
│   └── shared/
│       ├── src/       # Shared utilities
│       └── tests/     # Unit tests
├── turbo.json
├── biome.json
├── eslint.config.js
├── vitest.config.ts
└── package.json
```

## Key Patterns

### Adding a New Protocol

1. Create folder under `packages/protocol-launcher/src/<name>/`
2. Implement export functions (open, file, folder, settings, etc.)
3. Export from `packages/protocol-launcher/src/<name>/index.ts`
4. Add tests in `packages/protocol-launcher/tests/<name>.test.ts`
5. Use existing protocols (e.g., vscode/) as reference

### Protocol Function Pattern

```typescript
/**
 * Open <ProtocolName>.
 *
 * @returns <ProtocolName> open URL.
 * @example
 * open()
 * // => 'protocol://'
 */
export function open() {
  return 'protocol://'
}
```

## IDE Setup

- VS Code: Install Biome and ESLint extensions
- Use pnpm as package manager (configured in packageManager field)
- Ensure Node.js >= 22 (check pnpm version requirements)

## Cursor/Copilot Rules

No custom Cursor rules (`.cursor/rules/`, `.cursorrules`) or Copilot rules (`.github/copilot-instructions.md`) exist in this repository.
