---
url: /protocol-launcher/apps/guru-maps.md
---

# Guru Maps

[Guru Maps](https://gurumaps.app/) is an offline maps and navigation app. **Protocol Launcher** allows you to generate Guru Maps URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only wraps the `guru:` and `guru://` APIs documented in the Guru Maps manual. The `geo:` helper is intentionally narrow: the official page only shows `geo:lat,lon` for displaying a location and notes that it does not support `back_url`.

`backUrl` maps to Guru Maps' documented `back_url` parameter.

### Open Guru Maps

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}open()
```

### Open with Back URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}open({
  backUrl: 'https://gurumaps.app',
})
```

### Import File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importFile' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}importFile({
  url: 'https://gurumaps.app/example/feature_collection.geojson',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}search({
  q: 'Wybrzeże Kościuszkowskie 20 Warszawa',
  coord: '52.2297,21.0122',
})
```

### Navigate

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigate' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}navigate({
  start: '52.2297,21.0122',
  finish: '52.2397,21.0222',
  via: '52.2347,21.0172',
  mode: 'bicycle',
  startNavigation: true,
})
```

### Record Track

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'recordTrack' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}recordTrack({
  action: 'start',
})
```

### Save Marker

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'saveMarker' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}saveMarker({
  name: 'MyMarker',
  coord: '52.2297,21.0122',
})
```

### Show Place

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPlace' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}showPlace({
  coord: '52.2297,21.0122',
  zoom: 17,
})
```

### Geo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'geo' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}geo({
  coord: '52.2297,21.0122',
})
```

## Official Documentation

* [API for Integration with Guru Maps](https://gurumaps.app/docs/manual/guru-api)
