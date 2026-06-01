---
url: /protocol-launcher/zh/apps/moovit.md
---

# Moovit

[Moovit](https://moovitapp.com/) 是一款公共交通应用。**Protocol Launcher** 允许你生成 Moovit URL Scheme 链接。

## 用法

这个库有两种使用方式：

* On-Demand 从子路径导入，支持 tree-shaking，打包体积更小。
* Full Import 从根包导入，适合快速脚本或 demo，但会包含所有应用模块。

生产构建推荐使用 On-Demand；快速试用可以使用 Full Import。

## 说明

此模块只暴露 Moovit 官方 deeplinking 文档列出的动作：`nearby`、`directions`、iOS/Android fallback 链接，以及文档中的下载链接。

payload 使用 Moovit 文档中的参数名，包括 `partner_id`、`dest_lat`、`dest_lon`、`orig_lat`、`orig_lon` 和 `auto_run`。`date` 应使用 ISO-8601 日期时间字符串。

### 附近公交

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'nearby' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}nearby({
  lat: 40.758896,
  lon: -73.98513,
  partner_id: 'YOUR_APP_NAME',
})
```

### 路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}directions({
  dest_lat: 40.758896,
  dest_lon: -73.98513,
  dest_name: 'Times Square',
  partner_id: 'YOUR_APP_NAME',
})
```

### 带起点和时间的路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}directions({
  dest_lat: 40.758896,
  dest_lon: -73.98513,
  dest_name: 'Times Square',
  orig_lat: 40.735845,
  orig_lon: -73.990512,
  orig_name: 'Union Square',
  auto_run: true,
  date: '2019-04-01T18:30:00+02:00',
  partner_id: 'YOUR_APP_NAME',
})
```

### iOS Fallback 链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'iosFallbackLink' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}iosFallbackLink({
  c: 'YOUR_APP_NAME',
  af_dp: 'moovit://nearby?lat=40.758896&lon=-73.98513&partner_id=YOUR_APP_NAME',
})
```

### Android Fallback 链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'androidFallbackLink' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}androidFallbackLink({
  c: 'YOUR_APP_NAME',
  af_dp: 'moovit://nearby?lat=40.758896&lon=-73.98513&partner_id=YOUR_APP_NAME',
})
```

### 下载链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadLink' : 'moovit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'moovit.'}}downloadLink({
  c: 'YOUR_APP_NAME',
})
```

## 官方文档

* [Moovit Deeplinking](https://moovit.com/developers/deeplinking/)
