---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openFolder, open, openRemote, openSettings, cloneProject } from 'protocol-launcher/code-buddy';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
  openFolderParams,
  openRemoteParams,
  cloneProjectParams,
} from '../../.vitepress/constants/code-buddy';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/code-buddy' : 'protocol-launcher');
</script>

# CodeBuddy

[CodeBuddy](https://codebuddy.ai) is a lightweight but powerful source code editor. **Protocol Launcher** allows you to generate deep links to open and configure resources in CodeBuddy.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open IDE
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open CodeBuddy
  </VPLink>
</div>

### Open File
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    Open in CodeBuddy
  </VPLink>
</div>

### Open Folder
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    Open in CodeBuddy
  </VPLink>
</div>

### Open Remote
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```
<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    Open in CodeBuddy
  </VPLink>
</div>

### Clone Project
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    Open in CodeBuddy
  </VPLink>
</div>

### Open Settings
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openSettings()
```
<div class="flex justify-center">
  <VPLink :href="openSettings()" target="_self">
    Open in CodeBuddy
  </VPLink>
</div>
