---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open } from 'protocol-launcher/telegram';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/telegram' : 'protocol-launcher');
</script>

# Telegram

[Telegram](https://telegram.org) is a cloud-based instant messaging platform. **Protocol Launcher** allows you to generate deep links to open and configure resources in Telegram.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Telegram

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'telegram' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'telegram.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Telegram
  </VPLink>
</div>
