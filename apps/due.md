---
url: /protocol-launcher/apps/due.md
---

# Due

[Due](https://www.dueapp.com/) is a superfast reminder app for iPhone, iPad, and Mac that helps you never forget anything again. **Protocol Launcher** allows you to generate deep links to add reminders and search in Due.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Add Reminder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}add({
  title: 'Call John',
  duedate: 1333238400,
})
```

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

### Search Reminders

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}search({
  query: '#work',
  section: 'Reminders',
})
```

### Search Timers

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}search({
  query: '#HIIT',
  section: 'Timers',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'due' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'due.'}}search({})
```
