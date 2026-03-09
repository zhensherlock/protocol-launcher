---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, compare, clipboard, history } from 'protocol-launcher/kaleidoscope';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  compareParams,
  clipboardParams,
  historyParams,
} from '../../.vitepress/constants/kaleidoscope';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/kaleidoscope' : 'protocol-launcher');
</script>

# Kaleidoscope

[Kaleidoscope](https://kaleidoscope.app/) 是全球领先的文件对比与合并工具。它能够快速识别文本、图片甚至整个文件夹之间的差异。**Protocol Launcher** 允许你生成深度链接，以便在 Kaleidoscope 中打开并对比资源。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Kaleidoscope
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Kaleidoscope
  </VPLink>
</div>

### 对比文件
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'compare' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}compare({
  previousPath: '/Users/dev/Desktop/previous.md',
  latestPath: '/Users/dev/Desktop/latest.md',
})
```
<div class="flex justify-center">
  <VPLink :href="compare(compareParams)" target="_self">
    在 Kaleidoscope 中打开
  </VPLink>
</div>

### 对比剪贴板
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clipboard' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}clipboard({
  label: 'Clipboard',
})
```
<div class="flex justify-center">
  <VPLink :href="clipboard(clipboardParams)" target="_self">
    在 Kaleidoscope 中打开
  </VPLink>
</div>

### 打开历史记录
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'history' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}history({
  label: 'History',
  filePath: '/Users/dev/protocol-launcher/packages/protocol-launcher/src/kaleidoscope/history.ts',
})
```
<div class="flex justify-center">
  <VPLink :href="history(historyParams)" target="_self">
    在 Kaleidoscope 中打开
  </VPLink>
</div>
