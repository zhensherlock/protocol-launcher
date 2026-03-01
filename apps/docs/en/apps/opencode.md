---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openProject } from 'protocol-launcher/opencode';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openProjectParams,
} from '../../.vitepress/constants/opencode';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/opencode' : 'protocol-launcher');
</script>

# OpenCode

[OpenCode](https://opencode.ai/) is an open-source agent that helps you write code in your terminal, IDE, or desktop. **Protocol Launcher** allows you to generate deep links to open resources in OpenCode.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open IDE
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'opencode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opencode.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open OpenCode
  </VPLink>
</div>

### Open Project
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'opencode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opencode.'}}openProject({
  path: '/Users/dev/project',
})
```
<div class="flex justify-center">
  <VPLink :href="openProject(openProjectParams)" target="_self">
    Open in OpenCode
  </VPLink>
</div>
