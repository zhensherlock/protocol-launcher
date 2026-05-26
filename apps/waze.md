---
url: /protocol-launcher/apps/waze.md
---

# Waze

[Waze](https://www.waze.com/) is a navigation app and live map service. **Protocol Launcher** allows you to generate Waze Deep Links to open Waze, search for a place or address, show a map location, navigate to coordinates, and navigate to the Home or Work favorite.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Waze documents `https://waze.com/ul` as the base URL for Deep Links. The `waze://` URL scheme should only be used when the Waze app is known to be installed; otherwise, Waze says tapping the link does nothing. These helpers default to HTTPS for Deep Links, and accept `protocol: 'waze'` only where Waze documents using the native scheme in place of the base URL.

`utmSource` maps to Waze's documented `utm_source` parameter.

### Open Waze

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}open()
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}search({
  q: '66 Acacia Avenue',
})
```

### Navigate to Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateToLocation' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}navigateToLocation({
  ll: '40.75889500,-73.98513100',
  zoom: 17,
})
```

### Navigate to Favorite

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateToFavorite' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}navigateToFavorite({
  favorite: 'work',
})
```

### Show on Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOnMap' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}showOnMap({
  z: 8,
})
```

### Show Location on Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOnMap' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}showOnMap({
  ll: '45.6906304,-120.810983',
  z: 10,
})
```

### Search and Navigate

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchAndNavigate' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}searchAndNavigate({
  q: '66 Acacia Avenue',
  ll: '45.6906304,-120.810983',
})
```

## Official Documentation

* [How to use Waze Deep Links](https://developers.google.com/waze/deeplinks)
