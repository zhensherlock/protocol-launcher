---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { addTask, startTimer, pauseTimer } from 'protocol-launcher/focus';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addTaskParams,
  addTaskWithEstimateParams,
  addTaskWithMinutesEstimateParams,
  startTimerParams,
  startTimerWithDurationParams,
  pauseTimerParams,
} from '../../.vitepress/constants/focus';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/focus' : 'protocol-launcher');
</script>

# Focus

[Focus](https://meaningful-things.com/focusapp) 是一款效率与番茄钟应用。**Protocol Launcher** 允许您生成深度链接以在 Focus 中添加和删除任务、启动计时器，以及暂停当前计时器。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 添加任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}addTask({
  title: 'Read chapter 3',
})
```

<div class="flex justify-center">
  <VPLink :href="addTask(addTaskParams)" target="_self">
    添加任务
  </VPLink>
</div>

### 添加带估算的任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}addTask({
  title: 'Prepare Presentation',
  note: 'Referecene mail notes',
  sessionEstimate: 8,
  due: 'monday',
})
```

<div class="flex justify-center">
  <VPLink :href="addTask(addTaskWithEstimateParams)" target="_self">
    添加估算任务
  </VPLink>
</div>

### 添加带分钟估算的任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}addTask({
  title: 'Study documentation',
  note: 'make notes',
  minutesEstimate: 120,
  due: 'tomorrow',
})
```

<div class="flex justify-center">
  <VPLink :href="addTask(addTaskWithMinutesEstimateParams)" target="_self">
    添加分钟估算任务
  </VPLink>
</div>

### 删除任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTask' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}deleteTask({
  id: 'B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6',
})
```

Focus 也支持通过一个用 `?` 分隔的 `ids` 字符串删除多个任务。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTask' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}deleteTask({
  ids: 'B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6?U36SAM-3CD3-1BC4-B481-2CD590D2EDD2',
})
```

### 启动计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}startTimer()
```

<div class="flex justify-center">
  <VPLink :href="startTimer(startTimerParams)" target="_self">
    启动计时器
  </VPLink>
</div>

### 启动指定时长的计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}startTimer({
  type: 'focus',
  duration: 40,
})
```

<div class="flex justify-center">
  <VPLink :href="startTimer(startTimerWithDurationParams)" target="_self">
    启动专注计时器
  </VPLink>
</div>

### 暂停计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pauseTimer' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}pauseTimer()
```

<div class="flex justify-center">
  <VPLink :href="pauseTimer(pauseTimerParams)" target="_self">
    暂停计时器
  </VPLink>
</div>

### x-callback-url

Focus 的每个命令都支持 `x-success` 和 `x-error` 回调参数。添加任务成功时，Focus 会在 `x-success` 回调里返回新任务的 `id`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}addTask({
  title: 'Read chapter 3',
  xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=Focus Added',
  xError: 'shortcuts://x-callback-url/run-shortcut?name=Focus Error',
})
```
