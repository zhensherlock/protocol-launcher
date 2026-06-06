---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  androidGeo,
  openMap,
  openOrganizationCard,
  panorama,
  route,
  search,
  showPoint,
  showWhatsHere,
  webMap,
  webOpenOrganizationCard,
  webPanorama,
  webRoute,
  webSearch,
  webShowPoint,
  webShowPoints,
  webShowWhatsHere,
} from 'protocol-launcher/yandex-maps';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  androidGeoParams,
  openMapParams,
  organizationParams,
  panoramaParams,
  routeParams,
  searchParams,
  showPointParams,
  webMapParams,
  webRouteParams,
  webShowPointsParams,
  whatsHereParams,
} from '../../.vitepress/constants/yandex-maps';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/yandex-maps' : 'protocol-launcher');
</script>

# Yandex Maps

[Yandex Maps](https://yandex.com/maps/) is Yandex's map and navigation app. **Protocol Launcher** allows you to generate Yandex Maps URL scheme links and web links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

This module only wraps actions and parameters documented by Yandex for `yandexmaps://` mobile app links, the Android `geo:` example supported by Yandex Maps, and `https://yandex.ru/maps/` web links.

Yandex documents `ll`, `pt`, "What's here?", and panorama coordinates as `longitude,latitude`. Route `rtext` is documented separately as `latitude,longitude~latitude,longitude`, and the Android `geo:` example uses `latitude,longitude`. The mobile app route type is limited to `auto`, `mt`, and `pd`; the web route helper also supports the web-only `bc` bicycle route type.

## Mobile App

### Open Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMap' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}openMap({
  ll: '37.619902,55.753716',
  z: 11,
  l: ['map', 'trf'],
})
```

<div class="flex justify-center">
  <VPLink :href="openMap(openMapParams)" target="_self">
    Open Yandex Maps
  </VPLink>
</div>

### Add Placemark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPoint' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}showPoint({
  pt: '30.335429,59.944869',
  z: 18,
  l: 'map',
})
```

<div class="flex justify-center">
  <VPLink :href="showPoint(showPointParams)" target="_self">
    Add Placemark
  </VPLink>
</div>

### Find Objects

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}search({
  ll: '30.310182,59.951059',
  z: 16,
  text: 'cafe with wi-fi',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Find Objects
  </VPLink>
</div>

### Open Organization Card

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOrganizationCard' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}openOrganizationCard({
  oid: 1184371713,
})
```

<div class="flex justify-center">
  <VPLink :href="openOrganizationCard(organizationParams)" target="_self">
    Open Organization Card
  </VPLink>
</div>

### Show What's Here

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showWhatsHere' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}showWhatsHere({
  point: '37.444075,55.776788',
  zoom: 17,
})
```

<div class="flex justify-center">
  <VPLink :href="showWhatsHere(whatsHereParams)" target="_self">
    Show What's Here
  </VPLink>
</div>

### Plot Route

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}route({
  rtext: '59.967870,30.242658~59.898495,30.299559',
  rtt: 'mt',
})
```

<div class="flex justify-center">
  <VPLink :href="route(routeParams)" target="_self">
    Plot Route
  </VPLink>
</div>

### Show Panorama

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'panorama' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}panorama({
  point: '37.444075,55.776788',
  direction: '228.970000,6.060547',
  span: '130.000000,71.919192',
})
```

<div class="flex justify-center">
  <VPLink :href="panorama(panoramaParams)" target="_self">
    Show Panorama
  </VPLink>
</div>

### Android Geo Scheme

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'androidGeo' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}androidGeo({
  coordinates: '47.6,-122.3',
  z: 11,
})
```

<div class="flex justify-center">
  <VPLink :href="androidGeo(androidGeoParams)" target="_self">
    Open Android Geo Map
  </VPLink>
</div>

## Web

### Open Web Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webMap' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webMap({
  ll: '30.310182,59.951059',
  z: 12,
  l: 'map',
})
```

<div class="flex justify-center">
  <VPLink :href="webMap(webMapParams)" target="_self">
    Open Web Map
  </VPLink>
</div>

### Add Web Placemark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webShowPoint' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webShowPoint({
  pt: '30.335429,59.944869',
  z: 18,
  l: 'map',
})
```

<div class="flex justify-center">
  <VPLink :href="webShowPoint(showPointParams)" target="_self">
    Add Web Placemark
  </VPLink>
</div>

### Add Several Web Placemarks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webShowPoints' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webShowPoints({
  ll: '30.310182,59.951059',
  pt: '30.335429,59.944869~30.34127,59.89173',
  z: 12,
  l: 'map',
})
```

<div class="flex justify-center">
  <VPLink :href="webShowPoints(webShowPointsParams)" target="_self">
    Add Several Web Placemarks
  </VPLink>
</div>

### Find Web Objects

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webSearch' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webSearch({
  ll: '30.310182,59.951059',
  z: 16,
  text: 'cafe with wi-fi',
})
```

<div class="flex justify-center">
  <VPLink :href="webSearch(searchParams)" target="_self">
    Find Web Objects
  </VPLink>
</div>

### Open Web Organization Card

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webOpenOrganizationCard' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webOpenOrganizationCard({
  oid: 1184371713,
})
```

<div class="flex justify-center">
  <VPLink :href="webOpenOrganizationCard(organizationParams)" target="_self">
    Open Web Organization Card
  </VPLink>
</div>

### Show Web What's Here

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webShowWhatsHere' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webShowWhatsHere({
  point: '37.444075,55.776788',
  zoom: 17,
})
```

<div class="flex justify-center">
  <VPLink :href="webShowWhatsHere(whatsHereParams)" target="_self">
    Show Web What's Here
  </VPLink>
</div>

### Plot Web Route

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webRoute' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webRoute({
  rtext: '59.967870,30.242658~59.898495,30.299559',
  rtt: 'bc',
})
```

<div class="flex justify-center">
  <VPLink :href="webRoute(webRouteParams)" target="_self">
    Plot Web Route
  </VPLink>
</div>

### Show Web Panorama

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webPanorama' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webPanorama({
  point: '37.444075,55.776788',
  direction: '228.970000,6.060547',
  span: '130.000000,71.919192',
})
```

<div class="flex justify-center">
  <VPLink :href="webPanorama(panoramaParams)" target="_self">
    Show Web Panorama
  </VPLink>
</div>

## Official Documentation

- [Launch Yandex Maps by URL](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/)
- [Launch Yandex Maps Android app](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-android-app)
- [Launch Yandex Maps iOS app](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app)
- [Launch web version of Yandex Maps](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web)
