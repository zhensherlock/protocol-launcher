---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  open,
  addTask,
  openQuickAdd,
  search,
  openInbox,
  openToday,
  openUpcoming,
  openProject,
  openProjects,
  openLabel,
  openLabels,
  openFilter,
  openFilters,
  openFiltersLabels,
  openTask,
  openTeaminbox,
  openTemplates,
  openNotifications,
  openProfile,
} from 'protocol-launcher/todoist';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addTaskParams,
  openQuickAddParams,
  searchParams,
  openProjectParams,
  openProjectsParams,
  openLabelParams,
  openLabelWithIdParams,
  openFilterParams,
  openTaskParams,
  openTemplatesWithIdParams,
} from '../../.vitepress/constants/todoist';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/todoist' : 'protocol-launcher');
</script>

# Todoist

[Todoist](https://www.todoist.com/) is a to-do list and task management application. **Protocol Launcher** allows you to generate deep links to open views and add tasks in Todoist.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Todoist
  </VPLink>
</div>

### Add Task

Add a task to Todoist (Mobile only). This opens and pre-fills the form but does not automatically submit.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}addTask({
  content: 'Buy Milk',
  date: 'Tomorrow @ 14:00',
  priority: 4,
})
```

<div class="flex justify-center">
  <VPLink :href="addTask(addTaskParams)" target="_self">
    Add Task to Todoist
  </VPLink>
</div>

### Open Quick Add

Open the Global Quick Add panel (Desktop only, 9.2.0+). This opens and pre-fills the panel but does not automatically submit.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openQuickAdd' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openQuickAdd({
  content: 'My Task',
  description: 'This is a description',
})
```

<div class="flex justify-center">
  <VPLink :href="openQuickAdd(openQuickAddParams)" target="_self">
    Open Quick Add in Todoist
  </VPLink>
</div>

### Search

Search in Todoist (Android mobile and Desktop 9.10.0+).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}search({
  query: 'Test & Today',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in Todoist
  </VPLink>
</div>

### Open Inbox

Open the Inbox view in Todoist.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openInbox()
```

<div class="flex justify-center">
  <VPLink :href="openInbox()" target="_self">
    Open Inbox in Todoist
  </VPLink>
</div>

### Open Today

Open the Today view in Todoist.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openToday' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openToday()
```

<div class="flex justify-center">
  <VPLink :href="openToday()" target="_self">
    Open Today in Todoist
  </VPLink>
</div>

### Open Upcoming

Open the Upcoming view in Todoist.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUpcoming' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openUpcoming()
```

<div class="flex justify-center">
  <VPLink :href="openUpcoming()" target="_self">
    Open Upcoming in Todoist
  </VPLink>
</div>

### Open Project

Open a specific project by ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProject({
  id: '128501470',
})
```

<div class="flex justify-center">
  <VPLink :href="openProject(openProjectParams)" target="_self">
    Open Project in Todoist
  </VPLink>
</div>

### Open Projects

Open the Projects view. On desktop, you can optionally filter by workspace ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProjects' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProjects({
  workspaceId: '1234',
})
```

<div class="flex justify-center">
  <VPLink :href="openProjects(openProjectsParams)" target="_self">
    Open Projects in Todoist
  </VPLink>
</div>

### Open Label

Open a specific label. On mobile, use label name. On desktop, use label ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLabel' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openLabel({
  name: 'Urgent',
})
```

<div class="flex justify-center">
  <VPLink :href="openLabel(openLabelParams)" target="_self">
    Open Label in Todoist
  </VPLink>
</div>

### Open Labels

Open the Labels view (Mobile only).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLabels' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openLabels()
```

<div class="flex justify-center">
  <VPLink :href="openLabels()" target="_self">
    Open Labels in Todoist
  </VPLink>
</div>

### Open Filter

Open a specific filter by ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFilter' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFilter({
  id: '9',
})
```

<div class="flex justify-center">
  <VPLink :href="openFilter(openFilterParams)" target="_self">
    Open Filter in Todoist
  </VPLink>
</div>

### Open Filters

Open the Filters view (Mobile only).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFilters' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFilters()
```

<div class="flex justify-center">
  <VPLink :href="openFilters()" target="_self">
    Open Filters in Todoist
  </VPLink>
</div>

### Open Filters & Labels

Open the Filters & Labels view (Desktop only).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFiltersLabels' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFiltersLabels()
```

<div class="flex justify-center">
  <VPLink :href="openFiltersLabels()" target="_self">
    Open Filters & Labels in Todoist
  </VPLink>
</div>

### Open Task

Open a specific task by ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTask({
  id: '12345',
})
```

<div class="flex justify-center">
  <VPLink :href="openTask(openTaskParams)" target="_self">
    Open Task in Todoist
  </VPLink>
</div>

### Open Team Inbox

Open the Team Inbox view (Mobile only, Business accounts). Non-business accounts will be redirected to inbox.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTeaminbox' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTeaminbox()
```

<div class="flex justify-center">
  <VPLink :href="openTeaminbox()" target="_self">
    Open Team Inbox in Todoist
  </VPLink>
</div>

### Open Templates

Open the Templates view (Desktop only). You can optionally open a specific template by ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTemplates' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTemplates({
  id: '123',
})
```

<div class="flex justify-center">
  <VPLink :href="openTemplates(openTemplatesWithIdParams)" target="_self">
    Open Templates in Todoist
  </VPLink>
</div>

### Open Notifications

Open the Notifications view in Todoist.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotifications' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openNotifications()
```

<div class="flex justify-center">
  <VPLink :href="openNotifications()" target="_self">
    Open Notifications in Todoist
  </VPLink>
</div>

### Open Profile

Open the Profile view (Mobile only).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProfile' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProfile()
```

<div class="flex justify-center">
  <VPLink :href="openProfile()" target="_self">
    Open Profile in Todoist
  </VPLink>
</div>
