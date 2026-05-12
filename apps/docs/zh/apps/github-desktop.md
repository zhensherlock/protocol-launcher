---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openRepo } from 'protocol-launcher/github-desktop';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openFileParams,
  openRepoParams,
} from '../../.vitepress/constants/github-desktop';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/github-desktop' : 'protocol-launcher');
</script>

# GitHub Desktop

[GitHub Desktop](https://github.com/apps/desktop) 是一款用于 GitHub 版本控制与协作的桌面应用程序。**Protocol Launcher** 允许你生成深度链接，用于在 GitHub Desktop 中打开并配置资源。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开文件
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'githubDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'githubDesktop.'}}openFile({
  owner: 'zhensherlock',
  repo: 'protocol-launcher',
  branch: 'main',
  path: 'packages/shared/src/index.ts',
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    在 GitHub 中打开
  </VPLink>
</div>

### 打开仓库
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRepo' : 'githubDesktop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'githubDesktop.'}}openRepo({
  owner: 'zhensherlock',
  repo: 'protocol-launcher',
  branch: 'main',
})
```
<div class="flex justify-center">
  <VPLink :href="openRepo(openRepoParams)" target="_self">
    在 GitHub 中打开
  </VPLink>
</div>
