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

[MultiTimer](https://apps.apple.com/us/app/multitimer-multiple-timers/id973421278) 是一款适用于 iPhone、iPad、Mac、Apple Watch 和 Apple Vision 的多功能计时器应用。**Protocol Launcher** 允许您生成深度链接以在 MultiTimer 中启动、停止、暂停和恢复计时器。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 启动计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}startTimer({
  name: 'Lunch',
})
```

<div class="flex justify-center">
  <VPLink :href="startTimer(startTimerParams)" target="_self">
    启动计时器
  </VPLink>
</div>

### 在指定面板上启动计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}startTimer({
  name: 'Lunch',
  board: 'Work',
})
```

<div class="flex justify-center">
  <VPLink :href="startTimer(startTimerWithBoardParams)" target="_self">
    在面板上启动计时器
  </VPLink>
</div>

### 停止计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stopTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}stopTimer({
  name: 'Lunch',
})
```

<div class="flex justify-center">
  <VPLink :href="stopTimer(stopTimerParams)" target="_self">
    停止计时器
  </VPLink>
</div>

### 暂停计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pauseTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}pauseTimer({
  name: 'Lunch',
})
```

<div class="flex justify-center">
  <VPLink :href="pauseTimer(pauseTimerParams)" target="_self">
    暂停计时器
  </VPLink>
</div>

### 恢复计时器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resumeTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}resumeTimer({
  name: 'Lunch',
})
```

<div class="flex justify-center">
  <VPLink :href="resumeTimer(resumeTimerParams)" target="_self">
    恢复计时器
  </VPLink>
</div>
