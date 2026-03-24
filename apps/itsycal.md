---
url: /protocol-launcher/apps/itsycal.md
---

# Itsycal

[Itsycal](https://www.mowglii.com/itsycal/) is a tiny menu bar calendar for Mac. **Protocol Launcher** allows you to generate deep links to open Itsycal and navigate to specific dates.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Itsycal

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}open()
```

### Open Date

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}openDate({
  date: '2024-01-10',
})
```

### Open Today

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}openDate()
```
