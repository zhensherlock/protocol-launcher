---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, search, searchAtLocation, showDirections, showLocation, showPlace } from 'protocol-launcher/whereto';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  searchParams,
  searchAtLocationParams,
  showDirectionsParams,
  showLocationParams,
  showPlaceParams,
} from '../../.vitepress/constants/whereto';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/whereto' : 'protocol-launcher');
</script>

# Where To?

[Where To?](https://www.futuretap.com/apps/whereto) is an incredibly easy way to find the closest steakhouse, bank branch, billiard club, or anything else you might be looking for — whether you are on vacation in Paris or in your own back yard! **Protocol Launcher** allows you to generate deep links to search for places and navigate to locations in Where To?.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Where To?
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}search({
  search: 'Bars',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search for Bars
  </VPLink>
</div>

### Search at Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchAtLocation' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}searchAtLocation({
  search: 'Cafe',
  location: { lat: 37.332331, lon: -122.031219 },
})
```

<div class="flex justify-center">
  <VPLink :href="searchAtLocation(searchAtLocationParams)" target="_self">
    Search Cafe at Location
  </VPLink>
</div>

### Show Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showDirections' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}showDirections({
  location: { lat: 37.332331, lon: -122.031219 },
  mode: 'car',
})
```

<div class="flex justify-center">
  <VPLink :href="showDirections(showDirectionsParams)" target="_self">
    Show Directions
  </VPLink>
</div>

### Show Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showLocation' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}showLocation({
  location: { lat: 37.332331, lon: -122.031219 },
  title: 'Apple HQ',
})
```

<div class="flex justify-center">
  <VPLink :href="showLocation(showLocationParams)" target="_self">
    Show Location
  </VPLink>
</div>

### Show Place

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPlace' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}showPlace({
  poi: '7415861409383649399',
})
```

<div class="flex justify-center">
  <VPLink :href="showPlace(showPlaceParams)" target="_self">
    Show Place
  </VPLink>
</div>
