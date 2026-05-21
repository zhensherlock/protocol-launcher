---
url: /protocol-launcher/zh/apps/goodtask.md
---

# GoodTask

[GoodTask](https://goodtaskapp.com/) 是一款基于 Apple 提醒事项和日历的待办事项、任务管理和计划应用。**Protocol Launcher** 可以按官方 URL scheme 生成 GoodTask 链接：open、openadd、view、task、smartadd 和 add。

GoodTask 的 URL scheme 是 `goodtask3://`。官方页面也说明了动作的 x-callback-url 形式，其中 add 示例使用 `x-success`；添加任务时可通过 `xSuccess` 传入。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开 GoodTask

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}open()
```

### 打开添加界面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAdd' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}openAdd()
```

### 打开视图

按列表标题打开特定 GoodTask 视图，或使用官方记录的 `section=0` 形式在 iPhone 上进入列表页。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openView' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}openView({
  title: 'Today',
  view: 1,
})

const listsUrl = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}openView({
  section: 0,
})
```

### 打开任务

按标题或 identifier 打开 GoodTask 任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}openTask({
  title: 'Buy milk',
})
```

### Smart Add

使用 GoodTask Smart Add Rules 创建任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'smartAdd' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}smartAdd({
  text: 'Buy milk tomorrow',
})
```

### 添加任务

使用官方 GoodTask `add` 参数添加任务。GoodTask 官方文档说明，设置 `due` 时应用会忽略 `dueAfter`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}add({
  title: 'Title',
  list: 'to',
})

const dueAfterUrl = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}add({
  title: 'Title',
  dueAfter: 10,
})

const subtasksUrl = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}add({
  title: 'ABCD',
  subtasks: 'one\ntwo\nthree',
})
```

### 添加任务并回调

使用 `xSuccess` 生成 GoodTask 官方记录的 x-callback-url add 形式。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}add({
  title: 'Title',
  list: 'To-do',
  xSuccess: 'launchpro:',
})
```
