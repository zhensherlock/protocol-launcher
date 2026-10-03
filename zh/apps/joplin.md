---
url: /protocol-launcher/zh/apps/joplin.md
---

# Joplin

[Joplin](https://joplinapp.org/) 是一款用于组织笔记的开源笔记应用。**Protocol Launcher** 可以生成在 Joplin 中打开笔记、文件夹和标签的链接。

## 用法

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

Joplin 外部链接使用 `joplin://x-callback-url/<action>`，并通过 `id` query 参数指定目标。官方文档列出了 `openNote`、`openFolder` 和 `openTag`，以及下方的桌面回调命令。回调 URL 必须使用已知应用 scheme 或 `x-callback-url` 主机；Joplin 不接受 HTTP 和 HTTPS 回调。

### 打开笔记

通过 note ID 打开 Joplin 笔记。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'joplin' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'joplin.'}}openNote({
  id: 'REPLACE_WITH_NOTE_ID',
})
```

### 打开文件夹

通过 folder ID 打开 Joplin 文件夹。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'joplin' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'joplin.'}}openFolder({
  id: 'REPLACE_WITH_FOLDER_ID',
})
```

### 打开标签

通过 tag ID 打开 Joplin 标签。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'joplin' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'joplin.'}}openTag({
  id: 'REPLACE_WITH_TAG_ID',
})
```

### 获取当前笔记

仅支持桌面端。通过 x-callback-url 将选中的笔记返回调用应用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getCurrentNote' : 'joplin' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'joplin.'}}getCurrentNote({
  xSuccess: 'hook://x-callback-url/setCurrentNode'
})
```

### 创建笔记

仅支持桌面端。在当前笔记本创建笔记，通过回调返回标题和 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNote' : 'joplin' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'joplin.'}}createNote({
  title: 'Meeting notes',
  body: '# Agenda',
  xSuccess: 'hook://x-callback-url/setCurrentNode',
  xError: 'hook://x-callback-url/error'
})
```

## 官方文档

* [Joplin External URL links](https://joplinapp.org/help/apps/external_links/)
