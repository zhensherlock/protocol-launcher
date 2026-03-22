---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openLink, openCloudDrive } from 'protocol-launcher/quark';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openLinkParams } from '../../.vitepress/constants/quark';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/quark' : 'protocol-launcher');
</script>

# Quark

[Quark](https://www.quark.cn/) 是阿里巴巴推出的 AI 智能浏览器，具备 AI 搜索、AI 助手、网盘等功能。**Protocol Launcher** 允许您生成深度链接以在 Quark 中打开链接和网盘。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开浏览器

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'quark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'quark.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Quark
  </VPLink>
</div>

### 打开链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLink' : 'quark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'quark.'}}openLink({
  url: 'www.baidu.com',
})
```

<div class="flex justify-center">
  <VPLink :href="openLink(openLinkParams)" target="_self">
    在 Quark 中打开链接
  </VPLink>
</div>

### 打开网盘

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCloudDrive' : 'quark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'quark.'}}openCloudDrive()
```

<div class="flex justify-center">
  <VPLink :href="openCloudDrive()" target="_self">
    打开夸克网盘
  </VPLink>
</div>
