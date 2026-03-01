---
url: /protocol-launcher/apps/opencode.md
---

# OpenCode

[OpenCode](https://opencode.ai/) is an open-source agent that helps you write code in your terminal, IDE, or desktop. **Protocol Launcher** allows you to generate deep links to open resources in OpenCode.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'opencode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opencode.'}}open()
```

### Open Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'opencode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opencode.'}}openProject({
  path: '/Users/dev/project',
})
```
