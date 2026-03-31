---
url: /protocol-launcher/apps/whereto.md
---

# Where To?

[Where To?](https://www.futuretap.com/apps/whereto) is an incredibly easy way to find the closest steakhouse, bank branch, billiard club, or anything else you might be looking for — whether you are on vacation in Paris or in your own back yard! **Protocol Launcher** allows you to generate deep links to search for places and navigate to locations in Where To?.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}open()
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}search({
  search: 'Bars',
})
```

### Search at Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchAtLocation' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}searchAtLocation({
  search: 'Cafe',
  location: { lat: 37.332331, lon: -122.031219 },
})
```

### Show Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showDirections' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}showDirections({
  location: { lat: 37.332331, lon: -122.031219 },
  mode: 'car',
})
```

### Show Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showLocation' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}showLocation({
  location: { lat: 37.332331, lon: -122.031219 },
  title: 'Apple HQ',
})
```

### Show Place

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPlace' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}showPlace({
  poi: '7415861409383649399',
})
```
