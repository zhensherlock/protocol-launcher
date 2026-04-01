---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, capture, search, showAgenda, showTasks, viewFile } from 'protocol-launcher/beorg';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  captureParams,
  captureWithDeadlineParams,
  searchParams,
  searchWithCallbackParams,
  showTasksParams,
  viewFileParams,
} from '../../.vitepress/constants/beorg';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/beorg' : 'protocol-launcher');
</script>

# Beorg

[Beorg](https://www.beorgapp.com/) is a powerful task management app for iPhone and iPad that uses plain text files in Org mode syntax. **Protocol Launcher** allows you to generate deep links to open Beorg, capture tasks, search for items, and view your agenda and tasks.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Beorg

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'beorg' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Beorg
  </VPLink>
</div>

### Capture

Add a new item to Beorg (capture).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'capture' : 'beorg' }} } from '{{ importPath }}'

// Capture with title, notes, schedule and file
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}capture({
  title: 'Shopping List',
  notes: 'Buy eggs',
  scheduled: '2017-10-03',
  file: 'shopping',
})

// Capture with deadline, template and edit option
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}capture({
  title: 'New task',
  notes: 'Complete project',
  deadline: '2017-10-10',
  template: 'Daily Review',
  edit: true,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="capture(captureParams)" target="_self">
    Capture Task
  </VPLink>
  <VPLink :href="capture(captureWithDeadlineParams)" target="_self">
    Capture with Deadline
  </VPLink>
</div>

### Search

Search for items in Beorg and return results as JSON.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'beorg' }} } from '{{ importPath }}'

// Simple search
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}search({
  search: 't bookmark',
})

// Search with callback URL
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}search({
  search: 't bookmark',
  xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=ProcessResults',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in Beorg
  </VPLink>
  <VPLink :href="search(searchWithCallbackParams)" target="_self">
    Search with Callback
  </VPLink>
</div>

### Show Agenda

Show the agenda in Beorg.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showAgenda' : 'beorg' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}showAgenda()
```

<div class="flex justify-center">
  <VPLink :href="showAgenda()" target="_self">
    Show Agenda
  </VPLink>
</div>

### Show Tasks

Show the tasks tab in Beorg, optionally with a search filter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showTasks' : 'beorg' }} } from '{{ importPath }}'

// Show all tasks
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}showTasks({})

// Show tasks with search filter
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}showTasks({
  search: 't bookmark',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="showTasks({})" target="_self">
    Show All Tasks
  </VPLink>
  <VPLink :href="showTasks(showTasksParams)" target="_self">
    Show Tasks with Filter
  </VPLink>
</div>

### View File

View a specific file in Beorg.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewFile' : 'beorg' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}viewFile({
  file: 'shopping',
})
```

<div class="flex justify-center">
  <VPLink :href="viewFile(viewFileParams)" target="_self">
    View File
  </VPLink>
</div>
