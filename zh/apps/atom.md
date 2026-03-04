---
url: /protocol-launcher/zh/apps/atom.md
---

# Atom

[Atom](https://atom.io/) 是一款基于 Electron 平台的开源文本编辑器，由 GitHub 开发。它使用 HTML、JavaScript、CSS 和 Node.js 构建，运行在 Electron 框架上，支持跨平台编辑、内置包管理器以及与 Git 和 GitHub 的深度集成。**Protocol Launcher** 允许你生成深度链接，用于在 Atom 中打开资源。

::: info
Atom 及其所有仓库已于 2022 年 12 月 15 日正式归档。
:::

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 Atom

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'atom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'atom.'}}open()
```

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'atom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'atom.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```
