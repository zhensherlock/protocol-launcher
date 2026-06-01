---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { navigation, openMap, route, search, searchBus, showPoint } from 'protocol-launcher/naver-map';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  navigationParams,
  openMapParams,
  routeParams,
  searchBusParams,
  searchParams,
  showPointParams,
} from '../../.vitepress/constants/naver-map';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/naver-map' : 'protocol-launcher');
</script>

# NAVER Map

[NAVER Map](https://map.naver.com/) is NAVER's map and navigation app. **Protocol Launcher** allows you to generate NAVER Map URL Scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

NAVER's URL Scheme requires an `appname` parameter that identifies the calling app or web page. This module only exposes helpers for the documented `nmap://` action paths: `map`, `place`, `search`, `search/bus`, `route/public`, `route/car`, `route/walk`, `route/bicycle`, and `navigation`.

### Open NAVER Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMap' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}openMap({
  lat: 37.56661,
  lng: 126.978388,
  zoom: 13,
  appname: 'com.example.myapp',
})
```

<div class="flex justify-center">
  <VPLink :href="openMap(openMapParams)" target="_self">
    Open NAVER Map
  </VPLink>
</div>

### Show a Point

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPoint' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}showPoint({
  lat: 37.56661,
  lng: 126.978388,
  name: '서울역',
  appname: 'com.example.myapp',
})
```

<div class="flex justify-center">
  <VPLink :href="showPoint(showPointParams)" target="_self">
    Show Point
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}search({
  query: '카페',
  appname: 'com.example.myapp',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search
  </VPLink>
</div>

### Search Bus

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchBus' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}searchBus({
  query: 'M4101',
  appname: 'com.example.myapp',
})
```

<div class="flex justify-center">
  <VPLink :href="searchBus(searchBusParams)" target="_self">
    Search Bus
  </VPLink>
</div>

### Route

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}route({
  mode: 'car',
  dlat: 37.5209436,
  dlng: 127.1230074,
  dname: '올림픽공원',
  appname: 'com.example.myapp',
})
```

<div class="flex justify-center">
  <VPLink :href="route(routeParams)" target="_self">
    Open Car Route
  </VPLink>
</div>

### Navigation

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigation' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}navigation({
  appname: 'com.example.myapp',
})
```

<div class="flex justify-center">
  <VPLink :href="navigation(navigationParams)" target="_self">
    Open Navigation
  </VPLink>
</div>

## Official Documentation

- [NAVER Map URL Scheme](https://guide.ncloud-docs.com/docs/maps-url-scheme)
