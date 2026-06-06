---
url: /protocol-launcher/apps/yandex-maps.md
---

# Yandex Maps

[Yandex Maps](https://yandex.com/maps/) is Yandex's map and navigation app. **Protocol Launcher** allows you to generate Yandex Maps URL scheme links and web links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

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

### Add Placemark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPoint' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}showPoint({
  pt: '30.335429,59.944869',
  z: 18,
  l: 'map',
})
```

### Find Objects

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}search({
  ll: '30.310182,59.951059',
  z: 16,
  text: 'cafe with wi-fi',
})
```

### Open Organization Card

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOrganizationCard' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}openOrganizationCard({
  oid: 1184371713,
})
```

### Show What's Here

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showWhatsHere' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}showWhatsHere({
  point: '37.444075,55.776788',
  zoom: 17,
})
```

### Plot Route

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}route({
  rtext: '59.967870,30.242658~59.898495,30.299559',
  rtt: 'mt',
})
```

### Show Panorama

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'panorama' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}panorama({
  point: '37.444075,55.776788',
  direction: '228.970000,6.060547',
  span: '130.000000,71.919192',
})
```

### Android Geo Scheme

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'androidGeo' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}androidGeo({
  coordinates: '47.6,-122.3',
  z: 11,
})
```

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

### Add Web Placemark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webShowPoint' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webShowPoint({
  pt: '30.335429,59.944869',
  z: 18,
  l: 'map',
})
```

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

### Find Web Objects

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webSearch' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webSearch({
  ll: '30.310182,59.951059',
  z: 16,
  text: 'cafe with wi-fi',
})
```

### Open Web Organization Card

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webOpenOrganizationCard' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webOpenOrganizationCard({
  oid: 1184371713,
})
```

### Show Web What's Here

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webShowWhatsHere' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webShowWhatsHere({
  point: '37.444075,55.776788',
  zoom: 17,
})
```

### Plot Web Route

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webRoute' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webRoute({
  rtext: '59.967870,30.242658~59.898495,30.299559',
  rtt: 'bc',
})
```

### Show Web Panorama

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webPanorama' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webPanorama({
  point: '37.444075,55.776788',
  direction: '228.970000,6.060547',
  span: '130.000000,71.919192',
})
```

## Official Documentation

* [Launch Yandex Maps by URL](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/)
* [Launch Yandex Maps Android app](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-android-app)
* [Launch Yandex Maps iOS app](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app)
* [Launch web version of Yandex Maps](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web)
