---
url: /protocol-launcher/apps/naver-map.md
---

# NAVER Map

[NAVER Map](https://map.naver.com/) is NAVER's map and navigation app. **Protocol Launcher** allows you to generate NAVER Map URL Scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

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

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}search({
  query: '카페',
  appname: 'com.example.myapp',
})
```

### Search Bus

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchBus' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}searchBus({
  query: 'M4101',
  appname: 'com.example.myapp',
})
```

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

### Navigation

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigation' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}navigation({
  appname: 'com.example.myapp',
})
```

## Official Documentation

* [NAVER Map URL Scheme](https://guide.ncloud-docs.com/docs/maps-url-scheme)
