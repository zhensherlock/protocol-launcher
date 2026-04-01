---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, createEntry, editEntry, viewEntry, filterByTag, openCalendar, openDailyPrompt, openDate, openOnThisDay, openSettings, openStarred, openTimeline } from 'protocol-launcher/day-one';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  createEntryParams,
  editEntryParams,
  viewEntryParams,
  filterByTagParams,
  openDailyPromptParams,
  openDateParams,
} from '../../.vitepress/constants/day-one';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/day-one' : 'protocol-launcher');
</script>

# Day One

[Day One](https://dayoneapp.com/) 是排名第一的日记应用，用于记录生活中的重要时刻。**Protocol Launcher** 允许您生成深度链接以在 Day One 中创建、编辑和查看日记条目。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Day One
  </VPLink>
</div>

### 创建条目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createEntry' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}createEntry({
  entry: 'Hello World',
  tags: 'work, test',
})
```

<div class="flex justify-center">
  <VPLink :href="createEntry(createEntryParams)" target="_self">
    在 Day One 中创建条目
  </VPLink>
</div>

### 编辑条目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editEntry' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}editEntry({
  entryId: '3415BB00651C4533B41F62544A775CCC',
})
```

<div class="flex justify-center">
  <VPLink :href="editEntry(editEntryParams)" target="_self">
    在 Day One 中编辑条目
  </VPLink>
</div>

### 查看条目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewEntry' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}viewEntry({
  entryId: '22B178B33B2A4149538280F9C34102C5',
})
```

<div class="flex justify-center">
  <VPLink :href="viewEntry(viewEntryParams)" target="_self">
    在 Day One 中查看条目
  </VPLink>
</div>

### 按标签筛选

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'filterByTag' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}filterByTag({
  tag: 'work',
})
```

<div class="flex justify-center">
  <VPLink :href="filterByTag(filterByTagParams)" target="_self">
    在 Day One 中按标签筛选
  </VPLink>
</div>

### 打开日历

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCalendar' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openCalendar()
```

<div class="flex justify-center">
  <VPLink :href="openCalendar()" target="_self">
    在 Day One 中打开日历
  </VPLink>
</div>

### 打开每日提示

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDailyPrompt' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openDailyPrompt({
  promptId: 'ck7zw8sybj6kv09983znvrmof',
})
```

<div class="flex justify-center">
  <VPLink :href="openDailyPrompt(openDailyPromptParams)" target="_self">
    在 Day One 中打开每日提示
  </VPLink>
</div>

### 打开日期

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openDate({
  date: '2020-04-02',
})
```

<div class="flex justify-center">
  <VPLink :href="openDate(openDateParams)" target="_self">
    在 Day One 中打开日期
  </VPLink>
</div>

### 打开历史上的今天

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOnThisDay' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openOnThisDay()
```

<div class="flex justify-center">
  <VPLink :href="openOnThisDay()" target="_self">
    在 Day One 中打开历史上的今天
  </VPLink>
</div>

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openSettings()
```

<div class="flex justify-center">
  <VPLink :href="openSettings()" target="_self">
    在 Day One 中打开设置
  </VPLink>
</div>

### 打开星标条目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStarred' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openStarred()
```

<div class="flex justify-center">
  <VPLink :href="openStarred()" target="_self">
    在 Day One 中打开星标条目
  </VPLink>
</div>

### 打开时间线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTimeline' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openTimeline()
```

<div class="flex justify-center">
  <VPLink :href="openTimeline()" target="_self">
    在 Day One 中打开时间线
  </VPLink>
</div>
