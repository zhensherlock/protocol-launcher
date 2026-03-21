---
url: /protocol-launcher/zh/apps/pika.md
---

# Pika

[Pika](https://superhighfives.com/pika) 是 macOS 的原生颜色选择器工具。**Protocol Launcher** 允许您生成深度链接以控制 Pika 的颜色选择、格式和外观设置。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 操作（Actions）

### 交换颜色（Swap）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'swap' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}swap()
```

### 撤销（Undo）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'undo' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}undo()
```

### 重做（Redo）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'redo' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}redo()
```

## 外观（Appearance）

### 浅色模式（Light）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'light' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}light()
```

### 深色模式（Dark）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dark' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}dark()
```

### 系统模式（System）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'system' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}system()
```

## 复制（Copy）

### 复制前景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyForeground()
```

### 复制背景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyBackground()
```

### 复制文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyText' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyText()
```

### 复制 JSON

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyJson' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyJson()
```

## 格式（Format）

### Hex 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHex' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHex()
```

### RGB 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatRgb' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatRgb()
```

### HSB 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHsb' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHsb()
```

### HSL 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHsl' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHsl()
```

### LAB 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatLab' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatLab()
```

### OpenGL 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatOpenGL' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatOpenGL()
```

### OKLCH 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatOklch' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatOklch()
```

## 历史记录（History）

### 显示历史记录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}showHistory()
```

### 隐藏历史记录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hideHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}hideHistory()
```

### 切换历史记录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}toggleHistory()
```

## 选取（Pick）

### 选取前景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pickForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}pickForeground({
  type: 'hex',
})
```

### 选取背景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pickBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}pickBackground({
  type: 'rgb',
})
```

## 设置颜色（Set Color）

### 设置前景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}setForeground({
  hex: 'fbbf24',
})
```

### 设置背景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}setBackground({
  hex: 'e74661',
})
```

## 系统（System）

### 系统前景色选择器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}systemForeground()
```

### 系统背景色选择器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}systemBackground()
```

## 窗口（Window）

### 关于（About）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'about' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}about()
```

### 帮助（Help）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'help' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}help()
```

### 偏好设置（Preferences）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preferences' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}preferences()
```

### 调整窗口大小（Resize）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resize' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}resize({
  width: 480,
  height: 300,
})
```
