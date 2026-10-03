---
url: /protocol-launcher/zh/apps/longshot.md
---

# Longshot

[Longshot](https://longshot.chitaner.com/) 是一款强大的 macOS 截图和录屏工具。**Protocol Launcher** 允许您生成深度链接以在 Longshot 中触发截图、录屏、OCR 等操作。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 开始截图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'snip' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}snip({
  func: 'start',
})
```

### 开始区域录屏

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'record' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}record({
  func: 'start_area',
})
```

### 开始 OCR 文字识别

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'ocr' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}ocr({
  func: 'start',
})
```

### 开始屏幕测量

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'rule' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}rule({
  func: 'start',
})
```

### 打开偏好设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pref' : 'longshot' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}pref({
  page: 'shortcuts',
})
```

### 回调返回捕获结果

snip、record、ocr 接受 xSuccess、xError、xSource。传入回调选项（或 xCallback: true）后，使用 x-callback-url 并返回剪贴板结果：snip 为 data、record 为 filepath、ocr 为 string。官方区域录制示例中，普通入口使用 start\_area，回调入口使用 startArea。请传入对应的 func 值，生成时保留原值。errorMessage 由 Longshot 返回，无需作为请求参数传入。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'snip' : 'longshot' }} } from '{{ importPath }}'

const snipUrl = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}snip({
  'func': 'start',
  'xSuccess': 'myapp://snipped'
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'record' : 'longshot' }} } from '{{ importPath }}'

const recordUrl = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}record({
  'func': 'startArea',
  'xSuccess': 'myapp://recorded',
  'xError': 'myapp://error'
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'ocr' : 'longshot' }} } from '{{ importPath }}'

const ocrUrl = {{currentMethod === 'On-Demand' ? '' : 'longshot.'}}ocr({
  'func': 'start',
  'xSuccess': 'myapp://recognized'
})
```

## 官方文档

* [URL scheme](https://longshot.chitaner.com/blog/urlschemeapi/)
