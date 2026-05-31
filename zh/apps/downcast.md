---
url: /protocol-launcher/zh/apps/downcast.md
---

# Downcast

[Downcast](https://www.downcastapp.com/) 是一款适用于 iOS、Mac、Apple Watch 和 CarPlay 的播客应用。**Protocol Launcher** 允许您生成官方 URL scheme 链接，在 Downcast 中导入播客 feed 订阅。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 说明

Downcast 官方知识库文档列出了 `itpc://`、`podcast://`、`feed://` 和 `downcast://` 作为受支持的播客 feed URL scheme。打开这些 URL 时，Downcast 会尝试为该 URL 指向的播客导入订阅。

`subscribe()` 需要传入一个已经使用上述官方 scheme 的完整 URL。`subscribeFeedUrl()` 返回官方给 Chrome RSS Subscription Extension 的原样模板：`downcast://feed-url=%s`。

### Downcast Scheme

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'downcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'downcast.'}}open()
```

### 使用 Feed Scheme 订阅

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribe' : 'downcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'downcast.'}}subscribe({
  url: 'itpc://example.com/podcast/rss',
})
```

### Chrome RSS Extension 模板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribeFeedUrl' : 'downcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'downcast.'}}subscribeFeedUrl()
```

```ts
subscribeFeedUrl()
// => 'downcast://feed-url=%s'
```

## 官方文档

* [Downcast URL Schemes & Opening Feed URLs](https://support.downcast.fm/article/efmhyEOyOj-url-schemes-opening-feed-ur-ls-mac)
