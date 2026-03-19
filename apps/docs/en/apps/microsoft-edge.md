---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openUrl } from 'protocol-launcher/microsoft-edge';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openUrlParams } from '../../.vitepress/constants/microsoft-edge';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/microsoft-edge' : 'protocol-launcher');
</script>

# Microsoft Edge

[Microsoft Edge](https://www.microsoft.com/zh-cn/edge/?form=MA13FJ) is a web browser developed by Microsoft based on the Chromium open-source project. **Protocol Launcher** allows you to generate deep links to open URLs in Microsoft Edge.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Browser

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'microsoftEdge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftEdge.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Microsoft Edge
  </VPLink>
</div>

### Open URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'microsoftEdge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftEdge.'}}openUrl({
  url: 'https://www.google.com/',
})
```

<div class="flex justify-center">
  <VPLink :href="openUrl(openUrlParams)" target="_self">
    Open URL in Microsoft Edge
  </VPLink>
</div>
