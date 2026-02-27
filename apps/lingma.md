---
url: /protocol-launcher/apps/lingma.md
---

# Lingma

[Lingma](https://lingma.aliyun.com/) is an AI-powered coding assistant by Alibaba Cloud. It provides features like code generation, R\&D Q\&A, and multi-file modification to enhance development efficiency.

**Protocol Launcher** allows you to generate deep links to quickly open and configure resources in Lingma.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}open()
```

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### Install Streamable HTTP MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}installMCP({
  name: '企查查企业信息 MCP',
  type: 'streamable_http',
  url: 'https://mcp.qcc.com/basic/stream',
  headers: {
    Authorization: 'REPLACE_WITH_YOUR_TOKEN',
  },
})
```

### Install SSE MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}installMCP({
  name: '企查查风险信息 MCP',
  type: 'sse',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'REPLACE_WITH_YOUR_TOKEN',
  },
})
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'lingma' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'lingma.'}}openSettings()
```
