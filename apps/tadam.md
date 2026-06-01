---
url: /protocol-launcher/apps/tadam.md
---

# Tadam

[Tadam](https://tadamapp.com/) is a macOS Pomodoro timer app. **Protocol Launcher** allows you to generate official URL scheme links for Tadam.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Tadam documents `time` using the same format as the app, with examples such as `10`, `10:30`, `1h`, and `2h5min20sec`. The official page also says `open` and `mini` are enabled when set to `true` or `1`.

Tadam partially supports x-callback-url. Use the `xCallback...` helpers for the documented `tadam://x-callback-url/` prefix, or pass `xSuccess` to the regular helpers when you need the documented `x-success` parameter. `x-error` and other x-callback-url parameters are not supported.

### Start Work Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startWork' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startWork({
  time: '10min',
})
```

### Start Work Timer and Open UI

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startWork' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startWork({
  time: '5:30',
  open: true,
})
```

### Start Break Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startBreak' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startBreak({
  time: '5',
})
```

### Start Break Timer in Mini UI

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startBreak' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startBreak({
  time: '10min',
  mini: true,
})
```

### Control Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pause, resume, stop' : 'tadam' }} } from '{{ importPath }}'

const pauseUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}pause()
const resumeUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}resume()
const stopUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}stop()
```

### Open Timer UI and Help

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'help, startBreak, startWork' : 'tadam' }} } from '{{ importPath }}'

const startWorkUiUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startWork()
const breakUiUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}startBreak()
const helpUrl = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}help()
```

### x-callback-url

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStartWork' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}xCallbackStartWork({
  time: '10min',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackPause' : 'tadam' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tadam.'}}xCallbackPause({
  xSuccess: 'shortcuts://callback',
})
```

## Generated URLs

```ts
startWork({ time: '10min' })
// => 'tadam://start?time=10min'

startWork({ time: '5:30', open: true })
// => 'tadam://start?time=5:30&open=true'

startBreak({ time: '5' })
// => 'tadam://break?time=5'

startBreak({ time: '10min', mini: true })
// => 'tadam://break?time=10min&mini=true'

pause()
// => 'tadam://pause'

resume()
// => 'tadam://resume'

stop()
// => 'tadam://stop'

help()
// => 'tadam://help'

xCallbackStartWork({ time: '10min' })
// => 'tadam://x-callback-url/start?time=10min'

xCallbackPause({ xSuccess: 'shortcuts://callback' })
// => 'tadam://x-callback-url/pause?x-success=shortcuts%3A%2F%2Fcallback'
```

## Official Documentation

* [Tadam URL Schemes](https://tadamapp.com/url-schemes/)
