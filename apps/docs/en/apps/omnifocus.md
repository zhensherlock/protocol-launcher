---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  add,
  open,
  openFlagged,
  openForecast,
  openInbox,
  openPast,
  openPerspective,
  openProjects,
  openSoon,
  openTags,
  openTask,
  openToday,
  paste,
} from 'protocol-launcher/omnifocus';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addParams,
  addWithCallbackParams,
  addWithMetadataParams,
  pasteParams,
  pasteProjectParams,
  perspectiveParams,
  taskParams,
} from '../../.vitepress/constants/omnifocus';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/omnifocus' : 'protocol-launcher');
</script>

# OmniFocus

[OmniFocus](https://www.omnigroup.com/omnifocus/) is a professional task management app. **Protocol Launcher** allows you to generate deep links for OmniFocus.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open OmniFocus

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open OmniFocus
  </VPLink>
</div>

### Add Action

Create a new action, optionally assigning project, tag/context, due date, flag, and x-callback-url parameters.

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="add(addParams)" target="_self">
    Add Action
  </VPLink>
  <VPLink :href="add(addWithMetadataParams)" target="_self">
    Add Action with Metadata
  </VPLink>
  <VPLink :href="add(addWithCallbackParams)" target="_self">
    Add Action with Callback
  </VPLink>
</div>

### Paste TaskPaper

Paste TaskPaper content into the Inbox, Projects, or another OmniFocus target.

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="paste(pasteParams)" target="_self">
    Paste Task
  </VPLink>
  <VPLink :href="paste(pasteProjectParams)" target="_self">
    Paste Project
  </VPLink>
</div>

### Open Built-In Perspectives

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox, openForecast, openToday' : 'omnifocus' }} } from '{{ importPath }}'

const inboxUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openInbox()
const forecastUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openForecast()
const todayUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openToday()
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openInbox()" target="_self">
    Open Inbox
  </VPLink>
  <VPLink :href="openProjects()" target="_self">
    Open Projects
  </VPLink>
  <VPLink :href="openTags()" target="_self">
    Open Tags
  </VPLink>
  <VPLink :href="openFlagged()" target="_self">
    Open Flagged
  </VPLink>
  <VPLink :href="openForecast()" target="_self">
    Open Forecast
  </VPLink>
  <VPLink :href="openPast()" target="_self">
    Open Past
  </VPLink>
  <VPLink :href="openToday()" target="_self">
    Open Today
  </VPLink>
  <VPLink :href="openSoon()" target="_self">
    Open Soon
  </VPLink>
</div>

### Open Custom Perspective

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPerspective' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openPerspective({
  name: 'Due Soon',
})
```

<div class="flex justify-center">
  <VPLink :href="openPerspective(perspectiveParams)" target="_self">
    Open Custom Perspective
  </VPLink>
</div>

### Open Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openTask({
  id: 'mbp0SlWkvqq',
})
```

<div class="flex justify-center">
  <VPLink :href="openTask(taskParams)" target="_self">
    Open Task
  </VPLink>
</div>

## Official Documentation

- [OmniFocus URL Schemes](https://inside.omnifocus.com/url-schemes)
