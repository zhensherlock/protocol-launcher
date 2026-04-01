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

[Beorg](https://www.beorgapp.com/) 是一款适用于 iPhone 和 iPad 的强大任务管理应用，使用 Org 模式语法的纯文本文件。**Protocol Launcher** 允许您生成深度链接以打开 Beorg、捕获任务、搜索项目以及查看您的议程和任务。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Beorg

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'beorg' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Beorg
  </VPLink>
</div>

### 捕获任务

添加新项目到 Beorg（捕获）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'capture' : 'beorg' }} } from '{{ importPath }}'

// 捕获带有标题、笔记、计划和文件的任
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}capture({
  title: 'Shopping List',
  notes: 'Buy eggs',
  scheduled: '2017-10-03',
  file: 'shopping',
})

// 捕获带有截止日期、模板和编辑选项的任务
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
    捕获任务
  </VPLink>
  <VPLink :href="capture(captureWithDeadlineParams)" target="_self">
    捕获带截止日期的任务
  </VPLink>
</div>

### 搜索

在 Beorg 中搜索项目并以 JSON 格式返回结果。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'beorg' }} } from '{{ importPath }}'

// 简单搜索
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}search({
  search: 't bookmark',
})

// 带回调 URL 的搜索
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}search({
  search: 't bookmark',
  xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=ProcessResults',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="search(searchParams)" target="_self">
    在 Beorg 中搜索
  </VPLink>
  <VPLink :href="search(searchWithCallbackParams)" target="_self">
    带回调的搜索
  </VPLink>
</div>

### 显示议程

在 Beorg 中显示议程。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showAgenda' : 'beorg' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}showAgenda()
```

<div class="flex justify-center">
  <VPLink :href="showAgenda()" target="_self">
    显示议程
  </VPLink>
</div>

### 显示任务

在 Beorg 中显示任务标签页，可选择带搜索过滤器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showTasks' : 'beorg' }} } from '{{ importPath }}'

// 显示所有任务
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}showTasks({})

// 显示带搜索过滤器的任务
const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}showTasks({
  search: 't bookmark',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="showTasks({})" target="_self">
    显示所有任务
  </VPLink>
  <VPLink :href="showTasks(showTasksParams)" target="_self">
    显示带过滤器的任务
  </VPLink>
</div>

### 查看文件

在 Beorg 中查看特定文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewFile' : 'beorg' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'beorg.'}}viewFile({
  file: 'shopping',
})
```

<div class="flex justify-center">
  <VPLink :href="viewFile(viewFileParams)" target="_self">
    查看文件
  </VPLink>
</div>
