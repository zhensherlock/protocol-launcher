---
url: /protocol-launcher/zh/apps/appigo-todo.md
---

# Appigo Todo

[TaskFire](https://appigo.com/)（原名 Todo Cloud）是一款强大的待办事项应用和任务管理器，帮助您培养积极习惯并实现目标。**Protocol Launcher** 允许您生成深度链接以在 TaskFire 中查看列表、任务、项目和创建新任务。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 显示所有列表

显示 TaskFire 中的所有列表。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showAllList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showAllList()
```

### 显示焦点列表

显示 TaskFire 中的焦点列表。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showFocusList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showFocusList()
```

### 显示星标任务

显示 TaskFire 中的星标任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showStarredTasks' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showStarredTasks()
```

### 显示收件箱

显示 TaskFire 中的收件箱。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showInbox' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showInbox()
```

### 显示列表

按名称显示特定列表。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showList({
  name: 'Shopping',
})
```

### 显示任务

按名称显示特定任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showTask' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showTask({
  name: 'Buy milk',
})
```

### 显示项目

按名称显示特定项目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showProject' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showProject({
  name: 'Home Renovation',
})
```

### 显示清单

按名称显示特定清单。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showChecklist' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showChecklist({
  name: 'Grocery List',
})
```

### 创建任务

创建新任务，可选设置截止日期、优先级、备注和重复规则。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTask' : 'appigoTodo' }} } from '{{ importPath }}'

// 创建带截止日期和优先级的任务
const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}createTask({
  name: 'Call doctor',
  dueDate: '2024-12-31',
  priority: 1,
})

// 创建带备注和每周重复的任务
const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}createTask({
  name: 'Weekly report',
  note: 'Submit to manager',
  repeat: 1,
})

// 创建高级重复任务（每周一和周三）
const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}createTask({
  name: 'Team meeting',
  repeat: 50,
  advancedRepeat: 'Every mon and wed',
})
```
