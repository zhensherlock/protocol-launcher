---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { geo, importFile, navigate, open, recordTrack, saveMarker, search, showPlace } from 'protocol-launcher/guru-maps';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  geoParams,
  importFileParams,
  navigateParams,
  openWithBackUrlParams,
  recordTrackParams,
  saveMarkerParams,
  searchParams,
  showPlaceParams,
} from '../../.vitepress/constants/guru-maps';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/guru-maps' : 'protocol-launcher');
</script>

# Guru Maps

[Guru Maps](https://gurumaps.app/) is an offline maps and navigation app. **Protocol Launcher** allows you to generate Guru Maps URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

This module only wraps the `guru:` and `guru://` APIs documented in the Guru Maps manual. The `geo:` helper is intentionally narrow: the official page only shows `geo:lat,lon` for displaying a location and notes that it does not support `back_url`.

`backUrl` maps to Guru Maps' documented `back_url` parameter.

### Open Guru Maps

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Guru Maps
  </VPLink>
</div>

### Open with Back URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}open({
  backUrl: 'https://gurumaps.app',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithBackUrlParams)" target="_self">
    Open with Back URL
  </VPLink>
</div>

### Import File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importFile' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}importFile({
  url: 'https://gurumaps.app/example/feature_collection.geojson',
})
```

<div class="flex justify-center">
  <VPLink :href="importFile(importFileParams)" target="_self">
    Import GeoJSON File
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}search({
  q: 'Wybrzeże Kościuszkowskie 20 Warszawa',
  coord: '52.2297,21.0122',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in Guru Maps
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="navigate(navigateParams)" target="_self">
    Build Route
  </VPLink>
</div>

### Record Track

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'recordTrack' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}recordTrack({
  action: 'start',
})
```

<div class="flex justify-center">
  <VPLink :href="recordTrack(recordTrackParams)" target="_self">
    Start Track Recording
  </VPLink>
</div>

### Save Marker

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'saveMarker' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}saveMarker({
  name: 'MyMarker',
  coord: '52.2297,21.0122',
})
```

<div class="flex justify-center">
  <VPLink :href="saveMarker(saveMarkerParams)" target="_self">
    Save Marker
  </VPLink>
</div>

### Show Place

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPlace' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}showPlace({
  coord: '52.2297,21.0122',
  zoom: 17,
})
```

<div class="flex justify-center">
  <VPLink :href="showPlace(showPlaceParams)" target="_self">
    Show Place
  </VPLink>
</div>

### Geo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'geo' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}geo({
  coord: '52.2297,21.0122',
})
```

<div class="flex justify-center">
  <VPLink :href="geo(geoParams)" target="_self">
    Show with Geo Scheme
  </VPLink>
</div>

## Official Documentation

- [API for Integration with Guru Maps](https://gurumaps.app/docs/manual/guru-api)
