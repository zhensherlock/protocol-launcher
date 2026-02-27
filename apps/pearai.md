---
url: /protocol-launcher/apps/pearai.md
---

# PearAI

[PearAI](https://www.trypear.ai/) is an Open Source AI Code Editor (Fork of VSCode). **Protocol Launcher** allows you to generate deep links to open and configure resources in PearAI.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}open()
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openSettings()
```
