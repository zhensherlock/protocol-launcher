---
url: /protocol-launcher/apps/webstorm.md
---

# WebStorm

[WebStorm](https://www.jetbrains.com/webstorm/) is an integrated development environment for JavaScript and web development. **Protocol Launcher** allows you to generate deep links to open and configure resources in WebStorm.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'webstorm' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webstorm.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'webstorm' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webstorm.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```
