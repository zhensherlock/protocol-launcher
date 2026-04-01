---
url: /protocol-launcher/zh/apps/day-one.md
---

# Day One

[Day One](https://dayoneapp.com/) 是排名第一的日记应用，用于记录生活中的重要时刻。**Protocol Launcher** 允许您生成深度链接以在 Day One 中创建、编辑和查看日记条目。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}open()
```

### 创建条目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createEntry' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}createEntry({
  entry: 'Hello World',
  tags: 'work, test',
})
```

### 编辑条目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editEntry' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}editEntry({
  entryId: '3415BB00651C4533B41F62544A775CCC',
})
```

### 查看条目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewEntry' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}viewEntry({
  entryId: '22B178B33B2A4149538280F9C34102C5',
})
```

### 按标签筛选

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'filterByTag' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}filterByTag({
  tag: 'work',
})
```

### 打开日历

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCalendar' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openCalendar()
```

### 打开每日提示

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDailyPrompt' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openDailyPrompt({
  promptId: 'ck7zw8sybj6kv09983znvrmof',
})
```

### 打开日期

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openDate({
  date: '2020-04-02',
})
```

### 打开历史上的今天

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOnThisDay' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openOnThisDay()
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openSettings()
```

### 打开星标条目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStarred' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openStarred()
```

### 打开时间线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTimeline' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openTimeline()
```
