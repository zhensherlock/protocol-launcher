---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  addEvent,
  getEvent,
  open,
  openDay,
  openEvent,
  openEventMap,
  openMonth,
  openWeather,
  openWeek,
  search,
} from 'protocol-launcher/timepage';
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

[Timepage](https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/) is a calendar app for managing schedules, events, and weather. **Protocol Launcher** allows you to generate official Timepage URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Timepage

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Timepage
  </VPLink>
</div>

### Add Event

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}addEvent({
  title: 'Team Sync',
  day: 'today',
})
```

<div class="flex justify-center">
  <VPLink :href="addEvent(addEventParams)" target="_self">
    Add Event
  </VPLink>
</div>

Use `x-success` or `x-cancel` only when you want Timepage's documented x-callback-url form:

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}addEvent({
  title: 'Team Sync',
  day: 'tomorrow',
  xSuccess: 'shortcuts://callback',
  xCancel: 'shortcuts://cancel',
})
```

### Open Event

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openEvent({
  event: 'next',
})
```

<div class="flex justify-center">
  <VPLink :href="openEvent(openEventParams)" target="_self">
    Open Next Event
  </VPLink>
</div>

### Open Event Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEventMap' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openEventMap({
  event: 'next',
})
```

<div class="flex justify-center">
  <VPLink :href="openEventMap(openEventParams)" target="_self">
    Open Next Event Map
  </VPLink>
</div>

### Open Day

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDay' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openDay({
  day: '2026-03-30',
})
```

<div class="flex justify-center">
  <VPLink :href="openDay(openDayParams)" target="_self">
    Open Day
  </VPLink>
</div>

### Open Week

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeek' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeek({
  week: 'this',
})
```

<div class="flex justify-center">
  <VPLink :href="openWeek(openWeekParams)" target="_self">
    Open Week
  </VPLink>
</div>

Numeric offsets are also supported by the official `index` parameter:

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeek' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeek({
  week: -1,
})
```

### Open Month

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMonth' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openMonth({
  month: 'next',
})
```

<div class="flex justify-center">
  <VPLink :href="openMonth(openMonthParams)" target="_self">
    Open Month
  </VPLink>
</div>

### Open Weather

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeather' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeather({
  day: 'today',
})
```

<div class="flex justify-center">
  <VPLink :href="openWeather(openWeatherDayParams)" target="_self">
    Open Weather for Today
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
    Open Weather for Next Week
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}search({
  query: 'project review',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search Timepage
  </VPLink>
</div>

### Get Event

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}getEvent({
  event: 'next',
  xSuccess: 'shortcuts://callback',
})
```

Timepage calls the `x-success` callback with `start`, `end`, `title`, and `location` parameters.

## References

- [Timepage URL Schemes](https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/)
