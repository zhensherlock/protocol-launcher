---
layout: doc
---

# 什么是 Protocol Launcher？

**Protocol Launcher** 是一个 TypeScript 库，旨在为各种应用程序生成“快速启动” URL（深度链接）。

这些 URL 允许用户通过单击触发应用程序中的特定操作，例如安装插件、配置服务器或设置 API 密钥。

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
- [Alfred](../apps/alfred.md)
- [Antigravity](../apps/antigravity.md)
- [App Store](../apps/app-store.md)
- [AppFlowy](../apps/appflowy.md)
- [Apple Map](../apps/apple-map.md)
- [Apple Script Editor](../apps/apple-script.md)
- [Atom](../apps/atom.md)
- [1Writer](../apps/1writer.md)
- [BBEdit](../apps/bbedit.md)
- [Bear](../apps/bear.md)
- [Cherry Studio](../apps/cherry-studio.md)
- [CodeBuddy](../apps/code-buddy.md)
- [CodeBuddy China](../apps/code-buddy-cn.md)
- [CodeRunner](../apps/code-runner.md)
- [CodeLite](../apps/codelite.md)
- [Codex](../apps/codex.md)
- [Cursor](../apps/cursor.md)
- [2Do](../apps/2do.md)
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
- [Longshot](../apps/longshot.md)
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

未来将添加更多应用程序。
