# AGENTS.md - Protocol Launcher

## Project Overview

This is a monorepo (pnpm workspaces + Turbo) for generating one-click launch URLs for protocol-based apps (VS Code, Windsurf, Zed, etc.). It contains:

- `packages/protocol-launcher` - Main library with protocol implementations
- `packages/shared` - Shared utilities
- `apps/docs` - Documentation site

## Commands

### Install Dependencies

```bash
pnpm install
```

### Build

```bash
pnpm build              # Build all packages for production
```

### Development

```bash
pnpm dev                # Start dev server for docs
```

### Testing

```bash
pnpm test               # Run all tests
pnpm test -- <pattern>  # Run tests matching pattern (e.g., -- shared)
pnpm coverage           # Run tests with coverage
```

### Linting & Formatting

```bash
npx biome check --write packages/**/*.{ts,js}  # Fix lint issues
npx biome check packages/**/*.{ts,js}          # Check lint issues (CI)
```

### Type Checking

```bash
npx tsc --noEmit        # Type check all packages
```

### Committing

```bash
pnpm changeset          # Create a changeset
pnpm version            # Version bump packages
```

## Code Style

### Formatting (Prettier + Biome)

- 2-space indentation
- 120 character line width
- Single quotes for strings
- No semicolons
- Trailing commas (all)
- LF line endings
- Use Biome to format: `npx biome format --write`

### Linting (Biome + ESLint)

- Biome is primary linter for most rules
- ESLint handles import order and Vue-specific rules
- Run `npx biome check --write` before committing

### TypeScript

- Strict type checking enabled
- Use `const` instead of `var`
- Avoid `any` type ( Biome will error on explicit `any`)
- Use type inference where possible
- Export interfaces for public APIs

### Naming Conventions

- Files: kebab-case (e.g., `open.ts`, `vscode-settings.ts`)
- Functions: camelCase (e.g., `openFolder()`, `encodeUrlPayload()`)
- Interfaces: PascalCase (e.g., `EncodeOptions`)
- Constants: UPPER_SNAKE_CASE for magic values, camelCase otherwise

### Imports

- Use path aliases if available (check tsconfig.json)
- Sort imports with Biome (organizeImports action)
- Relative imports for intra-package, package imports for external

### Error Handling

- Use try/catch for sync operations that may fail
- Use Result pattern or throw meaningful errors
- Never expose raw errors to users

### Vue Files

- Vue SFC with `<script setup lang="ts">`
- Follow Vue style guide (component names in PascalCase)
- Use biome check for .vue files (limited rules)

### Testing

- Use Vitest with describe/test/it syntax
- Test file location: `packages/*/tests/*.test.ts`
- Use descriptive test names: `describe('functionName', () => { it('should do X', ...) })`
- Use async/await for async tests

### Git Commits

- Follow conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `build:`, `ci:`, `chore:`, `revert:`, `release:`
- Subject line lowercase
- Run `pnpm prepare` to install husky hooks

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
