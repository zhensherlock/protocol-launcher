---
url: /protocol-launcher/zh/apps/ulysses.md
---

# Ulysses

[Ulysses](https://ulysses.app/) 是一款适用于 Mac、iPad 和 iPhone 的强大写作应用。**Protocol Launcher** 允许您生成深度链接以在 Ulysses 中创建和管理文稿、群组及笔记。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}open()
```

### 打开项目

通过标识符、名称或路径打开文稿或群组。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openItem' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openItem({
  id: 'DCj45UWKr_g15y2vBPwJdQ',
})
```

### 新建文稿

创建新文稿，可选择内容、群组、格式和位置。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newSheet' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}newSheet({
  text: 'My new sheet content',
  group: '/Books',
  format: 'markdown',
  index: 0,
})
```

### 插入文本

向现有文稿插入或追加文本。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'insert' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}insert({
  id: 'H8zLAmc1I0njH-0Ql-3YGQ',
  text: 'Inserted text',
  format: 'markdown',
  position: 'end',
  newline: 'prepend',
})
```

### 附加笔记

将笔记附加到文稿。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'attachNote' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}attachNote({
  id: 'H8zLAmc1I0njH-0Ql-3YGQ',
  text: 'My new note',
  format: 'markdown',
})
```

### 附加关键词

向文稿添加关键词。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'attachKeywords' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}attachKeywords({
  id: 'H8zLAmc1I0njH-0Ql-3YGQ',
  keywords: 'Draft,Important',
})
```

### 新建群组

创建新群组以组织文稿。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newGroup' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}newGroup({
  name: 'My Group',
  parent: '/Books',
  index: 0,
})
```

### 复制项目

将文稿或群组复制到目标位置。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copy' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}copy({
  id: 'hZ7IX2jqKbVmPGlYUXkZjQ',
  targetGroup: 'H8zLAmc1I0njH-0Ql-3YGQ',
  index: 4,
})
```

### 打开全部

打开显示所有文稿的"全部"特殊群组。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAll' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openAll()
```

### 打开收藏

打开"收藏"特殊群组。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFavorites' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openFavorites()
```

### 打开最近

打开"最近 7 天"（最近）特殊群组。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRecent' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openRecent()
```
