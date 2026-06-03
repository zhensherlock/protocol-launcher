---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  convertValue,
  open,
  openCalculator,
  openConstants,
  openLayout,
  openRegisters,
  openSettings,
  openStack,
  openTape,
  setValue,
} from 'protocol-launcher/pcalc';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  convertValueParams,
  openCalculatorParams,
  openLayoutParams,
  setValueParams,
} from '../../.vitepress/constants/pcalc';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pcalc' : 'protocol-launcher');
</script>

# PCalc

[PCalc](https://www.pcalc.com/iphone/index.html) 是一款适用于 iPad、iPhone、Apple Vision Pro、Apple Watch 和 Mac 的计算器。**Protocol Launcher** 允许您生成官方 PCalc URL scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

因为 `clearAll()` 会清空当前 PCalc 状态，而 x-callback helpers 是回调目标，这些函数只展示代码示例。

### 打开 PCalc

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 PCalc
  </VPLink>
</div>

### 设置数值

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setValue' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}setValue({
  value: 12345,
})
```

<div class="flex justify-center">
  <VPLink :href="setValue(setValueParams)" target="_self">
    在 PCalc 中设置数值
  </VPLink>
</div>

### 换算数值

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'convertValue' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}convertValue({
  value: 12345,
})
```

<div class="flex justify-center">
  <VPLink :href="convertValue(convertValueParams)" target="_self">
    在 PCalc 中换算数值
  </VPLink>
</div>

### 打开常数

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openConstants' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openConstants()
```

<div class="flex justify-center">
  <VPLink :href="openConstants()" target="_self">
    打开 PCalc 常数
  </VPLink>
</div>

### 打开纸带

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTape' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openTape()
```

<div class="flex justify-center">
  <VPLink :href="openTape()" target="_self">
    打开 PCalc 纸带
  </VPLink>
</div>

### 打开寄存器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRegisters' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openRegisters()
```

<div class="flex justify-center">
  <VPLink :href="openRegisters()" target="_self">
    打开 PCalc 寄存器
  </VPLink>
</div>

### 打开栈

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStack' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openStack()
```

<div class="flex justify-center">
  <VPLink :href="openStack()" target="_self">
    打开 PCalc 栈
  </VPLink>
</div>

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openSettings()
```

<div class="flex justify-center">
  <VPLink :href="openSettings()" target="_self">
    打开 PCalc 设置
  </VPLink>
</div>

### 清空全部

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clearAll' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}clearAll()
```

### 打开布局

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLayout' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openLayout({
  name: 'Engineering',
})
```

<div class="flex justify-center">
  <VPLink :href="openLayout(openLayoutParams)" target="_self">
    打开 PCalc 布局
  </VPLink>
</div>

### 打开计算器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCalculator' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openCalculator({
  name: 'name',
})
```

<div class="flex justify-center">
  <VPLink :href="openCalculator(openCalculatorParams)" target="_self">
    打开 PCalc 计算器
  </VPLink>
</div>

### X-Callback Set

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackSet' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}xCallbackSet()
```

### X-Callback Error

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackError' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}xCallbackError()
```

## 生成的 URL

```ts
open()
// => 'pcalc://'

setValue({ value: 12345 })
// => 'pcalc://set/12345'

convertValue({ value: 12345 })
// => 'pcalc://convert/12345'

openConstants()
// => 'pcalc://constants'

openTape()
// => 'pcalc://tape'

openRegisters()
// => 'pcalc://registers'

openStack()
// => 'pcalc://stack'

openSettings()
// => 'pcalc://settings'

clearAll()
// => 'pcalc://ac'

openLayout({ name: 'Engineering' })
// => 'pcalc://layout/Engineering'

openCalculator({ name: 'name' })
// => 'pcalc://calculator/name'

xCallbackSet()
// => 'pcalc://x-callback-url/set'

xCallbackError()
// => 'pcalc://x-callback-url/error'
```

## 官方文档

- [PCalc iOS 版本历史](https://www.pcalc.com/ios/history.html)
