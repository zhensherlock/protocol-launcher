---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  goto,
  gotoJumpTo,
  gotoPriority,
  gotoProject,
  gotoQuickAdd,
  gotoSingleTasks,
  gotoTag,
} from 'protocol-launcher/nozbe';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  gotoJumpToParams,
  gotoPriorityParams,
  gotoProjectParams,
  gotoQuickAddParams,
  gotoSingleTasksParams,
  gotoTagParams,
} from '../../.vitepress/constants/nozbe';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/nozbe' : 'protocol-launcher');
</script>

# Nozbe

[Nozbe](https://nozbe.com/) is a task and project management app for organizing work across projects, teams, and priorities.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Goto

Open a Nozbe view from a copied Nozbe path. The path is the part after `https://nozbe.app/`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'goto' : 'nozbe' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}goto({
  path: 'teams/zR17yVDEDrpBbi8x/single_tasks',
})
```

<div class="flex justify-center">
  <VPLink :href="goto({ path: 'teams/zR17yVDEDrpBbi8x/single_tasks' })" target="_self">
    Open Nozbe Path
  </VPLink>
</div>

### Team Views

Open the documented Priority, Single Tasks, Quick Add, and Jump To views for a Nozbe space.

```ts-vue [{{currentMethod}}]
import {
  {{ currentMethod === 'On-Demand' ? 'gotoPriority, gotoSingleTasks, gotoQuickAdd, gotoJumpTo' : 'nozbe' }}
} from '{{ importPath }}'

const priorityUrl = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}gotoPriority({
  teamId: 'TeamID',
})

const singleTasksUrl = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}gotoSingleTasks({
  teamId: 'zR17yVDEDrpBbi8x',
})

const quickAddUrl = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}gotoQuickAdd({
  teamId: 'zR17yVDEDrpBbi8x',
})

const jumpToUrl = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}gotoJumpTo({
  teamId: 'zR17yVDEDrpBbi8x',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="gotoPriority(gotoPriorityParams)" target="_self">
    Open Priority
  </VPLink>
  <VPLink :href="gotoSingleTasks(gotoSingleTasksParams)" target="_self">
    Open Single Tasks
  </VPLink>
  <VPLink :href="gotoQuickAdd(gotoQuickAddParams)" target="_self">
    Open Quick Add
  </VPLink>
  <VPLink :href="gotoJumpTo(gotoJumpToParams)" target="_self">
    Open Jump To
  </VPLink>
</div>

### Tag And Project

Open a specific Nozbe tag or project inside a space.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gotoTag, gotoProject' : 'nozbe' }} } from '{{ importPath }}'

const tagUrl = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}gotoTag({
  teamId: 'zR17yVDEDrpBbi8x',
  tagId: '6fxaXuTFwaqd13QV',
})

const projectUrl = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}gotoProject({
  teamId: 'zR17yVDEDrpBbi8x',
  projectId: 'mfdcza541h8g20hz',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="gotoTag(gotoTagParams)" target="_self">
    Open Nozbe Tag
  </VPLink>
  <VPLink :href="gotoProject(gotoProjectParams)" target="_self">
    Open Nozbe Project
  </VPLink>
</div>

### Add Task

Add a task to a project. Nozbe returns `task_id` on success.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'nozbe' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}addTask({
  projectId: 'u79rr9gfqszxtn45',
  name: 'Added with url',
  secret: 'REPLACE_WITH_YOUR_SECRET',
})

const taskWithOptionsUrl = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}addTask({
  projectId: 'u79rr9gfqszxtn45',
  name: 'Plan launch',
  isPriority: true,
  responsibleId: '',
  dueAt: 1717200000000,
  isAllDay: true,
  comment: 'Kickoff notes',
  secret: 'REPLACE_WITH_YOUR_SECRET',
  xSuccess: 'sourceapp://done',
  xError: 'sourceapp://error',
})
```

### Update Task

Update a task's priority and/or completion state.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateTask' : 'nozbe' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}updateTask({
  taskId: 'abcd1efgh2dcba3j',
  isCompleted: true,
  secret: 'REPLACE_WITH_YOUR_SECRET',
})
```

### Add Project

Add a project to a Nozbe workspace. Nozbe returns `project_id` on success.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addProject' : 'nozbe' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}addProject({
  teamId: 'u79rr9gfqszxtn45',
  name: 'Project added with url',
  secret: 'REPLACE_WITH_YOUR_SECRET',
})

const projectWithOptionsUrl = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}addProject({
  teamId: 'u79rr9gfqszxtn45',
  name: 'Private Project',
  description: '',
  isOpen: false,
  color: 'ultramarine',
  secret: 'REPLACE_WITH_YOUR_SECRET',
})
```

## Official Documentation

- [Nozbe X-Callback-Url schemes](https://nozbe.help/advancedfeatures/x-callback-url/)
