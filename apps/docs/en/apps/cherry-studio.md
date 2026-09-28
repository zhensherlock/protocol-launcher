---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { installProvider, installMCP, navigate } from 'protocol-launcher/cherry-studio';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { navigateParams } from '../../.vitepress/constants/cherry-studio';
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
</script>

# Cherry Studio

[Cherry Studio](https://cherry-ai.com) is a powerful AI client that supports multiple models and providers. **Protocol Launcher** allows you to generate deep links to prepare MCP server and AI provider imports, and open app pages in Cherry Studio.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

Current MCP imports accept only `name`, `description`, `type`, `command`, `args`, `env`, `baseUrl`, and `headers`. `installMCP` omits older local metadata fields so that Cherry Studio’s strict import schema accepts the link. `type` may be omitted: command-based configurations default to stdio, and URL-based configurations default to sse. Importing MCP servers opens a review and confirmation flow.

### Install Multiple MCP Servers
```ts-vue [{{currentMethod}}]
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
    },
    'qcc-company-stream': {
      name: '企查查企业信息 MCP',
      description:
        '企业信息 MCP 提供全面的企业画像分析与企业信息洞察服务，助您快速验证企业  真实性、评估其稳定性和发展轨迹，为您的商业行动提供坚实的数据支撑。',
      type: 'streamableHttp',
      baseUrl: 'https://agent.qcc.com/mcp/company/stream',
      headers: {
        Authorization: 'Bearer REPLACE_WITH_YOUR_TOKEN',
      },
    },
    'qcc-risk-stream': {
      name: '企查查风险信息 MCP',
      description:
        '风险信息 MCP 提供全面的企业风险透视扫描能力，可识别企业在司法、行政、经营等方面的信用与合规隐患，助您精准评估合作对象的可靠性，有效规避商业陷阱与连带风险。',
      type: 'streamableHttp',
      baseUrl: 'https://agent.qcc.com/mcp/risk/stream',
      headers: {
        Authorization: 'Bearer REPLACE_WITH_YOUR_TOKEN',
      },
    },
  },
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installMultipleMCPServersParams)" target="_self">
    Add to Cherry Studio
  </VPLink>
</div>

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installMCP({
  name: 'server-everything',
  description: 'This MCP server attempts to exercise all the features of the MCP protocol. It is not intended to be a useful server, but rather a test server for builders of MCP clients. It implements prompts, tools, resources, sampling, and more to showcase MCP capabilities.',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSTDIOMCPServerParams)" target="_self">
    Add to Cherry Studio
  </VPLink>
</div>

### Install Streamable HTTP MCP Server
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installMCP({
  name: '企查查企业信息 MCP',
  description:
    '企业信息 MCP 提供全面的企业画像分析与企业信息洞察服务，助您快速验证企业真实性、评估其稳定性和发展轨迹，为您的商业行动提供坚实的数据支撑。',
  type: 'streamableHttp',
  baseUrl: 'https://agent.qcc.com/mcp/company/stream',
  headers: {
    Authorization: 'Bearer REPLACE_WITH_YOUR_TOKEN',
  },
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installStreamableHTTPMCPServerParams)" target="_self">
    Add to Cherry Studio
  </VPLink>
</div>

### Install SSE MCP Server
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installMCP({
  name: '企查查风险信息 MCP',
  description:
    '风险信息 MCP 提供全面的企业风险透视扫描能力，可识别企业在司法、行政、经营等方面的信用与合规隐患，助您精准评估合作对象的可靠性，有效规避商业陷阱与连带风险。',
  type: 'sse',
  baseUrl: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'Bearer REPLACE_WITH_YOUR_TOKEN',
  },
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSSEMCPServerParams)" target="_self">
    Add to Cherry Studio
  </VPLink>
</div>

### Install Provider

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installProvider' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installProvider({
  id: 'new-api',
  baseUrl: 'https://open.cherryin.ai',
  apiKey: 'sk-xxxx',
})
```
<div class="flex justify-center">
  <VPLink :href="installProvider(installProviderParams)" target="_self">
    Add to Cherry Studio
  </VPLink>
</div>


### Navigate to a Page

Open an allowed route in the main window. Prefixes include settings, app, agents, knowledge, paintings, translate, files, notes, apps, code, and launchpad. Internal protocolInstall and protocolInstallRequestId query parameters are rejected by Cherry Studio.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigate' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}navigate({
  'path': '/settings/provider'
})
```

<div class="flex justify-center">
  <VPLink :href="navigate(navigateParams)" target="_self">
    Navigate to a Page
  </VPLink>
</div>

## Official Documentation

- [URL scheme documentation](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/main/services/protocol/ProtocolService.ts)

- [MCP import schema](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/shared/data/types/mcpProtocolInstall.ts)
- [Provider import](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/main/services/protocol/handlers/providersImport.ts)
