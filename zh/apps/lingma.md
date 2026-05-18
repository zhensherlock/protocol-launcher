---
url: /protocol-launcher/zh/apps/lingma.md
---

# Lingma

[通义灵码（Lingma）](https://lingma.aliyun.com/) 是阿里云提供的智能编码助手。它提供代码生成、研发问答、多文件修改等功能，为开发者带来高效、流畅的 AI 辅助编程体验。

**Protocol Launcher** 允许你生成深度链接，用于在 Lingma 中快速打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}open()
```

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

### 安装 Streamable HTTP MCP 服务

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### 远程开发

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### 打开扩展

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
