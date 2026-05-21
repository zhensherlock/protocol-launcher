---
url: /protocol-launcher/zh/apps/omnifocus.md
---

# OmniFocus

[OmniFocus](https://www.omnigroup.com/omnifocus/) 是一款专业任务管理器，可用于组织项目、动作、标签和 Forecast 视图。**Protocol Launcher** 可以生成 OmniFocus URL Scheme 链接，用于添加动作、粘贴 TaskPaper 内容，以及打开关键透视视图。

## 使用

有两种方式可以使用此库：

* 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
* 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

### 打开 OmniFocus

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}open()
```

### 添加动作

创建新的动作，并可设置项目、标签/Context、截止日期、旗标和 x-callback-url 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}add({
  name: 'Pick up milk',
  note: 'You gotta',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}add({
  name: 'Email team',
  context: 'Mac',
  due: 'jun 25 8am',
  estimate: '30m',
  flag: true,
  project: 'Launch',
  revealNewItem: true,
})

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}add({
  name: 'My shiny new task',
  autosave: true,
  xSuccess: 'omnifocus:///',
})
```

### 粘贴 TaskPaper

将 TaskPaper 内容粘贴到 Inbox、Projects 或其他 OmniFocus 目标位置。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}paste({
  content: '- Pick up milk',
  target: 'inbox',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}paste({
  content: 'Launch:\n\t- Draft announcement',
  target: 'projects',
  index: 0,
})
```

### 打开内置透视视图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox, openForecast, openToday' : 'omnifocus' }} } from '{{ importPath }}'

const inboxUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openInbox()
const forecastUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openForecast()
const todayUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openToday()
```

### 打开自定义透视视图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPerspective' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openPerspective({
  name: 'Due Soon',
})
```

### 打开任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openTask({
  id: 'mbp0SlWkvqq',
})
```

## 官方文档

* [OmniFocus URL Schemes](https://inside.omnifocus.com/url-schemes)
