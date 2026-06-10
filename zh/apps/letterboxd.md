---
url: /protocol-launcher/zh/apps/letterboxd.md
---

# Letterboxd

[Letterboxd](https://letterboxd.com/) 是一款用于记录、评价和分享电影的应用。**Protocol Launcher** 可以生成 Letterboxd URL scheme 链接。

## 使用

有两种方式可以使用此库：

* 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
* 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

## URL 方法

Letterboxd 官方 iOS x-callback-url 文档只列出了三个动作：`search`、`addToWatchlist` 和 `log`。本模块只暴露这些官方记录的动作，以及可选的 `x-success`、`x-cancel`、`x-error` 回调参数。

### 搜索

在 Letterboxd 中搜索 film、member、list、review、contributor，或所有结果类型。官方记录的 `type` 值为 `film`、`member`、`list`、`review`、`contributor` 和 `all`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'letterboxd' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'letterboxd.'}}search({
  query: 'Blade Runner',
  type: 'film',
})
```

### 添加到 Watchlist

打开 Letterboxd，并使用电影名称作为搜索词来添加到用户的 watchlist。Letterboxd 会要求用户手动确认正确的结果。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addToWatchlist' : 'letterboxd' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'letterboxd.'}}addToWatchlist({
  name: 'Heat',
})
```

### 记录

为电影添加新的 log entry、diary entry 或 review。Letterboxd 会把 `name` 用作搜索词，并要求用户手动确认正确的结果。Boolean 值会按官方文档序列化为 `true` 或 `false`。

官方记录的字段为 `name`、`date`、`rewatch`、`tags`、`review`、`containsSpoilers`、`rating`、`like`，以及已废弃的 `shareOnFacebook`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'log' : 'letterboxd' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'letterboxd.'}}log({
  name: 'Heat',
  date: '2026-06-10',
  rewatch: true,
  tags: 'crime,friendship',
  review: '<strong>Great</strong>',
  containsSpoilers: false,
  rating: 4.5,
  like: true,
})
```

## 生成的 URL

```ts
search({ query: 'Blade Runner', type: 'film' })
// => 'letterboxd://x-callback-url/search?query=Blade%20Runner&type=film'

addToWatchlist({ name: 'Heat' })
// => 'letterboxd://x-callback-url/addToWatchlist?name=Heat'

log({
  name: 'Heat',
  date: '2026-06-10',
  rewatch: true,
  tags: 'crime,friendship',
  review: '<strong>Great</strong>',
  containsSpoilers: false,
  rating: 4.5,
  like: true,
})
// => 'letterboxd://x-callback-url/log?name=Heat&date=2026-06-10&rewatch=true&tags=crime%2Cfriendship&review=%3Cstrong%3EGreat%3C%2Fstrong%3E&containsSpoilers=false&rating=4.5&like=true'
```

## 官方文档

* [Letterboxd iOS X-Callback-URL Support](https://github.com/Letterboxd/letterboxd-ios-x-callback-url)
