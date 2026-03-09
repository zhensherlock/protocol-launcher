---
url: /protocol-launcher/zh/apps/kaleidoscope.md
---

# Kaleidoscope

[Kaleidoscope](https://kaleidoscope.app/) 是全球领先的文件对比与合并工具。它能够快速识别文本、图片甚至整个文件夹之间的差异。**Protocol Launcher** 允许你生成深度链接，以便在 Kaleidoscope 中打开并对比资源。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 打开 Kaleidoscope

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}open()
```

### 对比文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'compare' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}compare({
  previousPath: '/Users/dev/Desktop/previous.md',
  latestPath: '/Users/dev/Desktop/latest.md',
})
```

### 对比剪贴板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clipboard' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}clipboard({
  label: 'Clipboard',
})
```

### 打开历史记录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'history' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}history({
  label: 'History',
  filePath: '/Users/dev/protocol-launcher/packages/protocol-launcher/src/kaleidoscope/history.ts',
})
```
