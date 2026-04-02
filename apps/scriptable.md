---
url: /protocol-launcher/apps/scriptable.md
---

# Scriptable

[Scriptable](https://www.scriptable.app/) is an automation app for iOS that lets you write JavaScript scripts to interact with native iOS APIs. **Protocol Launcher** allows you to generate deep links to open Scriptable, create new scripts, or run existing scripts.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}open()
```

### Add Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}addScript()
```

### Open Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}openScript({
  scriptName: 'Example',
})
```

### Open Script with Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}openScript({
  scriptName: 'Example',
  openSettings: true,
})
```

### Run Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}runScript({
  scriptName: 'Example',
})
```

### Run Script with Editor

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}runScript({
  scriptName: 'Example',
  openEditor: true,
})
```
