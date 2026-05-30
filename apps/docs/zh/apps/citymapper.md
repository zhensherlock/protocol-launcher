---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { directions, webDirections } from 'protocol-launcher/citymapper';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  destinationDirectionsParams,
  eventDirectionsParams,
} from '../../.vitepress/constants/citymapper';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/citymapper' : 'protocol-launcher');
</script>

# Citymapper

[Citymapper](https://citymapper.com/) 是一款公共交通和城市导航应用。**Protocol Launcher** 可以生成 Citymapper 官方路线链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 注意事项

Citymapper 文档将 `endcoord` 标为必需的目的地坐标，格式为 `latitude,longitude`。`endname` 和 `endaddress` 是可选的目的地信息。`startcoord`、`startname` 和 `startaddress` 用同样的格式指定起点。

`arrivalTime` 会映射到 Citymapper 文档中的 `arrival_time` 参数，应传入 ISO-8601 日期时间字符串。Citymapper 页面也提到旧的 `arriveby` 参数已 deprecated，因此此模块只暴露 `arrivalTime`。

x-callback-url 链接中的 `xSource` 和 `xSuccess` 会分别序列化为官方参数 `x-source` 和 `x-success`。

### 网页路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webDirections' : 'citymapper' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'citymapper.'}}webDirections({
  endcoord: '51.537060,-0.079179',
  endname: 'The Proud Archivist',
  endaddress: '2-10 Hertford Road, London, N1 5ET',
})
```

<div class="flex justify-center">
  <VPLink :href="webDirections(destinationDirectionsParams)" target="_self">
    打开 Citymapper 网页路线
  </VPLink>
</div>

### 原生路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'citymapper' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'citymapper.'}}directions({
  endcoord: '51.537060,-0.079179',
  endname: 'The Proud Archivist',
  endaddress: '2-10 Hertford Road, London, N1 5ET',
})
```

<div class="flex justify-center">
  <VPLink :href="directions(destinationDirectionsParams)" target="_self">
    打开 Citymapper App 路线
  </VPLink>
</div>

### 带到达时间的路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'citymapper' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'citymapper.'}}directions({
  startcoord: '51.500729,-0.124625',
  startname: 'Westminster',
  startaddress: 'London SW1A 0AA',
  endcoord: '51.537060,-0.079179',
  endname: 'The Proud Archivist',
  endaddress: '2-10 Hertford Road, London, N1 5ET',
  arrivalTime: '2016-08-06T21:00+01:00',
})
```

<div class="flex justify-center">
  <VPLink :href="directions(eventDirectionsParams)" target="_self">
    打开定时路线
  </VPLink>
</div>

### X-Callback 路线

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackDirections' : 'citymapper' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'citymapper.'}}xCallbackDirections({
  endcoord: '51.537060,-0.079179',
  endname: 'The Proud Archivist',
  endaddress: '2-10 Hertford Road, London, N1 5ET',
  xSource: 'My App Name',
  xSuccess: 'myappscheme://',
})
```

## 官方文档

- [Launch Citymapper for Directions](https://citymapper.com/tools/1053/automatically-generating-citymapper-directions-links)
