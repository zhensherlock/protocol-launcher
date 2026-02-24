---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openFolder, open, openRemote, openSettings } from 'protocol-launcher/code-buddy';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
  openFolderParams,
  openRemoteParams,
} from '../../.vitepress/constants/code-buddy';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/code-buddy' : 'protocol-launcher');
const currentMethodDesc = computed(() => currentMethod.value === 'On-Demand' ? '按需加载' : '全量导入');
</script>

# CodeBuddy

[CodeBuddy](https://codebuddy.ai) 是一款轻量但功能强大的代码编辑器。**Protocol Launcher** 允许您生成深度链接，以便在 CodeBuddy 中打开和配置资源。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开编辑器
```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 CodeBuddy
  </VPLink>
</div>

### 打开文件
```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\\Windows\\System32\\drivers\\etc\\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    在 CodeBuddy 中打开
  </VPLink>
</div>

### 打开目录
```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openFolder({
  path: '{{ appStore.isWindows ? 'C:\\Windows\\System32\\drivers\\etc' : '/etc' }}',
  openInNewWindow: true,
})
```
<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams(appStore.isWindows))" target="_self">
    在 CodeBuddy 中打开
  </VPLink>
</div>

### 远程开发
```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemote' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openRemote({
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
})
```
<div class="flex justify-center">
  <VPLink :href="openRemote(openRemoteParams)" target="_self">
    在 CodeBuddy 中打开
  </VPLink>
</div>

### 打开设置
```ts-vue [{{currentMethodDesc}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'codeBuddy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codeBuddy.'}}openSettings()
```
<div class="flex justify-center">
  <VPLink :href="openSettings()" target="_self">
    在 CodeBuddy 中打开
  </VPLink>
</div>
