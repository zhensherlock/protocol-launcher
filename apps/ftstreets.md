---
url: /protocol-launcher/apps/ftstreets.md
---

# Streets

[Streets](https://www.futuretap.com/apps/streets) is the best way to browse Street View panoramas on iPhone, iPad, Apple Watch, and Mac. **Protocol Launcher** allows you to generate deep links to view Street View panoramas in Streets.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'ftstreets' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ftstreets.'}}open()
```

### View Panorama

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'ftstreets' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ftstreets.'}}view({
  location: { lat: 48.872112, lng: 2.332977 },
  heading: 60,
  pitch: 7,
  title: 'Apple Store Opéra',
})
```
