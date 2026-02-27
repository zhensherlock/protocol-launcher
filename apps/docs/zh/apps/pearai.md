---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, openFolder, openRemote, openSettings, cloneProject } from 'protocol-launcher/pearai';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
  openFolderParams,
  openRemoteParams,
  cloneProjectParams,
} from '../../.vitepress/constants/pearai';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pearai' : 'protocol-launcher');
</script>

# PearAI

[PearAI](https://www.trypear.ai/) 是基于 VSCode 的开源 AI 代码编辑器。**Protocol Launcher** 允许你生成深度链接，用于在 PearAI 中打开并配置资源。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开编辑器
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 PearAI
  </VPLink>
</div>

### 打开文件
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    在 PearAI 中打开
  </VPLink>
</div>

### 打开文件夹
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc' : '/etc' }}',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    在 PearAI 中打开
  </VPLink>
</div>

### 远程开发
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```
<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    在 PearAI 中打开
  </VPLink>
</div>

### 克隆项目
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}cloneProject({
  repo: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    在 PearAI 中打开
  </VPLink>
</div>

### 打开设置
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'pearai' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pearai.'}}openSettings()
```
<div class="flex justify-center">
  <VPLink :href="openSettings()" target="_self">
    在 PearAI 中打开
  </VPLink>
</div>
