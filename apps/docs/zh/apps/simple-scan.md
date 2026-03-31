---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, scan } from 'protocol-launcher/simple-scan';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { scanParams } from '../../.vitepress/constants/simple-scan';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/simple-scan' : 'protocol-launcher');
</script>

# Simple Scan

[Simple Scan](https://agiletortoise.com/simple-scan/) 是 Agile Tortoise 开发的一款快速、简便的文档扫描应用，可将纸质文档扫描为优化后的可搜索 PDF 文档（或图像），并发送到几乎任何地方。**Protocol Launcher** 允许您生成深度链接以打开 Simple Scan 并使用预定义的目的地和格式触发扫描。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Simple Scan

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'simpleScan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'simpleScan.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Simple Scan
  </VPLink>
</div>

### 扫描

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scan' : 'simpleScan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'simpleScan.'}}scan({
  destination: 'email',
  format: 'pdf',
  quality: 'original',
})
```

<div class="flex justify-center">
  <VPLink :href="scan(scanParams)" target="_self">
    使用 Simple Scan 扫描
  </VPLink>
</div>
