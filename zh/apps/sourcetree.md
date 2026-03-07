---
url: /protocol-launcher/zh/apps/sourcetree.md
---

# SourceTree

[SourceTree](https://www.sourcetreeapp.com/) 是一款适用于 Windows 和 macOS 的免费 Git 客户端，它可以简化你与 Git 仓库的交互方式。**Protocol Launcher** 允许你生成深度链接，用于在 SourceTree 中打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 SourceTree

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'sourcetree' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sourcetree.'}}open()
```

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'sourcetree' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sourcetree.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
