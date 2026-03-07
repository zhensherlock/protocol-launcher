---
url: /protocol-launcher/apps/sourcetree.md
---

# SourceTree

[SourceTree](https://www.sourcetreeapp.com/) is a free Git client for Windows and macOS that simplifies how you interact with your Git repositories. **Protocol Launcher** allows you to generate deep links to open and configure resources in SourceTree.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open SourceTree

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'sourcetree' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sourcetree.'}}open()
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'sourcetree' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sourcetree.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
