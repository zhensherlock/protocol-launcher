---
url: /protocol-launcher/apps/windsurf.md
---

# Windsurf

[Windsurf](https://windsurf.com/) is the first agentic IDE, developed by [Codeium](https://codeium.com/). It features **Cascade**, an AI agent that combines deep codebase understanding, advanced tools, and real-time awareness of your actions to handle complex coding tasks while keeping you in flow. **Protocol Launcher** allows you to generate deep links to open and configure resources in Windsurf.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}open()
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'windsurf' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'windsurf.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
