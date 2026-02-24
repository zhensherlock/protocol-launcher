---
url: /protocol-launcher/zh/apps/macvim.md
---

# MacVim

[MacVim](https://macvim.org/) 是一款 Vim 文本编辑器的 macOS 版本。**Protocol Launcher** 允许你生成深度链接，用于在 MacVim 中打开资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'macvim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macvim.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'macvim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'macvim.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
})
```
