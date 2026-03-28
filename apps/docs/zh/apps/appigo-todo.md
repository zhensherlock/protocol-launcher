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

[TaskFire](https://appigo.com/)（原名 Todo Cloud）是一款强大的待办事项应用和任务管理器，帮助您培养积极习惯并实现目标。**Protocol Launcher** 允许您生成深度链接以在 TaskFire 中查看列表、任务、项目和创建新任务。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 显示所有列表

显示 TaskFire 中的所有列表。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showAllList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showAllList()
```

<div class="flex justify-center">
  <VPLink :href="showAllList()" target="_self">
    显示所有列表
  </VPLink>
</div>

### 显示焦点列表

显示 TaskFire 中的焦点列表。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showFocusList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showFocusList()
```

<div class="flex justify-center">
  <VPLink :href="showFocusList()" target="_self">
    显示焦点列表
  </VPLink>
</div>

### 显示星标任务

显示 TaskFire 中的星标任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showStarredTasks' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showStarredTasks()
```

<div class="flex justify-center">
  <VPLink :href="showStarredTasks()" target="_self">
    显示星标任务
  </VPLink>
</div>

### 显示收件箱

显示 TaskFire 中的收件箱。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showInbox' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showInbox()
```

<div class="flex justify-center">
  <VPLink :href="showInbox()" target="_self">
    显示收件箱
  </VPLink>
</div>

### 显示列表

按名称显示特定列表。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showList' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showList({
  name: 'Shopping',
})
```

<div class="flex justify-center">
  <VPLink :href="showList(showListParams)" target="_self">
    显示购物列表
  </VPLink>
</div>

### 显示任务

按名称显示特定任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showTask' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showTask({
  name: 'Buy milk',
})
```

<div class="flex justify-center">
  <VPLink :href="showTask(showTaskParams)" target="_self">
    显示任务
  </VPLink>
</div>

### 显示项目

按名称显示特定项目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showProject' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showProject({
  name: 'Home Renovation',
})
```

<div class="flex justify-center">
  <VPLink :href="showProject(showProjectParams)" target="_self">
    显示项目
  </VPLink>
</div>

### 显示清单

按名称显示特定清单。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showChecklist' : 'appigoTodo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}showChecklist({
  name: 'Grocery List',
})
```

<div class="flex justify-center">
  <VPLink :href="showChecklist(showChecklistParams)" target="_self">
    显示清单
  </VPLink>
</div>

### 创建任务

创建新任务，可选设置截止日期、优先级、备注和重复规则。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTask' : 'appigoTodo' }} } from '{{ importPath }}'

// 创建带截止日期和优先级的任务
const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}createTask({
  name: 'Call doctor',
  dueDate: '2024-12-31',
  priority: 1,
})

// 创建带备注和每周重复的任务
const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}createTask({
  name: 'Weekly report',
  note: 'Submit to manager',
  repeat: 1,
})

// 创建高级重复任务（每周一和周三）
const url = {{currentMethod === 'On-Demand' ? '' : 'appigoTodo.'}}createTask({
  name: 'Team meeting',
  repeat: 50,
  advancedRepeat: 'Every mon and wed',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="createTask(createTaskParams)" target="_self">
    创建带截止日期的任务
  </VPLink>
  <VPLink :href="createTask(createTaskWithNoteParams)" target="_self">
    创建带备注的任务
  </VPLink>
  <VPLink :href="createTask(createTaskWithAdvancedRepeatParams)" target="_self">
    创建重复任务
  </VPLink>
</div>
