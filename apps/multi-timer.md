---
url: /protocol-launcher/apps/multi-timer.md
---

# MultiTimer

[MultiTimer](https://apps.apple.com/us/app/multitimer-multiple-timers/id973421278) is a versatile multiple timers app for iPhone, iPad, Mac, Apple Watch, and Apple Vision. **Protocol Launcher** allows you to generate deep links to start, stop, pause, and resume timers in MultiTimer.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Start Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}startTimer({
  name: 'Lunch',
})
```

### Start Timer with Board

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}startTimer({
  name: 'Lunch',
  board: 'Work',
})
```

### Stop Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stopTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}stopTimer({
  name: 'Lunch',
})
```

### Pause Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pauseTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}pauseTimer({
  name: 'Lunch',
})
```

### Resume Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resumeTimer' : 'multiTimer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'multiTimer.'}}resumeTimer({
  name: 'Lunch',
})
```
