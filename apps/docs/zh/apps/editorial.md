---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  back,
  command,
  newFile,
  open,
  openWeb,
} from 'protocol-launcher/editorial';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openParams,
  openWithRootParams,
  openWithSelectionParams,
  openWithCommandParams,
  newFileParams,
  newFileWithRootParams,
  newFileWithSelectionParams,
  newFileWithCommandParams,
  openWebHttpParams,
  openWebHttpsParams,
  commandParams,
  commandWithInputParams,
  commandWithSuccessParams,
} from '../../.vitepress/constants/editorial';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/editorial' : 'protocol-launcher');
</script>

# Editorial

[Editorial](https://omz-software.com/editorial/) 是一款强大的 iOS 和 iPadOS 文本编辑器和自动化应用。它提供基于 Python 的脚本环境和工作流自动化功能。**Protocol Launcher** 允许您生成深度链接以在 Editorial 中打开文件、创建新文档、运行工作流和打开网页。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Editorial

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'back' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}back()
```

<div class="flex justify-center">
  <VPLink :href="back()" target="_self">
    打开 Editorial
  </VPLink>
</div>

### 打开现有文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    在 Editorial 中打开文件
  </VPLink>
</div>

### 从 Dropbox 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  root: 'dropbox',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithRootParams)" target="_self">
    从 Dropbox 打开文件
  </VPLink>
</div>

### 打开文件并选中文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  selection: '0-10',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithSelectionParams)" target="_self">
    打开文件并选中文本
  </VPLink>
</div>

### 打开文件并运行工作流

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  command: 'My Workflow',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithCommandParams)" target="_self">
    打开文件并运行工作流
  </VPLink>
</div>

### 创建新文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileParams)" target="_self">
    创建新文件
  </VPLink>
</div>

### 在 Dropbox 中创建新文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  root: 'dropbox',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileWithRootParams)" target="_self">
    在 Dropbox 中创建新文件
  </VPLink>
</div>

### 创建新文件并选中文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  selection: '0-10',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileWithSelectionParams)" target="_self">
    创建新文件并选中文本
  </VPLink>
</div>

### 创建新文件并运行工作流

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  command: 'My Workflow',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileWithCommandParams)" target="_self">
    创建新文件并运行工作流
  </VPLink>
</div>

### 打开网页 (HTTP)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeb' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}openWeb({
  url: 'http://apple.com',
})
```

<div class="flex justify-center">
  <VPLink :href="openWeb(openWebHttpParams)" target="_self">
    打开 HTTP 页面
  </VPLink>
</div>

### 打开网页 (HTTPS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeb' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}openWeb({
  url: 'https://google.com',
})
```

<div class="flex justify-center">
  <VPLink :href="openWeb(openWebHttpsParams)" target="_self">
    打开 HTTPS 页面
  </VPLink>
</div>

### 运行工作流命令

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
})
```

<div class="flex justify-center">
  <VPLink :href="command(commandParams)" target="_self">
    运行工作流
  </VPLink>
</div>

### 运行工作流并传入参数

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
  input: 'some input',
})
```

<div class="flex justify-center">
  <VPLink :href="command(commandWithInputParams)" target="_self">
    运行工作流并传入参数
  </VPLink>
</div>

### 运行工作流并设置成功回调

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
  xSuccess: 'myapp://success',
})
```

<div class="flex justify-center">
  <VPLink :href="command(commandWithSuccessParams)" target="_self">
    运行工作流并设置回调
  </VPLink>
</div>
