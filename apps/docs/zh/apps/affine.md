---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openDoc } from 'protocol-launcher/affine';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openDocParams,
} from '../../.vitepress/constants/affine';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/affine' : 'protocol-launcher');
</script>

# AFFiNE

[AFFiNE](https://affine.pro/) 是下一代全方位工作空间，集写作、绘图和规划于一体。它是一个以隐私为中心、本地优先且开源的 Notion 和 Miro 替代方案，提供了一个将文档、白板和数据库完美融合的超融合平台。**Protocol Launcher** 允许你生成深度链接，用于在 AFFiNE 中打开并配置资源。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 AFFiNE
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'affine' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'affine.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 AFFiNE
  </VPLink>
</div>

### 打开文件
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDoc' : 'affine' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'affine.'}}openDoc({
  workspaceId: '4f5a46cf-5eeb-4130-beda-25b438cd8c60',
  docId: 'ykchLzhvFXEUMwJu_spHY',
})
```
<div class="flex justify-center">
  <VPLink :href="openDoc(openDocParams)" target="_self">
    在 AFFiNE 中打开
  </VPLink>
</div>
