---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { geo, importFile, navigate, open, recordTrack, saveMarker, search, showPlace } from 'protocol-launcher/guru-maps';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  geoParams,
  importFileParams,
  navigateParams,
  openWithBackUrlParams,
  recordTrackParams,
  saveMarkerParams,
  searchParams,
  showPlaceParams,
} from '../../.vitepress/constants/guru-maps';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/guru-maps' : 'protocol-launcher');
</script>

# Guru Maps

[Guru Maps](https://gurumaps.app/) 是一款离线地图与导航应用。**Protocol Launcher** 允许你生成 Guru Maps URL Scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 注意事项

此模块只封装 Guru Maps 手册中记录的 `guru:` 与 `guru://` API。`geo:` helper 刻意保持很窄：官方页面只展示了用于显示位置的 `geo:lat,lon`，并说明它不支持 `back_url`。

`backUrl` 会映射到 Guru Maps 文档中的 `back_url` 参数。

### 打开 Guru Maps

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Guru Maps
  </VPLink>
</div>

### 使用返回 URL 打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}open({
  backUrl: 'https://gurumaps.app',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithBackUrlParams)" target="_self">
    使用返回 URL 打开
  </VPLink>
</div>

### 导入文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importFile' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}importFile({
  url: 'https://gurumaps.app/example/feature_collection.geojson',
})
```

<div class="flex justify-center">
  <VPLink :href="importFile(importFileParams)" target="_self">
    导入 GeoJSON 文件
  </VPLink>
</div>

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}search({
  q: 'Wybrzeże Kościuszkowskie 20 Warszawa',
  coord: '52.2297,21.0122',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    在 Guru Maps 中搜索
  </VPLink>
</div>

### 导航

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigate' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}navigate({
  start: '52.2297,21.0122',
  finish: '52.2397,21.0222',
  via: '52.2347,21.0172',
  mode: 'bicycle',
  startNavigation: true,
})
```

<div class="flex justify-center">
  <VPLink :href="navigate(navigateParams)" target="_self">
    构建路线
  </VPLink>
</div>

### 记录轨迹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'recordTrack' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}recordTrack({
  action: 'start',
})
```

<div class="flex justify-center">
  <VPLink :href="recordTrack(recordTrackParams)" target="_self">
    开始记录轨迹
  </VPLink>
</div>

### 保存标记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'saveMarker' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}saveMarker({
  name: 'MyMarker',
  coord: '52.2297,21.0122',
})
```

<div class="flex justify-center">
  <VPLink :href="saveMarker(saveMarkerParams)" target="_self">
    保存标记
  </VPLink>
</div>

### 显示地点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPlace' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}showPlace({
  coord: '52.2297,21.0122',
  zoom: 17,
})
```

<div class="flex justify-center">
  <VPLink :href="showPlace(showPlaceParams)" target="_self">
    显示地点
  </VPLink>
</div>

### Geo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'geo' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}geo({
  coord: '52.2297,21.0122',
})
```

<div class="flex justify-center">
  <VPLink :href="geo(geoParams)" target="_self">
    使用 Geo Scheme 显示
  </VPLink>
</div>

## 官方文档

- [API for Integration with Guru Maps](https://gurumaps.app/docs/manual/guru-api)
