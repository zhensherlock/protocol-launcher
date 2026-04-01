---
url: /protocol-launcher/zh/apps/craft.md
---

# Craft

[Craft](https://www.craft.do) 是一个强大、美观的工具，用于创建文档、管理任务和组织您的工作和生活。**Protocol Launcher** 允许您生成深度链接以在 Craft 中打开和创建内容。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}open()
```

### 打开文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openDocument({
  spaceId: 'abc-123',
  blockId: 'xyz-789',
})
```

### 创建文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createDocument({
  spaceId: 'abc-123',
  title: 'My Note',
  content: 'Hello **World**',
  folderId: '',
})
```

### 创建新文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNewDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createNewDocument()
```

### 创建块

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createBlock' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createBlock({
  parentBlockId: 'doc-123',
  spaceId: 'abc-123',
  content: 'New content',
  index: 9999,
})
```

### 打开每日笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDailyNote' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openDailyNote({
  spaceId: 'abc-123',
  type: 'today',
})
```

### 打开搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openSearch({
  spaceId: 'abc-123',
  query: 'vacation plans',
})
```

### 打开空间

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSpace' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openSpace({
  spaceId: 'abc-123',
  tab: 'calendar',
})
```
