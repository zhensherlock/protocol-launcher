---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, openFolder, cloneProject, openExtension, register } from 'protocol-launcher/nova';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
  openFolderParams,
  cloneProjectParams,
  openExtensionParams,
  registerParams,
} from '../../.vitepress/constants/nova';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/nova' : 'protocol-launcher');
</script>

# Nova

[Nova](https://nova.app/) is a fast, flexible, and powerful native text editor for macOS. **Protocol Launcher** allows you to generate deep links to open files, folders, clone repositories, and more in Nova.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open IDE
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Nova
  </VPLink>
</div>

### Open File
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openFile({
  path: '/etc/hosts',
  line: 1,
  column: 2,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    Open File in Nova
  </VPLink>
</div>

### Open Folder
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openFolder({
  path: '/etc',
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    Open Folder in Nova
  </VPLink>
</div>

### Clone Project
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}cloneProject({
  url: 'https://github.com/zhensherlock/protocol-launcher.git',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    Clone Project in Nova
  </VPLink>
</div>

### Open Extension
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openExtension({
  id: 'com.panic.Playdate',
})
```
<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    Open Extension in Nova
  </VPLink>
</div>

### Register Nova
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'register' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}register({
  serial: 'NOVA-XXXX-XXXX-XXXX-XXXX-XXXX-X',
})
```
<div class="flex justify-center">
  <VPLink :href="register(registerParams)" target="_self">
    Register Nova
  </VPLink>
</div>
