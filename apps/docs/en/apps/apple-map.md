---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open } from 'protocol-launcher/apple-map';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openParams,
  searchFoodParams,
  searchFoodWithLocationParams,
  searchFoodNearParams,
  centerMapParams,
  centerMapWithZoomParams,
  createPinParams,
  satelliteViewParams,
  addressParams,
  drivingDirectionsParams,
  walkingDirectionsParams,
  transitDirectionsParams,
  fullDirectionsParams,
} from '../../.vitepress/constants/apple-map';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/apple-map' : 'protocol-launcher');
</script>

# Apple Maps

[Apple Maps](https://www.apple.com/maps/) is a web mapping service developed by Apple Inc. It provides directions, estimated times of arrival, and daily commutes. **Protocol Launcher** allows you to generate deep links to open Apple Maps, search for locations, get directions, and explore places.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Maps

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Apple Maps
  </VPLink>
</div>

### Search for Places

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: 'Food',
})
```

<div class="flex justify-center">
  <VPLink :href="open(searchFoodParams)" target="_self">
    Search for Food
  </VPLink>
</div>

### Search with Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: 'Food',
  sll: '37.7749,-122.4194',
})
```

<div class="flex justify-center">
  <VPLink :href="open(searchFoodWithLocationParams)" target="_self">
    Search Food in San Francisco
  </VPLink>
</div>

### Search Near Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: 'Food',
  near: '37.7749,-122.4194',
})
```

<div class="flex justify-center">
  <VPLink :href="open(searchFoodNearParams)" target="_self">
    Search Food Near San Francisco
  </VPLink>
</div>

### Center Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  ll: '37.7749,-122.4194',
})
```

<div class="flex justify-center">
  <VPLink :href="open(centerMapParams)" target="_self">
    Center on San Francisco
  </VPLink>
</div>

### Center Map with Zoom

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  ll: '37.7749,-122.4194',
  z: 15,
})
```

<div class="flex justify-center">
  <VPLink :href="open(centerMapWithZoomParams)" target="_self">
    Center on San Francisco (Zoom 15)
  </VPLink>
</div>

### Create Pin

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: 'Golden Gate Bridge',
  ll: '37.8199,-122.4783',
})
```

<div class="flex justify-center">
  <VPLink :href="open(createPinParams)" target="_self">
    Pin Golden Gate Bridge
  </VPLink>
</div>

### Satellite View

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  t: 'k',
  ll: '37.7749,-122.4194',
})
```

<div class="flex justify-center">
  <VPLink :href="open(satelliteViewParams)" target="_self">
    Satellite View
  </VPLink>
</div>

### Display Address

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  address: '1 Infinite Loop Cupertino CA',
})
```

<div class="flex justify-center">
  <VPLink :href="open(addressParams)" target="_self">
    Display Address
  </VPLink>
</div>

### Get Driving Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: 'San Francisco',
  dirflg: 'd',
})
```

<div class="flex justify-center">
  <VPLink :href="open(drivingDirectionsParams)" target="_self">
    Driving Directions
  </VPLink>
</div>

### Get Walking Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: 'Union Square',
  dirflg: 'w',
})
```

<div class="flex justify-center">
  <VPLink :href="open(walkingDirectionsParams)" target="_self">
    Walking Directions
  </VPLink>
</div>

### Get Transit Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: 'Fisherman\'s Wharf',
  dirflg: 'r',
})
```

<div class="flex justify-center">
  <VPLink :href="open(transitDirectionsParams)" target="_self">
    Transit Directions
  </VPLink>
</div>

### Get Full Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  saddr: 'San Jose',
  daddr: 'San Francisco',
  dirflg: 'd',
})
```

<div class="flex justify-center">
  <VPLink :href="open(fullDirectionsParams)" target="_self">
    Full Directions
  </VPLink>
</div>
