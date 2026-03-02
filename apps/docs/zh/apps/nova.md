---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, openFolder, cloneProject, openExtension, register } from 'protocol-launcher/nova';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
  openFolderParams,
  cloneProjectParams,
  openExtensionParams,
  registerParams,
} from '../../.vitepress/constants/nova';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/nova' : 'protocol-launcher');
</script>

# Nova

[Nova](https://nova.app/) 是一款专为 macOS 设计的快速、灵活且功能强大的原生文本编辑器。**Protocol Launcher** 允许你生成深度链接，用于在 Nova 中打开文件、文件夹、克隆仓库等。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开编辑器
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Nova
  </VPLink>
</div>

### 打开文件
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openFile({
  path: '/etc/hosts',
  line: 1,
  column: 2,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    在 Nova 中打开文件
  </VPLink>
</div>

### 打开文件夹
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openFolder({
  path: '/etc',
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    在 Nova 中打开文件夹
  </VPLink>
</div>

### 克隆项目
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}cloneProject({
  url: 'https://github.com/zhensherlock/protocol-launcher.git',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    在 Nova 中克隆项目
  </VPLink>
</div>

### 打开扩展
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openExtension' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}openExtension({
  id: 'com.panic.Playdate',
})
```
<div class="flex justify-center">
  <VPLink :href="openExtension(openExtensionParams)" target="_self">
    在 Nova 中打开扩展
  </VPLink>
</div>

### 注册 Nova
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'register' : 'nova' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'nova.'}}register({
  serial: 'NOVA-XXXX-XXXX-XXXX-XXXX-XXXX-X',
})
```
<div class="flex justify-center">
  <VPLink :href="register(registerParams)" target="_self">
    注册 Nova
  </VPLink>
</div>
