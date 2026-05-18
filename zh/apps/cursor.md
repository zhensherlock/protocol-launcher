---
url: /protocol-launcher/zh/apps/cursor.md
---

# Cursor

[Cursor](https://cursor.sh) 是一个 AI 驱动的代码编辑器。**Protocol Launcher** 允许您生成深度链接，以便在 Cursor 中自动配置 MCP 服务器。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

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

### 安装 Streamable HTTP MCP 服务

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
  name: '企查查企业信息 MCP',
  type: 'streamable_http',
  url: 'https://agent.qcc.com/mcp/company/stream',
  headers: {
    Authorization: 'Bearer REPLACE_WITH_YOUR_TOKEN',
  },
})
```

### 安装 SSE MCP 服务

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### 远程开发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### 打开扩展

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```

### 创建聊天

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createChat' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}createChat({ prompt: '你好, Cursor!' })
```
