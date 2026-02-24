---
url: /protocol-launcher/apps/textmate.md
---

# TextMate

[TextMate](https://macromates.com/) is a general-purpose GUI text editor for macOS. **Protocol Launcher** allows you to generate deep links to open resources in TextMate.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'textmate' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textmate.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'textmate' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textmate.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```
