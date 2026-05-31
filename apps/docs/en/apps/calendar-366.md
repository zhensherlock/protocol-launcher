---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { addEvent, addTask, show, summarize } from 'protocol-launcher/calendar-366';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addEventParams,
  addTaskParams,
  showDayParams,
  showMonthParams,
  showOverdueTasksParams,
} from '../../.vitepress/constants/calendar-366';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/calendar-366' : 'protocol-launcher');
</script>

# Calendar 366

[Calendar 366](https://calendar366.com/) is a calendar and tasks app for iPhone, iPad, Apple Watch, and Mac. **Protocol Launcher** allows you to generate Calendar 366 URL scheme links to add events and tasks, open items, show views, summarize, and import calendars.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Add Event or Task

Calendar 366 documents `cal366://add` with `type` set to `event` or `task`, and an optional natural-language `query`. `addEvent()` and `addTask()` are thin helpers around the same official command.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add, addEvent, addTask' : 'calendar366' }} } from '{{ importPath }}'

const eventUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}add({
  type: 'event',
  query: 'Meeting tomorrow 10am',
})

const eventShortcutUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}addEvent({
  query: 'Meeting tomorrow 10am',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}addTask({
  query: 'Call dentist',
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="addEvent(addEventParams)" target="_self">Add Event</VPLink>
  <VPLink :href="addTask(addTaskParams)" target="_self">Add Task</VPLink>
</div>

### Open Item

Open an event or task by `calendarItemExternalIdentifier` or identifier. Calendar 366 documents `date` as optional for tasks.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openItem' : 'calendar366' }} } from '{{ importPath }}'

const eventUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}openItem({
  type: 'event',
  id: 'ABC123',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}openItem({
  type: 'task',
  id: 'TASK123',
  date: 1717200000,
})
```

### Show View, Tasks, or Date

Use `view` with one of Calendar 366's documented view names, `tasks` with the official task-list number, and `date` as `timeIntervalSince1970`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'calendar366' }} } from '{{ importPath }}'

const monthUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}show({
  view: 'month',
})

const overdueTasksUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}show({
  tasks: 1,
})

const dayUrl = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}show({
  view: 'day',
  date: 1717200000,
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="show(showMonthParams)" target="_self">Show Month</VPLink>
  <VPLink :href="show(showOverdueTasksParams)" target="_self">Show Overdue Tasks</VPLink>
  <VPLink :href="show(showDayParams)" target="_self">Show Day</VPLink>
</div>

### Summarize

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'summarize' : 'calendar366' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}summarize()
```

<div class="flex justify-center">
  <VPLink :href="summarize()" target="_self">
    Summarize
  </VPLink>
</div>

### Import Calendar

Calendar 366 documents `file://` and `https://` calendar file URLs.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importCalendar' : 'calendar366' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendar366.'}}importCalendar({
  url: 'https://example.com/calendar.ics',
})
```

## Generated URLs

```ts
add({ type: 'event', query: 'Meeting tomorrow 10am' })
// => 'cal366://add?type=event&query=Meeting%20tomorrow%2010am'

addEvent({ query: 'Meeting tomorrow 10am' })
// => 'cal366://add?type=event&query=Meeting%20tomorrow%2010am'

addTask({ query: 'Call dentist' })
// => 'cal366://add?type=task&query=Call%20dentist'

openItem({ type: 'event', id: 'ABC123' })
// => 'cal366://open?type=event&id=ABC123'

openItem({ type: 'task', id: 'TASK123', date: 1717200000 })
// => 'cal366://open?type=task&id=TASK123&date=1717200000'

show({ view: 'month' })
// => 'cal366://show?view=month'

show({ tasks: 1 })
// => 'cal366://show?tasks=1'

show({ view: 'day', date: 1717200000 })
// => 'cal366://show?view=day&date=1717200000'

summarize()
// => 'cal366://summarize'

importCalendar({ url: 'https://example.com/calendar.ics' })
// => 'cal366://import?url=https%3A%2F%2Fexample.com%2Fcalendar.ics'
```
