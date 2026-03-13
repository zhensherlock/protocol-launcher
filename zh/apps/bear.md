---
url: /protocol-launcher/zh/apps/bear.md
---

# Bear

[Bear](https://bear.app/) 是一款精美、灵活的写作应用，用于撰写笔记和散文。Bear 可在 iPhone、iPad 和 Mac 上运行，提供编写、编辑和组织想法所需的一切功能。凭借强大的标签管理系统、Markdown 支持以及跨设备无缝同步，Bear 非常适合从快速笔记到深度文章的各种场景。**Protocol Launcher** 允许你生成深度链接，在 Bear 中打开笔记、创建内容、搜索和管理标签。

## 使用方法

使用这个库有两种方式：

* 按需从子路径导入支持 tree-shaking，保持打包体积小。
* 从根目录完整导入很方便，但会包含所有应用模块。

生产构建选择按需导入；完整导入适合快速脚本或演示。

### 打开 Bear

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}open()
```

### 打开笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}openNote({
  title: 'Shopping',
})
```

### 创建笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}create({
  title: 'Shopping',
  text: 'Milk',
  tags: 'home,groceries',
})

```

### 添加文本到笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addText' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}addText({
  text: 'new line',
  id: '4EDAF0D1',
  mode: 'append',
})
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}search({
  term: 'nemo',
  tag: 'movies',
})
```

### 打开标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}openTag({
  tag: 'work',
})
```

### 重命名标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'renameTag' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}renameTag({
  tag: 'old-tag',
  newTag: 'new-tag',
})
```

### 删除标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTag' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}deleteTag({
  tag: 'obsolete-tag',
})
```

### 显示待办事项

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'todo' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}todo({
  search: 'home',
})
```

### 显示今日笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'today' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}today()
```

### 显示已锁定笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'locked' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}locked()
```

### 显示未标记笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'untagged' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}untagged()
```

### 显示废纸篓

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'trash' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}trash()
```

### 显示归档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'archive' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}archive()
```

### 抓取网址

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'grabUrl' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}grabUrl({
  url: 'https://bear.app',
})
```

### 获取所有标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tags' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}tags({
  token: '123456-123456-123456',
})
```
