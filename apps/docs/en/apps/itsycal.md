---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openDate } from 'protocol-launcher/itsycal';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openDateParams } from '../../.vitepress/constants/itsycal';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/itsycal' : 'protocol-launcher');
</script>

# Itsycal

[Itsycal](https://www.mowglii.com/itsycal/) is a tiny menu bar calendar for Mac. **Protocol Launcher** allows you to generate deep links to open Itsycal and navigate to specific dates.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Itsycal

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Itsycal
  </VPLink>
</div>

### Open Date

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}openDate({
  date: '2024-01-10',
})
```

<div class="flex justify-center">
  <VPLink :href="openDate(openDateParams)" target="_self">
    Open Date in Itsycal
  </VPLink>
</div>

### Open Today

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}openDate()
```

<div class="flex justify-center">
  <VPLink :href="openDate()" target="_self">
    Open Today in Itsycal
  </VPLink>
</div>
