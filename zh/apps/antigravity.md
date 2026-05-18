---
url: /protocol-launcher/zh/apps/antigravity.md
---

# Antigravity

[Antigravity](https://antigravity.google/) 是由 Google 开发的 AI 驱动、以“智能体优先”（agent-first）为核心的集成开发环境（IDE）。它基于 VS Code 构建，由 Gemini 3 提供支持，允许开发者将复杂任务委托给自主 AI 智能体，并生成可验证的工件（如任务列表和实施计划）。**Protocol Launcher** 允许你生成深度链接，用于在 Antigravity 中打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}open()
```

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

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### 远程开发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### 打开扩展

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
