---
url: /protocol-launcher/zh/apps/vscode-insiders.md
---

# VS Code Insiders

Visual Studio Code 是一款轻量但功能强大的源代码编辑器。[Visual Studio Code Insiders](https://code.visualstudio.com/insiders) 每天为早期采用者提供最新的功能和修复，并支持与稳定版并行安装。**Protocol Launcher** 允许你生成深度链接，用于在 VS Code Insiders 中打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'vscode-insiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode-insiders.'}}open()
```

### 安装 STDIO MCP 服务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'vscode-insiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode-insiders.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### 安装 Streamable HTTP MCP 服务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'vscode-insiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode-insiders.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'vscode-insiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode-insiders.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'vscode-insiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode-insiders.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'vscode-insiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode-insiders.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### 远程开发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'vscode-insiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode-insiders.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'vscode-insiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode-insiders.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### 打开扩展

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'vscode-insiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode-insiders.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'vscode-insiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode-insiders.'}}openSettings({ 
  path: 'terminal.integrated.suggest.enabled',
})
```
