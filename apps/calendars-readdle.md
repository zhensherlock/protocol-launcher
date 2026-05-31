---
url: /protocol-launcher/apps/calendars-readdle.md
---

# Calendars by Readdle

[Calendars by Readdle](https://readdle.com/calendars) is a calendar and tasks app for Apple devices. **Protocol Launcher** allows you to generate Calendars URL scheme links to open the app, create events, parse event names, and create tasks.

Readdle documents two official schemes: `calendarslite://` for Calendars and `calendars://` for Calendars 5.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Calendars

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}open()

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}open({
  scheme: 'calendars',
})
```

### New Event

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newEvent' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newEvent()

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newEvent({
  scheme: 'calendars',
})
```

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

### New Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTask' : 'calendarsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newTask()

const calendars5Url = {{currentMethod === 'On-Demand' ? '' : 'calendarsReaddle.'}}newTask({
  scheme: 'calendars',
})
```

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

* [Calendars URL schemes](https://support.readdle.com/calendars/tips-and-tricks/url-schemes)
* [Readdle Calendars URL schemes](https://apphelp.readdle.com/calendars/?id=1228\&pg=kb.page)
