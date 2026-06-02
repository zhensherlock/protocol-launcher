---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openUrl, search } from 'protocol-launcher/orion-browser';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openUrlParams, searchParams } from '../../.vitepress/constants/orion-browser';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/orion-browser' : 'protocol-launcher');
</script>

# Orion Browser

[Orion Browser](https://browser.kagi.com/) is a WebKit browser from Kagi for Apple devices. **Protocol Launcher** allows you to generate deep links to open URLs and search in Orion Browser for iOS.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

This module follows Orion Browser's official [FAQ](https://browser.kagi.com/faq.html), which documents the iOS `orion://open-url?url=url` and `orion://search?q=query` schemes.

### Open URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'orionBrowser' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'orionBrowser.'}}openUrl({
  url: 'https://browser.kagi.com/',
})
```

<div class="flex justify-center">
  <VPLink :href="openUrl(openUrlParams)" target="_self">
    Open URL in Orion Browser
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'orionBrowser' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'orionBrowser.'}}search({
  query: 'privacy browser',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in Orion Browser
  </VPLink>
</div>
