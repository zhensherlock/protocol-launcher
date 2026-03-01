---
url: /protocol-launcher/zh/apps/qoder.md
---

# Qoder

[Qoder](https://qoder.dev/) 是一款面向真实软件开发的 Agentic 编码平台。通过增强上下文工程与智能体无缝结合，全面理解你的代码库，并以系统化方式推进开发任务。**Protocol Launcher** 允许你生成深度链接，用于在 Qoder 中打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}open()
```

### 创建会话

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createChat' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}createChat({
  text: 'Hello, Qoder!',
  mode: 'agent',
  openInNewWindow: true,
})
```

### 创建任务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createQuest' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}createQuest({
  text: 'You are a development expert.',
  agentClass: 'LocalAgent',
})
```

### 创建规则

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createRule' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}createRule({
  name: 'my_rule',
  text: 'You are a development expert.',
})
```

### 安装 STDIO MCP 服务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### 安装 Streamable HTTP MCP 服务

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

### 安装 SSE MCP 服务

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

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### 远程开发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'qoder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'qoder.'}}openSettings()
```
