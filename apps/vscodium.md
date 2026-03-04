---
url: /protocol-launcher/apps/vscodium.md
---

# VSCodium

[VSCodium](https://vscodium.com/) is a community-driven, freely licensed binary distribution of Microsoft VS Code. It ships MIT-licensed builds with telemetry disabled and without Microsoft-specific customizations. **Protocol Launcher** allows you to generate deep links to open and configure resources in VSCodium.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}open()
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'vscodium' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodium.'}}openSettings({ 
  path: 'terminal.integrated.suggest.enabled',
})
```
