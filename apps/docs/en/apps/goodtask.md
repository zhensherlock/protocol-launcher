---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openAdd, openView, openTask, smartAdd, add } from 'protocol-launcher/goodtask';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openViewParams,
  openListsPageParams,
  openTaskParams,
  smartAddParams,
  addParams,
  addDueAfterParams,
  addSubtasksParams,
  addCallbackParams,
} from '../../.vitepress/constants/goodtask';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/goodtask' : 'protocol-launcher');
</script>

# GoodTask

[GoodTask](https://goodtaskapp.com/) is a task manager and planner based on Apple's Reminders and Calendars. **Protocol Launcher** allows you to generate deep links for GoodTask.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open GoodTask

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open GoodTask
  </VPLink>
</div>

### Open Add

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAdd' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}openAdd()
```

<div class="flex justify-center">
  <VPLink :href="openAdd()" target="_self">
    Open Add in GoodTask
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openView(openViewParams)" target="_self">
    Open Today View
  </VPLink>
  <VPLink :href="openView(openListsPageParams)" target="_self">
    Open Lists Page
  </VPLink>
</div>

### Open Task

Open a GoodTask task by title or identifier.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}openTask({
  title: 'Buy milk',
})
```

<div class="flex justify-center">
  <VPLink :href="openTask(openTaskParams)" target="_self">
    Open Task in GoodTask
  </VPLink>
</div>

### Smart Add

Create a task using GoodTask Smart Add Rules.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'smartAdd' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}smartAdd({
  text: 'Buy milk tomorrow',
})
```

<div class="flex justify-center">
  <VPLink :href="smartAdd(smartAddParams)" target="_self">
    Smart Add in GoodTask
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="add(addParams)" target="_self">
    Add Task to List
  </VPLink>
  <VPLink :href="add(addDueAfterParams)" target="_self">
    Add Task Due Later
  </VPLink>
  <VPLink :href="add(addSubtasksParams)" target="_self">
    Add Task with Subtasks
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="add(addCallbackParams)" target="_self">
    Add Task and Return
  </VPLink>
</div>
