---
url: /protocol-launcher/zh/apps/waterminder.md
---

# WaterMinder

[WaterMinder](https://waterminder.com) 是全球数百万用户信赖的领先饮水追踪应用。**Protocol Launcher** 允许您生成深度链接以在 WaterMinder 中记录饮水量、咖啡因和其他饮料摄入。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}open()
```

### 添加饮水

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addWater' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addWater({
  amount: 250,
})
```

### 添加饮水（带时间）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addWater' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addWater({
  amount: 250,
  time: '22/01/2026T13:17',
})
```

### 添加咖啡因

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addCaffeine' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addCaffeine({
  amount: 115,
})
```

### 添加咖啡因（带时间）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addCaffeine' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addCaffeine({
  amount: 115,
  time: '09/04/2026T13:17',
})
```

### 添加其他饮料

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addOther' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addOther({
  amount: 250,
  type: 'carbonated_water',
})
```

### 添加其他饮料（带时间）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addOther' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addOther({
  amount: 200,
  type: 'coffee',
  time: '09/04/2026T13:17',
})
```

### 记录杯子

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'logCup' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}logCup({
  amount: 250,
  cupName: 'my mug',
})
```

### 记录杯子（带时间）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'logCup' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}logCup({
  amount: 300,
  cupName: 'Morning Glass',
  time: '22/01/2026T08:00',
})
```
