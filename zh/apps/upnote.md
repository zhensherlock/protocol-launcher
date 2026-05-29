---
url: /protocol-launcher/zh/apps/upnote.md
---

# UpNote

[UpNote](https://getupnote.com/) 是一款用于书写和整理笔记的应用。**Protocol Launcher** 可以生成用于在 UpNote 中打开笔记、笔记本、标签、筛选器和视图，以及创建笔记和笔记本的链接。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

UpNote 官方文档列出了 `upnote://x-callback-url/<action>` 端点，可用于打开笔记、创建笔记和笔记本、查看笔记本、查看标签、打开筛选器和动态视图。

### 打开笔记

使用 `noteId` 和 `new_window` 打开笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}openNote({
  noteId: 'REPLACE_WITH_NOTE_ID',
  newWindow: false,
})
```

### 新建笔记

使用 `title`、`text`、`notebook`、`new_window` 和 `markdown` 创建笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}newNote({
  title: 'Daily Plan',
  text: '# Today',
  notebook: 'Work',
  newWindow: true,
  markdown: true,
})
```

### 打开笔记本

通过 `notebookId` 查看笔记本中的笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotebook' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}openNotebook({
  notebookId: 'REPLACE_WITH_NOTEBOOK_ID',
})
```

### 新建笔记本

用标题创建一个笔记本。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNotebook' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}newNotebook({
  title: 'Projects',
})
```

### 查看标签

通过标签标题查看某个标签中的笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewTag' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}viewTag({
  tag: 'project',
})
```

### 打开筛选器

通过 `filterId` 查看筛选器中的笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFilter' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}openFilter({
  filterId: 'REPLACE_WITH_FILTER_ID',
})
```

### 动态视图

使用官方文档中的 `view` 端点和 `mode`、`noteId`、`notebookId`、`tagId`、`filterId`、`spaceId`、`action`、`query` 参数。UpNote 将 `spaceId` 记录为唯一空间 id 或 `default`；`notebooks`、`tags` 和 `filters` 模式需要对应的 id。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}view({
  mode: 'all_notes',
})

const notebookUrl = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}view({
  mode: 'notebooks',
  notebookId: 'REPLACE_WITH_NOTEBOOK_ID',
  spaceId: 'default',
})

const searchUrl = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}view({
  action: 'search',
  query: 'meeting notes',
})
```

## 官方文档

* [UpNote x-callback-url endpoints](https://help.getupnote.com/resources/x-callback-url-endpoints)
