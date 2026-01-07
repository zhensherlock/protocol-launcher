---
url: /protocol-launcher/zh/guide/getting-started.md
---

# 入门指南

## 安装

使用您喜欢的包管理器安装 `protocol-launcher`：

::: code-group

```sh [npm]
$ npm install protocol-launcher
```

```sh [pnpm]
$ pnpm add protocol-launcher
```

```sh [yarn]
$ yarn add protocol-launcher
```

```bash [bun]
$ bun add protocol-launcher
```

:::

## 使用

### 按需加载（推荐）

为了减小打包体积，建议直接导入特定模块：

::: code-group

```typescript [cherry studio]
// 仅导入 Cherry Studio 相关代码
import { installMCP, installProvider } from 'protocol-launcher/cherry-studio'
```

```typescript [cursor]
// 仅导入 Cursor 相关代码
import { installMCP } from 'protocol-launcher/cursor'
```

:::

### 全量导入

您也可以从根包导入所有内容，但这将包含所有应用程序模块，并且不支持 Tree Shaking：

```typescript
import { cherryStudio, cursor } from 'protocol-launcher'
```

有关每个应用程序的详细使用说明，请参阅各自的指南：

* [Cherry Studio](/zh/apps/cherry-studio)
* [Cursor](/zh/apps/cursor)
