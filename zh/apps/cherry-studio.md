---
url: /protocol-launcher/zh/apps/cherry-studio.md
---

# Cherry Studio

[Cherry Studio](https://cherry-ai.com) 是一个支持多种模型和提供商的强大 AI 客户端。**Protocol Launcher** 允许您生成深度链接，以便在 Cherry Studio 中准备 MCP 服务器和 AI 提供商导入，并打开应用页面。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

当前 MCP 导入仅接受 `name`、`description`、`type`、`command`、`args`、`env`、`baseUrl` 和 `headers`。`installMCP` 会省略旧版的本地元数据字段，以满足 Cherry Studio 的严格导入结构。`type` 可以省略：命令配置默认为 stdio，URL 配置默认为 sse。导入 MCP 服务器会打开审核和确认界面。

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

### 安装 STDIO MCP 服务

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installMCP({
  name: 'server-everything',
  description: 'This MCP server attempts to exercise all the features of the MCP protocol. It is not intended to be a useful server, but rather a test server for builders of MCP clients. It implements prompts, tools, resources, sampling, and more to showcase MCP capabilities.',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### 安装 Streamable HTTP MCP 服务

```ts-vue [{{currentMethodDesc}}]
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
    Authorization: 'Bearer REPLACE_WITH_YOUR_TOKEN',
  },
})
```

### 安装大模型提供商

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'installProvider' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}installProvider({
  id: 'new-api',
  baseUrl: 'https://open.cherryin.ai',
  apiKey: 'sk-xxxx',
})
```

### 跳转页面

打开主窗口中允许的页面。路由前缀包括 settings、app、agents、knowledge、paintings、translate、files、notes、apps、code 和 launchpad。Cherry Studio 会拒绝 protocolInstall 和 protocolInstallRequestId 内部查询参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigate' : 'cherryStudio' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cherryStudio.'}}navigate({
  'path': '/settings/provider'
})
```

## 官方文档

* [URL scheme 官方说明](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/main/services/protocol/ProtocolService.ts)

* [MCP import schema](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/shared/data/types/mcpProtocolInstall.ts)

* [Provider import](https://github.com/CherryHQ/cherry-studio/blob/v2.1.4/src/main/services/protocol/handlers/providersImport.ts)
