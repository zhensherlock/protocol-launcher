---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { directions, displayMap, open, openUrl, search } from 'protocol-launcher/google-maps';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  clearViewsParams,
  currentLocationDirectionsParams,
  desktopUrlParams,
  displayMapParams,
  searchParams,
  searchWithViewsParams,
  streetViewParams,
  transitDirectionsParams,
  walkingDirectionsParams,
} from '../../.vitepress/constants/google-maps';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/google-maps' : 'protocol-launcher');
</script>

# Google Maps

[Google Maps](https://www.google.com/maps) 是 Google 开发的网络地图服务。它提供地图、搜索、街景和路线功能。**Protocol Launcher** 允许你生成深度链接来打开 Google Maps、显示地图、搜索地点、获取路线，并打开受支持的 Google Maps 桌面版 URL。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 注意事项

此模块只封装 Google 官方文档中明确列出的参数。官方页面提到了 `comgooglemaps-x-callback://`，但没有给出 x-callback 动作或 payload 参数，因此这里不暴露 x-callback 辅助函数。

### 打开 Google Maps

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Google Maps
  </VPLink>
</div>

### 显示地图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'displayMap' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}displayMap({
  center: '40.765819,-73.975866',
  zoom: 14,
  views: 'traffic',
})
```

<div class="flex justify-center">
  <VPLink :href="displayMap(displayMapParams)" target="_self">
    显示交通地图
  </VPLink>
</div>

### 显示街景

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'displayMap' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}displayMap({
  center: '46.414382,10.013988',
  mapmode: 'streetview',
})
```

<div class="flex justify-center">
  <VPLink :href="displayMap(streetViewParams)" target="_self">
    显示街景
  </VPLink>
</div>

### 清除图层

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'displayMap' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}displayMap({
  views: '',
})
```

<div class="flex justify-center">
  <VPLink :href="displayMap(clearViewsParams)" target="_self">
    清除图层
  </VPLink>
</div>

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}search({
  q: 'Pizza',
  center: '37.759748,-122.427135',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    搜索 Pizza
  </VPLink>
</div>

### 带图层搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}search({
  q: 'Steamers Lane Santa Cruz, CA',
  center: '37.782652,-122.410126',
  views: ['satellite', 'traffic'],
  zoom: 15,
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchWithViewsParams)" target="_self">
    带图层搜索
  </VPLink>
</div>

### 显示路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}directions({
  saddr: 'Google Inc, 8th Avenue, New York, NY',
  daddr: 'John F. Kennedy International Airport, Van Wyck Expressway, Jamaica, New York',
  directionsmode: 'transit',
})
```

<div class="flex justify-center">
  <VPLink :href="directions(transitDirectionsParams)" target="_self">
    显示公共交通路线
  </VPLink>
</div>

### 从当前位置出发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}directions({
  saddr: '',
  daddr: 'John F. Kennedy International Airport',
  directionsmode: 'driving',
})
```

<div class="flex justify-center">
  <VPLink :href="directions(currentLocationDirectionsParams)" target="_self">
    从当前位置出发
  </VPLink>
</div>

### 步行路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}directions({
  saddr: '2025 Garcia Ave, Mountain View, CA, USA',
  daddr: 'Google, 1600 Amphitheatre Parkway, Mountain View, CA, United States',
  center: '37.423725,-122.0877',
  directionsmode: 'walking',
  zoom: 17,
})
```

<div class="flex justify-center">
  <VPLink :href="directions(walkingDirectionsParams)" target="_self">
    显示步行路线
  </VPLink>
</div>

### 打开桌面版 URL

`openUrl` 只接受 Google 官方 URL scheme 正则覆盖的 Google Maps 桌面版 URL 格式：`maps.google.{TLD}/`、`google.{TLD}/maps/` 或 `www.google.{TLD}/maps/`、以及 `goo.gl/maps/`，并允许省略或使用 `http://`、`https://` 前缀。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'googleMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'googleMaps.'}}openUrl({
  url: 'https://www.google.com/maps/preview/@42.585444,13.007813,6z',
})
```

<div class="flex justify-center">
  <VPLink :href="openUrl(desktopUrlParams)" target="_self">
    打开 Google Maps 桌面版 URL
  </VPLink>
</div>

## 官方文档

- [Google Maps URL Scheme for iOS](https://developers.google.com/maps/documentation/urls/ios-urlscheme)
