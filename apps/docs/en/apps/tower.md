---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openRepo } from 'protocol-launcher/tower';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openRepoParams,
} from '../../.vitepress/constants/tower';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/tower' : 'protocol-launcher');
</script>

# Tower

[Tower](https://www.git-tower.com/mac/) is a Git client for Mac and Windows. **Protocol Launcher** allows you to generate Tower's documented custom URL scheme to open Tower and offer to clone a remote repository.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Repository

Tower documents this URL format as `gittower://openRepo/<remote-repository-URL>`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRepo' : 'tower' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tower.'}}openRepo({
  remoteRepositoryUrl: 'git@example.beanstalkapp.com:/project.git',
})
```
<div class="flex justify-center">
  <VPLink :href="openRepo(openRepoParams)" target="_self">
    Open in Tower
  </VPLink>
</div>
