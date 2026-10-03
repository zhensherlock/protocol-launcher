---
url: /protocol-launcher/zh/apps/obsidian.md
---

# Obsidian

[Obsidian](https://obsidian.md/) 是一个强大的知识库，基于本地纯文本 Markdown 文件夹工作。**Protocol Launcher** 允许您生成深度链接以在 Obsidian 中打开笔记、创建新笔记、搜索和执行命令。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

`openNote` 和 `newNote` 支持 `path` 和 `paneType`（`tab`、`split`、`window`；window 仅限桌面端）。Obsidian 中 `path` 优先于 `vault` 和 `file`。`newNote` 支持 `file`、`path`、`paneType`、`clipboard`、`silent`、`overwrite` 和 `xSuccess`；用 `silent: true` 创建而不打开。既有插件相关函数继续保留，但不属于核心 URI 官方文档的范围。

### 打开 Obsidian

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}open()
```

### 打开笔记

在 Obsidian 中打开特定的笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}openNote({
  vault: 'My Vault',
  file: 'Notes/Meeting.md',
})
```

### 新建笔记

在 Obsidian 中创建新笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}newNote({
  vault: 'My Vault',
  name: 'New Note',
  content: 'Hello World',
})
```

### 搜索

在 Obsidian 中搜索笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}search({
  vault: 'My Vault',
  query: 'meeting notes',
})
```

### 插入内容

在 Obsidian 的当前笔记中插入内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'insert' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}insert({
  vault: 'My Vault',
  content: '## Heading',
})
```

### 执行命令

在 Obsidian 中执行命令。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}command({
  vault: 'My Vault',
  id: 'editor:save-file',
})
```

### 选项

打开 Obsidian 的选项（快速设置）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'options' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}options({
  vault: 'My Vault',
})
```

### 设置

打开 Obsidian 设置。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'settings' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}settings({
  vault: 'My Vault',
  page: 'editor',
})
```

### 每日笔记

创建或打开每日笔记，需要启用核心插件 Daily notes。支持 new 动作的参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dailyNote' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}dailyNote({
  vault: 'My Vault',
  content: 'Daily notes',
  append: true
})
```

### 唯一笔记

启用核心插件 Unique note creator 后创建唯一笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'uniqueNote' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}uniqueNote({
  vault: 'My Vault',
  content: 'Hello World'
})
```

### 仓库管理器

打开仓库管理器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'chooseVault' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}chooseVault()
```

### 为 Hook 获取地址

向 Hook 返回当前笔记地址。未传回调时，将其 Markdown 链接复制到剪贴板。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hookGetAddress' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}hookGetAddress({
  xSuccess: 'hook://x-callback-url/setCurrentNode'
})
```

## 官方文档

* [URL scheme 官方说明](https://obsidian.md/help/uri)
