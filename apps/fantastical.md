---
url: /protocol-launcher/apps/fantastical.md
---

# Fantastical

[Fantastical](https://flexibits.com/fantastical) is a calendar and tasks app you won't be able to live without. Winner of the Apple Design Award and Mac App of the Year, Fantastical combines a beautiful interface with powerful features like natural language event creation, task management, and integration with Google Calendar, iCloud, Exchange, and more. **Protocol Launcher** allows you to generate deep links to create events and navigate dates in Fantastical.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Parse (Create Event)

Create a new event in Fantastical using natural language input:

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}parse({
  sentence: 'Lunch with John at 12pm tomorrow',
})
```

Create a new event using structured parameters:

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}parse({
  title: 'Team Meeting',
  start: '2026-03-30 10:00',
  end: '2026-03-30 11:00',
  location: 'Conference Room A',
  notes: 'Discuss Q2 roadmap',
})
```

Create a reminder instead of an event:

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}parse({
  title: 'Call Sarah',
  reminder: true,
  due: '2026-03-30 15:00',
  notes: 'Discuss project update',
})
```

### Show (Navigate to Date)

Jump to today's date in Fantastical:

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}show({
  date: 'today',
})
```

Jump to a specific date:

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}show({
  date: '2026-03-30',
})
```

Jump to a date using natural language:

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'fantastical' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fantastical.'}}show({
  date: 'next monday',
})
```
