---
url: /protocol-launcher/zh/apps/yandex-maps.md
---

# Yandex Maps

[Yandex Maps](https://yandex.com/maps/) 是 Yandex 的地图和导航应用。**Protocol Launcher** 允许你生成 Yandex Maps URL scheme 链接和网页链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 注意事项

此模块只封装 Yandex 官方文档列出的 `yandexmaps://` 移动 App 链接、Yandex Maps 支持的 Android `geo:` 示例能力，以及 `https://yandex.ru/maps/` 网页链接。

Yandex 文档将 `ll`、`pt`、“这里是什么？”和全景图坐标写作 `longitude,latitude`。路线 `rtext` 另行记录为 `latitude,longitude~latitude,longitude`，Android `geo:` 示例使用 `latitude,longitude`。移动 App 路线类型仅限 `auto`、`mt` 和 `pd`；网页路线 helper 还支持 Web 文档中的 `bc` 自行车路线类型。

## 移动 App

### 打开地图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMap' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}openMap({
  ll: '37.619902,55.753716',
  z: 11,
  l: ['map', 'trf'],
})
```

### 添加标记点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPoint' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}showPoint({
  pt: '30.335429,59.944869',
  z: 18,
  l: 'map',
})
```

### 查找对象

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}search({
  ll: '30.310182,59.951059',
  z: 16,
  text: 'cafe with wi-fi',
})
```

### 打开组织卡片

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOrganizationCard' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}openOrganizationCard({
  oid: 1184371713,
})
```

### 显示“这里是什么？”

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showWhatsHere' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}showWhatsHere({
  point: '37.444075,55.776788',
  zoom: 17,
})
```

### 规划路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}route({
  rtext: '59.967870,30.242658~59.898495,30.299559',
  rtt: 'mt',
})
```

### 显示全景图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'panorama' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}panorama({
  point: '37.444075,55.776788',
  direction: '228.970000,6.060547',
  span: '130.000000,71.919192',
})
```

### Android Geo Scheme

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'androidGeo' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}androidGeo({
  coordinates: '47.6,-122.3',
  z: 11,
})
```

## Web

### 打开网页地图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webMap' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webMap({
  ll: '30.310182,59.951059',
  z: 12,
  l: 'map',
})
```

### 添加网页标记点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webShowPoint' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webShowPoint({
  pt: '30.335429,59.944869',
  z: 18,
  l: 'map',
})
```

### 添加多个网页标记点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webShowPoints' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webShowPoints({
  ll: '30.310182,59.951059',
  pt: '30.335429,59.944869~30.34127,59.89173',
  z: 12,
  l: 'map',
})
```

### 查找网页对象

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webSearch' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webSearch({
  ll: '30.310182,59.951059',
  z: 16,
  text: 'cafe with wi-fi',
})
```

### 打开网页组织卡片

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webOpenOrganizationCard' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webOpenOrganizationCard({
  oid: 1184371713,
})
```

### 显示网页“这里是什么？”

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webShowWhatsHere' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webShowWhatsHere({
  point: '37.444075,55.776788',
  zoom: 17,
})
```

### 规划网页路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webRoute' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webRoute({
  rtext: '59.967870,30.242658~59.898495,30.299559',
  rtt: 'bc',
})
```

### 显示网页全景图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webPanorama' : 'yandexMaps' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexMaps.'}}webPanorama({
  point: '37.444075,55.776788',
  direction: '228.970000,6.060547',
  span: '130.000000,71.919192',
})
```

## 官方文档

* [Launch Yandex Maps by URL](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/)
* [Launch Yandex Maps Android app](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-android-app)
* [Launch Yandex Maps iOS app](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app)
* [Launch web version of Yandex Maps](https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web)
