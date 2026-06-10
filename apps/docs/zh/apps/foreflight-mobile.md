---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { mapSearch } from 'protocol-launcher/foreflight-mobile';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/foreflight-mobile' : 'protocol-launcher');
</script>

# ForeFlight Mobile

[ForeFlight Mobile](https://www.foreflight.com/products/foreflight-mobile/) 是一款航空飞行规划和电子飞行包应用。**Protocol Launcher** 允许你生成 ForeFlight Mobile URL scheme 链接。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

ForeFlight 官方 URL Schemes 页面列出了用于 Maps search 的 `foreflightmobile://maps/search?q=...`。本模块只暴露这个官方记录的形式。

### Map Search

生成官方记录的 URL，启动 ForeFlight Mobile 并在 Maps 视图中搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'mapSearch' : 'foreflightMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'foreflightMobile.'}}mapSearch({
  q: 'KISM OCF NITTS KSRQ 165 16 8000',
})
```

<div class="flex justify-center">
  <VPLink :href="mapSearch({ q: 'KISM OCF NITTS KSRQ 165 16 8000' })" target="_self">
    搜索 ForeFlight Maps
  </VPLink>
</div>

## 生成的 URL

```ts
mapSearch({ q: 'KISM OCF NITTS KSRQ 165 16 8000' })
// => 'foreflightmobile://maps/search?q=KISM+OCF+NITTS+KSRQ+165+16+8000'

mapSearch({ q: 'KISM OCF NITTS KSRQ 125mph 12gph 8000' })
// => 'foreflightmobile://maps/search?q=KISM+OCF+NITTS+KSRQ+125mph+12gph+8000'

mapSearch({ q: 'KOSH GEP KFCM 130kts 410kgph 4000ft' })
// => 'foreflightmobile://maps/search?q=KOSH+GEP+KFCM+130kts+410kgph+4000ft'

mapSearch({ q: 'KOSH GEP USER@MYHOUSE KFCM 130kts' })
// => 'foreflightmobile://maps/search?q=KOSH+GEP+USER@MYHOUSE+KFCM+130kts'

mapSearch({ q: 'KOSH GEP CONTPACK@THECABIN KFCM 130kts' })
// => 'foreflightmobile://maps/search?q=KOSH+GEP+CONTPACK@THECABIN+KFCM+130kts'

mapSearch({ q: 'KAUS ELA KSGR 165kts 20.5gph 14000ft N12345' })
// => 'foreflightmobile://maps/search?q=KAUS+ELA+KSGR+165kts+20.5gph+14000ft+N12345'

mapSearch({ q: 'KISM OCF/F060 NITTS/N0100F040 KSRQ 8000' })
// => 'foreflightmobile://maps/search?q=KISM+OCF/F060+NITTS/N0100F040+KSRQ+8000'
```

## 官方文档

- [ForeFlight Mobile URL Schemes](https://foreflight.com/support/app-urls/)
