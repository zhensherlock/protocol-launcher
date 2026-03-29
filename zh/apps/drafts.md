---
url: /protocol-launcher/zh/apps/drafts.md
---

# Drafts

[Drafts](https://getdrafts.com/) 是一款适用于 Apple 平台（iPhone、iPad、Mac、Apple Watch）的强大文本捕获和自动化应用。它可以让您快速捕获文本，并通过操作（Actions）将文本发送到其他应用和服务。**Protocol Launcher** 允许您生成深度链接以在 Drafts 中创建、编辑和管理草稿。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Drafts

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open()
```

### 打开现有草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open({
  uuid: 'UUID-TO-VALID-DRAFT',
})
```

### 通过标题打开草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open({
  title: 'MyDraft/Header Name',
})
```

### 创建新草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}create({
  text: 'Hello World',
})
```

### 创建带标签的草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}create({
  text: 'Hello World',
  tag: ['work', 'important'],
  flagged: true,
})
```

### 获取草稿内容

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}get({
  uuid: 'UUID-TO-VALID-DRAFT',
})
```

### 获取草稿内容（带返回参数）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}get({
  uuid: 'UUID-TO-VALID-DRAFT',
  retParam: 'input',
})
```

### 搜索草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}search({
  query: 'meeting',
  tag: 'work',
  folder: 'inbox',
})
```

### 追加文本到草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}append({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-ADD',
})
```

### 追加文本并执行操作

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}append({
  uuid: 'xxx',
  text: 'Suffix',
  action: 'MyAction',
})
```

### 在草稿开头添加文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}prepend({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-ADD',
})
```

### 在草稿开头添加文本并带标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}prepend({
  uuid: 'xxx',
  text: 'Prefix',
  tag: ['work', 'important'],
})
```

### 捕获文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'capture' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}capture({
  text: 'Note',
  tag: 'work,important',
})
```

### 口述文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dictate' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}dictate({
  locale: 'en-US',
  save: false,
  xSuccess: 'myapp://callback',
})
```

### 加载工作区

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'workspace' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}workspace({
  name: 'Default',
})
```

### 对文本执行操作

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runAction' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}runAction({
  text: 'TEXT',
  action: 'VALID-ACTION-NAME',
})
```

### 快速搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSearch' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}quickSearch({
  query: 'QUERY-TEXT',
})
```

### 整理文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'arrange' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}arrange({
  text: 'unsorted list',
  retParam: 'input',
  xSuccess: 'myapp://callback',
})
```

### 操作搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'actionSearch' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}actionSearch({
  query: 'QUERY-TEXT',
})
```

### 命令面板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'commandPalette' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}commandPalette({
  query: 'QUERY-TEXT',
})
```

### 获取当前草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getCurrentDraft' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}getCurrentDraft({
  xSuccess: 'myapp://callback',
})
```

### 加载操作栏组

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'loadActionBarGroup' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}loadActionBarGroup({
  name: 'GROUP-NAME',
})
```

### 加载操作组

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'loadActionGroup' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}loadActionGroup({
  name: 'GROUP-NAME',
})
```

### 替换草稿中的范围

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceRange' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}replaceRange({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-INSERT',
  start: 0,
  length: 10,
})
```

### 扫描文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scanDocument' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}scanDocument({
  save: false,
  retParam: 'input',
  xSuccess: 'myapp://callback',
})
```
