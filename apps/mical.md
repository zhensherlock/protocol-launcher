---
url: /protocol-launcher/apps/mical.md
---

# miCal

[miCal](http://micalapp.com/en/) is a feature-rich calendar app for Apple's iOS iPhone and iPad, offering a modern design optimized for iOS 16. It provides 8 different views, tasks/reminders support, natural language input, weather integration, birthday reminders, and seamless synchronization with iCloud, Google Calendar, Outlook, Exchange, and more. **Protocol Launcher** allows you to generate deep links to open miCal, show specific views, create events, and add reminders.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open miCal

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}open()
```

### Show View

Open miCal with a predefined view (dashboard, day, week, weekagenda, month, year, or list).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}show({
  view: 'weekagenda',
})
```

### Add Event

Create an event in miCal using natural language input.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}add({
  input: 'Lunch tomorrow at 12',
  notes: 'Meeting with team',
})
```

### Add Reminder

Create a reminder in miCal.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addReminder' : 'mical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mical.'}}addReminder({
  title: 'Buy groceries',
  notes: 'Milk, eggs, bread',
})
```
