---
url: /protocol-launcher/apps/timepage.md
---

# Timepage

[Timepage](https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/) is a calendar app for managing schedules, events, and weather. **Protocol Launcher** allows you to generate official Timepage URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Timepage

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}open()
```

### Add Event

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addEvent' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}addEvent({
  title: 'Team Sync',
  day: 'today',
})
```

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

### Open Event Map

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEventMap' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openEventMap({
  event: 'next',
})
```

### Open Day

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDay' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openDay({
  day: '2026-03-30',
})
```

### Open Week

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeek' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeek({
  week: 'this',
})
```

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

### Open Weather

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeather' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeather({
  day: 'today',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeather' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}openWeather({
  week: 'next',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'timepage' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timepage.'}}search({
  query: 'project review',
})
```

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

* [Timepage URL Schemes](https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/)
