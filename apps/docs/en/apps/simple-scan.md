---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, scan } from 'protocol-launcher/simple-scan';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { scanParams } from '../../.vitepress/constants/simple-scan';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/simple-scan' : 'protocol-launcher');
</script>

# Simple Scan

[Simple Scan](https://agiletortoise.com/simple-scan/) is a quick, easy way to scan paper documents to optimized, searchable PDF documents (or images) and send them almost anywhere. **Protocol Launcher** allows you to generate deep links to open Simple Scan and trigger scanning with predefined destinations and formats.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Simple Scan

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'simpleScan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'simpleScan.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Simple Scan
  </VPLink>
</div>

### Scan

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scan' : 'simpleScan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'simpleScan.'}}scan({
  destination: 'email',
  format: 'pdf',
  quality: 'original',
})
```

<div class="flex justify-center">
  <VPLink :href="scan(scanParams)" target="_self">
    Scan with Simple Scan
  </VPLink>
</div>
