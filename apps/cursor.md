---
url: /protocol-launcher/apps/cursor.md
---

# Cursor

[Cursor](https://cursor.sh) is an AI-powered code editor. **Protocol Launcher** allows you to generate deep links to automatically configure MCP Servers in Cursor.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### Install Streamable HTTP MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
  name: '企查查企业信息 MCP',
  type: 'streamable_http',
  url: 'https://mcp.qcc.com/basic/stream',
  headers: {
    Authorization: 'MjMmbGnP0gwLcbYe7MCr4FCuIA9dHQ9277zoO409EGZOdL3K',
  },
})
```

### Install SSE MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
  name: '企查查风险信息 MCP',
  type: 'sse',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'MjMmbGnP0gwLcbYe7MCr4FCuIA9dHQ9277zoO409EGZOdL3K',
  },
})
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}openSettings()
```
