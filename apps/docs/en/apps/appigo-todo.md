---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  showAllList,
  showFocusList,
  showStarredTasks,
  showInbox,
  showList,
  showTask,
  showProject,
  showChecklist,
  createTask,
} from 'protocol-launcher/appigo-todo';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  showListParams,
  showTaskParams,
  showProjectParams,
  showChecklistParams,
  createTaskParams,
  createTaskWithNoteParams,
  createTaskWithAdvancedRepeatParams,
} from '../../.vitepress/constants/appigo-todo';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/appigo-todo' : 'protocol-launcher');
</script>

# Appigo Todo

[TaskFire](https://appigo.com/) (formerly Todo Cloud) is a powerful to-do list app and task manager that helps you develop positive habits and achieve goals. **Protocol Launcher** allows you to generate deep links to view lists, tasks, projects and create new tasks in TaskFire.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Show All List

Show all lists in TaskFire.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showAllList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showAllList()
```

<div class="flex justify-center">
  <VPLink :href="showAllList()" target="_self">
    Show All Lists
  </VPLink>
</div>

### Show Focus List

Show the focus list in TaskFire.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showFocusList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showFocusList()
```

<div class="flex justify-center">
  <VPLink :href="showFocusList()" target="_self">
    Show Focus List
  </VPLink>
</div>

### Show Starred Tasks

Show starred tasks in TaskFire.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showStarredTasks' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showStarredTasks()
```

<div class="flex justify-center">
  <VPLink :href="showStarredTasks()" target="_self">
    Show Starred Tasks
  </VPLink>
</div>

### Show Inbox

Show inbox in TaskFire.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showInbox' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showInbox()
```

<div class="flex justify-center">
  <VPLink :href="showInbox()" target="_self">
    Show Inbox
  </VPLink>
</div>

### Show List

Show a specific list by name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showList({
  name: 'Shopping',
})
```

<div class="flex justify-center">
  <VPLink :href="showList(showListParams)" target="_self">
    Show Shopping List
  </VPLink>
</div>

### Show Task

Show a specific task by name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showTask' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showTask({
  name: 'Buy milk',
})
```

<div class="flex justify-center">
  <VPLink :href="showTask(showTaskParams)" target="_self">
    Show Task
  </VPLink>
</div>

### Show Project

Show a specific project by name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showProject' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showProject({
  name: 'Home Renovation',
})
```

<div class="flex justify-center">
  <VPLink :href="showProject(showProjectParams)" target="_self">
    Show Project
  </VPLink>
</div>

### Show Checklist

Show a specific checklist by name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showChecklist' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showChecklist({
  name: 'Grocery List',
})
```

<div class="flex justify-center">
  <VPLink :href="showChecklist(showChecklistParams)" target="_self">
    Show Checklist
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="createTask(createTaskParams)" target="_self">
    Create Task with Due Date
  </VPLink>
  <VPLink :href="createTask(createTaskWithNoteParams)" target="_self">
    Create Task with Note
  </VPLink>
  <VPLink :href="createTask(createTaskWithAdvancedRepeatParams)" target="_self">
    Create Recurring Task
  </VPLink>
</div>
