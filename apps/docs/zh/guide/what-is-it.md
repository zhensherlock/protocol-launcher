---
layout: doc
---

<script setup lang="ts">
import HomePromoVideo from '../../.vitepress/theme/components/HomePromoVideo.vue';
</script>

# 什么是 Protocol Launcher？

**Protocol Launcher** 是一个 TypeScript 库，旨在为各种应用程序生成“快速启动” URL（深度链接）。

这些 URL 允许用户通过单击触发应用程序中的特定操作，例如安装插件、配置服务器或设置 API 密钥。

<HomePromoVideo variant="doc" />

## 主要特性

- **类型安全**: 严格的 TypeScript 类型校验，避免生成不合法链接。
- **多应用支持**: 可扩展设计，基于 URL Scheme 支持更多应用。
- **按需加载/可树摇**: 仅按需导入所需功能，减小打包体积。
- **安全编码**: 对配置进行安全编码，避免注入。完美支持中文等 Unicode 字符。
- **零运行时依赖**: 轻量、无外部运行时依赖。
- **ESM 优先**: 现代 ES Modules，适配 Node 与各类打包器。

## 支持的应用程序

目前，我们支持以下应用程序：

- [AFFiNE](../apps/affine.md)
- [Agenda](../apps/agenda.md)
- [Alfred](../apps/alfred.md)
- [Antigravity](../apps/antigravity.md)
- [Anybox](../apps/anybox.md)
- [App Store](../apps/app-store.md)
- [AppFlowy](../apps/appflowy.md)
- [Apple Map](../apps/apple-map.md)
- [Apple Script Editor](../apps/apple-script.md)
- [Atom](../apps/atom.md)
- [1Writer](../apps/1writer.md)
- [Appigo Todo](../apps/appigo-todo.md)
- [BBEdit](../apps/bbedit.md)
- [Bear](../apps/bear.md)
- [Beorg](../apps/beorg.md)
- [BetterTouchTool](../apps/bettertouchtool.md)
- [Cal2Todo](../apps/cal2todo.md)
- [Calca](../apps/calca.md)
- [Cherry Studio](../apps/cherry-studio.md)
- [Coda](../apps/coda.md)
- [CodeBuddy](../apps/code-buddy.md)
- [CodeBuddy China](../apps/code-buddy-cn.md)
- [CodeRunner](../apps/code-runner.md)
- [CodeHub](../apps/codehub.md)
- [CodeLite](../apps/codelite.md)
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
- [GoodTask](../apps/goodtask.md)
- [GoLand](../apps/goland.md)
- [HBuilderX](../apps/hbuilderx.md)
- [Hammerspoon](../apps/hammerspoon.md)
- [Hookmark](../apps/hookmark.md)
- [iA Writer](../apps/ia-writer.md)
- [iCab Mobile](../apps/icab-mobile.md)
- [Instapaper](../apps/instapaper.md)
- [IntelliJ IDEA](../apps/idea.md)
- [Interact Scratchpad](../apps/interact.md)
- [iPGMail](../apps/ipgmail.md)
- [Itsycal](../apps/itsycal.md)
- [Jump Desktop](../apps/jump-desktop.md)
- [Keyboard Maestro](../apps/keyboard-maestro.md)
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
- [Nozbe](../apps/nozbe.md)
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
- [Raycast](../apps/raycast.md)
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
- [Tower](../apps/tower.md)
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

未来将添加更多应用程序。
