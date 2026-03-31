---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, view } from 'protocol-launcher/ftstreets';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { viewParams } from '../../.vitepress/constants/ftstreets';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ftstreets' : 'protocol-launcher');
</script>

# Streets

[Streets](https://www.futuretap.com/apps/streets) is the best way to browse Street View panoramas on iPhone, iPad, Apple Watch, and Mac. **Protocol Launcher** allows you to generate deep links to view Street View panoramas in Streets.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'ftstreets' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ftstreets.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Streets
  </VPLink>
</div>

### View Panorama

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'ftstreets' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ftstreets.'}}view({
  location: { lat: 48.872112, lng: 2.332977 },
  heading: 60,
  pitch: 7,
  title: 'Apple Store Opéra',
})
```

<div class="flex justify-center">
  <VPLink :href="view(viewParams)" target="_self">
    View Panorama in Streets
  </VPLink>
</div>
