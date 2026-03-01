---
url: /protocol-launcher/apps/kiro.md
---

# Kiro

[Kiro](https://kiro.dev/) is an agentic IDE that helps you do your best work with features such as specs, steering, and hooks. **Protocol Launcher** allows you to generate deep links to open and configure resources in Kiro.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kiro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kiro.'}}open()
```

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'kiro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kiro.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### Install Streamable HTTP MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'kiro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kiro.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'kiro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kiro.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'kiro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kiro.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'kiro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kiro.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'kiro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kiro.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'kiro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kiro.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'kiro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kiro.'}}openSettings()
```
