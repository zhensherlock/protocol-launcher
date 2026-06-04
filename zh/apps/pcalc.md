---
url: /protocol-launcher/zh/apps/pcalc.md
---

# PCalc

[PCalc](https://www.pcalc.com/iphone/index.html) 是一款适用于 iPad、iPhone、Apple Vision Pro、Apple Watch 和 Mac 的计算器。**Protocol Launcher** 允许您生成官方 PCalc URL scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

因为 `clearAll()` 会清空当前 PCalc 状态，而 x-callback helpers 是回调目标，这些函数只展示代码示例。

### 打开 PCalc

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}open()
```

### 设置数值

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setValue' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}setValue({
  value: 12345,
})
```

### 换算数值

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'convertValue' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}convertValue({
  value: 12345,
})
```

### 打开常数

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openConstants' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openConstants()
```

### 打开纸带

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTape' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openTape()
```

### 打开寄存器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRegisters' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openRegisters()
```

### 打开栈

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStack' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openStack()
```

### 打开设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openSettings()
```

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

### 打开计算器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCalculator' : 'pcalc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pcalc.'}}openCalculator({
  name: 'name',
})
```

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

* [PCalc iOS 版本历史](https://www.pcalc.com/ios/history.html)
