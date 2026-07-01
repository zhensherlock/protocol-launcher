---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { androidIntent, crosshair, directions, geo, navigate, route, search, showMap, showSharedPoint } from 'protocol-launcher/organic-maps';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  androidIntentParams,
  crosshairParams,
  directionsParams,
  geoParams,
  navigateParams,
  routeParams,
  searchParams,
  showMapParams,
  showSharedPointParams,
} from '../../.vitepress/constants/organic-maps';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/organic-maps' : 'protocol-launcher');
</script>

# Organic Maps

[Organic Maps](https://organicmaps.app/) is an offline maps and navigation app. **Protocol Launcher** allows you to generate Organic Maps deep links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

This module mirrors the Organic Maps links documented on the official API page: shared-point links, `map?v=1`, `route?v=1`, v2 `dir` and `nav`, `search`, handled `geo:` examples, Android intent launch URIs, and the `crosshair` position chooser.

The same page also lists compatibility examples for MAPS.ME, Google Maps, OpenStreetMap, 2GIS, and downloadable KML/KMZ/GPX files. Those are not Organic Maps URL helpers, so this module does not generate them.

### Show Shared Point

Show an Organic Maps shared point by its short-code path, with an optional title.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showSharedPoint' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}showSharedPoint({
  code: 'o4B4pYZsRs',
  title: 'Zoo_Zürich',
})
```

<div class="flex justify-center">
  <VPLink :href="showSharedPoint(showSharedPointParams)" target="_self">
    Show Shared Point
  </VPLink>
</div>

### Show Map

Show one or more points on the map with the documented `map?v=1` link.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showMap' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}showMap({
  points: [
    { ll: '22.17319,-159.65687', title: 'Kalalau Camping' },
    { ll: '22.17168,-159.66096', title: 'Dream Beach' },
    { ll: '22.17182,-159.65776' },
  ],
})
```

<div class="flex justify-center">
  <VPLink :href="showMap(showMapParams)" target="_self">
    Show Points
  </VPLink>
</div>

### Route

Build a v1 route with the documented route types: `vehicle`, `pedestrian`, `bicycle`, and `transit`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}route({
  start: { ll: '50.183933,8.942871', address: 'Start Point' },
  destination: { ll: '49.998912,8.278198', address: 'EndPoint' },
  type: 'vehicle',
})
```

<div class="flex justify-center">
  <VPLink :href="route(routeParams)" target="_self">
    Build Route
  </VPLink>
</div>

### Directions

Build a v2 multi-stop route with `v2/dir`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}directions({
  origin: '52.5200,13.4050',
  originName: 'Warehouse Berlin',
  destination: '52.5163,13.3777',
  destinationName: 'Customer',
  waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
  waypointNames: ['Pickup 1', 'Pickup 2'],
  mode: 'drive',
})
```

<div class="flex justify-center">
  <VPLink :href="directions(directionsParams)" target="_self">
    Build v2 Directions
  </VPLink>
</div>

### Navigate

Start v2 navigation with `v2/nav`, waypoint callbacks, and a route completion callback.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigate' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}navigate({
  origin: 'currentLocation',
  destination: '52.5163,13.3777',
  destinationName: 'Customer',
  waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
  waypointCallbacks: ['delivery://stop/1', 'delivery://stop/2'],
  callback: 'delivery://route/complete',
  mode: 'drive',
})
```

<div class="flex justify-center">
  <VPLink :href="navigate(navigateParams)" target="_self">
    Start Navigation
  </VPLink>
</div>

### Search

Search in Organic Maps with optional center coordinates and locale.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}search({
  cll: '47.3813,8.5889',
  locale: 'de',
  query: 'Mame',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search Organic Maps
  </VPLink>
</div>

### Geo

Generate a `geo:` URI form handled by Organic Maps.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'geo' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}geo({
  coordinates: '35.341714,33.32231',
  title: 'Custom Title',
})
```

<div class="flex justify-center">
  <VPLink :href="geo(geoParams)" target="_self">
    Open Geo URI
  </VPLink>
</div>

### Crosshair

Open the Organic Maps position chooser with the documented `crosshair` link.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'crosshair' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}crosshair({
  cll: '47.3813,8.5889',
  appname: 'Google Maps',
})
```

<div class="flex justify-center">
  <VPLink :href="crosshair(crosshairParams)" target="_self">
    Open Position Chooser
  </VPLink>
</div>

### Android Intent

Build one of the documented Android intent URIs for launching Organic Maps.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'androidIntent' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}androidIntent({
  packageName: 'app.organicmaps',
})
```

<div class="flex justify-center">
  <VPLink :href="androidIntent(androidIntentParams)" target="_self">
    Open Android Intent
  </VPLink>
</div>

## Generated URLs

```ts
showSharedPoint({ code: 'o4B4pYZsRs', title: 'Zoo_Zürich' })
// => 'om://o4B4pYZsRs/Zoo_Zürich'

showMap({
  points: [
    { ll: '22.17319,-159.65687', title: 'Kalalau Camping' },
    { ll: '22.17168,-159.66096', title: 'Dream Beach' },
    { ll: '22.17182,-159.65776' },
  ],
})
// => 'om://map?v=1&ll=22.17319,-159.65687&n=Kalalau%20Camping&ll=22.17168,-159.66096&n=Dream%20Beach&ll=22.17182,-159.65776'

route({
  start: { ll: '50.183933,8.942871', address: 'Start Point' },
  destination: { ll: '49.998912,8.278198', address: 'EndPoint' },
  type: 'vehicle',
})
// => 'om://route?v=1&sll=50.183933,8.942871&saddr=Start%20Point&dll=49.998912,8.278198&daddr=EndPoint&type=vehicle'

directions({
  origin: '52.5200,13.4050',
  originName: 'Warehouse Berlin',
  destination: '52.5163,13.3777',
  destinationName: 'Customer',
  waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
  waypointNames: ['Pickup 1', 'Pickup 2'],
  mode: 'drive',
})
// => 'om://v2/dir?origin=52.5200,13.4050&origin_name=Warehouse%20Berlin&destination=52.5163,13.3777&destination_name=Customer&waypoints=52.5304,13.3850|52.5450,13.3920&waypoint_names=Pickup%201|Pickup%202&mode=drive'

navigate({
  origin: 'currentLocation',
  destination: '52.5163,13.3777',
  destinationName: 'Customer',
  waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
  waypointCallbacks: ['delivery://stop/1', 'delivery://stop/2'],
  callback: 'delivery://route/complete',
  mode: 'drive',
})
// => 'om://v2/nav?origin=currentLocation&destination=52.5163,13.3777&destination_name=Customer&waypoints=52.5304,13.3850|52.5450,13.3920&waypoint_callbacks=delivery%3A%2F%2Fstop%2F1|delivery%3A%2F%2Fstop%2F2&callback=delivery%3A%2F%2Froute%2Fcomplete&mode=drive'

search({ cll: '47.3813,8.5889', locale: 'de', query: 'Mame' })
// => 'om://search?cll=47.3813,8.5889&locale=de&query=Mame'

geo({ coordinates: '35.341714,33.32231', title: 'Custom Title' })
// => 'geo:35.341714,33.32231(Custom%20Title)'

crosshair({ cll: '47.3813,8.5889', appname: 'Google Maps' })
// => 'om://crosshair?cll=47.3813,8.5889&appname=Google%20Maps'

androidIntent({ packageName: 'app.organicmaps' })
// => 'intent://#Intent;package=app.organicmaps;scheme=om;end;'
```

## Official Documentation

- [Organic Maps API and Deep Links Test Page](https://omaps.app/api)
