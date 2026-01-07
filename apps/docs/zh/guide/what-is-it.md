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

- [Cherry Studio](../apps/cherry-studio.md)
- [Cursor](../apps/cursor.md)

未来将添加更多应用程序。
