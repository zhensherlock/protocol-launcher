---
url: /protocol-launcher/apps/vscode-insiders.md
---

# VS Code Insiders

Visual Studio Code is a lightweight but powerful source code editor. [Visual Studio Code Insiders](https://code.visualstudio.com/insiders) provides the latest features and bug fixes every day for early adopters. It can be installed side-by-side with the stable build. **Protocol Launcher** allows you to generate deep links to open and configure resources in VS Code Insiders.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open IDE

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'vscodeInsiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodeInsiders.'}}open()
```

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'vscodeInsiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodeInsiders.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

### Install Streamable HTTP MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'vscodeInsiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodeInsiders.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'vscodeInsiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodeInsiders.'}}installMCP({
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
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'vscodeInsiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodeInsiders.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'vscodeInsiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodeInsiders.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```

### Open Remote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'vscodeInsiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodeInsiders.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'vscodeInsiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodeInsiders.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```

### Open Extension

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'vscodeInsiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodeInsiders.'}}openExtension({
  id: 'esbenp.prettier-vscode',
})
```

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'vscodeInsiders' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'vscodeInsiders.'}}openSettings({
  path: 'terminal.integrated.suggest.enabled',
})
```
