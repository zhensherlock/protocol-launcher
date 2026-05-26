---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { navigateToFavorite, navigateToLocation, open, search, searchAndNavigate, showOnMap } from 'protocol-launcher/waze';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  navigateToFavoriteParams,
  navigateToLocationParams,
  searchAndNavigateParams,
  searchParams,
  showOnMapAtLocationParams,
  showOnMapParams,
} from '../../.vitepress/constants/waze';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/waze' : 'protocol-launcher');
</script>

# Waze

[Waze](https://www.waze.com/) is a navigation app and live map service. **Protocol Launcher** allows you to generate Waze Deep Links to open Waze, search for a place or address, show a map location, navigate to coordinates, and navigate to the Home or Work favorite.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Waze documents `https://waze.com/ul` as the base URL for Deep Links. The `waze://` URL scheme should only be used when the Waze app is known to be installed; otherwise, Waze says tapping the link does nothing. These helpers default to HTTPS for Deep Links, and accept `protocol: 'waze'` only where Waze documents using the native scheme in place of the base URL.

`utmSource` maps to Waze's documented `utm_source` parameter.

### Open Waze

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Waze
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}search({
  q: '66 Acacia Avenue',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search Address
  </VPLink>
</div>

### Navigate to Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateToLocation' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}navigateToLocation({
  ll: '40.75889500,-73.98513100',
  zoom: 17,
})
```

<div class="flex justify-center">
  <VPLink :href="navigateToLocation(navigateToLocationParams)" target="_self">
    Navigate to Location
  </VPLink>
</div>

### Navigate to Favorite

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateToFavorite' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}navigateToFavorite({
  favorite: 'work',
})
```

<div class="flex justify-center">
  <VPLink :href="navigateToFavorite(navigateToFavoriteParams)" target="_self">
    Navigate to Work
  </VPLink>
</div>

### Show on Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOnMap' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}showOnMap({
  z: 8,
})
```

<div class="flex justify-center">
  <VPLink :href="showOnMap(showOnMapParams)" target="_self">
    Show Map Zoom
  </VPLink>
</div>

### Show Location on Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOnMap' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}showOnMap({
  ll: '45.6906304,-120.810983',
  z: 10,
})
```

<div class="flex justify-center">
  <VPLink :href="showOnMap(showOnMapAtLocationParams)" target="_self">
    Show Location on Map
  </VPLink>
</div>

### Search and Navigate

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchAndNavigate' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}searchAndNavigate({
  q: '66 Acacia Avenue',
  ll: '45.6906304,-120.810983',
})
```

<div class="flex justify-center">
  <VPLink :href="searchAndNavigate(searchAndNavigateParams)" target="_self">
    Search and Navigate
  </VPLink>
</div>

## Official Documentation

- [How to use Waze Deep Links](https://developers.google.com/waze/deeplinks)
