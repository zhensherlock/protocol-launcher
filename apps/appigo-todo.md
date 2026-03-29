---
url: /protocol-launcher/apps/appigo-todo.md
---

# Appigo Todo

[TaskFire](https://appigo.com/) (formerly Todo Cloud) is a powerful to-do list app and task manager that helps you develop positive habits and achieve goals. **Protocol Launcher** allows you to generate deep links to view lists, tasks, projects and create new tasks in TaskFire.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Show All List

Show all lists in TaskFire.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showAllList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showAllList()
```

### Show Focus List

Show the focus list in TaskFire.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showFocusList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showFocusList()
```

### Show Starred Tasks

Show starred tasks in TaskFire.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showStarredTasks' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showStarredTasks()
```

### Show Inbox

Show inbox in TaskFire.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showInbox' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showInbox()
```

### Show List

Show a specific list by name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showList({
  name: 'Shopping',
})
```

### Show Task

Show a specific task by name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showTask' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showTask({
  name: 'Buy milk',
})
```

### Show Project

Show a specific project by name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showProject' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showProject({
  name: 'Home Renovation',
})
```

### Show Checklist

Show a specific checklist by name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showChecklist' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showChecklist({
  name: 'Grocery List',
})
```

### Create Task

Create a new task with optional due date, priority, note, and recurrence settings.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTask' : 'appigoTodo' }} } from '{{ importPath }}'

// Create task with due date and priority
const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}createTask({
  name: 'Call doctor',
  dueDate: '2024-12-31',
  priority: 1,
})

// Create task with note and weekly repeat
const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}createTask({
  name: 'Weekly report',
  note: 'Submit to manager',
  repeat: 1,
})

// Create task with advanced repeat (every Monday and Wednesday)
const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}createTask({
  name: 'Team meeting',
  repeat: 50,
  advancedRepeat: 'Every mon and wed',
})
```
