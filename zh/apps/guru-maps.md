---
url: /protocol-launcher/zh/apps/guru-maps.md
---

# Guru Maps

[Guru Maps](https://gurumaps.app/) 是一款离线地图与导航应用。**Protocol Launcher** 允许你生成 Guru Maps URL Scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 注意事项

此模块只封装 Guru Maps 手册中记录的 `guru:` 与 `guru://` API。`geo:` helper 刻意保持很窄：官方页面只展示了用于显示位置的 `geo:lat,lon`，并说明它不支持 `back_url`。

`backUrl` 会映射到 Guru Maps 文档中的 `back_url` 参数。

### 打开 Guru Maps

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}open()
```

### 使用返回 URL 打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}open({
  backUrl: 'https://gurumaps.app',
})
```

### 导入文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importFile' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}importFile({
  url: 'https://gurumaps.app/example/feature_collection.geojson',
})
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}search({
  q: 'Wybrzeże Kościuszkowskie 20 Warszawa',
  coord: '52.2297,21.0122',
})
```

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

### 记录轨迹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'recordTrack' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}recordTrack({
  action: 'start',
})
```

### 保存标记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'saveMarker' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}saveMarker({
  name: 'MyMarker',
  coord: '52.2297,21.0122',
})
```

### 显示地点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPlace' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}showPlace({
  coord: '52.2297,21.0122',
  zoom: 17,
})
```

### Geo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'geo' : 'guruMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'guruMaps.'}}geo({
  coord: '52.2297,21.0122',
})
```

## 官方文档

* [API for Integration with Guru Maps](https://gurumaps.app/docs/manual/guru-api)
