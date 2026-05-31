---
url: /protocol-launcher/apps/chute.md
---

# Chute

[Chute](https://www.chute.life/) is an advanced network toolbox. **Protocol Launcher** allows you to generate URL scheme links to start, stop, and toggle Chute.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Chute's official manual documents three iOS URL scheme action groups from version 1.0.2: `start | connect | on`, `stop | disconnect | off`, and `toggle | switch`. Protocol Launcher exposes helpers for the first action in each group: `start`, `stop`, and `toggle`.

The only documented option is `autoclose=true`, which automatically closes Chute after the action completes.

Chute also documents x-callback-url support with the `chute` scheme and only the `start`, `stop`, and `toggle` actions. Its example uses `x-success` and `x-error`, so this module exposes only those callback query parameters.

### Start

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'start' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}start()
```

### Start And Auto Close

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'start' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}start({
  autoclose: true,
})
```

### Stop

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stop' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}stop()
```

### Toggle

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}toggle({
  autoclose: true,
})
```

### X-Callback Start

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStart' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}xCallbackStart({
  xSuccess: 'sms://',
  xError: 'tel://',
})
```

### X-Callback Stop

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStop' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}xCallbackStop({
  xSuccess: 'sms://',
  xError: 'tel://',
})
```

### X-Callback Toggle

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackToggle' : 'chute' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'chute.'}}xCallbackToggle({
  xSuccess: 'sms://',
  xError: 'tel://',
})
```

## Generated URLs

```ts
start()
// => 'chute:///start'

start({ autoclose: true })
// => 'chute:///start?autoclose=true'

stop()
// => 'chute:///stop'

stop({ autoclose: true })
// => 'chute:///stop?autoclose=true'

toggle({ autoclose: true })
// => 'chute:///toggle?autoclose=true'

xCallbackStart({
  xSuccess: 'sms://',
  xError: 'tel://',
})
// => 'chute://x-callback-url/start?x-success=sms%3A%2F%2F&x-error=tel%3A%2F%2F'

xCallbackStop()
// => 'chute://x-callback-url/stop'

xCallbackToggle()
// => 'chute://x-callback-url/toggle'
```

## Official Documentation

* [Chute URL Scheme](https://manual.chute.life/other/url-scheme.html)
