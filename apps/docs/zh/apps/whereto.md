---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, search, searchAtLocation, showDirections, showLocation, showPlace } from 'protocol-launcher/whereto';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  searchParams,
  searchAtLocationParams,
  showDirectionsParams,
  showLocationParams,
  showPlaceParams,
} from '../../.vitepress/constants/whereto';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/whereto' : 'protocol-launcher');
</script>

# Where To?

[Where To?](https://www.futuretap.com/apps/whereto) 是一种极其简单的方式，可帮助您找到附近的牛排馆、银行分行、台球俱乐部或您可能正在寻找的任何其他地方——无论您是在巴黎度假还是在自家后院！**Protocol Launcher** 允许您生成深度链接以在 Where To? 中搜索地点和导航到位置。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Where To?
  </VPLink>
</div>

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}search({
  search: 'Bars',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    搜索酒吧
  </VPLink>
</div>

### 在指定位置搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchAtLocation' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}searchAtLocation({
  search: 'Cafe',
  location: { lat: 37.332331, lon: -122.031219 },
})
```

<div class="flex justify-center">
  <VPLink :href="searchAtLocation(searchAtLocationParams)" target="_self">
    在指定位置搜索咖啡厅
  </VPLink>
</div>

### 显示路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showDirections' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}showDirections({
  location: { lat: 37.332331, lon: -122.031219 },
  mode: 'car',
})
```

<div class="flex justify-center">
  <VPLink :href="showDirections(showDirectionsParams)" target="_self">
    显示路线
  </VPLink>
</div>

### 显示位置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showLocation' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}showLocation({
  location: { lat: 37.332331, lon: -122.031219 },
  title: 'Apple HQ',
})
```

<div class="flex justify-center">
  <VPLink :href="showLocation(showLocationParams)" target="_self">
    显示位置
  </VPLink>
</div>

### 显示地点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showPlace' : 'whereto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'whereto.'}}showPlace({
  poi: '7415861409383649399',
})
```

<div class="flex justify-center">
  <VPLink :href="showPlace(showPlaceParams)" target="_self">
    显示地点
  </VPLink>
</div>
