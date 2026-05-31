---
url: /protocol-launcher/zh/apps/calendars-readdle.md
---

# Calendars by Readdle

[Calendars by Readdle](https://readdle.com/calendars) 是一款适用于 Apple 设备的日历与任务应用。**Protocol Launcher** 允许你生成 Calendars URL scheme 链接，用于打开应用、创建事件、解析事件名称和创建任务。

Readdle 官方文档列出了两组 scheme：Calendars 使用 `calendarslite://`，Calendars 5 使用 `calendars://`。

## 使用

这个库有两种使用方式：

* 从子路径按需导入，支持 Tree Shaking 并保持较小的包体积。
* 从根包完整导入更适合快速脚本或演示，但会包含所有应用模块。

生产构建建议选择按需导入；完整导入适合快速脚本或演示。

### 打开 Calendars

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}open()

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}open({
  scheme: 'calendars',
})
```

### 新建事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newEvent' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newEvent()

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newEvent({
  scheme: 'calendars',
})
```

### 解析事件

用自然语言事件名称打开事件创建界面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parseEvent' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}parseEvent({
  text: 'new event at 8 pm',
})

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}parseEvent({
  scheme: 'calendars',
  text: 'new event at 8 pm',
})
```

### 新建任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTask' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newTask()

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newTask({
  scheme: 'calendars',
})
```

## 生成的 URL

```ts
open()
// => 'calendarslite://open'

open({ scheme: 'calendars' })
// => 'calendars://open'

newEvent()
// => 'calendarslite://newevent'

newEvent({ scheme: 'calendars' })
// => 'calendars://newevent'

parseEvent({ text: 'new event at 8 pm' })
// => 'calendarslite://parse="new%20event%20at%208%20pm"'

parseEvent({ scheme: 'calendars', text: 'new event at 8 pm' })
// => 'calendars://parse="new%20event%20at%208%20pm"'

parseEvent()
// => 'calendarslite://parse'

newTask()
// => 'calendarslite://newtask'

newTask({ scheme: 'calendars' })
// => 'calendars://newtask'
```

## 官方文档

* [Calendars URL schemes](https://support.readdle.com/calendars/tips-and-tricks/url-schemes)
* [Readdle Calendars URL schemes](https://apphelp.readdle.com/calendars/?id=1228\&pg=kb.page)
