---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { newEvent, newTask, open, parseEvent } from 'protocol-launcher/calendars-readdle';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  calendars5Params,
  calendars5ParseEventParams,
  parseEventParams,
} from '../../.vitepress/constants/calendars-readdle';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/calendars-readdle' : 'protocol-launcher');
</script>

# Calendars by Readdle

[Calendars by Readdle](https://readdle.com/calendars) is a calendar and tasks app for Apple devices. **Protocol Launcher** allows you to generate Calendars URL scheme links to open the app, create events, parse event names, and create tasks.

Readdle documents two official schemes: `calendarslite://` for Calendars and `calendars://` for Calendars 5.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Calendars

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}open()

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}open({
  scheme: 'calendars',
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="open()" target="_self">
    Open Calendars
  </VPLink>
  <VPLink :href="open(calendars5Params)" target="_self">
    Open Calendars 5
  </VPLink>
</div>

### New Event

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newEvent' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newEvent()

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newEvent({
  scheme: 'calendars',
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="newEvent()" target="_self">
    New Event
  </VPLink>
  <VPLink :href="newEvent(calendars5Params)" target="_self">
    New Event in Calendars 5
  </VPLink>
</div>

### Parse Event

Open the event creation dialog with a natural-language event name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parseEvent' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}parseEvent({
  text: 'new event at 8 pm',
})

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}parseEvent({
  scheme: 'calendars',
  text: 'new event at 8 pm',
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="parseEvent(parseEventParams)" target="_self">
    Parse Event
  </VPLink>
  <VPLink :href="parseEvent(calendars5ParseEventParams)" target="_self">
    Parse Event in Calendars 5
  </VPLink>
</div>

### New Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTask' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newTask()

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newTask({
  scheme: 'calendars',
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="newTask()" target="_self">
    New Task
  </VPLink>
  <VPLink :href="newTask(calendars5Params)" target="_self">
    New Task in Calendars 5
  </VPLink>
</div>

## Generated URLs

```ts
open()
// => 'calendarslite://open'

open({ scheme: 'calendars' })
// => 'calendars://open'

newEvent()
// => 'calendarslite://newevent'

newEvent({ scheme: 'calendars' })
// => 'calendars://newevent'

parseEvent({ text: 'new event at 8 pm' })
// => 'calendarslite://parse="new%20event%20at%208%20pm"'

parseEvent({ scheme: 'calendars', text: 'new event at 8 pm' })
// => 'calendars://parse="new%20event%20at%208%20pm"'

parseEvent()
// => 'calendarslite://parse'

newTask()
// => 'calendarslite://newtask'

newTask({ scheme: 'calendars' })
// => 'calendars://newtask'
```

## Official Documentation

- [Calendars URL schemes](https://support.readdle.com/calendars/tips-and-tricks/url-schemes)
- [Readdle Calendars URL schemes](https://apphelp.readdle.com/calendars/?id=1228&pg=kb.page)
