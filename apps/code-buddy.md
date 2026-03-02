---
url: /protocol-launcher/apps/code-buddy.md
---

# CodeBuddy

[CodeBuddy](https://codebuddy.ai) is a lightweight but powerful source code editor. **Protocol Launcher** allows you to generate deep links to open and configure resources in CodeBuddy.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}open()
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
