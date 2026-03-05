---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openFolder, open, openRemote, openSettings, cloneProject, openExtension } from 'protocol-launcher/code-runner';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
  openFolderParams,
} from '../../.vitepress/constants/code-runner';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/code-runner' : 'protocol-launcher');
</script>

# CodeRunner

[CodeRunner](https://code-runner.app) is a lightweight, multi-language programming editor and IDE for macOS. It supports 25 languages out-of-the-box and features advanced code completion, built-in debugging, and live error checking. **Protocol Launcher** allows you to generate deep links to open and configure resources in CodeRunner.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open IDE
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codeRunner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeRunner.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open CodeRunner
  </VPLink>
</div>

### Open File
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'codeRunner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeRunner.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    Open in CodeRunner
  </VPLink>
</div>

### Open Folder
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'codeRunner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeRunner.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    Open in CodeRunner
  </VPLink>
</div>
