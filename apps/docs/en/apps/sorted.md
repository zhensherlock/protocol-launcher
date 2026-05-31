---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/sorted' : 'protocol-launcher');
</script>

# Sorted³

[Sorted³](https://www.sortedapp.com/) is a task manager and planner built around a unified timeline. **Protocol Launcher** allows you to generate Sorted³ URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Sorted's official guide documents `sorted://x-callback-url/open` and `sorted://x-callback-url/add` for Sorted³ v3.1 or later. This module only exposes helpers for those documented actions and parameters.

The guide lists `item` values as `today`, `inbox`, `new`, and `search`. Date opening supports a `yyyy-MM-dd` date, casual dates such as `today`, `tomorrow`, and `yesterday`, `date=offset` with an `offset` value, and `date=weekday` with weekday numbers where Sunday is `1` and Monday is `2`.

The add action defaults `type` to `task`, so `addTask()` omits `type`. `addEvent()` serializes `type=event`. Comma-separated values such as `tags` and `filterByTags` are passed as strings and percent-encoded in the generated URL.

Sorted documents `lock` as a task-only parameter but does not specify its serialized true/false values, so the type accepts a caller-provided string and the examples do not invent a value.

### Open Item Views

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open, openToday, openInbox, openNew, openSearch' : 'sorted' }} } from '{{ importPath }}'

const todayUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openToday()
const inboxUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openInbox()
const newUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openNew()
const searchViewUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openSearch()
const itemUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}open({ item: 'today' })
```

### Open Date

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'sorted' }} } from '{{ importPath }}'

const dateUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openDate({
  date: '2018-07-20',
})

const casualDateUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openDate({
  date: 'tomorrow',
})
```

### Open Offset

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOffset' : 'sorted' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openOffset({
  offset: 3,
})
```

### Open Weekday

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeekday' : 'sorted' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openWeekday({
  weekday: 2,
})
```

### Open List Or Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openList, openTag' : 'sorted' }} } from '{{ importPath }}'

const listUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openList({
  list: 'Work',
  filterByTags: 'urgent,office',
})

const tagUrl = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}openTag({
  tag: 'urgent',
  filterByTags: 'office,phone',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'sorted' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}search({
  search: 'Meeting',
})
```

### Add Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'sorted' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}addTask({
  title: 'Plan launch',
  date: '2026-06-01 09:00',
  duration: 45,
  earlyAlert: 'none',
  list: 'Work',
  tags: 'urgent,office',
})
```

### Add Event

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addEvent' : 'sorted' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sorted.'}}addEvent({
  title: 'Planning meeting',
  date: '2026-06-01 10:00',
  duration: 60,
  earlyAlert: 15,
  calendar: 'Work',
  location: 'Conference Room',
})
```

## Generated URLs

```ts
openToday()
// => 'sorted://x-callback-url/open?item=today'

openInbox()
// => 'sorted://x-callback-url/open?item=inbox'

openNew()
// => 'sorted://x-callback-url/open?item=new'

openSearch()
// => 'sorted://x-callback-url/open?item=search'

openDate({ date: '2018-07-20' })
// => 'sorted://x-callback-url/open?date=2018-07-20'

openDate({ date: 'tomorrow' })
// => 'sorted://x-callback-url/open?date=tomorrow'

openOffset({ offset: 3 })
// => 'sorted://x-callback-url/open?date=offset&offset=3'

openWeekday({ weekday: 2 })
// => 'sorted://x-callback-url/open?date=weekday&weekday=2'

openList({ list: 'Work', filterByTags: 'urgent,office' })
// => 'sorted://x-callback-url/open?list=Work&filterByTags=urgent%2Coffice'

openTag({ tag: 'urgent', filterByTags: 'office,phone' })
// => 'sorted://x-callback-url/open?tag=urgent&filterByTags=office%2Cphone'

search({ search: 'Meeting' })
// => 'sorted://x-callback-url/open?search=Meeting'

addTask({
  title: 'Plan launch',
  date: '2026-06-01 09:00',
  duration: 45,
  earlyAlert: 'none',
  list: 'Work',
  tags: 'urgent,office',
})
// => 'sorted://x-callback-url/add?title=Plan%20launch&date=2026-06-01%2009%3A00&duration=45&earlyAlert=none&list=Work&tags=urgent%2Coffice'

addEvent({
  title: 'Planning meeting',
  date: '2026-06-01 10:00',
  duration: 60,
  earlyAlert: 15,
  calendar: 'Work',
  location: 'Conference Room',
})
// => 'sorted://x-callback-url/add?title=Planning%20meeting&date=2026-06-01%2010%3A00&duration=60&earlyAlert=15&type=event&calendar=Work&location=Conference%20Room'
```

## Official Documentation

- [Sorted URL Scheme](https://www.sortedapp.com/blog/url-scheme)
