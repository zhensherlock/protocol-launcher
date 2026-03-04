---
url: /protocol-launcher/apps/atom.md
---

# Atom

[Atom](https://atom.io/) is a free and open-source text editor for macOS, Windows, and Linux. Built with HTML, JavaScript, CSS, and Node.js integration, it runs on the Electron framework. It features cross-platform editing, a built-in package manager, and deep integration with Git and GitHub. **Protocol Launcher** allows you to generate deep links to open resources in Atom.

::: info
Atom and all its repositories were archived on December 15, 2022.
:::

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Atom

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'atom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'atom.'}}open()
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'atom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'atom.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```
