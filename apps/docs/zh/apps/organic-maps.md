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

[Organic Maps](https://organicmaps.app/) 是一款离线地图与导航应用。**Protocol Launcher** 可以生成 Organic Maps deep links。

## 使用方式

这个库有两种使用方式：

- On-Demand 从子路径导入，支持 tree-shaking，能让产物更小。
- Full Import 从根包导入，适合快速脚本或演示，但会包含全部 app 模块。

生产构建建议选择 On-Demand；快速脚本或 demo 可以选择 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

此模块对齐 Organic Maps 官方 API 页中记录的 Organic Maps 链接：shared-point links、`map?v=1`、`route?v=1`、v2 `dir` 和 `nav`、`search`、Organic Maps 支持的 `geo:` 示例、Android intent 启动 URI，以及 `crosshair` 位置选择器。

同一页面也列出了 MAPS.ME、Google Maps、OpenStreetMap、2GIS 兼容链接和可下载的 KML/KMZ/GPX 文件。那些不是 Organic Maps URL helper，所以本模块不会生成这些链接。

### Show Shared Point

通过短码路径显示 Organic Maps 共享点，并可附带 title。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showSharedPoint' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}showSharedPoint({
  code: 'o4B4pYZsRs',
  title: 'Zoo_Zürich',
})
```

<div class="flex justify-center">
  <VPLink :href="showSharedPoint(showSharedPointParams)" target="_self">
    显示共享点
  </VPLink>
</div>

### Show Map

使用官方 `map?v=1` 链接在地图上显示一个或多个点。

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
    显示多个点
  </VPLink>
</div>

### Route

使用 v1 API 构建路线，支持官方记录的 `vehicle`、`pedestrian`、`bicycle` 和 `transit` 类型。

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
    构建路线
  </VPLink>
</div>

### Directions

使用 `v2/dir` 构建 v2 多站点路线。

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
    构建 v2 路线
  </VPLink>
</div>

### Navigate

使用 `v2/nav` 启动 v2 导航，并携带 waypoint callbacks 和 route completion callback。

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
    启动导航
  </VPLink>
</div>

### Search

在 Organic Maps 中搜索，并可传入中心坐标和 locale。

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
    在 Organic Maps 中搜索
  </VPLink>
</div>

### Geo

生成 Organic Maps 支持的 `geo:` URI。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'geo' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}geo({
  coordinates: '35.341714,33.32231',
  title: 'Custom Title',
})
```

<div class="flex justify-center">
  <VPLink :href="geo(geoParams)" target="_self">
    打开 Geo URI
  </VPLink>
</div>

### Crosshair

使用官方 `crosshair` 链接打开 Organic Maps 位置选择器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'crosshair' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}crosshair({
  cll: '47.3813,8.5889',
  appname: 'Google Maps',
})
```

<div class="flex justify-center">
  <VPLink :href="crosshair(crosshairParams)" target="_self">
    打开位置选择器
  </VPLink>
</div>

### Android Intent

生成官方记录的 Android intent URI，用于启动 Organic Maps。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'androidIntent' : 'organicMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'organicMaps.'}}androidIntent({
  packageName: 'app.organicmaps',
})
```

<div class="flex justify-center">
  <VPLink :href="androidIntent(androidIntentParams)" target="_self">
    打开 Android Intent
  </VPLink>
</div>

## 生成的 URL

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

## 官方文档

- [Organic Maps API and Deep Links Test Page](https://omaps.app/api)
