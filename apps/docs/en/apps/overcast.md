---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, add } from 'protocol-launcher/overcast';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openParams, addParams } from '../../.vitepress/constants/overcast';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/overcast' : 'protocol-launcher');
</script>

# Overcast

[Overcast](https://overcast.fm/) is a popular podcast app for iOS and macOS. **Protocol Launcher** allows you to generate deep links to subscribe to podcasts and open Overcast.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'overcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'overcast.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Overcast
  </VPLink>
</div>

### Add Podcast Subscription

Subscribe to a podcast RSS feed in Overcast using x-callback-url standard.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'overcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'overcast.'}}add({
  url: 'https://example.com/podcast/rss',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addParams)" target="_self">
    Subscribe to Podcast
  </VPLink>
</div>

### Add Podcast Subscription with Callback

Subscribe with a callback URL after successfully subscribing.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'overcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'overcast.'}}add({
  url: 'https://example.com/podcast/rss',
  xSuccess: 'myapp://success',
})
```

<div class="flex justify-center">
  <VPLink :href="add({ url: 'https://example.com/podcast/rss', xSuccess: 'myapp://success' })" target="_self">
    Subscribe with Callback
  </VPLink>
</div>
