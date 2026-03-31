---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, addWater, addCaffeine, addOther, logCup } from 'protocol-launcher/waterminder';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addWaterParams,
  addWaterWithTimeParams,
  addCaffeineParams,
  addCaffeineWithTimeParams,
  addOtherParams,
  addOtherWithTimeParams,
  logCupParams,
  logCupWithTimeParams,
} from '../../.vitepress/constants/waterminder';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/waterminder' : 'protocol-launcher');
</script>

# WaterMinder

[WaterMinder](https://waterminder.com) 是全球数百万用户信赖的领先饮水追踪应用。**Protocol Launcher** 允许您生成深度链接以在 WaterMinder 中记录饮水量、咖啡因和其他饮料摄入。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 WaterMinder
  </VPLink>
</div>

### 添加饮水

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addWater' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addWater({
  amount: 250,
})
```

<div class="flex justify-center">
  <VPLink :href="addWater(addWaterParams)" target="_self">
    在 WaterMinder 中添加饮水
  </VPLink>
</div>

### 添加饮水（带时间）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addWater' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addWater({
  amount: 250,
  time: '22/01/2026T13:17',
})
```

<div class="flex justify-center">
  <VPLink :href="addWater(addWaterWithTimeParams)" target="_self">
    在 WaterMinder 中添加指定时间的饮水
  </VPLink>
</div>

### 添加咖啡因

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addCaffeine' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addCaffeine({
  amount: 115,
})
```

<div class="flex justify-center">
  <VPLink :href="addCaffeine(addCaffeineParams)" target="_self">
    在 WaterMinder 中添加咖啡因
  </VPLink>
</div>

### 添加咖啡因（带时间）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addCaffeine' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addCaffeine({
  amount: 115,
  time: '09/04/2026T13:17',
})
```

<div class="flex justify-center">
  <VPLink :href="addCaffeine(addCaffeineWithTimeParams)" target="_self">
    在 WaterMinder 中添加指定时间的咖啡因
  </VPLink>
</div>

### 添加其他饮料

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addOther' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addOther({
  amount: 250,
  type: 'carbonated_water',
})
```

<div class="flex justify-center">
  <VPLink :href="addOther(addOtherParams)" target="_self">
    在 WaterMinder 中添加其他饮料
  </VPLink>
</div>

### 添加其他饮料（带时间）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addOther' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}addOther({
  amount: 200,
  type: 'coffee',
  time: '09/04/2026T13:17',
})
```

<div class="flex justify-center">
  <VPLink :href="addOther(addOtherWithTimeParams)" target="_self">
    在 WaterMinder 中添加指定时间的其他饮料
  </VPLink>
</div>

### 记录杯子

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'logCup' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}logCup({
  amount: 250,
  cupName: 'my mug',
})
```

<div class="flex justify-center">
  <VPLink :href="logCup(logCupParams)" target="_self">
    在 WaterMinder 中记录杯子
  </VPLink>
</div>

### 记录杯子（带时间）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'logCup' : 'waterminder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'waterminder.'}}logCup({
  amount: 300,
  cupName: 'Morning Glass',
  time: '22/01/2026T08:00',
})
```

<div class="flex justify-center">
  <VPLink :href="logCup(logCupWithTimeParams)" target="_self">
    在 WaterMinder 中记录指定时间的杯子
  </VPLink>
</div>
