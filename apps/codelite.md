---
url: /protocol-launcher/apps/codelite.md
---

# CodeLite

[CodeLite](https://codelite.org/) is a free, open‑source, cross‑platform IDE focused on C, C++, Rust, Python, Node.js, and PHP development. **Protocol Launcher** allows you to generate deep links to open resources in CodeLite.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'codelite' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codelite.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'codelite' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codelite.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```
