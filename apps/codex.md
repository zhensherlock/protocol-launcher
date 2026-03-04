---
url: /protocol-launcher/apps/codex.md
---

# Codex

Codex is an AI coding tool designed for engineering and development work, capable of handling tasks like feature development, code refactoring, and system migration. **Protocol Launcher** allows you to generate deep links to interact with Codex.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codex.'}}open()
```

### Open Thread

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openThread' : 'codex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codex.'}}openThread()
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'codex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codex.'}}openSettings()
```
