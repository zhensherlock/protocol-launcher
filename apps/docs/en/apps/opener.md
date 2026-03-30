---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { showOptions, showStoreProductDetails } from 'protocol-launcher/opener';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  showOptionsParams,
  showOptionsParamsWithAutoOpen,
  showStoreProductDetailsParams,
} from '../../.vitepress/constants/opener';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/opener' : 'protocol-launcher');
</script>

# Opener

[Opener](https://www.opener.link/) is an iOS app that allows you to open links from the web in other apps instead. **Protocol Launcher** allows you to generate deep links to show options and store product details in Opener.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Show Options

Launch Opener and show the available options to open a given URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOptions' : 'opener' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opener.'}}showOptions({
  url: 'https://twitter.com/piercedavid/status/594646584232542208',
})
```

<div class="flex justify-center">
  <VPLink :href="showOptions(showOptionsParams)" target="_self">
    Show Options in Opener
  </VPLink>
</div>

### Show Options (Disable Auto Open)

Launch Opener and show the available options without automatic opening.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOptions' : 'opener' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opener.'}}showOptions({
  url: 'https://example.com',
  allowAutoOpen: false,
})
```

<div class="flex justify-center">
  <VPLink :href="showOptions(showOptionsParamsWithAutoOpen)" target="_self">
    Show Options (No Auto Open) in Opener
  </VPLink>
</div>

### Show Store Product Details

Show the details of an iTunes product within Opener in an SKStoreProductViewController or an iOS store app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showStoreProductDetails' : 'opener' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opener.'}}showStoreProductDetails({
  id: '989565871',
})
```

<div class="flex justify-center">
  <VPLink :href="showStoreProductDetails(showStoreProductDetailsParams)" target="_self">
    Show Store Product Details in Opener
  </VPLink>
</div>
