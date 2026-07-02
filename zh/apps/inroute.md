---
url: /protocol-launcher/zh/apps/inroute.md
---

# inRoute

[inRoute](https://inroute.com/) 是一款路线规划与导航应用。**Protocol Launcher** 可以生成 inRoute URL scheme 链接。

## 使用方式

这个库有两种使用方式：

* On-Demand 从子路径导入，支持 tree-shaking，能让产物更小。
* Full Import 从根包导入，适合快速脚本或演示，但会包含全部 app 模块。

生产构建建议选择 On-Demand；快速脚本或 demo 可以选择 Full Import。

## URL Methods

此模块对齐 inRoute 官方 URL Scheme 页：通过 `inroute://coordinates` 导入坐标、通过 `inroute://searches` 导入搜索位置、通过 `inroute://view` 查看地图 pin、通过 `inroute://route` 导航到 pin、使用 `action=opt` 优化 waypoint 顺序，以及通用 `back_url` 返回参数。

官方页面没有记录裸打开 App 的命令，也没有记录更多路线设置，所以本模块不会暴露这些 helper。

### Coordinates

把基于坐标的路线位置发送到 inRoute。每个位置会序列化成官方记录的重复 `loc={name}/{latitude}/{longitude}` 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'coordinates' : 'inRoute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'inRoute.'}}coordinates({
  optimize: true,
  locations: [
    { name: 'Lazy K’s', latitude: 47.648434, longitude: -121.914307 },
    { name: 'Greek Food', latitude: 47.739555, longitude: -121.985924 },
  ],
})
```

### Search

把基于搜索词的路线位置发送到 inRoute。helper 名为 `search`，但会生成官方记录的 `inroute://searches` 命令。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'inRoute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'inRoute.'}}search({
  optimize: true,
  locations: [
    { name: 'Lazy K’s', search: 'Lazy K’, Carnation WA 98014' },
    { name: 'Greek Food', search: '15410 Main St NE, Duvall WA 98019' },
  ],
})
```

### View

查看指定坐标的地图 pin。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'inRoute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'inRoute.'}}view({
  geo: '48.8582,2.2946',
})
```

### Route

导航到指定坐标的地图 pin。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'route' : 'inRoute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'inRoute.'}}route({
  geo: '48.8582,2.2946',
})
```

### Return to Caller

任意 inRoute URL 都可以携带官方记录的 `back_url` 参数，在本模块中对应 `backUrl`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'inRoute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'inRoute.'}}view({
  geo: '48.8582,2.2946',
  backUrl: 'myapp://',
})
```

## 生成的 URL

```ts
coordinates({
  optimize: true,
  locations: [
    { name: 'Lazy K’s', latitude: 47.648434, longitude: -121.914307 },
    { name: 'Greek Food', latitude: 47.739555, longitude: -121.985924 },
  ],
})
// => 'inroute://coordinates?action=opt&loc=Lazy%20K’s/47.648434/-121.914307&loc=Greek%20Food/47.739555/-121.985924'

search({
  optimize: true,
  locations: [
    { name: 'Lazy K’s', search: 'Lazy K’, Carnation WA 98014' },
    { name: 'Greek Food', search: '15410 Main St NE, Duvall WA 98019' },
  ],
})
// => 'inroute://searches?action=opt&loc=Lazy%20K’s/Lazy%20K’,%20Carnation%20WA%2098014&loc=Greek%20Food/15410%20Main%20St%20NE,%20Duvall%20WA%2098019'

view({ geo: '48.8582,2.2946' })
// => 'inroute://view?geo=48.8582,2.2946'

route({ geo: '48.8582,2.2946' })
// => 'inroute://route?geo=48.8582,2.2946'

view({ geo: '48.8582,2.2946', backUrl: 'myapp://' })
// => 'inroute://view?geo=48.8582,2.2946&back_url=myapp%3A%2F%2F'
```

## 官方文档

* [inRoute URL Scheme](https://inroute.com/url-scheme/)
