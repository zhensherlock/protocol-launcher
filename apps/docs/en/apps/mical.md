---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { open, show, add, addReminder } from 'protocol-launcher/mical'
import { SelectInstallationMethod } from '../../.vitepress/components'
import { showParams, addParams, addReminderParams } from '../../.vitepress/constants/mical'

const currentMethod = ref('On-Demand')
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/mical' : 'protocol-launcher',
)
</script>

# miCal

[miCal](http://micalapp.com/en/) is a feature-rich calendar app for Apple's iOS iPhone and iPad, offering a modern design optimized for iOS 16. It provides 8 different views, tasks/reminders support, natural language input, weather integration, birthday reminders, and seamless synchronization with iCloud, Google Calendar, Outlook, Exchange, and more. **Protocol Launcher** allows you to generate deep links to open miCal, show specific views, create events, and add reminders.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open miCal

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open miCal
  </VPLink>
</div>

### Show View

Open miCal with a predefined view (dashboard, day, week, weekagenda, month, year, or list).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}show({
  view: 'weekagenda',
})
```

<div class="flex justify-center">
  <VPLink :href="show(showParams)" target="_self">
    Show Week Agenda in miCal
  </VPLink>
</div>

### Add Event

Create an event in miCal using natural language input.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}add({
  input: 'Lunch tomorrow at 12',
  notes: 'Meeting with team',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addParams)" target="_self">
    Add Event in miCal
  </VPLink>
</div>

### Add Reminder

Create a reminder in miCal.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addReminder' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}addReminder({
  title: 'Buy groceries',
  notes: 'Milk, eggs, bread',
})
```

<div class="flex justify-center">
  <VPLink :href="addReminder(addReminderParams)" target="_self">
    Add Reminder in miCal
  </VPLink>
</div>
