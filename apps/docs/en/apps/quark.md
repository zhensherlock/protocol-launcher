---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openLink, openCloudDrive } from 'protocol-launcher/quark';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openLinkParams } from '../../.vitepress/constants/quark';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/quark' : 'protocol-launcher');
</script>

# Quark

[Quark](https://www.quark.cn/) is an AI-powered browser developed by Alibaba, featuring AI search, AI assistant, cloud drive, and more. **Protocol Launcher** allows you to generate deep links to open URLs and cloud drive in Quark.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Browser

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'quark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'quark.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Quark
  </VPLink>
</div>

### Open Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLink' : 'quark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'quark.'}}openLink({
  url: 'www.baidu.com',
})
```

<div class="flex justify-center">
  <VPLink :href="openLink(openLinkParams)" target="_self">
    Open Link in Quark
  </VPLink>
</div>

### Open Cloud Drive

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCloudDrive' : 'quark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'quark.'}}openCloudDrive()
```

<div class="flex justify-center">
  <VPLink :href="openCloudDrive()" target="_self">
    Open Quark Cloud Drive
  </VPLink>
</div>
