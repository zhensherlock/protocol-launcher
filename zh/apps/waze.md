---
url: /protocol-launcher/zh/apps/waze.md
---

# Waze

[Waze](https://www.waze.com/) 是一款导航应用和实时地图服务。**Protocol Launcher** 允许你生成 Waze Deep Links，用来打开 Waze、搜索地点或地址、显示地图位置、导航到坐标，以及导航到 Home 或 Work 收藏地点。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 注意事项

Waze 文档将 `https://waze.com/ul` 作为 Deep Links 的基础 URL。只有在确定用户已安装 Waze 应用时才应使用 `waze://` URL scheme；否则，Waze 说明点击链接不会发生任何事情。这些 Deep Link 辅助函数默认使用 HTTPS，并且仅在 Waze 文档说明可用原生 scheme 替代基础 URL 的位置接受 `protocol: 'waze'`。

`utmSource` 会映射到 Waze 文档中的 `utm_source` 参数。

### 打开 Waze

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}open()
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}search({
  q: '66 Acacia Avenue',
})
```

### 导航到位置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateToLocation' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}navigateToLocation({
  ll: '40.75889500,-73.98513100',
  zoom: 17,
})
```

### 导航到收藏

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateToFavorite' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}navigateToFavorite({
  favorite: 'work',
})
```

### 在地图上显示

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOnMap' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}showOnMap({
  z: 8,
})
```

### 在地图上显示位置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOnMap' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}showOnMap({
  ll: '45.6906304,-120.810983',
  z: 10,
})
```

### 搜索并导航

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchAndNavigate' : 'waze' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waze.'}}searchAndNavigate({
  q: '66 Acacia Avenue',
  ll: '45.6906304,-120.810983',
})
```

## 官方文档

* [How to use Waze Deep Links](https://developers.google.com/waze/deeplinks)
