---
url: /protocol-launcher/apps/vscode.md
---

# VS Code

[Visual Studio Code](https://code.visualstudio.com) is a lightweight but powerful source code editor. **Protocol Launcher** allows you to generate deep links to open and configure resources in Visual Studio Code.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}openSettings()
```
