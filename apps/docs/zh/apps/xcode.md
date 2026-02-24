---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { cloneProject } from 'protocol-launcher/xcode';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  cloneProjectParams,
} from '../../.vitepress/constants/xcode';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/xcode' : 'protocol-launcher');
</script>

# Xcode

[Xcode](https://developer.apple.com/xcode/) 是一款用于 Apple 平台的集成开发环境。**Protocol Launcher** 允许你生成深度链接，用于在 Xcode 中打开并配置资源。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 克隆项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'xcode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'xcode.'}}cloneProject({
  url: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    在 Xcode 中打开
  </VPLink>
</div>
