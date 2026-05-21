---
url: /protocol-launcher/apps/goodtask.md
---

# GoodTask

[GoodTask](https://goodtaskapp.com/) is a to-do list, task manager, and planner based on Apple's Reminders and Calendars. **Protocol Launcher** generates GoodTask URLs from the official URL scheme: open, openadd, view, task, smartadd, and add.

GoodTask's URL scheme is `goodtask3://`. The official page also documents the x-callback-url form for actions, and its add example uses `x-success`; pass it as `xSuccess` when adding a task.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open GoodTask

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}open()
```

### Open Add

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAdd' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}openAdd()
```

### Open View

Open a specific GoodTask view by list title, or use the documented `section=0` form to go to the Lists page on iPhone.

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

### Open Task

Open a GoodTask task by title or identifier.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}openTask({
  title: 'Buy milk',
})
```

### Smart Add

Create a task using GoodTask Smart Add Rules.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'smartAdd' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}smartAdd({
  text: 'Buy milk tomorrow',
})
```

### Add Task

Add a task with the official GoodTask `add` parameters. GoodTask documents that `dueAfter` is ignored by the app when `due` is set.

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

### Add Task With Callback

Use `xSuccess` to generate GoodTask's documented x-callback-url add form.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}add({
  title: 'Title',
  list: 'To-do',
  xSuccess: 'launchpro:',
})
```
