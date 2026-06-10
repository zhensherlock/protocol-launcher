---
url: /protocol-launcher/apps/yandex-navigator.md
---

# Yandex Navigator

[Yandex Navigator](https://yandex.com/dev/yandex-apps-launch/navigator/) is a navigation app from Yandex. **Protocol Launcher** allows you to generate official `yandexnavi://` links to open Yandex Navigator, build routes, search the map, and show a point.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only wraps actions and parameters documented by Yandex Navigator: `build_route_on_map`, `map_search`, and `show_point_on_map`.

Yandex documents route coordinates as separate latitude and longitude parameters. Intermediate route points are serialized as `lat_via_0`, `lon_via_0`, then `lat_via_1`, `lon_via_1`, and so on.

Yandex says sending coordinates, search queries, and other data to Navigator requires an access key. Signed URLs use the documented `client` and `signature` parameters; these helpers accept those optional fields, but the RSA signature must be generated outside Protocol Launcher with your Yandex access key.

### Open Navigator

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}open()
```

### Build Route

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'buildRoute' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}buildRoute({
  lat_from: '55.74',
  lon_from: '37.60',
  lat_to: '55.76',
  lon_to: '37.64',
})
```

### Build Route From Current Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'buildRoute' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}buildRoute({
  lat_to: '55.70',
  lon_to: '37.64',
})
```

### Build Route With Via Point

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'buildRoute' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}buildRoute({
  lat_from: '55.75',
  lon_from: '37.58',
  lat_to: '55.75',
  lon_to: '37.64',
  via: [{ lat: '55.75', lon: '37.62' }],
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}search({
  text: 'заправка',
})
```

### Show Point

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPoint' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}showPoint({
  lat: 55.77,
  lon: 37.44,
  zoom: 12,
  'no-balloon': 0,
  desc: 'кафе с wi-fi',
})
```

### Signed URL Parameters

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPoint' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}showPoint({
  lat: 55.75,
  lon: 37.64,
  zoom: 14,
  client: '007',
  signature: 'REPLACE_WITH_SIGNATURE',
})
```

## Official Documentation

* [Launch Yandex.Navigator](https://yandex.com/dev/yandex-apps-launch/navigator/)
* [Yandex Navigator URL format](https://yandex.ru/dev/navigator/doc/ru/concepts/navigator-url-params)
* [Yandex Navigator access-key signature](https://yandex.ru/dev/navigator/doc/ru/concepts/navigator-commercial-use-signature)
