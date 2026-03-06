---
url: /protocol-launcher/zh/apps/code-runner.md
---

# CodeRunner

[CodeRunner](https://coderunnerapp.com/) 是一款适用于 macOS 的轻量级多语言编程编辑器和 IDE。它开箱即用支持 25 种语言，并具有高级代码补全、内置调试和实时错误检查等功能。**Protocol Launcher** 允许您生成深度链接，以便在 CodeRunner 中打开和配置资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开编辑器

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codeRunner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeRunner.'}}open()
```

### 打开文件

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'codeRunner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeRunner.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\\Windows\\System32\\drivers\\etc\\hosts' : '/etc/hosts' }}',
})
```

### 打开目录

```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'codeRunner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeRunner.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\\Windows\\System32\\drivers\\etc' : '/etc' }}',
})
```
