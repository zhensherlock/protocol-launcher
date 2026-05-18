---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, openFolder, installMCP, openRemote, openSettings, cloneProject, openExtension } from 'protocol-launcher/antigravity';
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
} from '../../.vitepress/constants/antigravity';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/antigravity' : 'protocol-launcher');
</script>

# Antigravity

[Antigravity](https://antigravity.google/) 是由 Google 开发的 AI 驱动、以“智能体优先”（agent-first）为核心的集成开发环境（IDE）。它基于 VS Code 构建，由 Gemini 3 提供支持，允许开发者将复杂任务委托给自主 AI 智能体，并生成可验证的工件（如任务列表和实施计划）。**Protocol Launcher** 允许你生成深度链接，用于在 Antigravity 中打开并配置资源。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开编辑器
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Antigravity
  </VPLink>
</div>

### 安装 STDIO MCP 服务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSTDIOMCPServerParams)" target="_self">
    添加到 Antigravity
  </VPLink>
</div>

### 安装 Streamable HTTP MCP 服务
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}installMCP({
  name: '企查查企业信息 MCP',
  type: 'streamable_http',
  url: 'https://agent.qcc.com/mcp/company/stream',
  headers: {
    Authorization: 'Bearer REPLACE_WITH_YOUR_TOKEN',
  },
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installStreamableHTTPMCPServerParams)" target="_self">
    添加到 Antigravity
  </VPLink>
</div>

### 安装 SSE MCP 服务
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}installMCP({
  name: '企查查风险信息 MCP',
  type: 'sse',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'Bearer REPLACE_WITH_YOUR_TOKEN',
  },
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSSEMCPServerParams)" target="_self">
    添加到 Antigravity
  </VPLink>
</div>

### 打开文件
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    在 Antigravity 中打开
  </VPLink>
</div>

### 打开文件夹
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    在 Antigravity 中打开
  </VPLink>
</div>

### 远程开发
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```
<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    在 Antigravity 中打开
  </VPLink>
</div>

### 克隆项目
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    在 Antigravity 中打开
  </VPLink>
</div>

### 打开扩展
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```
<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    在 Antigravity 中打开
  </VPLink>
</div>

### 打开设置
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
<div class="flex justify-center">
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    在 Antigravity 中打开
  </VPLink>
</div>
