---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, cloneProject } from 'protocol-launcher/sourcetree';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  cloneProjectParams
} from '../../.vitepress/constants/sourcetree';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/sourcetree' : 'protocol-launcher');
</script>

# SourceTree

[SourceTree](https://www.sourcetreeapp.com/) 是一款适用于 Windows 和 macOS 的免费 Git 客户端，它可以简化你与 Git 仓库的交互方式。**Protocol Launcher** 允许你生成深度链接，用于在 SourceTree 中打开并配置资源。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 SourceTree
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'sourcetree' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sourcetree.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 SourceTree
  </VPLink>
</div>

### 克隆项目
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'sourcetree' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sourcetree.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    在 SourceTree 中打开
  </VPLink>
</div>
