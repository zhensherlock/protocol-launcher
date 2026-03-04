---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openSettings, openThread } from 'protocol-launcher/codex';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/codex' : 'protocol-launcher');
</script>

# Codex

Codex is an AI coding tool designed for engineering and development work, capable of handling tasks like feature development, code refactoring, and system migration. **Protocol Launcher** allows you to generate deep links to interact with Codex.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open IDE
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codex.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Codex
  </VPLink>
</div>

### Open Thread
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openThread' : 'codex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codex.'}}openThread()
```
<div class="flex justify-center">
  <VPLink :href="openThread()" target="_self">
    Open in Codex
  </VPLink>
</div>

### Open Settings
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'codex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codex.'}}openSettings()
```
<div class="flex justify-center">
  <VPLink :href="openSettings()" target="_self">
    Open in Codex
  </VPLink>
</div>
