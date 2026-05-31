---
url: /protocol-launcher/zh/apps/forscore.md
---

# forScore

[forScore](https://forscore.co/) 是一款适用于 iPad、iPhone 和 Mac 的乐谱阅读器。**Protocol Launcher** 允许你生成 forScore URL scheme 链接。

## 使用

这个库有两种使用方式：

* 从子路径按需导入，支持 Tree Shaking 并保持较小的包体积。
* 从根包完整导入更适合快速脚本或演示，但会包含所有应用模块。

生产构建建议选择按需导入；完整导入适合快速脚本或演示。

### 打开

forScore 官方文档列出了 `forscore://open`，并要求至少提供 `path`、`score`、`setlist` 或 `page` 中的一个。`bookmark` 是可选值，并且只在引用了乐谱时适用。当同时提供 `path` 和 `score` 时，forScore 会优先使用 `path`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'forscore' }} } from '{{ importPath }}'

const scoreUrl = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}open({
  path: 'My Score.pdf',
})

const setlistUrl = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}open({
  setlist: 'My Setlist',
  score: 'My Score',
  bookmark: 'My Bookmark',
  page: 3,
})
```

### 服务

forScore 官方文档列出了 `forscore://service`，并要求提供 `type`。Dropbox 和 Box 可以带一个起始 `path`；内容提供商不支持 path。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'service' : 'forscore' }} } from '{{ importPath }}'

const dropboxUrl = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}service({
  type: 'dropbox',
})

const dropboxPathUrl = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}service({
  type: 'dropbox',
  path: 'Directory/Subdirectory',
})

const prestoUrl = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}service({
  type: 'presto',
})
```

### 操作

forScore 官方文档列出了 `forscore://action`，用于触发相对导航变化，例如上一页、下一页、上一项、下一项、返回或显示当前播放队列。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'action' : 'forscore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'forscore.'}}action({
  type: 'nextitem',
})
```

## 生成的 URL

```ts
open({ path: 'My Score.pdf' })
// => 'forscore://open?path=My%20Score.pdf'

open({ setlist: 'My Setlist', score: 'My Score', bookmark: 'My Bookmark', page: 3 })
// => 'forscore://open?setlist=My%20Setlist&score=My%20Score&bookmark=My%20Bookmark&page=3'

service({ type: 'dropbox' })
// => 'forscore://service?type=dropbox'

service({ type: 'dropbox', path: 'Directory/Subdirectory' })
// => 'forscore://service?type=dropbox&path=Directory%2FSubdirectory'

service({ type: 'presto' })
// => 'forscore://service?type=presto'

action({ type: 'nextitem' })
// => 'forscore://action?type=nextitem'
```

## 官方文档

* [forScore Automation URL Scheme](https://forscore.co/developers-automation/)
