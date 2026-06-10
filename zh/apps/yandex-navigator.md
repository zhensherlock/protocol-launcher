---
url: /protocol-launcher/zh/apps/yandex-navigator.md
---

# Yandex Navigator

[Yandex Navigator](https://yandex.com/dev/yandex-apps-launch/navigator/) 是 Yandex 的导航应用。**Protocol Launcher** 允许你生成官方 `yandexnavi://` 链接，用于打开 Yandex Navigator、规划路线、搜索地图以及显示点位。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 注意事项

此模块只封装 Yandex Navigator 官方文档列出的动作和参数：`build_route_on_map`、`map_search` 和 `show_point_on_map`。

Yandex 文档将路线坐标拆成独立的纬度和经度参数。途经点会序列化为 `lat_via_0`、`lon_via_0`，再到 `lat_via_1`、`lon_via_1`，以此类推。

Yandex 说明，向 Navigator 发送坐标、搜索查询和其他数据需要访问密钥。签名 URL 使用官方记录的 `client` 和 `signature` 参数；这些 helper 接受这两个可选字段，但 RSA 签名需要你在 Protocol Launcher 外部用 Yandex 访问密钥生成。

### 打开 Navigator

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}open()
```

### 规划路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'buildRoute' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}buildRoute({
  lat_from: '55.74',
  lon_from: '37.60',
  lat_to: '55.76',
  lon_to: '37.64',
})
```

### 从当前位置规划路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'buildRoute' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}buildRoute({
  lat_to: '55.70',
  lon_to: '37.64',
})
```

### 规划带途经点的路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'buildRoute' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}buildRoute({
  lat_from: '55.75',
  lon_from: '37.58',
  lat_to: '55.75',
  lon_to: '37.64',
  via: [{ lat: '55.75', lon: '37.62' }],
})
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}search({
  text: 'заправка',
})
```

### 显示点位

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPoint' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}showPoint({
  lat: 55.77,
  lon: 37.44,
  zoom: 12,
  'no-balloon': 0,
  desc: 'кафе с wi-fi',
})
```

### 签名 URL 参数

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPoint' : 'yandexNavigator' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yandexNavigator.'}}showPoint({
  lat: 55.75,
  lon: 37.64,
  zoom: 14,
  client: '007',
  signature: 'REPLACE_WITH_SIGNATURE',
})
```

## 官方文档

* [Launch Yandex.Navigator](https://yandex.com/dev/yandex-apps-launch/navigator/)
* [Yandex Navigator URL format](https://yandex.ru/dev/navigator/doc/ru/concepts/navigator-url-params)
* [Yandex Navigator access-key signature](https://yandex.ru/dev/navigator/doc/ru/concepts/navigator-commercial-use-signature)
