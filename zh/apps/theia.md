---
url: /protocol-launcher/zh/apps/theia.md
---

# Theia

[Theia](https://theia-ide.org/) 是一个用于构建云端和桌面 IDE 的开源、可扩展平台。它采用模块化架构设计，兼容 VS Code 扩展，并支持深度定制，以打造量身定制的开发体验。**Protocol Launcher** 允许您生成用于打开 Theia 的深度链接。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 Theia

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'theia' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'theia.'}}open()
```
