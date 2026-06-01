---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { look, open, place, roadView, route, search, trendRanking } from 'protocol-launcher/kakao-map';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  lookParams,
  mobileWebLookParams,
  openPlaceSearchParams,
  openSkyviewParams,
  placeParams,
  roadViewParams,
  routeParams,
  routeWithWaypointParams,
  searchParams,
} from '../../.vitepress/constants/kakao-map';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/kakao-map' : 'protocol-launcher');
</script>

# Kakao Map

[Kakao Map](https://map.kakao.com/) is a map and navigation app from Kakao. **Protocol Launcher** allows you to generate Kakao Map URL Scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

This module only exposes the Kakao Map actions listed by Kakao's official URL Scheme documentation: `open`, `look`, `place`, `search`, `route`, and `roadView`, plus the documented trend-ranking `open` URL.

Pass `scheme: 'mobileWeb'` to generate Kakao's documented MobileWeb equivalent. Kakao documents the trend-ranking MobileWeb URL with HTTPS; the other MobileWeb examples use HTTP.

### Open Kakao Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Kakao Map
  </VPLink>
</div>

### Open a Page

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open({
  page: 'placeSearch',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openPlaceSearchParams)" target="_self">
    Open Place Search
  </VPLink>
</div>

### Open a Layer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open({
  layer: 'skyview',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openSkyviewParams)" target="_self">
    Open Skyview
  </VPLink>
</div>

### Trend Ranking

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'trendRanking' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}trendRanking()
```

<div class="flex justify-center">
  <VPLink :href="trendRanking()" target="_self">
    Open Trend Ranking
  </VPLink>
</div>

### Look

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'look' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}look({
  p: '37.3952969470752,127.110449292622',
})
```

<div class="flex justify-center">
  <VPLink :href="look(lookParams)" target="_self">
    Open Coordinate
  </VPLink>
</div>

### Place

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'place' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}place({
  id: '18577297',
})
```

<div class="flex justify-center">
  <VPLink :href="place(placeParams)" target="_self">
    Open Place
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}search({
  q: '맛집',
  p: '37.3952,127.11044',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search Around Coordinate
  </VPLink>
</div>

### Route

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}route({
  sp: '37.39529,127.11044',
  ep: '37.49795,127.02763',
  by: 'car',
})
```

<div class="flex justify-center">
  <VPLink :href="route(routeParams)" target="_self">
    Open Car Route
  </VPLink>
</div>

### Route with Waypoint

Kakao documents waypoints as `vp`, `vp2`, `vp3`, `vp4`, and `vp5`. Public transit routes do not support waypoints.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}route({
  sp: '37.40205,127.10821',
  vp: '37.39424,127.11030',
  ep: '37.39529,127.11044',
  by: 'foot',
})
```

<div class="flex justify-center">
  <VPLink :href="route(routeWithWaypointParams)" target="_self">
    Open Walking Route
  </VPLink>
</div>

### Road View

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'roadView' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}roadView({
  p: '37.39529,127.11044',
})
```

<div class="flex justify-center">
  <VPLink :href="roadView(roadViewParams)" target="_self">
    Open Road View
  </VPLink>
</div>

### MobileWeb URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'look' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}look({
  p: '37.3952969470752,127.110449292622',
  scheme: 'mobileWeb',
})
```

<div class="flex justify-center">
  <VPLink :href="look(mobileWebLookParams)" target="_self">
    Open MobileWeb Coordinate
  </VPLink>
</div>

## Official Documentation

- [Kakao Map URL Scheme](https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/)
