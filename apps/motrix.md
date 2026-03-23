---
url: /protocol-launcher/apps/motrix.md
---

# Motrix

[Motrix](https://motrix.app) is a full-featured download manager that supports downloading HTTP, FTP, BitTorrent, Magnet, etc. **Protocol Launcher** allows you to generate deep links to create download tasks and control Motrix.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Motrix

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}open()
```

### New Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}newTask({
  uri: 'https://example.com/file.dmg',
  out: 'myfile.dmg',
})
```

### New BitTorrent Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newBtTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}newBtTask()
```

### Open Task List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTaskList' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}openTaskList()
```

### Pause All Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pauseAllTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}pauseAllTask()
```

### Resume All Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resumeAllTask' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}resumeAllTask()
```

### Open Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preferences' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}preferences()
```

### Open About

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'about' : 'motrix' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'motrix.'}}about()
```
