---
url: /protocol-launcher/zh/apps/1writer.md
---

# 1Writer

[1Writer](https://1writerapp.com/) 是一款强大的 iOS Markdown 文本编辑器，支持 Dropbox、Google Drive 和 iCloud。**Protocol Launcher** 允许您生成深度链接，使用 `onewriter://` URL scheme 和 x-callback-url 协议在 1Writer 中创建、编辑和管理文档。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 创建文档

创建新文档。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}create({
  path: 'Dropbox/Documents',
  name: 'Notes.txt',
  text: 'Hello world',
})
```

### 替换文档

替换文档内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}replace({
  path: 'Dropbox/Documents/Notes.txt',
  text: 'Hello world',
})
```

### 替换选中内容

替换当前编辑文档中的选中文本。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceSelection' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}replaceSelection({
  text: 'New text',
})
```

### 获取内容

获取文档内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'content' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}content({
  path: 'Dropbox/Documents/Notes.txt',
})
```

### 打开文档

打开现有文档。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}open({
  path: 'Dropbox/Documents/Notes.txt',
})
```

### 追加内容

向现有文档追加内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}append({
  path: 'Dropbox/Documents/Notes.txt',
  text: 'Hello world',
})
```

### 前置内容

向现有文档开头添加内容。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}prepend({
  path: 'Dropbox/Documents/Notes.txt',
  text: 'Hello world',
})
```
