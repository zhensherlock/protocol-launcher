---
url: /protocol-launcher/apps/trae.md
---

# Trae

[Trae](https://trae.ai) is an AI-native code editor launched by ByteDance, featuring intelligent programming modes like SOLO Coder and SOLO Builder, with support for MCP Server extensions, custom agents, multitasking, and more. **Protocol Launcher** allows you to generate deep links to open and configure resources in Trae.

::: tip
This documentation is for the international version of Trae (trae.ai) which includes international AI models. For users in China, see [Trae China](/en/apps/trae-cn) which includes Chinese AI models.
:::

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}open()
```

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### Install Streamable HTTP MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}installMCP({
  name: '企查查企业信息 MCP',
  type: 'http',
  url: 'https://mcp.qcc.com/basic/stream',
  headers: {
    Authorization: 'REPLACE_WITH_YOUR_TOKEN',
  },
})
```

### Install SSE MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}installMCP({
  name: '企查查风险信息 MCP',
  type: 'http',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'REPLACE_WITH_YOUR_TOKEN',
  },
})
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### Open Custom Agent

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAgent' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openAgent({
  agentId: '878f64',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'trae' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trae.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
