---
url: /protocol-launcher/apps/pycharm.md
---

# PyCharm

[PyCharm](https://www.jetbrains.com/pycharm/) is an integrated development environment for Python development. **Protocol Launcher** allows you to generate deep links to open and configure resources in PyCharm.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pycharm' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pycharm.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'pycharm' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pycharm.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```
