---
url: /protocol-launcher/zh/apps/github-desktop.md
---

# GitHub Desktop

[GitHub Desktop](https://github.com/apps/desktop) 是一款用于 GitHub 版本控制与协作的桌面应用程序。**Protocol Launcher** 允许你生成深度链接，用于在 GitHub Desktop 中打开并配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'githubDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'githubDesktop.'}}openFile({
  owner: 'zhensherlock',
  repo: 'protocol-launcher',
  branch: 'main',
  path: 'packages/shared/src/index.ts',
})
```

### 打开仓库

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRepo' : 'githubDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'githubDesktop.'}}openRepo({
  owner: 'zhensherlock',
  repo: 'protocol-launcher',
  branch: 'main',
})
```
