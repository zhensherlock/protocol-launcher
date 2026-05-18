---
url: /protocol-launcher/apps/antigravity.md
---

# Antigravity

[Antigravity](https://antigravity.google/) is an AI-driven, "agent-first" IDE developed by Google. Built on VS Code and powered by Gemini 3, it enables developers to delegate complex coding tasks to autonomous AI agents that generate verifiable artifacts like task lists and implementation plans. **Protocol Launcher** allows you to generate deep links to open and configure resources in Antigravity.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}open()
```

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### Install Streamable HTTP MCP Server

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

### Install SSE MCP Server

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

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'antigravity' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'antigravity.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
