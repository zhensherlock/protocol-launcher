---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, create, calc } from 'protocol-launcher/calca';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { createParams, calcParams } from '../../.vitepress/constants/calca';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/calca' : 'protocol-launcher');
</script>

# Calca

[Calca](http://calca.io/) is a text editor that loves math and gives you answers as you type. **Protocol Launcher** allows you to generate deep links to create documents and perform calculations in Calca.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Calca

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Calca
  </VPLink>
</div>

### Create Document

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}create({
  body: '2+2=>',
  title: 'Math',
})
```

<div class="flex justify-center">
  <VPLink :href="create(createParams)" target="_self">
    Create Document in Calca
  </VPLink>
</div>

### Calculate

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calc' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}calc({
  body: '2+2=>',
  xSuccess: 'app://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="calc(calcParams)" target="_self">
    Calculate in Calca
  </VPLink>
</div>
