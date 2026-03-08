---
url: /protocol-launcher/zh/apps/hbuilderx.md
---

# HBuilderX

[HBuilderX](https://www.dcloud.io/hbuilderx.html) 是一款轻巧、极速、基于 C++ 架构的现代化编辑器。它拥有强大的 AST 语法分析能力，专为 Vue 打造，提供卓越的开发效率。除了极致的编码体验，它还支持 Markdown 优先、清爽护眼的界面以及高效的极客操作。**Protocol Launcher** 允许你生成深度链接，用于在 HBuilderX 中快速打开资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 HBuilderX

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'hbuilderx' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hbuilderx.'}}open()
```
