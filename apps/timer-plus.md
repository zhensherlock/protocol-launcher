---
url: /protocol-launcher/apps/timer-plus.md
---

# Timer+

[Timer+](https://www.timerplusapp.com/) is an iOS timer and stopwatch app. **Protocol Launcher** allows you to generate official URL scheme links to start quick timers and quick stopwatches in Timer+.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Start Quick Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickTimer' : 'timerPlus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timerPlus.'}}quickTimer({
  minutes: 50,
  name: 'Laundry',
})
```

Timer+ accepts any combination of `hours`, `minutes`, and `seconds`. Its official documentation states the total duration is limited to 100 hours, and that omitting the duration or setting it to 0 opens the new Quick Timer screen.

### Start Quick Timer with Hours, Minutes, and Seconds

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickTimer' : 'timerPlus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timerPlus.'}}quickTimer({
  hours: 1,
  minutes: 23,
  seconds: 45,
})
```

### Start Quick Stopwatch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickStopwatch' : 'timerPlus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timerPlus.'}}quickStopwatch({
  name: 'Plank',
})
```

### x-callback-url

Timer+ partially supports x-callback-url. Its official documentation accepts only `x-source` and `x-success`, and uses the `timerplus://x-callback-url/` prefix instead of `timerplus://app/`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickTimer' : 'timerPlus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timerPlus.'}}quickTimer({
  hours: 1,
  minutes: 5,
  seconds: 30,
  name: 'Tea',
  xSource: 'Shortcuts',
  xSuccess: 'shortcuts://callback',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickStopwatch' : 'timerPlus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timerPlus.'}}quickStopwatch({
  name: 'Plank',
  xSource: 'Shortcuts',
  xSuccess: 'shortcuts://callback',
})
```

## Official Documentation

* [Timer+ URL scheme](https://www.timerplusapp.com/help/BkG3d6F_d-/)
