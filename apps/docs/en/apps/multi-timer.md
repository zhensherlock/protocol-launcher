---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { startTimer, stopTimer, pauseTimer, resumeTimer } from 'protocol-launcher/multi-timer';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  startTimerParams,
  startTimerWithBoardParams,
  stopTimerParams,
  pauseTimerParams,
  resumeTimerParams,
} from '../../.vitepress/constants/multi-timer';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/multi-timer' : 'protocol-launcher');
</script>

# MultiTimer

[MultiTimer](https://apps.apple.com/us/app/multitimer-multiple-timers/id973421278) is a versatile multiple timers app for iPhone, iPad, Mac, Apple Watch, and Apple Vision. **Protocol Launcher** allows you to generate deep links to start, stop, pause, and resume timers in MultiTimer.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Start Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}startTimer({
  name: 'Lunch',
})
```

<div class="flex justify-center">
  <VPLink :href="startTimer(startTimerParams)" target="_self">
    Start Timer
  </VPLink>
</div>

### Start Timer with Board

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}startTimer({
  name: 'Lunch',
  board: 'Work',
})
```

<div class="flex justify-center">
  <VPLink :href="startTimer(startTimerWithBoardParams)" target="_self">
    Start Timer on Board
  </VPLink>
</div>

### Stop Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stopTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}stopTimer({
  name: 'Lunch',
})
```

<div class="flex justify-center">
  <VPLink :href="stopTimer(stopTimerParams)" target="_self">
    Stop Timer
  </VPLink>
</div>

### Pause Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pauseTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}pauseTimer({
  name: 'Lunch',
})
```

<div class="flex justify-center">
  <VPLink :href="pauseTimer(pauseTimerParams)" target="_self">
    Pause Timer
  </VPLink>
</div>

### Resume Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resumeTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}resumeTimer({
  name: 'Lunch',
})
```

<div class="flex justify-center">
  <VPLink :href="resumeTimer(resumeTimerParams)" target="_self">
    Resume Timer
  </VPLink>
</div>
