---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, openFolder, installMCP, cloneProject, openRemote, openSettings, createChat, createQuest, createRule, openExtension } from 'protocol-launcher/qoder';
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
  createChatParams,
  createQuestParams,
  createRuleParams,
  openSettingsParams,
  openExtensionParams,
} from '../../.vitepress/constants/qoder';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/qoder' : 'protocol-launcher');
</script>

# Qoder

[Qoder](https://qoder.dev/) is an agentic coding platform designed for real software development. It seamlessly integrates enhanced context engineering with intelligent agents to gain a comprehensive understanding of your codebase and systematically tackles software development tasks. **Protocol Launcher** allows you to generate deep links to open and configure resources in Qoder.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open IDE
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Qoder
  </VPLink>
</div>

### Create Chat
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createChat' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}createChat({
  text: 'Hello, Qoder!',
  mode: 'agent',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="createChat(createChatParams)" target="_self">
    Open in Qoder
  </VPLink>
</div>

### Create Quest
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createQuest' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}createQuest({
  text: 'You are a development expert.',
  agentClass: 'LocalAgent',
})
```
<div class="flex justify-center">
  <VPLink :href="createQuest(createQuestParams)" target="_self">
    Open in Qoder
  </VPLink>
</div>

### Create Rule
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createRule' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}createRule({
  name: 'my_rule',
  text: 'You are a development expert.',
})
```
<div class="flex justify-center">
  <VPLink :href="createRule(createRuleParams)" target="_self">
    Open in Qoder
  </VPLink>
</div>

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSTDIOMCPServerParams)" target="_self">
    Add to Qoder
  </VPLink>
</div>

### Install Streamable HTTP MCP Server
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}installMCP({
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
    Add to Qoder
  </VPLink>
</div>

### Install SSE MCP Server
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}installMCP({
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
    Add to Qoder
  </VPLink>
</div>

### Open Extension
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```
<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    Open in Qoder
  </VPLink>
</div>

### Open File
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    Open in Qoder
  </VPLink>
</div>

### Open Folder
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    Open in Qoder
  </VPLink>
</div>

### Open Remote
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```
<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    Open in Qoder
  </VPLink>
</div>

### Clone Project
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    Open in Qoder
  </VPLink>
</div>

### Open Settings
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
<div class="flex justify-center">
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    Open in Qoder
  </VPLink>
</div>
