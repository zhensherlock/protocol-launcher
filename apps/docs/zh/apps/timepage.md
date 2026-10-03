---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { addEvent,
  getEvent,
  open,
  openDay,
  openEvent,
  openEventMap,
  openMonth,
  openWeather,
  openWeek,
  search, getDirections, messageAttendees, countdownShare, openActions, listCalendars } from 'protocol-launcher/timepage';
import { getDirectionsParams, messageAttendeesParams, countdownShareParams, listCalendarsParams } from '../../.vitepress/constants/timepage';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addEventParams,
  openDayParams,
  openEventParams,
  openMonthParams,
  openWeatherDayParams,
  openWeatherWeekParams,
  openWeekParams,
  searchParams,
} from '../../.vitepress/constants/timepage';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/timepage' : 'protocol-launcher',
);
</script>

# Timepage

[Timepage](https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/) 是一款用于管理日程、事件和天气的日历应用。**Protocol Launcher** 可以生成官方 Timepage URL scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Timepage

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Timepage
  </VPLink>
</div>

### 添加事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}addEvent({
  title: 'Team Sync',
  day: 'today',
})
```

<div class="flex justify-center">
  <VPLink :href="addEvent(addEventParams)" target="_self">
    添加事件
  </VPLink>
</div>

只有在需要 Timepage 官方 x-callback-url 形式时，才传入 `x-success` 或 `x-cancel`：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}addEvent({
  title: 'Team Sync',
  day: 'tomorrow',
  xSuccess: 'shortcuts://callback',
  xCancel: 'shortcuts://cancel',
})
```

### 打开事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openEvent({
  event: 'next',
})
```

<div class="flex justify-center">
  <VPLink :href="openEvent(openEventParams)" target="_self">
    打开下一个事件
  </VPLink>
</div>

### 打开事件地图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEventMap' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openEventMap({
  event: 'next',
})
```

<div class="flex justify-center">
  <VPLink :href="openEventMap(openEventParams)" target="_self">
    打开下一个事件地图
  </VPLink>
</div>

### 打开日期

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDay' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openDay({
  day: '2026-03-30',
})
```

<div class="flex justify-center">
  <VPLink :href="openDay(openDayParams)" target="_self">
    打开日期
  </VPLink>
</div>

### 打开周

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeek' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeek({
  week: 'this',
})
```

<div class="flex justify-center">
  <VPLink :href="openWeek(openWeekParams)" target="_self">
    打开本周
  </VPLink>
</div>

官方 `index` 参数也支持数字偏移量：

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeek' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeek({
  week: -1,
})
```

### 打开月份

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMonth' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openMonth({
  month: 'next',
})
```

<div class="flex justify-center">
  <VPLink :href="openMonth(openMonthParams)" target="_self">
    打开月份
  </VPLink>
</div>

### 打开天气

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeather' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeather({
  day: 'today',
})
```

<div class="flex justify-center">
  <VPLink :href="openWeather(openWeatherDayParams)" target="_self">
    打开今天的天气
  </VPLink>
</div>

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeather' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeather({
  week: 'next',
})
```

<div class="flex justify-center">
  <VPLink :href="openWeather(openWeatherWeekParams)" target="_self">
    打开下周天气
  </VPLink>
</div>

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}search({
  query: 'project review',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    搜索 Timepage
  </VPLink>
</div>

### 获取事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}getEvent({
  event: 'next',
  xSuccess: 'shortcuts://callback',
})
```

Timepage 会调用 `x-success` 回调，并带上 `start`、`end`、`title` 和 `location` 参数。

## 参考资料

- [Timepage URL Schemes](https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/)

### 获取路线

获取下一个活动或指定活动 ID 的路线。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getDirections' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}getDirections({
  event: 'next'
})
```

<div class="flex justify-center">
  <VPLink :href="getDirections(getDirectionsParams)" target="_self">
    获取路线
  </VPLink>
</div>

### 联系参与者

打开活动参与者的消息界面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'messageAttendees' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}messageAttendees({
  event: 'next'
})
```

<div class="flex justify-center">
  <VPLink :href="messageAttendees(messageAttendeesParams)" target="_self">
    联系参与者
  </VPLink>
</div>

### 分享倒计时

打开活动倒计时分享界面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'countdownShare' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}countdownShare({
  event: 'next'
})
```

<div class="flex justify-center">
  <VPLink :href="countdownShare(countdownShareParams)" target="_self">
    分享倒计时
  </VPLink>
</div>

### 打开 Actions

通过 Timepage 打开配套的 Actions 应用。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openActions' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openActions()
```

<div class="flex justify-center">
  <VPLink :href="openActions()" target="_self">
    打开 Actions
  </VPLink>
</div>

### 列出日历

通过 x-success 返回日历名称。writable: true 会生成 writable=1，只查询可写日历。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'listCalendars' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}listCalendars({
  xSuccess: 'myapp://x-callback-url/calendars',
  writable: true
})
```

<div class="flex justify-center">
  <VPLink :href="listCalendars(listCalendarsParams)" target="_self">
    列出日历
  </VPLink>
</div>

## 官方文档
