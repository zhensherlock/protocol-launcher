---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { installMCP, openFile, openFolder, openRemote, openSettings, createChat, cloneProject, openExtension } from 'protocol-launcher/cursor';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  installSTDIOMCPServerParams,
  installStreamableHTTPMCPServerParams,
  installSSEMCPServerParams,
  openFileParams,
  openFolderParams,
  openRemoteParams,
  cloneProjectParams,
  openSettingsParams,
  openExtensionParams,
} from '../../.vitepress/constants/cursor';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/cursor' : 'protocol-launcher');
</script>

# Cursor

[Cursor](https://cursor.sh) is an AI-powered code editor. **Protocol Launcher** allows you to generate deep links to automatically configure MCP Servers in Cursor.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSTDIOMCPServerParams)" target="_self">
    Add to Cursor
  </VPLink>
</div>

### Install Streamable HTTP MCP Server
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
  name: '企查查企业信息 MCP',
  type: 'streamable_http',
  url: 'https://mcp.qcc.com/basic/stream',
  headers: {
    Authorization: 'REPLACE_WITH_YOUR_TOKEN',
  },
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installStreamableHTTPMCPServerParams)" target="_self">
    Add to Cursor
  </VPLink>
</div>

### Install SSE MCP Server
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
  name: '企查查风险信息 MCP',
  type: 'sse',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'REPLACE_WITH_YOUR_TOKEN',
  },
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSSEMCPServerParams)" target="_self">
    Add to Cursor
  </VPLink>
</div>

### Open File
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    Open in Cursor
  </VPLink>
</div>

### Open Folder
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    Open in Cursor
  </VPLink>
</div>

### Open Remote
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```
<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    Open in Cursor
  </VPLink>
</div>

### Clone Project
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    Open in Cursor
  </VPLink>
</div>

### Open Extension
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```
<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    Open in Cursor
  </VPLink>
</div>

### Open Settings
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
<div class="flex justify-center">
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    Open in Cursor
  </VPLink>
</div>

### Create Chat
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createChat' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}createChat({ prompt: 'Hello, Cursor!' })
```
<div class="flex justify-center">
  <VPLink :href="createChat({ prompt: 'Hello, Cursor!' })" target="_self">
    Create chat in Cursor
  </VPLink>
</div>

