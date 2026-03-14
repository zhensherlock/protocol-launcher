---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, openFolder, installMCP, openRemote, openSettings, openExtension, openAgent } from 'protocol-launcher/trae';
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
} from '../../.vitepress/constants/trae';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/trae' : 'protocol-launcher');
</script>

# Trae

[Trae](https://trae.ai) 是字节跳动推出的一款 AI 原生代码编辑器，提供 SOLO Coder、SOLO Builder 等智能编程模式，支持 MCP Server 扩展、自定义 Agent、多任务处理等功能。**Protocol Launcher** 允许你生成深度链接，用于在 Trae 中打开并配置资源。

## 使用

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Trae
  </VPLink>
</div>

### 安装 STDIO MCP 服务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

<div class="flex justify-center">
  <VPLink :href="installMCP(installSTDIOMCPServerParams)" target="_self">
    添加到 Trae
  </VPLink>
</div>

### 安装 Streamable HTTP MCP 服务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}installMCP({
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
    添加到 Trae
  </VPLink>
</div>

### 安装 SSE MCP 服务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}installMCP({
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
    添加到 Trae
  </VPLink>
</div>

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    在 Trae 中打开
  </VPLink>
</div>

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    在 Trae 中打开
  </VPLink>
</div>

### 远程开发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    在 Trae 中打开
  </VPLink>
</div>

### 打开扩展

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    在 Trae 中打开
  </VPLink>
</div>

### 打开自定义智能体

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAgent' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openAgent({
  agentId: '878f64',
})
```

<div class="flex justify-center">
  <VPLink :href="openAgent(openAgentParams)" target="_self">
    在 Trae 中打开
  </VPLink>
</div>

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```

<div class="flex justify-center">
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    在 Trae 中打开
  </VPLink>
</div>
