---
url: /protocol-launcher/apps/code-buddy-cn.md
---

# CodeBuddy China

[CodeBuddy](https://codebuddy.ai) China version. **Protocol Launcher** allows you to generate deep links to open and configure resources in CodeBuddy China.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codeBuddyChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddyChina.'}}open()
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'codeBuddyChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddyChina.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'codeBuddyChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddyChina.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'codeBuddyChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddyChina.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'codeBuddyChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddyChina.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'codeBuddyChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddyChina.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'codeBuddyChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddyChina.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
