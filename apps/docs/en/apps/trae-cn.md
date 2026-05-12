---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, openFolder, installMCP, openRemote, openSettings, openExtension, openAgent } from 'protocol-launcher/trae-cn';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
  openFolderParams,
  openRemoteParams,
  installSTDIOMCPServerParams,
  installStreamableHTTPMCPServerParams,
  installSSEMCPServerParams,
  openSettingsParams,
  openExtensionParams,
  openAgentParams,
} from '../../.vitepress/constants/trae-cn';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/trae-cn' : 'protocol-launcher');
</script>

# Trae China

[Trae](https://trae.cn) is an AI-native code editor launched by ByteDance, featuring intelligent programming modes like SOLO Coder and SOLO Builder, with support for MCP Server extensions, custom agents, multitasking, and more. **Protocol Launcher** allows you to generate deep links to open and configure resources in Trae.

::: tip
This documentation is for the China version of Trae (trae.cn) which includes Chinese AI models. For international users, see [Trae](/en/apps/trae) which includes international AI models.
:::

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Trae China
  </VPLink>
</div>

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

<div class="flex justify-center">
  <VPLink :href="installMCP(installSTDIOMCPServerParams)" target="_self">
    Add to Trae China
  </VPLink>
</div>

### Install Streamable HTTP MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}installMCP({
  name: '企查查企业信息 MCP',
  type: 'http',
  url: 'https://mcp.qcc.com/basic/stream',
  headers: {
    Authorization: 'REPLACE_WITH_YOUR_TOKEN',
  },
})
```

<div class="flex justify-center">
  <VPLink :href="installMCP(installStreamableHTTPMCPServerParams)" target="_self">
    Add to Trae China
  </VPLink>
</div>

### Install SSE MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}installMCP({
  name: '企查查风险信息 MCP',
  type: 'http',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'REPLACE_WITH_YOUR_TOKEN',
  },
})
```

<div class="flex justify-center">
  <VPLink :href="installMCP(installSSEMCPServerParams)" target="_self">
    Add to Trae China
  </VPLink>
</div>

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    Open in Trae China
  </VPLink>
</div>

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    Open in Trae China
  </VPLink>
</div>

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    Open in Trae China
  </VPLink>
</div>

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    Open in Trae China
  </VPLink>
</div>

### Open Custom Agent

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAgent' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openAgent({
  agentId: '878f64',
})
```

<div class="flex justify-center">
  <VPLink :href="openAgent(openAgentParams)" target="_self">
    Open in Trae China
  </VPLink>
</div>

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```

<div class="flex justify-center">
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    Open in Trae China
  </VPLink>
</div>
