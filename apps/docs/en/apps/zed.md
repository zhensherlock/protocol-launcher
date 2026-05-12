---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openFolder, openRemote, openSettings, cloneProject, openGitCommit, openExtension, openAgent, joinAgent } from 'protocol-launcher/zed';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
  openFolderParams,
  openRemoteParams,
  openSettingsParams,
  cloneProjectParams,
  openGitCommitParams,
  openExtensionParams,
  openAgentParams,
  joinAgentParams,
} from '../../.vitepress/constants/zed';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/zed' : 'protocol-launcher');
</script>

# Zed

[Zed](https://zed.dev/) is a minimal code editor crafted for speed and collaboration with humans and AI. **Protocol Launcher** allows you to generate deep links to open and configure resources in Zed.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open File
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    Open in Zed
  </VPLink>
</div>

### Open Folder
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    Open in Zed
  </VPLink>
</div>

### Open Remote
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openRemote({
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```
<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    Open in Zed
  </VPLink>
</div>

### Clone Project
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    Open in Zed
  </VPLink>
</div>

### Open Git Commit
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openGitCommit' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openGitCommit({
  sha: '739420c',
  path: '/Users/dev/Documents/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="openGitCommit(openGitCommitParams)" target="_self">
    Open in Zed
  </VPLink>
</div>

### Open Extension
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openExtension({
  id: 'html',
})
```
<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    Open in Zed
  </VPLink>
</div>

### Open Agent
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAgent' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openAgent({
  prompt: 'Hello World',
})
```
<div class="flex justify-center">
  <VPLink :href="openAgent(openAgentParams)" target="_self">
    Open in Zed
  </VPLink>
</div>

### Join Agent
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'joinAgent' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}joinAgent({
  id: '12345',
})
```
<div class="flex justify-center">
  <VPLink :href="joinAgent(joinAgentParams)" target="_self">
    Open in Zed
  </VPLink>
</div>

### Open Settings
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'zed' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zed.'}}openSettings({
  path: 'autosave',
})
```
<div class="flex justify-center">
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    Open in Zed
  </VPLink>
</div>
