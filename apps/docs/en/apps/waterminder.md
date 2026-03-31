---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, addWater, addCaffeine, addOther, logCup } from 'protocol-launcher/waterminder';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addWaterParams,
  addWaterWithTimeParams,
  addCaffeineParams,
  addCaffeineWithTimeParams,
  addOtherParams,
  addOtherWithTimeParams,
  logCupParams,
  logCupWithTimeParams,
} from '../../.vitepress/constants/waterminder';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/waterminder' : 'protocol-launcher');
</script>

# WaterMinder

[WaterMinder](https://waterminder.com) is the leading hydration tracking app trusted by millions worldwide. **Protocol Launcher** allows you to generate deep links to log water intake, caffeine, and other beverages in WaterMinder.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open WaterMinder
  </VPLink>
</div>

### Add Water

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addWater' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addWater({
  amount: 250,
})
```

<div class="flex justify-center">
  <VPLink :href="addWater(addWaterParams)" target="_self">
    Add Water in WaterMinder
  </VPLink>
</div>

### Add Water with Time

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addWater' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addWater({
  amount: 250,
  time: '22/01/2026T13:17',
})
```

<div class="flex justify-center">
  <VPLink :href="addWater(addWaterWithTimeParams)" target="_self">
    Add Water with Time in WaterMinder
  </VPLink>
</div>

### Add Caffeine

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addCaffeine' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addCaffeine({
  amount: 115,
})
```

<div class="flex justify-center">
  <VPLink :href="addCaffeine(addCaffeineParams)" target="_self">
    Add Caffeine in WaterMinder
  </VPLink>
</div>

### Add Caffeine with Time

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addCaffeine' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addCaffeine({
  amount: 115,
  time: '09/04/2026T13:17',
})
```

<div class="flex justify-center">
  <VPLink :href="addCaffeine(addCaffeineWithTimeParams)" target="_self">
    Add Caffeine with Time in WaterMinder
  </VPLink>
</div>

### Add Other Drink

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addOther' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addOther({
  amount: 250,
  type: 'carbonated_water',
})
```

<div class="flex justify-center">
  <VPLink :href="addOther(addOtherParams)" target="_self">
    Add Other Drink in WaterMinder
  </VPLink>
</div>

### Add Other Drink with Time

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addOther' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addOther({
  amount: 200,
  type: 'coffee',
  time: '09/04/2026T13:17',
})
```

<div class="flex justify-center">
  <VPLink :href="addOther(addOtherWithTimeParams)" target="_self">
    Add Other Drink with Time in WaterMinder
  </VPLink>
</div>

### Log Cup

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'logCup' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}logCup({
  amount: 250,
  cupName: 'my mug',
})
```

<div class="flex justify-center">
  <VPLink :href="logCup(logCupParams)" target="_self">
    Log Cup in WaterMinder
  </VPLink>
</div>

### Log Cup with Time

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'logCup' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}logCup({
  amount: 300,
  cupName: 'Morning Glass',
  time: '22/01/2026T08:00',
})
```

<div class="flex justify-center">
  <VPLink :href="logCup(logCupWithTimeParams)" target="_self">
    Log Cup with Time in WaterMinder
  </VPLink>
</div>
