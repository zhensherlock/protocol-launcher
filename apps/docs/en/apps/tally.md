---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { open, increment, decrement, reset, get } from 'protocol-launcher/tally'
import { SelectInstallationMethod } from '../../.vitepress/components'
import { incrementParams, decrementParams, resetParams, getParams } from '../../.vitepress/constants/tally'

const currentMethod = ref('On-Demand')
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/tally' : 'protocol-launcher',
)
</script>

# Tally

[Tally](https://agiletortoise.com/tally/) is a quick counting, scorekeeping, and habit tracking app for iPhone, iPad, and Apple Watch. **Protocol Launcher** allows you to generate deep links to increment, decrement, reset, and get tally values in Tally.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Tally

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    <Button Text>
  </VPLink>
</div>

### Increment Tally

Increase count of specified tally.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'increment' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}increment({
  tallySet: 'Game Score',
  tally: 'Player 1',
})
```

<div class="flex justify-center">
  <VPLink :href="increment(incrementParams)" target="_self">
    Increment Tally
  </VPLink>
</div>

### Decrement Tally

Decrease count of specified tally.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'decrement' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}decrement({
  tallySet: 'Game Score',
  tally: 'Player 1',
})
```

<div class="flex justify-center">
  <VPLink :href="decrement(decrementParams)" target="_self">
    Decrement Tally
  </VPLink>
</div>

### Reset Tally

Reset specified tally to its initial value.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reset' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}reset({
  tallySet: 'Daily Habits',
  tally: 'Exercise',
})
```

<div class="flex justify-center">
  <VPLink :href="reset(resetParams)" target="_self">
    Reset Tally
  </VPLink>
</div>

### Get Tally Value

Get the current value of a specified tally. Requires a callback URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}get({
  tallySet: 'Daily Habits',
  tally: 'Exercise',
  'x-success': 'myapp://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="get(getParams)" target="_self">
    Get Tally Value
  </VPLink>
</div>
