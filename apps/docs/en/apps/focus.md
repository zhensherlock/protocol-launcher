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

[Focus](https://meaningful-things.com/focusapp) is a productivity and Pomodoro timer app. **Protocol Launcher** allows you to generate deep links to add and delete tasks, start timers, and pause the current timer in Focus.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Add Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}addTask({
  title: 'Read chapter 3',
})
```

<div class="flex justify-center">
  <VPLink :href="addTask(addTaskParams)" target="_self">
    Add Task
  </VPLink>
</div>

### Add Task with Estimate

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
    Add Estimated Task
  </VPLink>
</div>

### Add Task with Minutes Estimate

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
    Add Task with Minutes
  </VPLink>
</div>

### Delete Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTask' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}deleteTask({
  id: 'B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6',
})
```

Focus also supports deleting multiple tasks with a single `ids` string separated by `?`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTask' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}deleteTask({
  ids: 'B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6?U36SAM-3CD3-1BC4-B481-2CD590D2EDD2',
})
```

### Start Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}startTimer()
```

<div class="flex justify-center">
  <VPLink :href="startTimer(startTimerParams)" target="_self">
    Start Timer
  </VPLink>
</div>

### Start Timer with Duration

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}startTimer({
  type: 'focus',
  duration: 40,
})
```

<div class="flex justify-center">
  <VPLink :href="startTimer(startTimerWithDurationParams)" target="_self">
    Start Focus Timer
  </VPLink>
</div>

### Pause Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pauseTimer' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}pauseTimer()
```

<div class="flex justify-center">
  <VPLink :href="pauseTimer(pauseTimerParams)" target="_self">
    Pause Timer
  </VPLink>
</div>

### x-callback-url

Focus supports `x-success` and `x-error` callback parameters on every command. The add command returns the new task id as `id` on the `x-success` callback.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'focus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'focus.'}}addTask({
  title: 'Read chapter 3',
  xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=Focus Added',
  xError: 'shortcuts://x-callback-url/run-shortcut?name=Focus Error',
})
```
