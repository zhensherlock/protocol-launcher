---
url: /protocol-launcher/appsbbedit.md
---

# BBEdit

[BBEdit](https://www.barebones.com/products/bbedit/) is a professional HTML and text editor for macOS. **Protocol Launcher** allows you to generate deep links to open resources in BBEdit.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'bbedit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bbedit.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'bbedit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bbedit.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```
