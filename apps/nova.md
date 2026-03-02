---
url: /protocol-launcher/apps/nova.md
---

# Nova

[Nova](https://nova.app/) is a fast, flexible, and powerful native text editor for macOS. **Protocol Launcher** allows you to generate deep links to open files, folders, clone repositories, and more in Nova.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}open()
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openFile({
  path: '/etc/hosts',
  line: 1,
  column: 2,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openFolder({
  path: '/etc',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}cloneProject({
  url: 'https://github.com/zhensherlock/protocol-launcher.git',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openExtension({
  id: 'com.panic.Playdate',
})
```

### Register Nova

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'register' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}register({
  serial: 'NOVA-XXXX-XXXX-XXXX-XXXX-XXXX-X',
})
```
