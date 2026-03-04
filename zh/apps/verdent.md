---
url: /protocol-launcher/zh/apps/verdent.md
---

# Verdent

[Verdent](https://verdent.ai/) 是一款 AI 驱动的编程伙伴，旨在通过专注于创造来带回编程的乐趣。它将世界级的编程智能体与多种前沿模型结合，帮助您从零开始构建项目、在现有代码库中交付功能以及处理复杂的调试。通过用于执行的“智能体模式”和用于协作规划的“计划模式”，Verdent 处理复杂性，让您保持流畅的开发体验。**Protocol Launcher** 允许您生成深度链接以打开 Verdent。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 Verdent

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'verdent' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'verdent.'}}open()
```
