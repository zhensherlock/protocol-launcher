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

[通义灵码（Lingma）](https://lingma.aliyun.com/) 是阿里云提供的智能编码助手。它提供代码生成、研发问答、多文件修改等功能，为开发者带来高效、流畅的 AI 辅助编程体验。

**Protocol Launcher** 允许你生成深度链接，用于在 Lingma 中快速打开并配置资源。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开编辑器
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Lingma
  </VPLink>
</div>

### 安装 STDIO MCP 服务

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
    添加到 Lingma
  </VPLink>
</div>

### 安装 Streamable HTTP MCP 服务
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
    添加到 Lingma
  </VPLink>
</div>

### 安装 SSE MCP 服务
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
    添加到 Lingma
  </VPLink>
</div>

### 打开文件
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
    在 Lingma 中打开
  </VPLink>
</div>

### 打开文件夹
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    在 Lingma 中打开
  </VPLink>
</div>

### 远程开发
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
    在 Lingma 中打开
  </VPLink>
</div>

### 克隆项目
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    在 Lingma 中打开
  </VPLink>
</div>

### 打开扩展
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```
<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    在 Lingma 中打开
  </VPLink>
</div>

### 打开设置
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
<div class="flex justify-center">
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    在 Lingma 中打开
  </VPLink>
</div>
