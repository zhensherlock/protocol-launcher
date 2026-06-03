---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  convertValue,
  open,
  openCalculator,
  openConstants,
  openLayout,
  openRegisters,
  openSettings,
  openStack,
  openTape,
  setValue,
} from 'protocol-launcher/pcalc';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  convertValueParams,
  openCalculatorParams,
  openLayoutParams,
  setValueParams,
} from '../../.vitepress/constants/pcalc';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pcalc' : 'protocol-launcher');
</script>

# PCalc

[PCalc](https://www.pcalc.com/iphone/index.html) is a calculator for iPad, iPhone, Apple Vision Pro, Apple Watch, and Mac. **Protocol Launcher** allows you to generate official PCalc URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

Because `clearAll()` clears the current PCalc state and the x-callback helpers are callback targets, those functions are shown as code only.

### Open PCalc

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open PCalc
  </VPLink>
</div>

### Set Value

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setValue' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}setValue({
  value: 12345,
})
```

<div class="flex justify-center">
  <VPLink :href="setValue(setValueParams)" target="_self">
    Set Value in PCalc
  </VPLink>
</div>

### Convert Value

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'convertValue' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}convertValue({
  value: 12345,
})
```

<div class="flex justify-center">
  <VPLink :href="convertValue(convertValueParams)" target="_self">
    Convert Value in PCalc
  </VPLink>
</div>

### Open Constants

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openConstants' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openConstants()
```

<div class="flex justify-center">
  <VPLink :href="openConstants()" target="_self">
    Open PCalc Constants
  </VPLink>
</div>

### Open Tape

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTape' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openTape()
```

<div class="flex justify-center">
  <VPLink :href="openTape()" target="_self">
    Open PCalc Tape
  </VPLink>
</div>

### Open Registers

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRegisters' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openRegisters()
```

<div class="flex justify-center">
  <VPLink :href="openRegisters()" target="_self">
    Open PCalc Registers
  </VPLink>
</div>

### Open Stack

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStack' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openStack()
```

<div class="flex justify-center">
  <VPLink :href="openStack()" target="_self">
    Open PCalc Stack
  </VPLink>
</div>

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openSettings()
```

<div class="flex justify-center">
  <VPLink :href="openSettings()" target="_self">
    Open PCalc Settings
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="openLayout(openLayoutParams)" target="_self">
    Open PCalc Layout
  </VPLink>
</div>

### Open Calculator

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCalculator' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openCalculator({
  name: 'name',
})
```

<div class="flex justify-center">
  <VPLink :href="openCalculator(openCalculatorParams)" target="_self">
    Open PCalc Calculator
  </VPLink>
</div>

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

- [PCalc iOS Version History](https://www.pcalc.com/ios/history.html)
