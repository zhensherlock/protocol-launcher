---
url: /protocol-launcher/zh/apps/due.md
---

# Due

[Due](https://www.dueapp.com/) 是一款适用于 iPhone、iPad 和 Mac 的超快速提醒应用，帮助您不再忘记任何事情。**Protocol Launcher** 允许您生成深度链接以在 Due 中添加提醒和搜索。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 添加提醒

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}add({
  title: 'Call John',
  duedate: 1333238400,
})
```

### 添加重复提醒

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}add({
  title: 'Pay rent',
  duedate: 1306954800,
  timezone: 'GMT',
  recurunit: 8,
  recurfromdate: 1306954800,
})
```

### 添加带回调的提醒

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}add({
  title: 'Call John',
  secslater: 3600,
  xSource: 'SuperCal',
  xSuccess: 'supercal://x-callback-url/returnAction',
})
```

### 搜索提醒

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}search({
  query: '#work',
  section: 'Reminders',
})
```

### 搜索计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}search({
  query: '#HIIT',
  section: 'Timers',
})
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}search({})
```
