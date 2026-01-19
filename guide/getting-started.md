---
url: /protocol-launcher/guide/getting-started.md
---

# Getting Started

## Installation

Install `protocol-launcher` using your preferred package manager:

::: code-group

```sh [npm]
$ npm install protocol-launcher
```

```sh [pnpm]
$ pnpm add protocol-launcher
```

```sh [yarn]
$ yarn add protocol-launcher
```

```bash [bun]
$ bun add protocol-launcher
```

:::

## Usage

### Tree Shaking (Recommended)

To minimize bundle size, import specific modules directly:

::: code-group

```typescript [cherry studio]
// Only imports Cherry Studio related code
import { installMCP } from 'protocol-launcher/cherry-studio'
```

```typescript [cursor]
// Only imports Cursor related code
import { installMCP } from 'protocol-launcher/cursor'
```

```typescript [github desktop]
// Only imports GitHub Desktop related code
import { openRepo } from 'protocol-launcher/github-desktop'
```

```typescript [thunder]
// Only imports Thunder related code
import { downloadUrl } from 'protocol-launcher/thunder'
```

```typescript [vscode]
// Only imports VS Code related code
import { openFile } from 'protocol-launcher/vscode'
```

```typescript [xcode]
// Only imports Xcode related code
import { cloneProject } from 'protocol-launcher/xcode'
```

:::

### Full Import

You can also import everything from the root package, but this will include all application modules and does not support tree-shaking:

```typescript
import { cherryStudio, cursor, githubDesktop } from 'protocol-launcher'
```

For detailed usage instructions for each application, please refer to their respective guides:

* [Cherry Studio](../apps/cherry-studio.md)
* [Cursor](../apps/cursor.md)
* [GitHub Desktop](../apps/github-desktop.md)
* [Thunder](../apps/thunder.md)
* [VS Code](../apps/vscode.md)
* [Xcode](../apps/xcode.md)
