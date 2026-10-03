---
url: /protocol-launcher/zh/apps/fsnotes.md
---

# FSNotes

[FSNotes](https://fsnot.es) 是一款适用于 macOS 和 iOS 的现代笔记管理器。它简洁、高效，并支持 GitHub Flavored Markdown 等开放格式。**Protocol Launcher** 允许您生成深度链接，以便在 FSNotes 中搜索、打开或创建笔记。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

当前 macOS URL handler 支持 new、open、find。openNote() 接受 txt 追加内容（笔记不存在时创建）；tag 优先于 title。findNotes() 可传入 id 打开对应标题/名称，不存在时回退为搜索。查询值与搜索路径组件均进行编码。

### 打开 FSNotes

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}open()
```

### 搜索笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findNotes' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}findNotes({
  keyword: 'hello',
})
```

### 打开笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}openNote({
  title: 'hello',
  tag: '2026',
})
```

### 创建笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNote' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}createNote({
  title: 'hello',
  content: 'hello world',
  tags: '2026',
})
```

### 使用原生 Scheme 创建笔记

使用原生 fsnotes://new/ 入口。纯文本 txt 优先于 html，folder 指定目录，open: true 在新窗口打开。既有 createNote() 保留兼容的 nv://make/ 入口，并支持 txt/open。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}newNote({
  'title': 'Meeting',
  'txt': '# Agenda',
  'folder': 'Work',
  'open': true
})
```

## 官方文档

* [URL scheme](https://github.com/glushchenko/fsnotes/blob/v7.3.4/FSNotes/AppDelegate%2BURLRoutes.swift)
