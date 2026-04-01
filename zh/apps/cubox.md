---
url: /protocol-launcher/zh/apps/cubox.md
---

# Cubox

[Cubox](https://www.cubox.pro/) 是新一代 AI 稍后阅读助手，让您的收藏读得懂、记得住、用得上。**Protocol Launcher** 允许您生成深度链接以在 Cubox 中添加内容和导航。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}open()
```

### 添加链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addLink' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}addLink({
  url: 'https://example.com/article',
})
```

### 添加备忘

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addMemo' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}addMemo({
  memo: 'Remember to buy groceries',
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openFolder({
  name: 'Reading List',
})
```

### 打开收件箱

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openInbox()
```

### 打开智能文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSmartFolder' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openSmartFolder({
  name: 'Recent Articles',
})
```

### 打开星标

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStarred' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openStarred()
```

### 打开标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openTag({
  name: 'important',
})
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}search({
  query: 'typescript',
  type: 'card',
})
```
