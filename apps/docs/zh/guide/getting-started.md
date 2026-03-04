---
layout: doc
---

# 入门指南

## 安装

使用您喜欢的包管理器安装 `protocol-launcher`：

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

## 使用

### 按需加载（推荐）

为了减小打包体积，建议直接导入特定模块：

::: code-group
```typescript [cherry studio]
// 仅导入 Cherry Studio 相关代码
import { installMCP } from 'protocol-launcher/cherry-studio'
```

```typescript [codebuddy]
// 仅导入 CodeBuddy 相关代码
import { openFile } from 'protocol-launcher/code-buddy'
```

```typescript [cursor]
// 仅导入 Cursor 相关代码
import { installMCP } from 'protocol-launcher/cursor'
```

```typescript [github desktop]
// 仅导入 GitHub Desktop 相关代码
import { openRepo } from 'protocol-launcher/github-desktop'
```

```typescript [goland]
// 仅导入 GoLand 相关代码
import { openRepo } from 'protocol-launcher/goland'
```

```typescript [idea]
// 仅导入 IntelliJ IDEA 相关代码
import { openRepo } from 'protocol-launcher/idea'
```

```typescript [phpstorm]
// 仅导入 PhpStorm 相关代码
import { openRepo } from 'protocol-launcher/phpstorm'
```

```typescript [pycharm]
// 仅导入 PyCharm 相关代码
import { openRepo } from 'protocol-launcher/pycharm'
```

```typescript [rustrover]
// 仅导入 RustRover 相关代码
import { openRepo } from 'protocol-launcher/rustrover'
```

```typescript [telegram]
// 仅导入 Telegram 相关代码
import { open } from 'protocol-launcher/telegram'
```

```typescript [thunder]
// 仅导入 Thunder 相关代码
import { downloadUrl } from 'protocol-launcher/thunder'
```

```typescript [vscode]
// 仅导入 VS Code 相关代码
import { openFile } from 'protocol-launcher/vscode'
```

```typescript [webstorm]
// 仅导入 WebStorm 相关代码
import { openFile } from 'protocol-launcher/webstorm'
```

```typescript [xcode]
// 仅导入 Xcode 相关代码
import { cloneProject } from 'protocol-launcher/xcode'
```
:::

### 全量导入

您也可以从根包导入所有内容，但这将包含所有应用程序模块，并且不支持 Tree Shaking：

```typescript
import { cherryStudio, cursor, githubDesktop } from 'protocol-launcher'
```

有关每个应用程序的详细使用说明，请参阅各自的指南：

- [AFFiNE](../apps/affine.md)
- [Antigravity](../apps/antigravity.md)
- [AppFlowy](../apps/appflowy.md)
- [BBEdit](../apps/bbedit.md)
- [Cherry Studio](../apps/cherry-studio.md)
- [CodeBuddy](../apps/code-buddy.md)
- [CodeLite](../apps/codelite.md)
- [Cursor](../apps/cursor.md)
- [Codex](../apps/codex.md)
- [GitHub Desktop](../apps/github-desktop.md)
- [GoLand](../apps/goland.md)
- [IntelliJ IDEA](../apps/idea.md)
- [Kiro](../apps/kiro.md)
- [Lingma](../apps/lingma.md)
- [MacVim](../apps/macvim.md)
- [Nova](../apps/nova.md)
- [OpenCode](../apps/opencode.md)
- [PearAI](../apps/pearai.md)
- [PhpStorm](../apps/phpstorm.md)
- [PyCharm](../apps/pycharm.md)
- [Qoder](../apps/qoder.md)
- [RustRover](../apps/rustrover.md)
- [Telegram](../apps/telegram.md)
- [TextMate](../apps/textmate.md)
- [Thunder](../apps/thunder.md)
- [VS Code](../apps/vscode.md)
- [VSCodium](../apps/vscodium.md)
- [WebStorm](../apps/webstorm.md)
- [Windsurf](../apps/windsurf.md)
- [Xcode](../apps/xcode.md)
- [Zed](../apps/zed.md)
