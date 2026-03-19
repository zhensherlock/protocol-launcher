---
url: /protocol-launcher/apps/apple-map.md
---

# Apple Maps

[Apple Maps](https://www.apple.com/maps/) is a web mapping service developed by Apple Inc. It provides directions, estimated times of arrival, and daily commutes. **Protocol Launcher** allows you to generate deep links to open Apple Maps, search for locations, get directions, and explore places.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Maps

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open()
```

### Search for Places

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: 'Food',
})
```

### Search with Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: 'Food',
  sll: '37.7749,-122.4194',
})
```

### Search Near Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: 'Food',
  near: '37.7749,-122.4194',
})
```

### Center Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  ll: '37.7749,-122.4194',
})
```

### Center Map with Zoom

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  ll: '37.7749,-122.4194',
  z: 15,
})
```

### Create Pin

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: 'Golden Gate Bridge',
  ll: '37.8199,-122.4783',
})
```

### Satellite View

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  t: 'k',
  ll: '37.7749,-122.4194',
})
```

### Display Address

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  address: '1 Infinite Loop Cupertino CA',
})
```

### Get Driving Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: 'San Francisco',
  dirflg: 'd',
})
```

### Get Walking Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: 'Union Square',
  dirflg: 'w',
})
```

### Get Transit Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: 'Fisherman\'s Wharf',
  dirflg: 'r',
})
```

### Get Full Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  saddr: 'San Jose',
  daddr: 'San Francisco',
  dirflg: 'd',
})
```
