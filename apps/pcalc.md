---
url: /protocol-launcher/apps/pcalc.md
---

# PCalc

[PCalc](https://www.pcalc.com/iphone/index.html) is a calculator for iPad, iPhone, Apple Vision Pro, Apple Watch, and Mac. **Protocol Launcher** allows you to generate official PCalc URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

Because `clearAll()` clears the current PCalc state and the x-callback helpers are callback targets, those functions are shown as code only.

### Open PCalc

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}open()
```

### Set Value

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setValue' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}setValue({
  value: 12345,
})
```

### Convert Value

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'convertValue' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}convertValue({
  value: 12345,
})
```

### Open Constants

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openConstants' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openConstants()
```

### Open Tape

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTape' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openTape()
```

### Open Registers

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRegisters' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openRegisters()
```

### Open Stack

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStack' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openStack()
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openSettings()
```

### Clear All

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clearAll' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}clearAll()
```

### Open Layout

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLayout' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openLayout({
  name: 'Engineering',
})
```

### Open Calculator

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCalculator' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openCalculator({
  name: 'name',
})
```

### X-Callback Set

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackSet' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}xCallbackSet()
```

### X-Callback Error

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackError' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}xCallbackError()
```

## Generated URLs

```ts
open()
// => 'pcalc://'

setValue({ value: 12345 })
// => 'pcalc://set/12345'

convertValue({ value: 12345 })
// => 'pcalc://convert/12345'

openConstants()
// => 'pcalc://constants'

openTape()
// => 'pcalc://tape'

openRegisters()
// => 'pcalc://registers'

openStack()
// => 'pcalc://stack'

openSettings()
// => 'pcalc://settings'

clearAll()
// => 'pcalc://ac'

openLayout({ name: 'Engineering' })
// => 'pcalc://layout/Engineering'

openCalculator({ name: 'name' })
// => 'pcalc://calculator/name'

xCallbackSet()
// => 'pcalc://x-callback-url/set'

xCallbackError()
// => 'pcalc://x-callback-url/error'
```

## Official Documentation

* [PCalc iOS Version History](https://www.pcalc.com/ios/history.html)
