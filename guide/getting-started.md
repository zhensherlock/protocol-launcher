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
import { openFile } from 'protocol-launcher/goland'
```

```typescript [idea]
// Only imports IntelliJ IDEA related code
import { openFile } from 'protocol-launcher/idea'
```

```typescript [phpstorm]
// Only imports PhpStorm related code
import { openFile } from 'protocol-launcher/phpstorm'
```

```typescript [pycharm]
// Only imports PyCharm related code
import { openFile } from 'protocol-launcher/pycharm'
```

```typescript [rustrover]
// Only imports RustRover related code
import { openFile } from 'protocol-launcher/rustrover'
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
import { openFile } from 'protocol-launcher/webstorm'
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

* [AFFiNE](../apps/affine.md)
* [Agenda](../apps/agenda.md)
* [Alfred](../apps/alfred.md)
* [Antigravity](../apps/antigravity.md)
* [Anybox](../apps/anybox.md)
* [App Store](../apps/app-store.md)
* [AppFlowy](../apps/appflowy.md)
* [Appigo Todo](../apps/appigo-todo.md)
* [Apple Maps](../apps/apple-map.md)
* [Apple Script Editor](../apps/apple-script.md)
* [Atom](../apps/atom.md)
* [1Writer](../apps/1writer.md)
* [BBEdit](../apps/bbedit.md)
* [Bear](../apps/bear.md)
* [Beorg](../apps/beorg.md)
* [BetterTouchTool](../apps/bettertouchtool.md)
* [Bunch](../apps/bunch.md)
* [Cal2Todo](../apps/cal2todo.md)
* [Calca](../apps/calca.md)
* [Capacities](../apps/capacities.md)
* [Cherry Studio](../apps/cherry-studio.md)
* [Cloze](../apps/cloze.md)
* [Coda](../apps/coda.md)
* [CodeBuddy](../apps/code-buddy.md)
* [CodeBuddy China](../apps/code-buddy-cn.md)
* [CodeLite](../apps/codelite.md)
* [CodeRunner](../apps/code-runner.md)
* [CodeHub](../apps/codehub.md)
* [Codex](../apps/codex.md)
* [Craft](../apps/craft.md)
* [Cubox](../apps/cubox.md)
* [Cursor](../apps/cursor.md)
* [2Do](../apps/2do.md)
* [Day One](../apps/day-one.md)
* [DEVONthink](../apps/devonthink.md)
* [dict.cc](../apps/dict-cc.md)
* [Drafts](../apps/drafts.md)
* [Editorial](../apps/editorial.md)
* [Equipd Bible](../apps/equipd-bible.md)
* [Due](../apps/due.md)
* [Evernote](../apps/evernote.md)
* [Fantastical](../apps/fantastical.md)
* [Claris FileMaker](../apps/filemaker.md)
* [FSNotes](../apps/fsnotes.md)
* [Streets](../apps/ftstreets.md)
* [GitHub Desktop](../apps/github-desktop.md)
* [Gladys](../apps/gladys.md)
* [GoodLinks](../apps/goodlinks.md)
* [GoodTask](../apps/goodtask.md)
* [GoLand](../apps/goland.md)
* [Google Maps](../apps/google-maps.md)
* [HBuilderX](../apps/hbuilderx.md)
* [Hammerspoon](../apps/hammerspoon.md)
* [Hookmark](../apps/hookmark.md)
* [iA Writer](../apps/ia-writer.md)
* [iCab Mobile](../apps/icab-mobile.md)
* [IntelliJ IDEA](../apps/idea.md)
* [Infuse](../apps/infuse.md)
* [Instapaper](../apps/instapaper.md)
* [Interact Scratchpad](../apps/interact.md)
* [iPGMail](../apps/ipgmail.md)
* [iThoughts](../apps/ithoughts.md)
* [Itsycal](../apps/itsycal.md)
* [Joplin](../apps/joplin.md)
* [Jump Desktop](../apps/jump-desktop.md)
* [Keyboard Maestro](../apps/keyboard-maestro.md)
* [Kaleidoscope](../apps/kaleidoscope.md)
* [Kiro](../apps/kiro.md)
* [LaunchBar](../apps/launchbar.md)
* [Lingma](../apps/lingma.md)
* [Longshot](../apps/longshot.md)
* [macOS](../apps/macos.md)
* [MacVim](../apps/macvim.md)
* [Mail Assistant](../apps/mail-assistant.md)
* [Marked](../apps/marked.md)
* [miCal](../apps/mical.md)
* [Microsoft Edge](../apps/microsoft-edge.md)
* [Microsoft Teams](../apps/microsoft-teams.md)
* [MoneyWiz](../apps/moneywiz.md)
* [Motrix](../apps/motrix.md)
* [MultiTimer](../apps/multi-timer.md)
* [Navicat](../apps/navicat.md)
* [NotePlan](../apps/noteplan.md)
* [Nozbe](../apps/nozbe.md)
* [Nova](../apps/nova.md)
* [Obsidian](../apps/obsidian.md)
* [OmniFocus](../apps/omnifocus.md)
* [OpenCode](../apps/opencode.md)
* [Opener](../apps/opener.md)
* [Orchids](../apps/orchids.md)
* [Overcast](../apps/overcast.md)
* [PearAI](../apps/pearai.md)
* [Pika](../apps/pika.md)
* [Pleco](../apps/pleco.md)
* [Prizmo](../apps/prizmo.md)
* [PhpStorm](../apps/phpstorm.md)
* [PyCharm](../apps/pycharm.md)
* [Pythonista](../apps/pythonista.md)
* [Pyto](../apps/pyto.md)
* [Qoder](../apps/qoder.md)
* [Quark](../apps/quark.md)
* [Raycast](../apps/raycast.md)
* [RustRover](../apps/rustrover.md)
* [Scriptable](../apps/scriptable.md)
* [Shopi](../apps/shopi.md)
* [Shortcuts](../apps/shortcuts.md)
* [Simple Scan](../apps/simple-scan.md)
* [Sketch](../apps/sketch.md)
* [Slack](../apps/slack.md)
* [Soulver](../apps/soulver.md)
* [SourceTree](../apps/sourcetree.md)
* [Steam](../apps/steam.md)
* [Story Planner](../apps/story-planner.md)
* [Tally](../apps/tally.md)
* [Telegram](../apps/telegram.md)
* [Terminology](../apps/terminology.md)
* [Termius](../apps/termius.md)
* [Textastic](../apps/textastic.md)
* [TextMate](../apps/textmate.md)
* [Theia](../apps/theia.md)
* [Things](../apps/things.md)
* [Thunder](../apps/thunder.md)
* [Todoist](../apps/todoist.md)
* [Tower](../apps/tower.md)
* [Trae](../apps/trae.md)
* [Trae China](../apps/trae-cn.md)
* [Trello](../apps/trello.md)
* [Ulysses](../apps/ulysses.md)
* [uPic](../apps/upic.md)
* [Verdent](../apps/verdent.md)
* [VS Code](../apps/vscode.md)
* [VS Code Insiders](../apps/vscode-insiders.md)
* [VSCodium](../apps/vscodium.md)
* [WaterMinder](../apps/waterminder.md)
* [Waze](../apps/waze.md)
* [WebStorm](../apps/webstorm.md)
* [WeMeet](../apps/wemeet.md)
* [Where To](../apps/whereto.md)
* [Windsurf](../apps/windsurf.md)
* [Working Copy](../apps/working-copy.md)
* [Xcode](../apps/xcode.md)
* [Zed](../apps/zed.md)
