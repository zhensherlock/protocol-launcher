---
url: /protocol-launcher/zh/apps/pincase.md
---

# Pincase

[Pincase](https://pincaseapp.com/) 是一款 iOS Pinboard.in 客户端。**Protocol Launcher** 允许您生成 Pincase x-callback-url 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 注意事项

Pincase 官方 API 页面只记录了以下 URL scheme action：

* `pincaseapp://x-callback-url/add`
* `pincaseapp://x-callback-url/open`

对于 `add`，官方参数表列出了 `url`、`title`、`private`、`toread`、`noui`、`x-success`、`x-error` 和 `x-cancel`。同一个官方页面的添加书签示例使用了 `later=yes`；`addBookmark()` 只会序列化您传入的 `toread` 或 `later` key，不会在二者之间推断或转换。

对于 `open`，Pincase 记录了 `mode`、`tag` 和 `username`。官方也说明 `x-source`、`x-success`、`x-error`、`x-cancel` 对此 action 不生效，因此 open 相关 helper 不接受 callback 选项。官方 mode 值为 `menu`、`personal_unread`、`personal_recent`、`personal_tag`、`public_popular`、`public_recent`、`public_japanese`、`public_wikipedia`、`public_fandom`、`public_favorite_stream`、`public_tag` 和 `public_username`。官方参数行说明 `tag` 与 `mode=personal_tag` 或 `mode=public_tag` 一起使用；`openTag()` 也只限定为这两个值。

### 添加书签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}addBookmark({
  url: 'http://pincaseapp.com/',
  title: 'Pincase - A simple, elegant and powerful Pinboard.in client for iOS',
  noui: 'yes',
  later: 'yes',
})
```

### 添加带回调的书签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}addBookmark({
  url: 'https://www.example.com/article?ref=url scheme',
  title: 'Example Article',
  private: 'no',
  toread: 'no',
  noui: 'no',
  xSuccess: 'myapp://success',
  xError: 'myapp://error',
  xCancel: 'myapp://cancel',
})
```

### 打开公开标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}open({
  mode: 'public_tag',
  tag: 'iOS',
})
```

### 打开未读

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUnread' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}openUnread()
```

### 打开最近书签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRecent' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}openRecent()
```

### 打开标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}openTag({
  mode: 'personal_tag',
  tag: 'reading list',
})
```

## 生成的 URL

```ts
addBookmark({
  url: 'http://pincaseapp.com/',
  title: 'Pincase - A simple, elegant and powerful Pinboard.in client for iOS',
  noui: 'yes',
  later: 'yes',
})
// => 'pincaseapp://x-callback-url/add?url=http%3A%2F%2Fpincaseapp.com%2F&title=Pincase%20-%20A%20simple%2C%20elegant%20and%20powerful%20Pinboard.in%20client%20for%20iOS&noui=yes&later=yes'

addBookmark({
  url: 'https://www.example.com/article?ref=url scheme',
  title: 'Example Article',
  private: 'no',
  toread: 'no',
  noui: 'no',
  xSuccess: 'myapp://success',
  xError: 'myapp://error',
  xCancel: 'myapp://cancel',
})
// => 'pincaseapp://x-callback-url/add?url=https%3A%2F%2Fwww.example.com%2Farticle%3Fref%3Durl%20scheme&title=Example%20Article&private=no&toread=no&noui=no&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror&x-cancel=myapp%3A%2F%2Fcancel'

open({ mode: 'public_tag', tag: 'iOS' })
// => 'pincaseapp://x-callback-url/open?mode=public_tag&tag=iOS'

openUnread()
// => 'pincaseapp://x-callback-url/open?mode=personal_unread'

openRecent()
// => 'pincaseapp://x-callback-url/open?mode=personal_recent'

openTag({ mode: 'personal_tag', tag: 'reading list' })
// => 'pincaseapp://x-callback-url/open?mode=personal_tag&tag=reading%20list'
```

## 官方文档

* [Pincase URL Schemes](https://pincaseapp.com/api.html)
