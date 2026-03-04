---
url: /protocol-launcher/zh/apps/appflowy.md
---

# AppFlowy

[AppFlowy](https://appflowy.io/) 是一款由 AI 驱动的协作工作空间，旨在让您在不失去数据控制权的情况下实现更多目标。它是 Notion 的开源替代方案，专为重视隐私和原生跨平台体验的个人及团队设计。它基于 Flutter 和 Rust 构建，为项目、维基和数据库提供了强大的工具箱。**Protocol Launcher** 允许你生成深度链接，用于在 AppFlowy 中打开资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 AppFlowy

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appflowy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appflowy.'}}open()
```
