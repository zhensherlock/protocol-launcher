---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, cloneProject } from 'protocol-launcher/sourcetree';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  cloneProjectParams
} from '../../.vitepress/constants/sourcetree';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/sourcetree' : 'protocol-launcher');
</script>

# SourceTree

[SourceTree](https://www.sourcetreeapp.com/) is a free Git client for Windows and macOS that simplifies how you interact with your Git repositories. **Protocol Launcher** allows you to generate deep links to open and configure resources in SourceTree.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open SourceTree
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'sourcetree' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sourcetree.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open SourceTree
  </VPLink>
</div>

### Clone Project
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'sourcetree' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sourcetree.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    Open in SourceTree
  </VPLink>
</div>
