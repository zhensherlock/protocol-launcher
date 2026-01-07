---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { installProvider, installMCP } from 'protocol-launcher/cherry-studio';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  installMultipleMCPServersParams,
  installSTDIOMCPServerParams,
  installStreamableHTTPMCPServerParams,
  installSSEMCPServerParams,
  installProviderParams,
} from '../../.vitepress/constants/cherry-studio';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/cherry-studio' : 'protocol-launcher');
const currentMethodDesc = computed(() => currentMethod.value === 'On-Demand' ? '按需加载' : '全量导入');
</script>

# Cherry Studio

[Cherry Studio](https://cherry-ai.com) 是一个支持多种模型和提供商的强大 AI 客户端。**Protocol Launcher** 允许您生成深度链接，以便在 Cherry Studio 中自动配置 MCP 服务器和 AI 提供商。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 安装多个 MCP 服务器

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cherryStudio' }} } from '{{ importPath }}'
const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installMCP({
  mcpServers: {
    'server-everything': {
      name: 'server-everything',
      description:
        'This MCP server attempts to exercise all the features of the MCP protocol. It is not intended to be a useful server, but rather a test server for builders of MCP clients. It implements prompts, tools, resources, sampling, and more to showcase MCP capabilities.',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
      registryUrl: 'https://registry.npmmirror.com',
      provider: 'Anthropic',
      providerUrl: 'https://modelcontextprotocol.io/',
      logoUrl: 'https://avatars.githubusercontent.com/u/182288589?s=200&v=4',
    },
    'qcc-company-basic-stream': {
      name: '企查查企业信息 MCP',
      description:
        '企业信息 MCP 提供全面的企业画像分析与企业信息洞察服务，助您快速验证企业  真实性、评估其稳定性和发展轨迹，为您的商业行动提供坚实的数据支撑。',
      type: 'streamableHttp',
      baseUrl: 'https://mcp.qcc.com/basic/stream',
      headers: {
        Authorization: 'M0jtlHI3ASqdMXkC3pBcibrFwmVxsD1QMreZxcSM1LbDNGPE',
      },
      provider: 'QCC',
      providerUrl: 'https://openapi.qcc.com/mcpTools?service=basic',
      logoUrl: 'https://openapi.qcc.com/favicon.ico',
      tags: ['company-basic', '企业信息'],
      timeout: 30,
    },
    'qcc-company-risk-sse': {
      name: '企查查风险信息 MCP',
      description:
        '风险信息 MCP 提供全面的企业风险透视扫描能力，可识别企业在司法、行政、经营等方面的信用与合规隐患，助您精准评估合作对象的可靠性，有效规避商业陷阱与连带风险。',
      type: 'sse',
      baseUrl: 'https://mcp.qcc.com/basic/sse',
      headers: {
        Authorization: 'M0jtlHI3ASqdMXkC3pBcibrFwmVxsD1QMreZxcSM1LbDNGPE',
      },
      provider: 'QCC',
      providerUrl: 'https://openapi.qcc.com/mcpTools?service=risk',
      logoUrl: 'https://openapi.qcc.com/favicon.ico',
      tags: ['company-risk', '风险信息'],
      timeout: 30,
    },
  },
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installMultipleMCPServersParams)" target="_self">
    添加到 Cherry Studio
  </VPLink>
</div>

### 安装 STDIO MCP 服务

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installMCP({
  name: 'server-everything',
  description: 'This MCP server attempts to exercise all the features of the MCP protocol. It is not intended to be a useful server, but rather a test server for builders of MCP clients. It implements prompts, tools, resources, sampling, and more to showcase MCP capabilities.',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
  registryUrl: 'https://registry.npmmirror.com',
  provider: 'Anthropic',
  providerUrl: 'https://modelcontextprotocol.io/',
  logoUrl: 'https://avatars.githubusercontent.com/u/182288589?s=200&v=4',
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSTDIOMCPServerParams)" target="_self">
    添加到 Cherry Studio
  </VPLink>
</div>

### 安装 Streamable HTTP MCP 服务
```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installMCP({
  name: '企查查企业信息 MCP',
  description:
    '企业信息 MCP 提供全面的企业画像分析与企业信息洞察服务，助您快速验证企业真实性、评估其稳定性和发展轨迹，为您的商业行动提供坚实的数据支撑。',
  type: 'streamableHttp',
  baseUrl: 'https://mcp.qcc.com/basic/stream',
  headers: {
    Authorization: 'M0jtlHI3ASqdMXkC3pBcibrFwmVxsD1QMreZxcSM1LbDNGPE',
  },
  provider: 'QCC',
  providerUrl: 'https://openapi.qcc.com/',
  reference: 'https://openapi.qcc.com/mcpTools?service=basic',
  logoUrl: 'https://openapi.qcc.com/favicon.ico',
  tags: ['company-basic', '企业信息'],
  timeout: 30,
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installStreamableHTTPMCPServerParams)" target="_self">
    添加到 Cherry Studio
  </VPLink>
</div>

### 安装 SSE MCP 服务
```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installMCP({
  name: '企查查风险信息 MCP',
  description:
    '风险信息 MCP 提供全面的企业风险透视扫描能力，可识别企业在司法、行政、经营等方面的信用与合规隐患，助您精准评估合作对象的可靠性，有效规避商业陷阱与连带风险。',
  type: 'sse',
  baseUrl: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'M0jtlHI3ASqdMXkC3pBcibrFwmVxsD1QMreZxcSM1LbDNGPE',
  },
  provider: 'QCC',
  providerUrl: 'https://openapi.qcc.com/',
  reference: 'https://openapi.qcc.com/mcpTools?service=risk',
  logoUrl: 'https://openapi.qcc.com/favicon.ico',
  tags: ['company-risk', '风险信息'],
  timeout: 30,
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSSEMCPServerParams)" target="_self">
    添加到 Cherry Studio
  </VPLink>
</div>

### 安装大模型提供商

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'installProvider' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installProvider({
  id: 'new-api',
  baseUrl: 'https://open.cherryin.ai',
  apiKey: 'sk-xxxx',
})
```
<div class="flex justify-center">
  <VPLink :href="installProvider(installProviderParams)" target="_self">
    添加到 Cherry Studio
  </VPLink>
</div>
