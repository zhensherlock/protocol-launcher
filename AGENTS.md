# AGENTS.md - Protocol Launcher

## Project Overview

Monorepo (pnpm workspaces + Turbo) for generating one-click launch URLs for protocol-based apps (VS Code, Windsurf, Zed, etc.).

**Packages:**

- `packages/protocol-launcher` - Main library with protocol implementations
- `packages/shared` - Shared utilities (qs, encodeUrlPayload, etc.)
- `apps/docs` - VitePress documentation site (EN + ZH)

## Commands

```bash
pnpm install                    # Install dependencies
pnpm build                      # Build all packages (Turbo)
pnpm dev                        # Start docs dev server
pnpm test                       # Run all tests
pnpm test <path>                # Run single file (e.g., packages/shared/tests/index.test.ts)
pnpm test <pattern>             # Match filename (e.g., vscode, cursor)
pnpm test -t "<test-name>"      # Match test name
pnpm coverage                   # Run with coverage
npx biome check --write .       # Auto-fix all issues (Biome + ESLint)
npx biome check .               # Check without fixing
npx tsc --noEmit                # Type check
pnpm changeset                  # Create changeset
pnpm version                    # Version bump packages
```

## Code Style

### Formatting (Biome)

- 2-space indentation, LF line endings, 120 char line width
- Single quotes, no semicolons (`asNeeded`), trailing commas (`all`)
- Arrow parentheses: `asNeeded`, bracket spacing: `true`

### Linting (Biome + ESLint)

- Biome handles most rules; ESLint handles imports and Vue
- **Critical:** `noExplicitAny` is error (avoid `any` type)
- Run `npx biome check --write .` before committing

### TypeScript

- Strict mode; target ES2022, module ESNext, moduleResolution bundler
- Path alias: `@/*` → `./src/*` (see tsconfig.root.json)
- Use `const` over `var`; avoid explicit `any`
- Export interfaces for public APIs; use type inference

### Naming Conventions

- Files/Directories: kebab-case (`open.ts`, `microsoft-edge/`)
- Functions: camelCase (`openFolder()`, `encodeUrlPayload()`)
- Types/Interfaces: PascalCase (`EncodeOptions`, `ProtocolConfig`)
- Constants: UPPER_SNAKE_CASE for magic values, camelCase otherwise
- Export aliases: camelCase (`microsoftEdge`, `vscode`)

### Imports

- Biome organizes imports automatically (`organizeImports: "on"`)
- Relative imports for intra-package; package imports for external
- Use path alias `@/` within packages

### Error Handling

- Use try/catch for operations that may fail
- Throw meaningful errors; never expose raw errors

## Vue Files (apps/docs)

- Use `<script setup lang="ts">` syntax
- Component names: PascalCase
- ESLint handles Vue linting

## Testing (Vitest)

- Test files: `packages/*/tests/*.test.ts`
- Use `describe`/`test` syntax with descriptive names
- Async tests: use async/await (not `done` callback)

## Git Commits

- Conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `build:`, `ci:`, `chore:`, `revert:`
- Subject line lowercase; lint-staged runs `biome check --write` pre-commit

## Project Structure

```
protocol-launcher/
├── apps/docs/              # VitePress (EN + ZH)
├── packages/
│   ├── protocol-launcher/  # Protocol implementations
│   │   ├── src/<name>/     # vscode/, cursor/, things/
│   │   └── tests/          # Integration tests
│   └── shared/             # Shared utilities
├── .opencode/agents/       # Opencode agent instructions
├── biome.json, eslint.config.js
└── turbo.json, vitest.config.ts
```

## Key Patterns

### Adding a New Protocol

1. Create folder: `packages/protocol-launcher/src/<name>/`
2. Implement functions (open, openUrl, etc.) with JSDoc
3. Export from `packages/protocol-launcher/src/<name>/index.ts`
4. Update `packages/protocol-launcher/src/index.ts` (alphabetical)
5. Add to `packages/protocol-launcher/package.json` exports
6. Add tests: `packages/protocol-launcher/tests/<name>.test.ts`
7. Run: `pnpm test <name>`

### Protocol Function Pattern

```typescript
/**
 * Open <ProtocolName>.
 * @returns <ProtocolName> open URL.
 * @example
 * open()
 * // => 'protocol://'
 */
export function open() {
  return 'protocol://'
}
```

### JSDoc Rules

- **Required params:** No default in signature (`payload: Type`)
- **Optional params:** Add `= {}` default (`payload: Type = {}`)
- URL params (`?key=value`): Use `qs()` from shared; Direct path: template string

## Opencode Agents

- `.opencode/agents/protocol-builder.md` - Create new protocols
- `.opencode/agents/docs-builder.md` - Generate EN/ZH documentation

## IDE Setup

- VS Code: Install Biome and ESLint extensions
- Use pnpm (packageManager: pnpm@10.33.0), Node.js >= 22

## Cursor/Copilot Rules

No custom Cursor (`.cursor/rules/`, `.cursorrules`) or Copilot (`.github/copilot-instructions.md`) rules exist.
