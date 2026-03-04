---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open } from 'protocol-launcher/orchids';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/orchids' : 'protocol-launcher');
</script>

# Orchids

[Orchids](https://www.orchids.app/) 是一款 AI 驱动的应用构建工具，支持构建 Web 应用、移动应用、游戏、CLI 工具和 AI Agent。它支持各种语言和框架，并能与您现有的 AI 订阅无缝集成。**Protocol Launcher** 允许您生成用于打开 Orchids 的深度链接。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Orchids
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'orchids' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'orchids.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Orchids
  </VPLink>
</div>
