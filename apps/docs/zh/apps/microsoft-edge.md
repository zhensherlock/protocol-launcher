---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openUrl } from 'protocol-launcher/microsoft-edge';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openUrlParams } from '../../.vitepress/constants/microsoft-edge';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/microsoft-edge' : 'protocol-launcher');
</script>

# Microsoft Edge

[Microsoft Edge](https://www.microsoft.com/zh-cn/edge/?form=MA13FJ) 是微软基于 Chromium 开源项目开发的网页浏览器。**Protocol Launcher** 允许您生成深度链接以在 Microsoft Edge 中打开 URL。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开浏览器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'microsoftEdge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftEdge.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Microsoft Edge
  </VPLink>
</div>

### 打开 URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'microsoftEdge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftEdge.'}}openUrl({
  url: 'https://www.google.com/',
})
```

<div class="flex justify-center">
  <VPLink :href="openUrl(openUrlParams)" target="_self">
    在 Microsoft Edge 中打开 URL
  </VPLink>
</div>
