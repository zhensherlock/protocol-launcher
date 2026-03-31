---
url: /protocol-launcher/zh/apps/prizmo.md
---

# Prizmo

[Prizmo](https://creaceed.com/prizmo) 是一款适用于 iPhone、iPad 和 Mac 的专业扫描应用，支持 OCR 文字识别。**Protocol Launcher** 允许您生成深度链接以在 Prizmo 中处理文档和朗读文本。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 处理文档

在 Prizmo 中处理文档，支持 OCR、PDF 生成和图像清理。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'processDocument' : 'prizmo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'prizmo.'}}processDocument({
  ocr: 'en',
  destination: 'clipboard',
})
```

### 处理文档（带回调）

处理文档并设置成功、取消和错误事件的回调 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'processDocument' : 'prizmo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'prizmo.'}}processDocument({
  ocr: 'en',
  destination: 'url',
  xSuccess: 'myapp://callback',
})
```

### 朗读文本

在 Prizmo 文本阅读器中朗读文本。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'readText' : 'prizmo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'prizmo.'}}readText({
  text: 'Hello World',
  voice: 'Ryan',
})
```
