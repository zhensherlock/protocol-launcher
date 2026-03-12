---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, search, show, addProject, updateProject, add, update, json } from 'protocol-launcher/things';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  searchParams,
  showTodayParams,
  showProjectParams,
  showByQueryParams,
  showByQueryWithFilterParams,
  addProjectParams,
  addProjectWithAreaParams,
  addProjectWithDeadlineParams,
  updateProjectParams,
  updateProjectWithAddTagsParams,
  updateProjectClearDeadlineParams,
  addTodoParams,
  addTodoWithNotesParams,
  addMultipleTodosParams,
  updateTodoParams,
  updateTodoTitleParams,
  updateTodoAppendNotesParams,
  updateTodoClearDeadlineParams,
  jsonProjectDataParams,
  jsonWithAuthTokenParams,
} from '../../.vitepress/constants/things';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/things' : 'protocol-launcher');
</script>

# Things

[Things](https://culturedcode.com/things/) is an award-winning personal task manager that helps you plan your day, manage your projects, and make real progress toward your goals. It combines a beautiful, simple design with powerful features to help you get organized and focus on what matters today. **Protocol Launcher** allows you to generate deep links to open Things and interact with your tasks.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Things

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'things' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Things
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'things' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}search({
  query: 'vacation',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in Things
  </VPLink>
</div>

### Show

Show a built-in list, project, area, tag, or to-do.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'things' }} } from '{{ importPath }}'

// Show Today list
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  id: 'today',
})

// Show project by ID
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  id: 'GJJVZHE7SNu7xcVuH2xDDh',
})

// Show by query
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  query: 'vacation',
})

// Show by query with filter
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  query: 'vacation',
  filter: 'errand',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="show(showTodayParams)" target="_self">
    Show Today List
  </VPLink>
  <VPLink :href="show(showProjectParams)" target="_self">
    Show Project
  </VPLink>
  <VPLink :href="show(showByQueryParams)" target="_self">
    Show by Query
  </VPLink>
  <VPLink :href="show(showByQueryWithFilterParams)" target="_self">
    Show by Query with Filter
  </VPLink>
</div>

### Add Project

Add a new project to Things.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addProject' : 'things' }} } from '{{ importPath }}'

// Add project with start date
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}addProject({
  title: 'Build treehouse',
  when: 'today',
})

// Add project to area
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}addProject({
  title: 'Plan Birthday Party',
  area: 'Family',
})

// Add project with deadline and area
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}addProject({
  title: 'Submit Tax',
  deadline: 'December 31',
  areaId: 'Lg8UqVPXo2SbJNiBpDBBQ',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="addProject(addProjectParams)" target="_self">
    Add Project
  </VPLink>
  <VPLink :href="addProject(addProjectWithAreaParams)" target="_self">
    Add Project to Area
  </VPLink>
  <VPLink :href="addProject(addProjectWithDeadlineParams)" target="_self">
    Add Project with Deadline
  </VPLink>
</div>

### Update Project

Update an existing project (requires auth-token).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateProject' : 'things' }} } from '{{ importPath }}'

// Update project start date
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}updateProject({
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  when: 'tomorrow',
})

// Add tags to project
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}updateProject({
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  addTags: 'Important',
})

// Clear project deadline
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}updateProject({
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  deadline: '',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="updateProject(updateProjectParams)" target="_self">
    Update Project
  </VPLink>
  <VPLink :href="updateProject(updateProjectWithAddTagsParams)" target="_self">
    Add Tags to Project
  </VPLink>
  <VPLink :href="updateProject(updateProjectClearDeadlineParams)" target="_self">
    Clear Project Deadline
  </VPLink>
</div>

### Add To-Do

Add a new to-do to Things.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'things' }} } from '{{ importPath }}'

// Add simple to-do
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}add({
  title: 'Book flights',
})

// Add to-do with notes and tags
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}add({
  title: 'Buy milk',
  notes: 'Low fat.',
  when: 'evening',
  tags: 'Errand',
})

// Add multiple to-dos
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}add({
  titles: 'Milk\nBeer\nCheese',
  list: 'Shopping',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="add(addTodoParams)" target="_self">
    Add To-Do
  </VPLink>
  <VPLink :href="add(addTodoWithNotesParams)" target="_self">
    Add To-Do with Notes
  </VPLink>
  <VPLink :href="add(addMultipleTodosParams)" target="_self">
    Add Multiple To-Dos
  </VPLink>
</div>

### Update To-Do

Update an existing to-do (requires auth-token).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'update' : 'things' }} } from '{{ importPath }}'

// Update to-do start date
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  when: 'today',
})

// Update to-do title
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  title: 'Buy bread',
})

// Append notes to to-do
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  appendNotes: 'Wholemeal bread',
})

// Clear to-do deadline
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  deadline: '',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="update(updateTodoParams)" target="_self">
    Update To-Do
  </VPLink>
  <VPLink :href="update(updateTodoTitleParams)" target="_self">
    Update To-Do Title
  </VPLink>
  <VPLink :href="update(updateTodoAppendNotesParams)" target="_self">
    Append Notes to To-Do
  </VPLink>
  <VPLink :href="update(updateTodoClearDeadlineParams)" target="_self">
    Clear To-Do Deadline
  </VPLink>
</div>

### JSON Import

Advanced JSON-based import for projects and to-dos.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'json' : 'things' }} } from '{{ importPath }}'

// Import project with to-dos
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}json({
  data: [
    {
      type: 'project',
      attributes: {
        title: 'Go Shopping',
        items: [
          {
            type: 'to-do',
            attributes: {
              title: 'Bread',
            },
          },
          {
            type: 'to-do',
            attributes: {
              title: 'Milk',
            },
          },
        ],
      },
    },
  ],
})

// Import with auth-token
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}json({
  authToken: 'xxx',
  data: [
    {
      type: 'to-do',
      attributes: {
        title: 'Milk',
      },
    },
  ],
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="json(jsonProjectDataParams)" target="_self">
    Import Project Data
  </VPLink>
  <VPLink :href="json(jsonWithAuthTokenParams)" target="_self">
    Import with Auth Token
  </VPLink>
</div>
