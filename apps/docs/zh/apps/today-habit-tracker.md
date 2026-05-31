---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openHabit, showHabits } from 'protocol-launcher/today-habit-tracker';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openHabitParams, showAllHabitsParams } from '../../.vitepress/constants/today-habit-tracker';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/today-habit-tracker' : 'protocol-launcher',
);
</script>

# Today Habit Tracker

[Today Habit Tracker](https://neybox.com/today-habit-tracker) 是一款习惯追踪应用。**Protocol Launcher** 允许您生成深度链接，以在 Today 中打开习惯、完成打卡、撤销打卡和显示习惯列表。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

Today Action URL 使用 `today://x-callback-url/<action>`。API 字段 `xSuccess` 和 `xError` 会生成官方文档中的 `x-success` 与 `x-error` query 参数。

### Open Habit

打开 Today，跳转到指定习惯，并取回该习惯的信息。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHabit' : 'todayHabitTracker' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todayHabitTracker.'}}openHabit({
  id: 'p14',
})
```

<div class="flex justify-center">
  <VPLink :href="openHabit(openHabitParams)" target="_self">
    打开习惯
  </VPLink>
</div>

### Check In

为指定习惯执行一次 check-in。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'checkIn' : 'todayHabitTracker' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todayHabitTracker.'}}checkIn({
  id: 'p14',
})
```

### Revoke Check-In

撤销指定习惯的一次 check-in。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'revokeCheckIn' : 'todayHabitTracker' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todayHabitTracker.'}}revokeCheckIn({
  id: 'p14',
})
```

### Show Habits

打开 Today 的习惯总览页。官方文档中的 filter 值为 `today` 和 `all`；省略 filter 时，Today 默认使用 `today`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showHabits' : 'todayHabitTracker' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todayHabitTracker.'}}showHabits({
  filter: 'all',
})
```

<div class="flex justify-center">
  <VPLink :href="showHabits(showAllHabitsParams)" target="_self">
    显示所有习惯
  </VPLink>
</div>

### x-callback-url

Today 会在 habit-specific action 的 `x-success` 中返回 habit 数据，并在 `showHabits` 的 `x-success` 中返回 habit title/id 字典和统计值。错误会通过 `x-error` 返回。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHabit' : 'todayHabitTracker' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todayHabitTracker.'}}openHabit({
  id: 'p14',
  xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=Habit Info',
  xError: 'shortcuts://x-callback-url/run-shortcut?name=Habit Error',
})
```

## 官方文档

- [Today Action URLs Documentation](https://intercom.help/today_habit_tracker/en/articles/3745810-action-urls-documentation)
