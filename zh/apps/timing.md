---
url: /protocol-launcher/zh/apps/timing.md
---

# Timing

[Timing](https://timingapp.com/) 是一款 Mac 自动时间追踪应用。**Protocol Launcher** 允许你生成 Timing 的官方 URL scheme 链接。

## 使用

有两种方式可以使用此库：

* 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
* 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

## 说明

Timing 官方 URL scheme 页面说明，这些 URL 至少需要 Timing Expert。页面也区分了目标应用：tracker app actions 使用 `timing2helper://`，主 Timing app 使用 `timing2://`。

本模块只暴露官方记录的 URL 形式：`startTimer`、`stopTimer`、`createTimeEntry`、`editTimeEntry/<time-entry-id>` 和 `selectProjects/<project-name-or-id>`。

## URL 方法

### 启动计时器

生成官方记录的 URL，在 Timing tracker app 中启动一个计时器。将 `startImmediately` 设为 `false` 时，Timing 会先显示对话框。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}startTimer({
  title: 'Some title',
  notes: 'Some\nnotes',
  project: 'Work',
  estimatedDuration: 600,
  startDate: '2022-04-01T12:00:00Z',
  startImmediately: false,
  center: true,
})
```

### 停止计时器

生成官方记录的 URL，用来停止当前正在运行的计时器（如果存在）。`hideNotification` 会隐藏计时器停止后的通知。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stopTimer' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}stopTimer({
  hideNotification: true,
})
```

### 创建 Time Entry

生成官方记录的 URL，在 Timing tracker app 中创建新的 time entry。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTimeEntry' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}createTimeEntry({
  title: 'Some title',
  notes: 'Some\nnotes',
  project: 'Work',
  startDate: '2022-04-01T12:00:00Z',
  endDate: '2022-04-01T12:30:00Z',
  createImmediately: false,
  center: true,
})
```

Timing 文档说明，只有在至少提供 `startDate`、`endDate` 且提供 `title` 或 `project` 之一时，`createImmediately` 才可用。`center` 和 `obtainFocus` 只在 `createImmediately` 不为 true 时可用。

### 编辑 Time Entry

生成官方记录的 URL，通过 ID 打开编辑 time entry 的对话框。Timing 也记录了可以使用 `latest` 编辑最近的 time entry。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editTimeEntry' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}editTimeEntry({
  id: 'latest',
})
```

### 选择项目

生成官方记录的 URL，在主 Timing app 侧边栏中选择项目。省略 `projects` 时会选择 “All Activities”。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'selectProjects' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}selectProjects({
  projects: ['ProjectA', 'ProjectB'],
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'selectProjects' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}selectProjects()
```

## 生成的 URL

```ts
startTimer({
  title: 'Some title',
  notes: 'Some\nnotes',
  project: 'Work',
  estimatedDuration: 600,
  startDate: '2022-04-01T12:00:00Z',
  startImmediately: false,
  center: true,
})
// => 'timing2helper://startTimer?title=Some%20title&notes=Some%0Anotes&project=Work&estimatedDuration=600&startDate=2022-04-01T12:00:00Z&startImmediately=false&center=true'

stopTimer({ hideNotification: true })
// => 'timing2helper://stopTimer?hideNotification=true'

createTimeEntry({
  title: 'Some title',
  notes: 'Some\nnotes',
  project: 'Work',
  startDate: '2022-04-01T12:00:00Z',
  endDate: '2022-04-01T12:30:00Z',
  createImmediately: false,
  center: true,
})
// => 'timing2helper://createTimeEntry?title=Some%20title&notes=Some%0Anotes&project=Work&startDate=2022-04-01T12:00:00Z&endDate=2022-04-01T12:30:00Z&createImmediately=false&center=true'

editTimeEntry({ id: 'latest' })
// => 'timing2helper://editTimeEntry/latest'

selectProjects({ projects: ['ProjectA', 'ProjectB'] })
// => 'timing2://selectProjects/ProjectA/ProjectB'

selectProjects()
// => 'timing2://selectProjects'
```

## 官方文档

* [Timing URL Scheme Support](https://timingapp.com/help/url-schemes)
