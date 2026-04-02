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

[Todoist](https://www.todoist.com/) 是一款待办事项和任务管理应用程序。**Protocol Launcher** 允许您生成深度链接以在 Todoist 中打开视图和添加任务。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Todoist
  </VPLink>
</div>

### 添加任务

向 Todoist 添加任务（仅限移动端）。这会打开并预填表单，但不会自动提交。

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
    向 Todoist 添加任务
  </VPLink>
</div>

### 打开快速添加

打开全局快速添加面板（仅限桌面端，9.2.0+）。这会打开并预填面板，但不会自动提交。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openQuickAdd' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openQuickAdd({
  content: 'My Task',
  description: 'This is a description',
})
```

<div class="flex justify-center">
  <VPLink :href="openQuickAdd(openQuickAddParams)" target="_self">
    在 Todoist 中打开快速添加
  </VPLink>
</div>

### 搜索

在 Todoist 中搜索（Android 移动端和桌面端 9.10.0+）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}search({
  query: 'Test & Today',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    在 Todoist 中搜索
  </VPLink>
</div>

### 打开收件箱

打开 Todoist 的收件箱视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openInbox()
```

<div class="flex justify-center">
  <VPLink :href="openInbox()" target="_self">
    在 Todoist 中打开收件箱
  </VPLink>
</div>

### 打开今天

打开 Todoist 的今天视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openToday' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openToday()
```

<div class="flex justify-center">
  <VPLink :href="openToday()" target="_self">
    在 Todoist 中打开今天
  </VPLink>
</div>

### 打开即将到期

打开 Todoist 的即将到期视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUpcoming' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openUpcoming()
```

<div class="flex justify-center">
  <VPLink :href="openUpcoming()" target="_self">
    在 Todoist 中打开即将到期
  </VPLink>
</div>

### 打开项目

通过 ID 打开特定项目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProject({
  id: '128501470',
})
```

<div class="flex justify-center">
  <VPLink :href="openProject(openProjectParams)" target="_self">
    在 Todoist 中打开项目
  </VPLink>
</div>

### 打开项目列表

打开项目列表视图。在桌面端，您可以选择按工作区 ID 过滤。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProjects' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProjects({
  workspaceId: '1234',
})
```

<div class="flex justify-center">
  <VPLink :href="openProjects(openProjectsParams)" target="_self">
    在 Todoist 中打开项目列表
  </VPLink>
</div>

### 打开标签

打开特定标签。在移动端使用标签名称，在桌面端使用标签 ID。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLabel' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openLabel({
  name: 'Urgent',
})
```

<div class="flex justify-center">
  <VPLink :href="openLabel(openLabelParams)" target="_self">
    在 Todoist 中打开标签
  </VPLink>
</div>

### 打开标签列表

打开标签列表视图（仅限移动端）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLabels' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openLabels()
```

<div class="flex justify-center">
  <VPLink :href="openLabels()" target="_self">
    在 Todoist 中打开标签列表
  </VPLink>
</div>

### 打开过滤器

通过 ID 打开特定过滤器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFilter' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFilter({
  id: '9',
})
```

<div class="flex justify-center">
  <VPLink :href="openFilter(openFilterParams)" target="_self">
    在 Todoist 中打开过滤器
  </VPLink>
</div>

### 打开过滤器列表

打开过滤器列表视图（仅限移动端）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFilters' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFilters()
```

<div class="flex justify-center">
  <VPLink :href="openFilters()" target="_self">
    在 Todoist 中打开过滤器列表
  </VPLink>
</div>

### 打开过滤器和标签

打开过滤器和标签视图（仅限桌面端）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFiltersLabels' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFiltersLabels()
```

<div class="flex justify-center">
  <VPLink :href="openFiltersLabels()" target="_self">
    在 Todoist 中打开过滤器和标签
  </VPLink>
</div>

### 打开任务

通过 ID 打开特定任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTask({
  id: '12345',
})
```

<div class="flex justify-center">
  <VPLink :href="openTask(openTaskParams)" target="_self">
    在 Todoist 中打开任务
  </VPLink>
</div>

### 打开团队收件箱

打开团队收件箱视图（仅限移动端，企业账户）。非企业账户将被重定向到普通收件箱。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTeaminbox' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTeaminbox()
```

<div class="flex justify-center">
  <VPLink :href="openTeaminbox()" target="_self">
    在 Todoist 中打开团队收件箱
  </VPLink>
</div>

### 打开模板

打开模板视图（仅限桌面端）。您可以选择通过 ID 打开特定模板。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTemplates' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTemplates({
  id: '123',
})
```

<div class="flex justify-center">
  <VPLink :href="openTemplates(openTemplatesWithIdParams)" target="_self">
    在 Todoist 中打开模板
  </VPLink>
</div>

### 打开通知

打开 Todoist 的通知视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotifications' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openNotifications()
```

<div class="flex justify-center">
  <VPLink :href="openNotifications()" target="_self">
    在 Todoist 中打开通知
  </VPLink>
</div>

### 打开个人资料

打开个人资料视图（仅限移动端）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProfile' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProfile()
```

<div class="flex justify-center">
  <VPLink :href="openProfile()" target="_self">
    在 Todoist 中打开个人资料
  </VPLink>
</div>
