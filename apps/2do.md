---
url: /protocol-launcher/apps/2do.md
---

# 2Do

[2Do](https://www.2doapp.com/) is a powerful personal task manager that supports GTD methodology and more. **Protocol Launcher** allows you to generate deep links to create tasks, search, and navigate lists in 2Do.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}open()
```

### Show All Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showAll' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showAll()
```

### Show Today Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showToday' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showToday()
```

### Show Starred Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showStarred' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showStarred()
```

### Show Scheduled Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showScheduled' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showScheduled()
```

### Show List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showList' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showList({
  name: 'Work',
})
```

### Search Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}search({
  text: 'John',
})
```

### Search Overdue Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}search({
  text: 'type:overdue',
})
```

### Add New Task (Open Screen)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addNewTask' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}addNewTask({
  ignoreDefaults: 1,
})
```

### Add Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Dinner at 8pm',
  due: '1',
})
```

### Add Task with Priority

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Important task',
  priority: 3,
})
```

### Add Task with Tags

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Monthly subscription',
  tags: 'bill,payment',
})
```

### Add Task to Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Buy a new charger',
  forParentName: 'Shopping List',
  forList: 'Home',
})
```

### Paste Text as Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}paste({
  text: 'Task 1\nTask 2\nTask 3',
  forList: 'Shopping',
})
```

### Get Task ID

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getTaskID' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}getTaskID({
  task: 'My Task',
  forList: 'Work',
  saveInClipboard: 1,
})
```

### Show Task

Open a task by UID. This action is supported only on macOS.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showTask' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showTask({
  uid: 'REPLACE_WITH_TASK_UID'
})
```

### Complete Tasks

Complete tasks on macOS. Pass a comma-separated string or a nonempty array of UIDs.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'completeTasks' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}completeTasks({
  uids: [
    'TASK_UID_1',
    'TASK_UID_2'
  ]
})
```

### Launch through x-callback-url

Launch 2Do with optional callback parameters. open() continues to generate the bare app URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launch' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}launch()
```

### Callbacks

Pass xSuccess, xError, xCancel, xSource as optional payload fields. Callback URLs are encoded, including nested query parameters. The generated action query keys follow the lowercase official reference; TypeScript payload names remain camelCase.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launch' : 'twoDo' }} } from '{{ importPath }}'

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}launch({
  'xSuccess': 'myapp://done?source=2do'
})
```

## Official Documentation

* [URL scheme documentation](https://www.2doapp.com/docs/macos/url-schemes/)
