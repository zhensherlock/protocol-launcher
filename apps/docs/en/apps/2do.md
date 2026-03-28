---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, showAll, showToday, showStarred, showScheduled, showList, search, addNewTask, add, paste, getTaskID } from 'protocol-launcher/2do';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  showListParams,
  searchParams,
  searchOverdueParams,
  addNewTaskParams,
  addTaskParams,
  addTaskWithPriorityParams,
  addTaskWithTagsParams,
  addTaskWithProjectParams,
  pasteParams,
  getTaskIDParams,
} from '../../.vitepress/constants/2do';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/2do' : 'protocol-launcher');
</script>

# 2Do

[2Do](https://www.2doapp.com/) is a powerful personal task manager that supports GTD methodology and more. **Protocol Launcher** allows you to generate deep links to create tasks, search, and navigate lists in 2Do.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open 2Do
  </VPLink>
</div>

### Show All Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showAll' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showAll()
```

<div class="flex justify-center">
  <VPLink :href="showAll()" target="_self">
    Show All Tasks
  </VPLink>
</div>

### Show Today Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showToday' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showToday()
```

<div class="flex justify-center">
  <VPLink :href="showToday()" target="_self">
    Show Today Tasks
  </VPLink>
</div>

### Show Starred Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showStarred' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showStarred()
```

<div class="flex justify-center">
  <VPLink :href="showStarred()" target="_self">
    Show Starred Tasks
  </VPLink>
</div>

### Show Scheduled Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showScheduled' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showScheduled()
```

<div class="flex justify-center">
  <VPLink :href="showScheduled()" target="_self">
    Show Scheduled Tasks
  </VPLink>
</div>

### Show List

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showList' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showList({
  name: 'Work',
})
```

<div class="flex justify-center">
  <VPLink :href="showList(showListParams)" target="_self">
    Show Work List
  </VPLink>
</div>

### Search Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}search({
  text: 'John',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search for John
  </VPLink>
</div>

### Search Overdue Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}search({
  text: 'type:overdue',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchOverdueParams)" target="_self">
    Search Overdue Tasks
  </VPLink>
</div>

### Add New Task (Open Screen)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addNewTask' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}addNewTask({
  ignoreDefaults: 1,
})
```

<div class="flex justify-center">
  <VPLink :href="addNewTask(addNewTaskParams)" target="_self">
    Open New Task Screen
  </VPLink>
</div>

### Add Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Dinner at 8pm',
  due: '1',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addTaskParams)" target="_self">
    Add Task
  </VPLink>
</div>

### Add Task with Priority

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Important task',
  priority: 3,
})
```

<div class="flex justify-center">
  <VPLink :href="add(addTaskWithPriorityParams)" target="_self">
    Add High Priority Task
  </VPLink>
</div>

### Add Task with Tags

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Monthly subscription',
  tags: 'bill,payment',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addTaskWithTagsParams)" target="_self">
    Add Task with Tags
  </VPLink>
</div>

### Add Task to Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Buy a new charger',
  forParentName: 'Shopping List',
  forList: 'Home',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addTaskWithProjectParams)" target="_self">
    Add Task to Project
  </VPLink>
</div>

### Paste Text as Tasks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}paste({
  text: 'Task 1\nTask 2\nTask 3',
  forList: 'Shopping',
})
```

<div class="flex justify-center">
  <VPLink :href="paste(pasteParams)" target="_self">
    Paste as Tasks
  </VPLink>
</div>

### Get Task ID

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getTaskID' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}getTaskID({
  task: 'My Task',
  forList: 'Work',
  saveInClipboard: 1,
})
```

<div class="flex justify-center">
  <VPLink :href="getTaskID(getTaskIDParams)" target="_self">
    Get Task ID
  </VPLink>
</div>
