---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open } from 'protocol-launcher/apple-map';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openParams,
  searchFoodParams,
  searchFoodWithLocationParams,
  searchFoodNearParams,
  centerMapParams,
  centerMapWithZoomParams,
  createPinParams,
  satelliteViewParams,
  addressParams,
  drivingDirectionsParams,
  walkingDirectionsParams,
  transitDirectionsParams,
  fullDirectionsParams,
} from '../../.vitepress/constants/apple-map';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/apple-map' : 'protocol-launcher');
</script>

# Apple 地图

[Apple 地图](https://www.apple.com.cn/maps/) 是苹果公司开发的网络地图服务。它提供路线指引、预计到达时间和日常通勤服务。**Protocol Launcher** 允许你生成深度链接来打开 Apple 地图、搜索位置、获取路线和探索地点。

## 使用方式

有两种使用此库的方式：

- 按需从子路径导入支持 tree-shaking，保持打包体积小巧。
- 从根包完整导入比较方便，但会包含所有应用模块。

生产构建请选择按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

### 打开地图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Apple 地图
  </VPLink>
</div>

### 搜索地点

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: '美食',
})
```

<div class="flex justify-center">
  <VPLink :href="open(searchFoodParams)" target="_self">
    搜索美食
  </VPLink>
</div>

### 指定位置搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: '美食',
  sll: '31.2989,120.5853',
})
```

<div class="flex justify-center">
  <VPLink :href="open(searchFoodWithLocationParams)" target="_self">
    在苏州搜索美食
  </VPLink>
</div>

### 附近搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: '美食',
  near: '31.2989,120.5853',
})
```

<div class="flex justify-center">
  <VPLink :href="open(searchFoodNearParams)" target="_self">
    搜索苏州附近美食
  </VPLink>
</div>

### 居中地图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  ll: '31.2989,120.5853',
})
```

<div class="flex justify-center">
  <VPLink :href="open(centerMapParams)" target="_self">
    居中到苏州
  </VPLink>
</div>

### 居中地图并缩放

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  ll: '31.2989,120.5853',
  z: 15,
})
```

<div class="flex justify-center">
  <VPLink :href="open(centerMapWithZoomParams)" target="_self">
    居中到苏州（缩放 15）
  </VPLink>
</div>

### 创建标记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  q: '苏州园林',
  ll: '31.3201,120.6195',
})
```

<div class="flex justify-center">
  <VPLink :href="open(createPinParams)" target="_self">
    标记苏州园林
  </VPLink>
</div>

### 卫星视图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  t: 'k',
  ll: '31.2989,120.5853',
})
```

<div class="flex justify-center">
  <VPLink :href="open(satelliteViewParams)" target="_self">
    卫星视图
  </VPLink>
</div>

### 显示地址

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  address: '江苏省苏州市工业园区月亮湾路 10 号',
})
```

<div class="flex justify-center">
  <VPLink :href="open(addressParams)" target="_self">
    显示地址
  </VPLink>
</div>

### 驾车路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: '金鸡湖',
  dirflg: 'd',
})
```

<div class="flex justify-center">
  <VPLink :href="open(drivingDirectionsParams)" target="_self">
    驾车路线
  </VPLink>
</div>

### 步行路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: '平江路',
  dirflg: 'w',
})
```

<div class="flex justify-center">
  <VPLink :href="open(walkingDirectionsParams)" target="_self">
    步行路线
  </VPLink>
</div>

### 公共交通路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  daddr: '拙政园',
  dirflg: 'r',
})
```

<div class="flex justify-center">
  <VPLink :href="open(transitDirectionsParams)" target="_self">
    公共交通路线
  </VPLink>
</div>

### 完整路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleMap' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleMap.'}}open({
  saddr: '苏州火车站',
  daddr: '金鸡湖',
  dirflg: 'd',
})
```

<div class="flex justify-center">
  <VPLink :href="open(fullDirectionsParams)" target="_self">
    完整路线
  </VPLink>
</div>
