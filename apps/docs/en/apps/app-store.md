---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, search, app } from 'protocol-launcher/app-store';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openParams,
  searchParams,
  appParams,
  appWithActionParams,
} from '../../.vitepress/constants/app-store';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/app-store' : 'protocol-launcher');
</script>

# App Store

[App Store](https://www.apple.com/app-store/) is a digital distribution platform developed and maintained by Apple Inc. for mobile apps on its iOS, iPadOS, and watchOS operating systems. **Protocol Launcher** allows you to generate deep links to open and configure resources in App Store.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App Store

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open App Store
  </VPLink>
</div>

### Open Specific Page

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}open({
  path: 'account/subscriptions',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    Open App Store
  </VPLink>
</div>

### Search Apps

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}search({
  query: 'things',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in App Store
  </VPLink>
</div>

### Open App Page

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'app' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}app({
  id: '836500024',
})
```

<div class="flex justify-center">
  <VPLink :href="app(appParams)" target="_self">
    Open App Page
  </VPLink>
</div>

### Open App Page with Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'app' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}app({
  id: '836500024',
  action: 'write-review',
})
```

<div class="flex justify-center">
  <VPLink :href="app(appWithActionParams)" target="_self">
    Write Review
  </VPLink>
</div>
