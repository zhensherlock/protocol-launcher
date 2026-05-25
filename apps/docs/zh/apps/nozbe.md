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

[Nozbe](https://nozbe.com/) 是一款用于按项目、团队和优先级组织工作的任务与项目管理应用。

## 用法

该库有两种使用方式：

- 从子路径 On-Demand 导入可以启用 tree-shaking，让 bundle 更小。
- 从根包 Full Import 导入更方便，但会包含所有 app 模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

### Goto

根据复制出来的 Nozbe path 打开某个 Nozbe 视图。这里的 path 指 `https://nozbe.app/` 之后的部分。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'goto' : 'nozbe' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}goto({
  path: 'teams/zR17yVDEDrpBbi8x/single_tasks',
})
```

<div class="flex justify-center">
  <VPLink :href="goto({ path: 'teams/zR17yVDEDrpBbi8x/single_tasks' })" target="_self">
    打开 Nozbe Path
  </VPLink>
</div>

### Team Views

打开 Nozbe 官方文档中的 Priority、Single Tasks、Quick Add 和 Jump To 视图。

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
    打开 Priority
  </VPLink>
  <VPLink :href="gotoSingleTasks(gotoSingleTasksParams)" target="_self">
    打开 Single Tasks
  </VPLink>
  <VPLink :href="gotoQuickAdd(gotoQuickAddParams)" target="_self">
    打开 Quick Add
  </VPLink>
  <VPLink :href="gotoJumpTo(gotoJumpToParams)" target="_self">
    打开 Jump To
  </VPLink>
</div>

### Tag And Project

打开 Nozbe 空间中的指定 tag 或 project。

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
    打开 Nozbe Tag
  </VPLink>
  <VPLink :href="gotoProject(gotoProjectParams)" target="_self">
    打开 Nozbe Project
  </VPLink>
</div>

### Add Task

向项目中添加任务。Nozbe 会在成功时返回 `task_id`。

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

更新任务的 priority 或完成状态。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateTask' : 'nozbe' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nozbe.'}}updateTask({
  taskId: 'abcd1efgh2dcba3j',
  isCompleted: true,
  secret: 'REPLACE_WITH_YOUR_SECRET',
})
```

### Add Project

在 Nozbe workspace 中添加项目。Nozbe 会在成功时返回 `project_id`。

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

## 官方文档

- [Nozbe X-Callback-Url schemes](https://nozbe.help/advancedfeatures/x-callback-url/)
