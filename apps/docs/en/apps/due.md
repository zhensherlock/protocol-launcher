---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { add, search } from 'protocol-launcher/due';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addReminderParams,
  addRecurringReminderParams,
  addReminderWithCallbackParams,
  searchReminderParams,
  searchTimerParams,
  searchParams,
} from '../../.vitepress/constants/due';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/due' : 'protocol-launcher');
</script>

# Due

[Due](https://www.dueapp.com/) is a superfast reminder app for iPhone, iPad, and Mac that helps you never forget anything again. **Protocol Launcher** allows you to generate deep links to add reminders and search in Due.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Add Reminder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}add({
  title: 'Call John',
  duedate: 1333238400,
})
```

<div class="flex justify-center">
  <VPLink :href="add(addReminderParams)" target="_self">
    Add Reminder in Due
  </VPLink>
</div>

### Add Recurring Reminder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}add({
  title: 'Pay rent',
  duedate: 1306954800,
  timezone: 'GMT',
  recurunit: 8,
  recurfromdate: 1306954800,
})
```

<div class="flex justify-center">
  <VPLink :href="add(addRecurringReminderParams)" target="_self">
    Add Recurring Reminder in Due
  </VPLink>
</div>

### Add Reminder with Callback

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}add({
  title: 'Call John',
  secslater: 3600,
  xSource: 'SuperCal',
  xSuccess: 'supercal://x-callback-url/returnAction',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addReminderWithCallbackParams)" target="_self">
    Add Reminder with Callback in Due
  </VPLink>
</div>

### Search Reminders

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}search({
  query: '#work',
  section: 'Reminders',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchReminderParams)" target="_self">
    Search Reminders in Due
  </VPLink>
</div>

### Search Timers

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}search({
  query: '#HIIT',
  section: 'Timers',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchTimerParams)" target="_self">
    Search Timers in Due
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}search({})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in Due
  </VPLink>
</div>
