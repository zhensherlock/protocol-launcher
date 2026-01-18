---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openRepo } from 'protocol-launcher/github-desktop';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openFileParams,
  openRepoParams,
} from '../../.vitepress/constants/github-desktop';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/github-desktop' : 'protocol-launcher');
</script>

# GitHub Desktop

[GitHub Desktop](https://github.com/apps/desktop) is a desktop application for version control and collaboration with GitHub. **Protocol Launcher** allows you to generate deep links to open and configure resources in GitHub Desktop.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open File
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'github' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'github.'}}openFile({
  owner: 'zhensherlock',
  repo: 'protocol-launcher',
  branch: 'main',
  path: 'packages/shared/src/index.ts',
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    Open in GitHub Desktop
  </VPLink>
</div>

### Open Repository
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRepo' : 'github' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'github.'}}openRepo({
  owner: 'zhensherlock',
  repo: 'protocol-launcher',
  branch: 'main',
})
```
<div class="flex justify-center">
  <VPLink :href="openRepo(openRepoParams)" target="_self">
    Open in GitHub Desktop
  </VPLink>
</div>
