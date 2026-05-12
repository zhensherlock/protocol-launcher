---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openDoc } from 'protocol-launcher/affine';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openDocParams,
} from '../../.vitepress/constants/affine';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/affine' : 'protocol-launcher');
</script>

# AFFiNE

[AFFiNE](https://affine.pro/) is a next-generation all-in-one workspace where you can write, draw, and plan all at once. It is a privacy-focused, local-first, and open-source alternative to Notion and Miro, featuring a hyper-fused platform with fully merged docs, whiteboards, and databases. **Protocol Launcher** allows you to generate deep links to open and configure resources in AFFiNE.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open AFFiNE
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'affine' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'affine.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open AFFiNE
  </VPLink>
</div>

### Open Document
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDoc' : 'affine' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'affine.'}}openDoc({
  workspaceId: '4f5a46cf-5eeb-4130-beda-25b438cd8c60',
  docId: 'ykchLzhvFXEUMwJu_spHY',
})
```
<div class="flex justify-center">
  <VPLink :href="openDoc(openDocParams)" target="_self">
    Open in AFFiNE
  </VPLink>
</div>
