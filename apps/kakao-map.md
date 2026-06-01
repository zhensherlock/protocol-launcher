---
url: /protocol-launcher/apps/kakao-map.md
---

# Kakao Map

[Kakao Map](https://map.kakao.com/) is a map and navigation app from Kakao. **Protocol Launcher** allows you to generate Kakao Map URL Scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only exposes the Kakao Map actions listed by Kakao's official URL Scheme documentation: `open`, `look`, `place`, `search`, `route`, and `roadView`, plus the documented trend-ranking `open` URL.

Pass `scheme: 'mobileWeb'` to generate Kakao's documented MobileWeb equivalent. Kakao documents the trend-ranking MobileWeb URL with HTTPS; the other MobileWeb examples use HTTP.

### Open Kakao Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open()
```

### Open a Page

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open({
  page: 'placeSearch',
})
```

### Open a Layer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open({
  layer: 'skyview',
})
```

### Trend Ranking

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'trendRanking' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}trendRanking()
```

### Look

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'look' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}look({
  p: '37.3952969470752,127.110449292622',
})
```

### Place

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'place' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}place({
  id: '18577297',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}search({
  q: '맛집',
  p: '37.3952,127.11044',
})
```

### Route

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}route({
  sp: '37.39529,127.11044',
  ep: '37.49795,127.02763',
  by: 'car',
})
```

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

### Road View

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'roadView' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}roadView({
  p: '37.39529,127.11044',
})
```

### MobileWeb URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'look' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}look({
  p: '37.3952969470752,127.110449292622',
  scheme: 'mobileWeb',
})
```

## Official Documentation

* [Kakao Map URL Scheme](https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/)
