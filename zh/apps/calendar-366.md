---
url: /protocol-launcher/zh/apps/calendar-366.md
---

# Calendar 366

[Calendar 366](https://calendar366.com/) 是一款适用于 iPhone、iPad、Apple Watch 和 Mac 的日历与任务应用。**Protocol Launcher** 允许你生成 Calendar 366 URL scheme 链接，用于添加事件和任务、打开项目、显示视图、生成摘要和导入日历。

## 使用

这个库有两种使用方式：

* 从子路径按需导入，支持 Tree Shaking 并保持较小的包体积。
* 从根包完整导入更适合快速脚本或演示，但会包含所有应用模块。

生产构建建议选择按需导入；完整导入适合快速脚本或演示。

### 添加事件或任务

Calendar 366 官方文档列出了 `cal366://add`，其中 `type` 为 `event` 或 `task`，`query` 是可选的自然语言输入。`addEvent()` 和 `addTask()` 只是围绕同一个官方命令的轻量 helper。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add, addEvent, addTask' : 'calendar366' }} } from '{{ importPath }}'

const eventUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}add({
  type: 'event',
  query: 'Meeting tomorrow 10am',
})

const eventShortcutUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}addEvent({
  query: 'Meeting tomorrow 10am',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}addTask({
  query: 'Call dentist',
})
```

### 打开项目

通过 `calendarItemExternalIdentifier` 或 identifier 打开事件或任务。Calendar 366 官方文档说明 `date` 是任务的可选参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openItem' : 'calendar366' }} } from '{{ importPath }}'

const eventUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}openItem({
  type: 'event',
  id: 'ABC123',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}openItem({
  type: 'task',
  id: 'TASK123',
  date: 1717200000,
})
```

### 显示视图、任务或日期

`view` 使用 Calendar 366 官方列出的视图名称，`tasks` 使用官方任务列表编号，`date` 使用 `timeIntervalSince1970`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'calendar366' }} } from '{{ importPath }}'

const monthUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}show({
  view: 'month',
})

const overdueTasksUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}show({
  tasks: 1,
})

const dayUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}show({
  view: 'day',
  date: 1717200000,
})
```

### 摘要

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'summarize' : 'calendar366' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}summarize()
```

### 导入日历

Calendar 366 官方文档列出的日历文件 URL 类型是 `file://` 和 `https://`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importCalendar' : 'calendar366' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}importCalendar({
  url: 'https://example.com/calendar.ics',
})
```

## 生成的 URL

```ts
add({ type: 'event', query: 'Meeting tomorrow 10am' })
// => 'cal366://add?type=event&query=Meeting%20tomorrow%2010am'

addEvent({ query: 'Meeting tomorrow 10am' })
// => 'cal366://add?type=event&query=Meeting%20tomorrow%2010am'

addTask({ query: 'Call dentist' })
// => 'cal366://add?type=task&query=Call%20dentist'

openItem({ type: 'event', id: 'ABC123' })
// => 'cal366://open?type=event&id=ABC123'

openItem({ type: 'task', id: 'TASK123', date: 1717200000 })
// => 'cal366://open?type=task&id=TASK123&date=1717200000'

show({ view: 'month' })
// => 'cal366://show?view=month'

show({ tasks: 1 })
// => 'cal366://show?tasks=1'

show({ view: 'day', date: 1717200000 })
// => 'cal366://show?view=day&date=1717200000'

summarize()
// => 'cal366://summarize'

importCalendar({ url: 'https://example.com/calendar.ics' })
// => 'cal366://import?url=https%3A%2F%2Fexample.com%2Fcalendar.ics'
```
