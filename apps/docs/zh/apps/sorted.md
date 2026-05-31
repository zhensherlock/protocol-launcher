---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/sorted' : 'protocol-launcher');
</script>

# Sorted³

[Sorted³](https://www.sortedapp.com/) 是一款围绕统一时间线设计的任务管理与计划应用。**Protocol Launcher** 可以生成 Sorted³ URL scheme 链接。

## 使用

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Sorted 官方指南为 Sorted³ v3.1 或更新版本记录了 `sorted://x-callback-url/open` 和 `sorted://x-callback-url/add`。本模块只暴露这些官方 action 和参数对应的 helper。

官方列出的 `item` 值为 `today`、`inbox`、`new` 和 `search`。打开日期支持 `yyyy-MM-dd` 日期、`today`、`tomorrow`、`yesterday` 这类 casual date、带 `offset` 值的 `date=offset`，以及带 weekday 数字的 `date=weekday`；其中 Sunday 是 `1`，Monday 是 `2`。

`add` action 的 `type` 默认是 `task`，因此 `addTask()` 不写入 `type`。`addEvent()` 会序列化 `type=event`。`tags` 和 `filterByTags` 这类逗号分隔值以字符串传入，并在生成 URL 时进行 percent encoding。

Sorted 将 `lock` 记录为 task-only 参数，但没有说明 true/false 的序列化取值，因此类型只接受调用方传入的字符串，示例中不自造取值。

### 打开 Item 视图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open, openToday, openInbox, openNew, openSearch' : 'sorted' }} } from '{{ importPath }}'

const todayUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openToday()
const inboxUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openInbox()
const newUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openNew()
const searchViewUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openSearch()
const itemUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}open({ item: 'today' })
```

### 打开日期

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'sorted' }} } from '{{ importPath }}'

const dateUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openDate({
  date: '2018-07-20',
})

const casualDateUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openDate({
  date: 'tomorrow',
})
```

### 按 Offset 打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOffset' : 'sorted' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openOffset({
  offset: 3,
})
```

### 按 Weekday 打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeekday' : 'sorted' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openWeekday({
  weekday: 2,
})
```

### 打开列表或标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openList, openTag' : 'sorted' }} } from '{{ importPath }}'

const listUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openList({
  list: 'Work',
  filterByTags: 'urgent,office',
})

const tagUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openTag({
  tag: 'urgent',
  filterByTags: 'office,phone',
})
```

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'sorted' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}search({
  search: 'Meeting',
})
```

### 添加任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'sorted' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}addTask({
  title: 'Plan launch',
  date: '2026-06-01 09:00',
  duration: 45,
  earlyAlert: 'none',
  list: 'Work',
  tags: 'urgent,office',
})
```

### 添加事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addEvent' : 'sorted' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}addEvent({
  title: 'Planning meeting',
  date: '2026-06-01 10:00',
  duration: 60,
  earlyAlert: 15,
  calendar: 'Work',
  location: 'Conference Room',
})
```

## 生成的 URL

```ts
openToday()
// => 'sorted://x-callback-url/open?item=today'

openInbox()
// => 'sorted://x-callback-url/open?item=inbox'

openNew()
// => 'sorted://x-callback-url/open?item=new'

openSearch()
// => 'sorted://x-callback-url/open?item=search'

openDate({ date: '2018-07-20' })
// => 'sorted://x-callback-url/open?date=2018-07-20'

openDate({ date: 'tomorrow' })
// => 'sorted://x-callback-url/open?date=tomorrow'

openOffset({ offset: 3 })
// => 'sorted://x-callback-url/open?date=offset&offset=3'

openWeekday({ weekday: 2 })
// => 'sorted://x-callback-url/open?date=weekday&weekday=2'

openList({ list: 'Work', filterByTags: 'urgent,office' })
// => 'sorted://x-callback-url/open?list=Work&filterByTags=urgent%2Coffice'

openTag({ tag: 'urgent', filterByTags: 'office,phone' })
// => 'sorted://x-callback-url/open?tag=urgent&filterByTags=office%2Cphone'

search({ search: 'Meeting' })
// => 'sorted://x-callback-url/open?search=Meeting'

addTask({
  title: 'Plan launch',
  date: '2026-06-01 09:00',
  duration: 45,
  earlyAlert: 'none',
  list: 'Work',
  tags: 'urgent,office',
})
// => 'sorted://x-callback-url/add?title=Plan%20launch&date=2026-06-01%2009%3A00&duration=45&earlyAlert=none&list=Work&tags=urgent%2Coffice'

addEvent({
  title: 'Planning meeting',
  date: '2026-06-01 10:00',
  duration: 60,
  earlyAlert: 15,
  calendar: 'Work',
  location: 'Conference Room',
})
// => 'sorted://x-callback-url/add?title=Planning%20meeting&date=2026-06-01%2010%3A00&duration=60&earlyAlert=15&type=event&calendar=Work&location=Conference%20Room'
```

## 官方文档

- [Sorted URL Scheme](https://www.sortedapp.com/blog/url-scheme)
