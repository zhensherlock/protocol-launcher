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

- [AFFiNE](../apps/affine.md)
- [Alfred](../apps/alfred.md)
- [Antigravity](../apps/antigravity.md)
- [App Store](../apps/app-store.md)
- [AppFlowy](../apps/appflowy.md)
- [Apple Map](../apps/apple-map.md)
- [Apple Script Editor](../apps/apple-script.md)
- [Atom](../apps/atom.md)
- [BBEdit](../apps/bbedit.md)
- [Bear](../apps/bear.md)
- [Cherry Studio](../apps/cherry-studio.md)
- [CodeBuddy](../apps/code-buddy.md)
- [CodeBuddy China](../apps/code-buddy-cn.md)
- [CodeLite](../apps/codelite.md)
- [CodeRunner](../apps/code-runner.md)
- [Codex](../apps/codex.md)
- [Cursor](../apps/cursor.md)
- [Evernote](../apps/evernote.md)
- [FSNotes](../apps/fsnotes.md)
- [GitHub Desktop](../apps/github-desktop.md)
- [GoLand](../apps/goland.md)
- [HBuilderX](../apps/hbuilderx.md)
- [IntelliJ IDEA](../apps/idea.md)
- [Itsycal](../apps/itsycal.md)
- [Jump Desktop](../apps/jump-desktop.md)
- [Kaleidoscope](../apps/kaleidoscope.md)
- [Kiro](../apps/kiro.md)
- [Lingma](../apps/lingma.md)
- [macOS](../apps/macos.md)
- [MacVim](../apps/macvim.md)
- [Microsoft Edge](../apps/microsoft-edge.md)
- [Motrix](../apps/motrix.md)
- [Navicat](../apps/navicat.md)
- [Nova](../apps/nova.md)
- [OpenCode](../apps/opencode.md)
- [Orchids](../apps/orchids.md)
- [PearAI](../apps/pearai.md)
- [Pika](../apps/pika.md)
- [PhpStorm](../apps/phpstorm.md)
- [PyCharm](../apps/pycharm.md)
- [Qoder](../apps/qoder.md)
- [Quark](../apps/quark.md)
- [RustRover](../apps/rustrover.md)
- [Shortcuts](../apps/shortcuts.md)
- [Sketch](../apps/sketch.md)
- [Soulver](../apps/soulver.md)
- [SourceTree](../apps/sourcetree.md)
- [Steam](../apps/steam.md)
- [Telegram](../apps/telegram.md)
- [Termius](../apps/termius.md)
- [TextMate](../apps/textmate.md)
- [Theia](../apps/theia.md)
- [Things](../apps/things.md)
- [Thunder](../apps/thunder.md)
- [Trae](../apps/trae.md)
- [Trae China](../apps/trae-cn.md)
- [uPic](../apps/upic.md)
- [Verdent](../apps/verdent.md)
- [VS Code](../apps/vscode.md)
- [VS Code Insiders](../apps/vscode-insiders.md)
- [VSCodium](../apps/vscodium.md)
- [WebStorm](../apps/webstorm.md)
- [WeMeet](../apps/wemeet.md)
- [Windsurf](../apps/windsurf.md)
- [Xcode](../apps/xcode.md)
- [Zed](../apps/zed.md)
