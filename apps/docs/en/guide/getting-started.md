---
layout: doc
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

```typescript [codebuddy]
// Only imports CodeBuddy related code
import { openFile } from 'protocol-launcher/code-buddy'
```

```typescript [cursor]
// Only imports Cursor related code
import { installMCP } from 'protocol-launcher/cursor'
```

```typescript [github desktop]
// Only imports GitHub Desktop related code
import { openRepo } from 'protocol-launcher/github-desktop'
```

```typescript [goland]
// Only imports GoLand related code
import { openRepo } from 'protocol-launcher/goland'
```

```typescript [idea]
// Only imports IntelliJ IDEA related code
import { openRepo } from 'protocol-launcher/idea'
```

```typescript [phpstorm]
// Only imports PhpStorm related code
import { openRepo } from 'protocol-launcher/phpstorm'
```

```typescript [pycharm]
// Only imports PyCharm related code
import { openRepo } from 'protocol-launcher/pycharm'
```

```typescript [rustrover]
// Only imports RustRover related code
import { openRepo } from 'protocol-launcher/rustrover'
```

```typescript [telegram]
// Only imports Telegram related code
import { open } from 'protocol-launcher/telegram'
```

```typescript [thunder]
// Only imports Thunder related code
import { downloadUrl } from 'protocol-launcher/thunder'
```

```typescript [vscode]
// Only imports VS Code related code
import { openFile } from 'protocol-launcher/vscode'
```

```typescript [webstorm]
// Only imports WebStorm related code
import { openRepo } from 'protocol-launcher/webstorm'
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

- [BBEdit](../apps/bbedit.md)
- [Cherry Studio](../apps/cherry-studio.md)
- [CodeBuddy](../apps/code-buddy.md)
- [Cursor](../apps/cursor.md)
- [GitHub Desktop](../apps/github-desktop.md)
- [GoLand](../apps/goland.md)
- [IntelliJ IDEA](../apps/idea.md)
- [MacVim](../apps/macvim.md)
- [PhpStorm](../apps/phpstorm.md)
- [PyCharm](../apps/pycharm.md)
- [RustRover](../apps/rustrover.md)
- [Telegram](../apps/telegram.md)
- [TextMate](../apps/textmate.md)
- [Thunder](../apps/thunder.md)
- [VS Code](../apps/vscode.md)
- [WebStorm](../apps/webstorm.md)
- [Xcode](../apps/xcode.md)
- [Zed](../apps/zed.md)
