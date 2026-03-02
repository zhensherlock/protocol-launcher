---
url: /protocol-launcher/apps/vscode.md
---

# VS Code

[Visual Studio Code](https://code.visualstudio.com) is a lightweight but powerful source code editor. **Protocol Launcher** allows you to generate deep links to open and configure resources in Visual Studio Code.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}open()
```

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### Install Streamable HTTP MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'vscode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscode.'}}openSettings({ 
  path: 'terminal.integrated.suggest.enabled',
})
```
