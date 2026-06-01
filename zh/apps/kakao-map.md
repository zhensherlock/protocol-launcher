---
url: /protocol-launcher/zh/apps/kakao-map.md
---

# Kakao Map

[Kakao Map](https://map.kakao.com/) 是 Kakao 的地图和导航应用。**Protocol Launcher** 允许你生成 Kakao Map URL Scheme 链接。

## 用法

这个库有两种使用方式：

* On-Demand 从子路径导入，支持 tree-shaking，打包体积更小。
* Full Import 从根包导入，适合快速脚本或 demo，但会包含所有应用模块。

生产构建推荐使用 On-Demand；快速试用可以使用 Full Import。

## 说明

此模块只暴露 Kakao Map 官方 URL Scheme 文档列出的动作：`open`、`look`、`place`、`search`、`route`、`roadView`，以及文档中的趋势排行 `open` URL。

传入 `scheme: 'mobileWeb'` 可以生成 Kakao 文档中的 MobileWeb 等价 URL。Kakao 文档中趋势排行的 MobileWeb URL 使用 HTTPS，其他 MobileWeb 示例使用 HTTP。

### 打开 Kakao Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open()
```

### 打开页面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open({
  page: 'placeSearch',
})
```

### 打开图层

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}open({
  layer: 'skyview',
})
```

### 趋势排行

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'trendRanking' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}trendRanking()
```

### 查看坐标

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'look' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}look({
  p: '37.3952969470752,127.110449292622',
})
```

### 打开地点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'place' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}place({
  id: '18577297',
})
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}search({
  q: '맛집',
  p: '37.3952,127.11044',
})
```

### 路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}route({
  sp: '37.39529,127.11044',
  ep: '37.49795,127.02763',
  by: 'car',
})
```

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

### Road View

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'roadView' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}roadView({
  p: '37.39529,127.11044',
})
```

### MobileWeb URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'look' : 'kakaoMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kakaoMap.'}}look({
  p: '37.3952969470752,127.110449292622',
  scheme: 'mobileWeb',
})
```

## 官方文档

* [Kakao Map URL Scheme](https://apis.map.kakao.com/ios_v2/docs/getting-started/urlscheme/)
