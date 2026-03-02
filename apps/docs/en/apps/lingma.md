---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, openFolder, installMCP, openRemote, openSettings, cloneProject, openExtension } from 'protocol-launcher/lingma';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
  openFolderParams,
  openRemoteParams,
  installSTDIOMCPServerParams,
  installStreamableHTTPMCPServerParams,
  installSSEMCPServerParams,
  cloneProjectParams,
  openSettingsParams,
  openExtensionParams,
} from '../../.vitepress/constants/lingma';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/lingma' : 'protocol-launcher');
</script>

# Lingma

[Lingma](https://lingma.aliyun.com/) is an AI-powered coding assistant by Alibaba Cloud. It provides features like code generation, R&D Q&A, and multi-file modification to enhance development efficiency.

**Protocol Launcher** allows you to generate deep links to quickly open and configure resources in Lingma.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open IDE
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Lingma
  </VPLink>
</div>

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSTDIOMCPServerParams)" target="_self">
    Add to Lingma
  </VPLink>
</div>

### Install Streamable HTTP MCP Server
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}installMCP({
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
    Add to Lingma
  </VPLink>
</div>

### Install SSE MCP Server
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}installMCP({
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
    Add to Lingma
  </VPLink>
</div>

### Open File
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    Open in Lingma
  </VPLink>
</div>

### Open Folder
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    Open in Lingma
  </VPLink>
</div>

### Open Remote
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```
<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    Open in Lingma
  </VPLink>
</div>

### Clone Project
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    Open in Lingma
  </VPLink>
</div>

### Open Extension
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```
<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    Open in Lingma
  </VPLink>
</div>

### Open Settings
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
<div class="flex justify-center">
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    Open in Lingma
  </VPLink>
</div>
