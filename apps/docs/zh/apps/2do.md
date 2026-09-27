---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, showAll, showToday, showStarred, showScheduled, showList, search, addNewTask, add, paste, getTaskID, showTask, completeTasks, launch } from 'protocol-launcher/2do';
import { showTaskParams, completeTasksParams } from '../../.vitepress/constants/2do';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  showListParams,
  searchParams,
  searchOverdueParams,
  addNewTaskParams,
  addTaskParams,
  addTaskWithPriorityParams,
  addTaskWithTagsParams,
  addTaskWithProjectParams,
  pasteParams,
  getTaskIDParams,
} from '../../.vitepress/constants/2do';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/2do' : 'protocol-launcher');
</script>

# 2Do

[2Do](https://www.2doapp.com/) 是一款强大的个人任务管理器，支持 GTD 方法论等。**Protocol Launcher** 允许您生成深度链接以在 2Do 中创建任务、搜索和导航列表。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 2Do
  </VPLink>
</div>

### 显示所有任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showAll' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showAll()
```

<div class="flex justify-center">
  <VPLink :href="showAll()" target="_self">
    显示所有任务
  </VPLink>
</div>

### 显示今天任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showToday' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showToday()
```

<div class="flex justify-center">
  <VPLink :href="showToday()" target="_self">
    显示今天任务
  </VPLink>
</div>

### 显示星标任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showStarred' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showStarred()
```

<div class="flex justify-center">
  <VPLink :href="showStarred()" target="_self">
    显示星标任务
  </VPLink>
</div>

### 显示已安排任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showScheduled' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showScheduled()
```

<div class="flex justify-center">
  <VPLink :href="showScheduled()" target="_self">
    显示已安排任务
  </VPLink>
</div>

### 显示列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showList' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showList({
  name: 'Work',
})
```

<div class="flex justify-center">
  <VPLink :href="showList(showListParams)" target="_self">
    显示工作列表
  </VPLink>
</div>

### 搜索任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}search({
  text: 'John',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    搜索 John
  </VPLink>
</div>

### 搜索逾期任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}search({
  text: 'type:overdue',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchOverdueParams)" target="_self">
    搜索逾期任务
  </VPLink>
</div>

### 新建任务（打开界面）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addNewTask' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}addNewTask({
  ignoreDefaults: 1,
})
```

<div class="flex justify-center">
  <VPLink :href="addNewTask(addNewTaskParams)" target="_self">
    打开新建任务界面
  </VPLink>
</div>

### 添加任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Dinner at 8pm',
  due: '1',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addTaskParams)" target="_self">
    添加任务
  </VPLink>
</div>

### 添加高优先级任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Important task',
  priority: 3,
})
```

<div class="flex justify-center">
  <VPLink :href="add(addTaskWithPriorityParams)" target="_self">
    添加高优先级任务
  </VPLink>
</div>

### 添加带标签的任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Monthly subscription',
  tags: 'bill,payment',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addTaskWithTagsParams)" target="_self">
    添加带标签的任务
  </VPLink>
</div>

### 添加任务到项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}add({
  task: 'Buy a new charger',
  forParentName: 'Shopping List',
  forList: 'Home',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addTaskWithProjectParams)" target="_self">
    添加任务到项目
  </VPLink>
</div>

### 粘贴文本为任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}paste({
  text: 'Task 1\nTask 2\nTask 3',
  forList: 'Shopping',
})
```

<div class="flex justify-center">
  <VPLink :href="paste(pasteParams)" target="_self">
    粘贴为任务
  </VPLink>
</div>

### 获取任务 ID

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getTaskID' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}getTaskID({
  task: 'My Task',
  forList: 'Work',
  saveInClipboard: 1,
})
```

<div class="flex justify-center">
  <VPLink :href="getTaskID(getTaskIDParams)" target="_self">
    获取任务 ID
  </VPLink>
</div>

### 显示任务

通过 UID 打开任务。此动作仅支持 macOS。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showTask' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}showTask({
  uid: 'REPLACE_WITH_TASK_UID'
})
```

<div class="flex justify-center">
  <VPLink :href="showTask(showTaskParams)" target="_self">
    显示任务
  </VPLink>
</div>

### 完成任务

在 macOS 上完成任务。uids 可以是逗号分隔的字符串或非空 UID 数组。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'completeTasks' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}completeTasks({
  uids: [
    'TASK_UID_1',
    'TASK_UID_2'
  ]
})
```


### 通过 x-callback-url 启动

启动 2Do，可选传入回调参数。open() 仍生成裸应用 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launch' : 'twoDo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}launch()
```

<div class="flex justify-center">
  <VPLink :href="launch()" target="_self">通过 x-callback-url 启动</VPLink>
</div>


### 回调

可选参数为 xSuccess、xError、xCancel、xSource。回调 URL 会进行编码，包含嵌套查询参数。生成 URL 的动作参数名遵循官方小写规范；TypeScript 参数名仍为驼峰形式。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launch' : 'twoDo' }} } from '{{ importPath }}'

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'twoDo.'}}launch({
  'xSuccess': 'myapp://done?source=2do'
})
```

## 官方文档

- [URL scheme 官方说明](https://www.2doapp.com/docs/macos/url-schemes/)
