---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open } from 'protocol-launcher/orchids';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/orchids' : 'protocol-launcher');
</script>

# Orchids

[Orchids](https://www.orchids.app/) is an AI-powered app builder that enables you to build web apps, mobile apps, games, CLI tools, and AI agents. It supports every language and framework and integrates with your existing AI subscriptions. **Protocol Launcher** allows you to generate deep links to open Orchids.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Orchids
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'orchids' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'orchids.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Orchids
  </VPLink>
</div>
