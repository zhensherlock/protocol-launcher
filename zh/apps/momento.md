---
url: /protocol-launcher/zh/apps/momento.md
---

# Momento

[Momento](https://momentoapp.com/) 是一款日记和生活记录应用。**Protocol Launcher** 可以生成用于启动 Momento 和打开其官方 Add Moment 快捷入口的链接。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

## URL 方法

下面的 helpers 与 Momento 官方 [URL Scheme](https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme) 文档保持一致。这里只暴露官方列出的启动、Add Moment、Add Photos、Add People、Add Places、Add Tags、Add Moment and Change Date 和 Camera URL。官方 URL 示例在 Add Moment、Add Places 和 Camera URL 上使用 `text` 与重复的 `tag` query 参数；Camera 还文档化了 `front=true`。

Momento 官方也说明，当同时安装 Momento Classic 时，可以把 `momento://` 替换为 `momento-3://` 来定位 Momento 3。给任意 helper 传入 `scheme: 'momento-3'` 即可生成这种形式。

### 打开

启动 Momento。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}open()
```

明确启动 Momento 3。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}open({
  scheme: 'momento-3',
})
```

### Add Moment

打开 Add Moment。你可以传入 Momento 官方示例中展示的 `text` 和重复 `tag` 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newMoment' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newMoment({
  text: 'Just Arrived!',
  tag: ['Holiday', 'Summer'],
})
```

### Add Photos

打开 Add Photos。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newPhotos' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newPhotos()
```

### Add People

打开 Add People。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newPeople' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newPeople()
```

### Add Places

打开 Add Places。Momento 官方示例也在这个 URL 上展示了 `text` 和重复的 `tag` 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newPlaces' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newPlaces({
  text: 'Just Arrived!',
  tag: ['Holiday', 'Summer'],
})
```

### Add Tags

打开 Add Tags。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTags' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newTags()
```

### Add Moment And Change Date

打开 Add Moment and Change Date。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newDate' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newDate()
```

### Camera

打开 Camera。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newCamera' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newCamera()
```

使用文档中的 `front=true` 参数打开前置摄像头。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newCamera' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newCamera({
  front: true,
})
```

Momento 官方示例也在 Camera URL 上展示了 `text` 和重复的 `tag` 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newCamera' : 'momento' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'momento.'}}newCamera({
  text: 'Just Arrived!',
  tag: ['Holiday', 'Summer'],
})
```

## 官方文档

* [Momento URL Scheme](https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme)
