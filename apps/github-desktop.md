---
url: /protocol-launcher/apps/github-desktop.md
---

# GitHub Desktop

[GitHub Desktop](https://github.com/apps/desktop) is a desktop application for version control and collaboration with GitHub. **Protocol Launcher** allows you to generate deep links to open and configure resources in GitHub Desktop.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'githubDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'githubDesktop.'}}openFile({
  owner: 'zhensherlock',
  repo: 'protocol-launcher',
  branch: 'main',
  path: 'packages/shared/src/index.ts',
})
```

### Open Repository

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRepo' : 'githubDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'githubDesktop.'}}openRepo({
  owner: 'zhensherlock',
  repo: 'protocol-launcher',
  branch: 'main',
})
```
