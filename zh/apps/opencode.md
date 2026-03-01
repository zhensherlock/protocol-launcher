---
url: /protocol-launcher/zh/apps/opencode.md
---

# OpenCode

[OpenCode](https://opencode.ai/) 是一个开源智能体，帮助您在终端、IDE 或桌面端编写代码。**Protocol Launcher** 允许你生成深度链接，用于在 OpenCode 中打开资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'opencode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opencode.'}}open()
```

### 打开项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'opencode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opencode.'}}openProject({
  path: '/Users/dev/project',
})
```
