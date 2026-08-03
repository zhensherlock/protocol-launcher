---
url: /protocol-launcher/apps/trae-cn.md
---

# Trae China

[Trae](https://trae.cn) is an AI-native code editor launched by ByteDance, featuring intelligent programming modes like SOLO Coder and SOLO Builder, with support for MCP Server extensions, custom agents, multitasking, and more. **Protocol Launcher** allows you to generate deep links to open and configure resources in Trae.

::: tip
This documentation is for the China version of Trae (trae.cn) which includes Chinese AI models. For international users, see [Trae](/apps/trae) which includes international AI models.
:::

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}open()
```

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### Install Streamable HTTP MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}installMCP({
  name: '企查查企业信息 MCP',
  type: 'http',
  url: 'https://agent.qcc.com/mcp/company/stream',
  headers: {
    Authorization: 'Bearer REPLACE_WITH_YOUR_TOKEN',
  },
})
```

### Install SSE MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}installMCP({
  name: '企查查风险信息 MCP',
  type: 'http',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'Bearer REPLACE_WITH_YOUR_TOKEN',
  },
})
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### Open Custom Agent

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAgent' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openAgent({
  agentId: '878f64',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'traeChina' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'traeChina.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
