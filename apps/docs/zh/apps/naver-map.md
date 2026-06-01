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

[NAVER Map](https://map.naver.com/) 是 NAVER 推出的地图和导航应用。**Protocol Launcher** 允许你生成 NAVER Map URL Scheme 链接。

## 用法

这个库有两种使用方式：

- On-Demand 从子路径导入，支持 tree-shaking，打包体积更小。
- Full Import 从根包导入，适合快速脚本或 demo，但会包含所有应用模块。

生产构建推荐使用 On-Demand；快速试用可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

NAVER 的 URL Scheme 要求传入 `appname` 参数，用来标识发起调用的应用或网页。此模块只为官方文档列出的 `nmap://` action path 暴露 helper：`map`、`place`、`search`、`search/bus`、`route/public`、`route/car`、`route/walk`、`route/bicycle` 和 `navigation`。

### 打开 NAVER Map

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
    打开 NAVER Map
  </VPLink>
</div>

### 标记坐标

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
    标记坐标
  </VPLink>
</div>

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}search({
  query: '카페',
  appname: 'com.example.myapp',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    搜索
  </VPLink>
</div>

### 公交搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchBus' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}searchBus({
  query: 'M4101',
  appname: 'com.example.myapp',
})
```

<div class="flex justify-center">
  <VPLink :href="searchBus(searchBusParams)" target="_self">
    搜索公交
  </VPLink>
</div>

### 路线

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
    打开驾车路线
  </VPLink>
</div>

### 导航

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigation' : 'naverMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'naverMap.'}}navigation({
  appname: 'com.example.myapp',
})
```

<div class="flex justify-center">
  <VPLink :href="navigation(navigationParams)" target="_self">
    打开导航
  </VPLink>
</div>

## 官方文档

- [NAVER Map URL Scheme](https://guide.ncloud-docs.com/docs/maps-url-scheme)
