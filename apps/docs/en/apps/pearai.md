---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, openFolder, openRemote, openSettings, cloneProject } from 'protocol-launcher/pearai';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
  openFolderParams,
  openRemoteParams,
  cloneProjectParams,
  openSettingsParams,
} from '../../.vitepress/constants/pearai';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pearai' : 'protocol-launcher');
</script>

# PearAI

[PearAI](https://www.trypear.ai/) is an Open Source AI Code Editor (Fork of VSCode). **Protocol Launcher** allows you to generate deep links to open and configure resources in PearAI.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open IDE
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open PearAI
  </VPLink>
</div>

### Open File
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    Open in PearAI
  </VPLink>
</div>

### Open Folder
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    Open in PearAI
  </VPLink>
</div>

### Open Remote
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```
<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    Open in PearAI
  </VPLink>
</div>

### Clone Project
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    Open in PearAI
  </VPLink>
</div>

### Open Settings
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
<div class="flex justify-center">
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    Open in PearAI
  </VPLink>
</div>
