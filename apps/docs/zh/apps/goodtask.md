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

[GoodTask](https://goodtaskapp.com/) 是一款基于 Apple 提醒事项和日历的任务管理与计划应用。**Protocol Launcher** 可以为 GoodTask 生成深度链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 GoodTask

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 GoodTask
  </VPLink>
</div>

### 打开添加界面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAdd' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}openAdd()
```

<div class="flex justify-center">
  <VPLink :href="openAdd()" target="_self">
    在 GoodTask 中打开添加界面
  </VPLink>
</div>

### 打开视图

按列表标题打开特定 GoodTask 视图，或使用官方记录的 `section=0` 形式在 iPhone 上进入列表页。

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
    打开 Today 视图
  </VPLink>
  <VPLink :href="openView(openListsPageParams)" target="_self">
    打开列表页
  </VPLink>
</div>

### 打开任务

按标题或 identifier 打开 GoodTask 任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}openTask({
  title: 'Buy milk',
})
```

<div class="flex justify-center">
  <VPLink :href="openTask(openTaskParams)" target="_self">
    在 GoodTask 中打开任务
  </VPLink>
</div>

### Smart Add

使用 GoodTask Smart Add Rules 创建任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'smartAdd' : 'goodtask' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodtask.'}}smartAdd({
  text: 'Buy milk tomorrow',
})
```

<div class="flex justify-center">
  <VPLink :href="smartAdd(smartAddParams)" target="_self">
    在 GoodTask 中 Smart Add
  </VPLink>
</div>

### 添加任务

使用官方 GoodTask `add` 参数添加任务。GoodTask 官方文档说明，设置 `due` 时应用会忽略 `dueAfter`。

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
    添加任务到列表
  </VPLink>
  <VPLink :href="add(addDueAfterParams)" target="_self">
    添加稍后到期的任务
  </VPLink>
  <VPLink :href="add(addSubtasksParams)" target="_self">
    添加带子任务的任务
  </VPLink>
</div>

### 添加任务并回调

使用 `xSuccess` 生成 GoodTask 官方记录的 x-callback-url add 形式。

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
    添加任务并返回
  </VPLink>
</div>
