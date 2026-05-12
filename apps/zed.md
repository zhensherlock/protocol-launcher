---
url: /protocol-launcher/apps/zed.md
---

# Zed

[Zed](https://zed.dev/) is a minimal code editor crafted for speed and collaboration with humans and AI. **Protocol Launcher** allows you to generate deep links to open and configure resources in Zed.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openRemote({
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Git Commit

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openGitCommit' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openGitCommit({
  sha: '739420c',
  path: '/Users/dev/Documents/protocol-launcher',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openExtension({
  id: 'html',
})
```

### Open Agent

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAgent' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openAgent({
  prompt: 'Hello World',
})
```

### Join Agent

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'joinAgent' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}joinAgent({
  id: '12345',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openSettings({
  path: 'autosave',
})
```
