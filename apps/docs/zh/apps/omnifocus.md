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

[OmniFocus](https://www.omnigroup.com/omnifocus/) 是一款专业任务管理器，可用于组织项目、动作、标签和 Forecast 视图。**Protocol Launcher** 可以生成 OmniFocus URL Scheme 链接，用于添加动作、粘贴 TaskPaper 内容，以及打开关键透视视图。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 OmniFocus

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 OmniFocus
  </VPLink>
</div>

### 添加动作

创建新的动作，并可设置项目、标签/Context、截止日期、旗标和 x-callback-url 参数。

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
    添加动作
  </VPLink>
  <VPLink :href="add(addWithMetadataParams)" target="_self">
    添加带元数据的动作
  </VPLink>
  <VPLink :href="add(addWithCallbackParams)" target="_self">
    添加带回调的动作
  </VPLink>
</div>

### 粘贴 TaskPaper

将 TaskPaper 内容粘贴到 Inbox、Projects 或其他 OmniFocus 目标位置。

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
    粘贴任务
  </VPLink>
  <VPLink :href="paste(pasteProjectParams)" target="_self">
    粘贴项目
  </VPLink>
</div>

### 打开内置透视视图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox, openForecast, openToday' : 'omnifocus' }} } from '{{ importPath }}'

const inboxUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openInbox()
const forecastUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openForecast()
const todayUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openToday()
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openInbox()" target="_self">
    打开 Inbox
  </VPLink>
  <VPLink :href="openProjects()" target="_self">
    打开 Projects
  </VPLink>
  <VPLink :href="openTags()" target="_self">
    打开 Tags
  </VPLink>
  <VPLink :href="openFlagged()" target="_self">
    打开 Flagged
  </VPLink>
  <VPLink :href="openForecast()" target="_self">
    打开 Forecast
  </VPLink>
  <VPLink :href="openPast()" target="_self">
    打开 Past
  </VPLink>
  <VPLink :href="openToday()" target="_self">
    打开 Today
  </VPLink>
  <VPLink :href="openSoon()" target="_self">
    打开 Soon
  </VPLink>
</div>

### 打开自定义透视视图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPerspective' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openPerspective({
  name: 'Due Soon',
})
```

<div class="flex justify-center">
  <VPLink :href="openPerspective(perspectiveParams)" target="_self">
    打开自定义透视视图
  </VPLink>
</div>

### 打开任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openTask({
  id: 'mbp0SlWkvqq',
})
```

<div class="flex justify-center">
  <VPLink :href="openTask(taskParams)" target="_self">
    打开任务
  </VPLink>
</div>

## 官方文档

- [OmniFocus URL Schemes](https://inside.omnifocus.com/url-schemes)
