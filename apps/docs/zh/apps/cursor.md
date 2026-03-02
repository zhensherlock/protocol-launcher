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
const currentMethodDesc = computed(() => currentMethod.value === 'On-Demand' ? '按需加载' : '全量导入');
</script>

# Cursor

[Cursor](https://cursor.sh) 是一个 AI 驱动的代码编辑器。**Protocol Launcher** 允许您生成深度链接，以便在 Cursor 中自动配置 MCP 服务器。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 安装 STDIO MCP 服务

```ts-vue [{{currentMethodDesc}}]
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
    添加到 Cursor
  </VPLink>
</div>

### 安装 Streamable HTTP MCP 服务
```ts-vue [{{currentMethodDesc}}]
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
    添加到 Cursor
  </VPLink>
</div>

### 安装 SSE MCP 服务
```ts-vue [{{currentMethodDesc}}]
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
    添加到 Cursor
  </VPLink>
</div>

### 打开文件
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
    在 Cursor 中打开
  </VPLink>
</div>

### 打开文件夹
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    在 Cursor 中打开
  </VPLink>
</div>

### 远程开发
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
    在 Cursor 中打开
  </VPLink>
</div>

### 克隆项目
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    在 Cursor 中打开
  </VPLink>
</div>

### 打开扩展
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```
<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    在 Cursor 中打开
  </VPLink>
</div>

### 打开设置
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
<div class="flex justify-center">
  <VPLink :href="openSettings(openSettingsParams)" target="_self">
    在 Cursor 中打开
  </VPLink>
</div>

### 创建聊天
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createChat' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}createChat({ prompt: '你好, Cursor!' })
```
<div class="flex justify-center">
  <VPLink :href="createChat({ prompt: '你好, Cursor!' })" target="_self">
    在 Cursor 中创建聊天
  </VPLink>
</div>
