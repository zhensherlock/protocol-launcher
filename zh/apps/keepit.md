---
url: /protocol-launcher/zh/apps/keepit.md
---

# Keep It

[Keep It](https://reinventedsoftware.com/keepit/) 是一款用于整理笔记、文件、网页链接和列表的应用。**Protocol Launcher** 允许你生成 URL 来打开 Keep It 项目和列表、添加内容以及追加文本或附件。

## 使用

有两种方式使用这个库：

* 按需从子路径导入，支持 tree-shaking 并保持 bundle 更小。
* 从根包完整导入，适合快速脚本或 demo，但会包含所有 app 模块。

生产构建建议使用按需导入；完整导入适合快速脚本或演示。

## 说明

本模块只封装 Keep It URL Support 官方页面记录的能力：`keepit://link?item=...`、`keepit://link?list=...`、`keepit://x-callback-url/add?...` 和 `keepit://x-callback-url/append?...`。

`add` 和 `append` helper 会对参数进行 URL 编码，并支持 Keep It 文档提到的标准 x-callback 参数。对于 `tags`，Keep It 官方示例保留逗号分隔符，因此生成的 URL 也保持一致。

## URL 方法

### 打开项目

通过标识符打开 Keep It 项目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openItem' : 'keepit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keepit.'}}openItem({
  item: 'C96F26E6-A566-457E-A448-5B0F527714DE',
})
```

### 打开列表

通过标识符打开 Keep It 列表。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openList' : 'keepit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keepit.'}}openList({
  list: 'AllItems',
})
```

### 添加网页链接

向 Keep It 添加网页链接。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'keepit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keepit.'}}add({
  name: 'Apple Homepage',
  source: 'http://apple.com',
})
```

### 添加笔记

将文本作为 Keep It 笔记或文本文件添加。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'keepit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keepit.'}}add({
  text: 'The quick brown fox',
  list: 'AllItems',
})
```

### 追加文本

向 Keep It 项目追加文本。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'keepit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keepit.'}}append({
  text: 'The quick brown fox',
  item: 'C96F26E6-A566-457E-A448-5B0F527714DE',
})
```

## 生成的 URL

```ts
openItem(itemLinkParams)
// => 'keepit://link?item=C96F26E6-A566-457E-A448-5B0F527714DE'

openList(listLinkParams)
// => 'keepit://link?list=AllItems'

add(addWebLinkParams)
// => 'keepit://x-callback-url/add?name=Apple%20Homepage&source=http%3A%2F%2Fapple.com'

add(addNoteParams)
// => 'keepit://x-callback-url/add?text=The%20quick%20brown%20fox&list=AllItems'

append(appendTextParams)
// => 'keepit://x-callback-url/append?text=The%20quick%20brown%20fox&item=C96F26E6-A566-457E-A448-5B0F527714DE'
```

## 官方文档

* [Keep It URL Support](https://reinventedsoftware.com/keepit/urlsupport.html)
