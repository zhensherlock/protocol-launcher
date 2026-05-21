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
import { openFile } from 'protocol-launcher/goland'
```

```typescript [idea]
// 仅导入 IntelliJ IDEA 相关代码
import { openFile } from 'protocol-launcher/idea'
```

```typescript [phpstorm]
// 仅导入 PhpStorm 相关代码
import { openFile } from 'protocol-launcher/phpstorm'
```

```typescript [pycharm]
// 仅导入 PyCharm 相关代码
import { openFile } from 'protocol-launcher/pycharm'
```

```typescript [rustrover]
// 仅导入 RustRover 相关代码
import { openFile } from 'protocol-launcher/rustrover'
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
- [Agenda](../apps/agenda.md)
- [Alfred](../apps/alfred.md)
- [Antigravity](../apps/antigravity.md)
- [App Store](../apps/app-store.md)
- [AppFlowy](../apps/appflowy.md)
- [Appigo Todo](../apps/appigo-todo.md)
- [Apple 地图](../apps/apple-map.md)
- [Apple Script Editor](../apps/apple-script.md)
- [Atom](../apps/atom.md)
- [1Writer](../apps/1writer.md)
- [BBEdit](../apps/bbedit.md)
- [Bear](../apps/bear.md)
- [Beorg](../apps/beorg.md)
- [Cal2Todo](../apps/cal2todo.md)
- [Calca](../apps/calca.md)
- [Cherry Studio](../apps/cherry-studio.md)
- [Coda](../apps/coda.md)
- [CodeBuddy](../apps/code-buddy.md)
- [CodeBuddy China](../apps/code-buddy-cn.md)
- [CodeLite](../apps/codelite.md)
- [CodeRunner](../apps/code-runner.md)
- [CodeHub](../apps/codehub.md)
- [Codex](../apps/codex.md)
- [Craft](../apps/craft.md)
- [Cubox](../apps/cubox.md)
- [Cursor](../apps/cursor.md)
- [2Do](../apps/2do.md)
- [Day One](../apps/day-one.md)
- [DEVONthink](../apps/devonthink.md)
- [dict.cc](../apps/dict-cc.md)
- [Drafts](../apps/drafts.md)
- [Editorial](../apps/editorial.md)
- [Equipd Bible](../apps/equipd-bible.md)
- [Due](../apps/due.md)
- [Evernote](../apps/evernote.md)
- [Fantastical](../apps/fantastical.md)
- [FSNotes](../apps/fsnotes.md)
- [Streets](../apps/ftstreets.md)
- [GitHub Desktop](../apps/github-desktop.md)
- [Gladys](../apps/gladys.md)
- [GoodLinks](../apps/goodlinks.md)
- [GoLand](../apps/goland.md)
- [HBuilderX](../apps/hbuilderx.md)
- [Hookmark](../apps/hookmark.md)
- [iA Writer](../apps/ia-writer.md)
- [iCab Mobile](../apps/icab-mobile.md)
- [IntelliJ IDEA](../apps/idea.md)
- [Instapaper](../apps/instapaper.md)
- [Interact Scratchpad](../apps/interact.md)
- [iPGMail](../apps/ipgmail.md)
- [Itsycal](../apps/itsycal.md)
- [Jump Desktop](../apps/jump-desktop.md)
- [Kaleidoscope](../apps/kaleidoscope.md)
- [Kiro](../apps/kiro.md)
- [Lingma](../apps/lingma.md)
- [Longshot](../apps/longshot.md)
- [macOS](../apps/macos.md)
- [MacVim](../apps/macvim.md)
- [Mail Assistant](../apps/mail-assistant.md)
- [miCal](../apps/mical.md)
- [Microsoft Edge](../apps/microsoft-edge.md)
- [Motrix](../apps/motrix.md)
- [MultiTimer](../apps/multi-timer.md)
- [Navicat](../apps/navicat.md)
- [NotePlan](../apps/noteplan.md)
- [Nova](../apps/nova.md)
- [Obsidian](../apps/obsidian.md)
- [OmniFocus](../apps/omnifocus.md)
- [OpenCode](../apps/opencode.md)
- [Opener](../apps/opener.md)
- [Orchids](../apps/orchids.md)
- [Overcast](../apps/overcast.md)
- [PearAI](../apps/pearai.md)
- [Pika](../apps/pika.md)
- [Pleco](../apps/pleco.md)
- [Prizmo](../apps/prizmo.md)
- [PhpStorm](../apps/phpstorm.md)
- [PyCharm](../apps/pycharm.md)
- [Pyto](../apps/pyto.md)
- [Qoder](../apps/qoder.md)
- [Quark](../apps/quark.md)
- [RustRover](../apps/rustrover.md)
- [Scriptable](../apps/scriptable.md)
- [Shopi](../apps/shopi.md)
- [Shortcuts](../apps/shortcuts.md)
- [Simple Scan](../apps/simple-scan.md)
- [Sketch](../apps/sketch.md)
- [Soulver](../apps/soulver.md)
- [SourceTree](../apps/sourcetree.md)
- [Steam](../apps/steam.md)
- [Story Planner](../apps/story-planner.md)
- [Tally](../apps/tally.md)
- [Telegram](../apps/telegram.md)
- [Terminology](../apps/terminology.md)
- [Termius](../apps/termius.md)
- [Textastic](../apps/textastic.md)
- [TextMate](../apps/textmate.md)
- [Theia](../apps/theia.md)
- [Things](../apps/things.md)
- [Thunder](../apps/thunder.md)
- [Todoist](../apps/todoist.md)
- [Trae](../apps/trae.md)
- [Trae China](../apps/trae-cn.md)
- [Trello](../apps/trello.md)
- [Ulysses](../apps/ulysses.md)
- [uPic](../apps/upic.md)
- [Verdent](../apps/verdent.md)
- [VS Code](../apps/vscode.md)
- [VS Code Insiders](../apps/vscode-insiders.md)
- [VSCodium](../apps/vscodium.md)
- [WaterMinder](../apps/waterminder.md)
- [WebStorm](../apps/webstorm.md)
- [WeMeet](../apps/wemeet.md)
- [Where To](../apps/whereto.md)
- [Windsurf](../apps/windsurf.md)
- [Working Copy](../apps/working-copy.md)
- [Xcode](../apps/xcode.md)
- [Zed](../apps/zed.md)
