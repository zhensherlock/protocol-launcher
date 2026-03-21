---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import {
  redo,
  swap,
  undo,
  dark,
  light,
  system,
  copyBackground,
  copyForeground,
  copyJson,
  copyText,
  formatHex,
  formatHsb,
  formatHsl,
  formatLab,
  formatOklch,
  formatOpenGL,
  formatRgb,
  hideHistory,
  showHistory,
  toggleHistory,
  pickBackground,
  pickForeground,
  setBackground,
  setForeground,
  systemBackground,
  systemForeground,
  about,
  help,
  preferences,
  resize,
} from 'protocol-launcher/pika'
import { SelectInstallationMethod } from '../../.vitepress/components'
import {
  resizeParams,
  setForegroundParams,
  setBackgroundParams,
  pickForegroundParams,
  pickBackgroundParams,
} from '../../.vitepress/constants/pika'

const currentMethod = ref('On-Demand')
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/pika' : 'protocol-launcher',
)
</script>

# Pika

[Pika](https://superhighfives.com/pika) 是 macOS 的原生颜色选择器工具。**Protocol Launcher** 允许您生成深度链接以控制 Pika 的颜色选择、格式和外观设置。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 操作（Actions）

### 交换颜色（Swap）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'swap' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}swap()
```

<div class="flex justify-center">
  <VPLink :href="swap()" target="_self">
    在 Pika 中交换颜色
  </VPLink>
</div>

### 撤销（Undo）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'undo' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}undo()
```

<div class="flex justify-center">
  <VPLink :href="undo()" target="_self">
    在 Pika 中撤销
  </VPLink>
</div>

### 重做（Redo）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'redo' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}redo()
```

<div class="flex justify-center">
  <VPLink :href="redo()" target="_self">
    在 Pika 中重做
  </VPLink>
</div>

## 外观（Appearance）

### 浅色模式（Light）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'light' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}light()
```

<div class="flex justify-center">
  <VPLink :href="light()" target="_self">
    在 Pika 中使用浅色外观
  </VPLink>
</div>

### 深色模式（Dark）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dark' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}dark()
```

<div class="flex justify-center">
  <VPLink :href="dark()" target="_self">
    在 Pika 中使用深色外观
  </VPLink>
</div>

### 系统模式（System）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'system' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}system()
```

<div class="flex justify-center">
  <VPLink :href="system()" target="_self">
    在 Pika 中使用系统外观
  </VPLink>
</div>

## 复制（Copy）

### 复制前景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyForeground()
```

<div class="flex justify-center">
  <VPLink :href="copyForeground()" target="_self">
    在 Pika 中复制前景色
  </VPLink>
</div>

### 复制背景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyBackground()
```

<div class="flex justify-center">
  <VPLink :href="copyBackground()" target="_self">
    在 Pika 中复制背景色
  </VPLink>
</div>

### 复制文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyText' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyText()
```

<div class="flex justify-center">
  <VPLink :href="copyText()" target="_self">
    在 Pika 中复制文本
  </VPLink>
</div>

### 复制 JSON

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyJson' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}copyJson()
```

<div class="flex justify-center">
  <VPLink :href="copyJson()" target="_self">
    在 Pika 中复制 JSON
  </VPLink>
</div>

## 格式（Format）

### Hex 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHex' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHex()
```

<div class="flex justify-center">
  <VPLink :href="formatHex()" target="_self">
    在 Pika 中使用 Hex 格式
  </VPLink>
</div>

### RGB 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatRgb' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatRgb()
```

<div class="flex justify-center">
  <VPLink :href="formatRgb()" target="_self">
    在 Pika 中使用 RGB 格式
  </VPLink>
</div>

### HSB 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHsb' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHsb()
```

<div class="flex justify-center">
  <VPLink :href="formatHsb()" target="_self">
    在 Pika 中使用 HSB 格式
  </VPLink>
</div>

### HSL 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatHsl' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatHsl()
```

<div class="flex justify-center">
  <VPLink :href="formatHsl()" target="_self">
    在 Pika 中使用 HSL 格式
  </VPLink>
</div>

### LAB 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatLab' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatLab()
```

<div class="flex justify-center">
  <VPLink :href="formatLab()" target="_self">
    在 Pika 中使用 LAB 格式
  </VPLink>
</div>

### OpenGL 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatOpenGL' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatOpenGL()
```

<div class="flex justify-center">
  <VPLink :href="formatOpenGL()" target="_self">
    在 Pika 中使用 OpenGL 格式
  </VPLink>
</div>

### OKLCH 格式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'formatOklch' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}formatOklch()
```

<div class="flex justify-center">
  <VPLink :href="formatOklch()" target="_self">
    在 Pika 中使用 OKLCH 格式
  </VPLink>
</div>

## 历史记录（History）

### 显示历史记录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}showHistory()
```

<div class="flex justify-center">
  <VPLink :href="showHistory()" target="_self">
    在 Pika 中显示历史记录
  </VPLink>
</div>

### 隐藏历史记录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hideHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}hideHistory()
```

<div class="flex justify-center">
  <VPLink :href="hideHistory()" target="_self">
    在 Pika 中隐藏历史记录
  </VPLink>
</div>

### 切换历史记录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleHistory' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}toggleHistory()
```

<div class="flex justify-center">
  <VPLink :href="toggleHistory()" target="_self">
    在 Pika 中切换历史记录
  </VPLink>
</div>

## 选取（Pick）

### 选取前景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pickForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}pickForeground({
  type: 'hex',
})
```

<div class="flex justify-center">
  <VPLink :href="pickForeground(pickForegroundParams)" target="_self">
    在 Pika 中选取前景色
  </VPLink>
</div>

### 选取背景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pickBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}pickBackground({
  type: 'rgb',
})
```

<div class="flex justify-center">
  <VPLink :href="pickBackground(pickBackgroundParams)" target="_self">
    在 Pika 中选取背景色
  </VPLink>
</div>

## 设置颜色（Set Color）

### 设置前景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}setForeground({
  hex: 'fbbf24',
})
```

<div class="flex justify-center">
  <VPLink :href="setForeground(setForegroundParams)" target="_self">
    在 Pika 中设置前景色
  </VPLink>
</div>

### 设置背景色

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}setBackground({
  hex: 'e74661',
})
```

<div class="flex justify-center">
  <VPLink :href="setBackground(setBackgroundParams)" target="_self">
    在 Pika 中设置背景色
  </VPLink>
</div>

## 系统（System）

### 系统前景色选择器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemForeground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}systemForeground()
```

<div class="flex justify-center">
  <VPLink :href="systemForeground()" target="_self">
    在 Pika 中打开系统前景色选择器
  </VPLink>
</div>

### 系统背景色选择器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'systemBackground' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}systemBackground()
```

<div class="flex justify-center">
  <VPLink :href="systemBackground()" target="_self">
    在 Pika 中打开系统背景色选择器
  </VPLink>
</div>

## 窗口（Window）

### 关于（About）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'about' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}about()
```

<div class="flex justify-center">
  <VPLink :href="about()" target="_self">
    关于 Pika
  </VPLink>
</div>

### 帮助（Help）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'help' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}help()
```

<div class="flex justify-center">
  <VPLink :href="help()" target="_self">
    在 Pika 中打开帮助
  </VPLink>
</div>

### 偏好设置（Preferences）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preferences' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}preferences()
```

<div class="flex justify-center">
  <VPLink :href="preferences()" target="_self">
    在 Pika 中打开偏好设置
  </VPLink>
</div>

### 调整窗口大小（Resize）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resize' : 'pika' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pika.'}}resize({
  width: 480,
  height: 300,
})
```

<div class="flex justify-center">
  <VPLink :href="resize(resizeParams)" target="_self">
    在 Pika 中调整窗口大小
  </VPLink>
</div>
