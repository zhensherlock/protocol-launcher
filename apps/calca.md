---
url: /protocol-launcher/apps/calca.md
---

# Calca

[Calca](http://calca.io/) is a text editor that loves math and gives you answers as you type. **Protocol Launcher** allows you to generate deep links to create documents and perform calculations in Calca.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Calca

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}open()
```

### Create Document

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}create({
  body: '2+2=>',
  title: 'Math',
})
```

### Calculate

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calc' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}calc({
  body: '2+2=>',
  xSuccess: 'app://callback',
})
```
