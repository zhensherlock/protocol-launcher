---
url: /protocol-launcher/apps/code-runner.md
---

# CodeRunner

[CodeRunner](https://code-runner.app) is a lightweight, multi-language programming editor and IDE for macOS. It supports 25 languages out-of-the-box and features advanced code completion, built-in debugging, and live error checking. **Protocol Launcher** allows you to generate deep links to open and configure resources in CodeRunner.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codeRunner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeRunner.'}}open()
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'codeRunner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeRunner.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'codeRunner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeRunner.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```
