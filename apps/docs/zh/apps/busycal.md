---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  find,
  launchIosView,
  newEvent,
  newIosEvent,
  openDate,
  openEventQuickEntry,
  openFilter,
  openIosDate,
  openTaskQuickEntry,
  subscribeCalendar,
} from 'protocol-launcher/busycal';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  findParams,
  launchIosViewParams,
  newEventParams,
  newIosEventParams,
  openDateParams,
  openFilterParams,
  openIosDateParams,
  subscribeCalendarParams,
} from '../../.vitepress/constants/busycal';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/busycal' : 'protocol-launcher');
</script>

# BusyCal

[BusyCal](https://www.busymac.com/busycal/) 是一款适用于 macOS 和 iOS 的日历应用。**Protocol Launcher** 允许你生成 BusyCal 深度链接，用于创建事件和任务、打开日期以及切换视图。

## 使用

这个库有两种使用方式：

- 从子路径按需导入，支持 Tree Shaking 并保持较小的包体积。
- 从根包完整导入更适合快速脚本或演示，但会包含所有应用模块。

生产构建建议选择按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

### macOS：新建事件和任务

使用 BusyCal 的 `busycalevent://new/` URL 搭配自然语言字符串。像 `/Work` 这样的日历名和尖括号中的 URL 都放在描述字符串里，完全遵循 BusyCal 文档；helper 只负责对路径段进行 percent-encoding。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newEvent, newTask' : 'busycal' }} } from '{{ importPath }}'

const eventUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}newEvent({
  description: 'Staff meeting Thursday at 10am',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}newTask({
  description: 'Pay Taxes April 15!!! /Personal',
})
```

<div class="flex justify-center">
  <VPLink :href="newEvent(newEventParams)" target="_self">
    创建 BusyCal 事件
  </VPLink>
</div>

### macOS：查找、日期和筛选器

`find()` 对应 `busycalevent://find/<Calendar>/<Title>/<DateTime>` 或 `busycalevent://find/<Calendar>/<Title>/<Date>`。不传 `calendar` 时会按官方格式搜索所有日历。`openFilter()` 使用 BusyCal 对 Calendar Set 和 Smart Filter 共用的 handler。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'find, openDate, openFilter' : 'busycal' }} } from '{{ importPath }}'

const findUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}find({
  title: 'Buy Toner',
})

const dateUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}openDate({
  date: '2021-05-31',
})

const filterUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}openFilter({
  name: 'home',
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="find(findParams)" target="_self">查找项目</VPLink>
  <VPLink :href="openDate(openDateParams)" target="_self">打开日期</VPLink>
  <VPLink :href="openFilter(openFilterParams)" target="_self">打开筛选器</VPLink>
</div>

### macOS：快速输入和订阅

BusyCal 官方文档列出了用于新建事件或任务的 Quick Entry URL，也列出了通过 `webcal://` URL 订阅日历。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEventQuickEntry, openTaskQuickEntry, subscribeCalendar' : 'busycal' }} } from '{{ importPath }}'

const eventQuickEntryUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}openEventQuickEntry()
const taskQuickEntryUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}openTaskQuickEntry()
const subscriptionUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}subscribeCalendar({
  url: 'webcal://example.com/calendar.ics',
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="openEventQuickEntry()" target="_self">事件快速输入</VPLink>
  <VPLink :href="openTaskQuickEntry()" target="_self">任务快速输入</VPLink>
  <VPLink :href="subscribeCalendar(subscribeCalendarParams)" target="_self">订阅日历</VPLink>
</div>

### macOS：同步、DND 和设置

BusyCal 还官方记录了强制同步、设置 Do Not Disturb 分钟数、日志级别和崩溃报告开关的 URL handler。这些 URL 会改变 BusyCal 状态，因此这里只展示生成的字符串，不提供启动按钮。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'syncCalDAV, syncWebDAV, setDoNotDisturb, setLogLevel, setCrashReporting' : 'busycal' }} } from '{{ importPath }}'

const caldavUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}syncCalDAV()
const webdavUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}syncWebDAV()
const dndUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}setDoNotDisturb({ minutes: 15 })
const loggingUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}setLogLevel({ level: 3 })
const crashReportingUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}setCrashReporting({ option: 1 })
```

### iOS

BusyCal for iOS 使用 `busycal://new/`、`busycal://date/` 和 `busycal://launch/`。对于 `newIosEvent()` 和 `newIosTask()`，只有在需要官方文档里的自动保存行为时才传入 `autosave: true` 或 `autosave: 1`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newIosEvent, newIosTask, openIosDate, launchIosView' : 'busycal' }} } from '{{ importPath }}'

const eventUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}newIosEvent({
  description: 'Baseball game tomorrow',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}newIosTask({
  description: 'Call Bob tomorrow',
})

const dateUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}openIosDate({
  date: '2021-05-31',
})

const launchUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}launchIosView({
  view: 'day',
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="newIosEvent(newIosEventParams)" target="_self">新建 iOS 事件</VPLink>
  <VPLink :href="openIosDate(openIosDateParams)" target="_self">打开 iOS 日期</VPLink>
  <VPLink :href="launchIosView(launchIosViewParams)" target="_self">打开 iOS 视图</VPLink>
</div>

## 生成的 URL

```ts
newEvent({ description: 'Staff meeting Thursday at 10am' })
// => 'busycalevent://new/Staff%20meeting%20Thursday%20at%2010am'

newTask({ description: 'Pay Taxes April 15!!! /Personal' })
// => 'busycalevent://new/-Pay%20Taxes%20April%2015!!!%20%2FPersonal'

find({ title: 'Buy Toner' })
// => 'busycalevent://find//Buy%20Toner'

openDate({ date: '2021-05-31' })
// => 'busycalevent://date/2021-05-31'

openFilter({ name: 'home' })
// => 'busycal://filter/home'

openEventQuickEntry()
// => 'busycal://newEvent'

openTaskQuickEntry()
// => 'busycal://newTask'

subscribeCalendar({ url: 'webcal://example.com/calendar.ics' })
// => 'webcal://example.com/calendar.ics'

syncCalDAV()
// => 'busycalsync://caldav'

syncWebDAV()
// => 'busycalsync://webdav'

setDoNotDisturb({ minutes: 15 })
// => 'busycaldnd://15'

setLogLevel({ level: 3 })
// => 'busycalsetting://loglevel/3'

setCrashReporting({ option: 1 })
// => 'busycalsetting://crashreporting/1'

newIosEvent({ description: 'Project review 3pm /Work', autosave: 1 })
// => 'busycal://new/Project%20review%203pm%20%2FWork//1'

newIosTask({ description: 'Call Bob tomorrow' })
// => 'busycal://new/-Call%20Bob%20tomorrow'

newIosTask({ description: 'Buy Toner /Shopping <www.amazon.com>', autosave: true })
// => 'busycal://new/-Buy%20Toner%20%2FShopping%20%3Cwww.amazon.com%3E/true'

openIosDate({ date: 'now' })
// => 'busycal://date/now'

launchIosView({ view: 'tasks' })
// => 'busycal://launch/tasks'
```

## 参考

- [BusyCal macOS URL Handler](https://www.busymac.com/docs/busycal/70621-url-handler/)
- [BusyCal iOS URL Handler](https://www.busymac.com/docs/busycalios/139998-url-handler/)
