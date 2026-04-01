---
url: /protocol-launcher/zh/apps/tally.md
---

# Tally

[Tally](https://agiletortoise.com/tally/) 是一款适用于 iPhone、iPad 和 Apple Watch 的快速计数、记分和习惯追踪应用。**Protocol Launcher** 允许您生成深度链接以在 Tally 中增加、减少、重置和获取计数值。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 Tally

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}open()
```

### 增加计数

增加指定计数器的值。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'increment' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}increment({
  tallySet: 'Game Score',
  tally: 'Player 1',
})
```

### 减少计数

减少指定计数器的值。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'decrement' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}decrement({
  tallySet: 'Game Score',
  tally: 'Player 1',
})
```

### 重置计数

将指定计数器重置为初始值。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reset' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}reset({
  tallySet: 'Daily Habits',
  tally: 'Exercise',
})
```

### 获取计数值

获取指定计数器的当前值。需要提供回调 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}get({
  tallySet: 'Daily Habits',
  tally: 'Exercise',
  'x-success': 'myapp://callback',
})
```
