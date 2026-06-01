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

[Kakao Map](https://map.kakao.com/) 是 Kakao 的地图和导航应用。**Protocol Launcher** 允许你生成 Kakao Map URL Scheme 链接。

## 用法

这个库有两种使用方式：

- On-Demand 从子路径导入，支持 tree-shaking，打包体积更小。
- Full Import 从根包导入，适合快速脚本或 demo，但会包含所有应用模块。

生产构建推荐使用 On-Demand；快速试用可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

此模块只暴露 Kakao Map 官方 URL Scheme 文档列出的动作：`open`、`look`、`place`、`search`、`route`、`roadView`，以及文档中的趋势排行 `open` URL。

传入 `scheme: 'mobileWeb'` 可以生成 Kakao 文档中的 MobileWeb 等价 URL。Kakao 文档中趋势排行的 MobileWeb URL 使用 HTTPS，其他 MobileWeb 示例使用 HTTP。

### 打开 Kakao Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Kakao Map
  </VPLink>
</div>

### 打开页面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open({
  page: 'placeSearch',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openPlaceSearchParams)" target="_self">
    打开地点搜索
  </VPLink>
</div>

### 打开图层

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open({
  layer: 'skyview',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openSkyviewParams)" target="_self">
    打开 Skyview
  </VPLink>
</div>

### 趋势排行

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'trendRanking' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}trendRanking()
```

<div class="flex justify-center">
  <VPLink :href="trendRanking()" target="_self">
    打开趋势排行
  </VPLink>
</div>

### 查看坐标

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'look' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}look({
  p: '37.3952969470752,127.110449292622',
})
```

<div class="flex justify-center">
  <VPLink :href="look(lookParams)" target="_self">
    打开坐标
  </VPLink>
</div>

### 打开地点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'place' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}place({
  id: '18577297',
})
```

<div class="flex justify-center">
  <VPLink :href="place(placeParams)" target="_self">
    打开地点
  </VPLink>
</div>

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}search({
  q: '맛집',
  p: '37.3952,127.11044',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    按坐标中心搜索
  </VPLink>
</div>

### 路线

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
    打开驾车路线
  </VPLink>
</div>

### 带途经点的路线

Kakao 文档中的途经点参数是 `vp`、`vp2`、`vp3`、`vp4` 和 `vp5`。公共交通路线不支持途经点。

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
    打开步行路线
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
    打开 Road View
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
    打开 MobileWeb 坐标
  </VPLink>
</div>

## 官方文档

- [Kakao Map URL Scheme](https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/)
