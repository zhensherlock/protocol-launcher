---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, newFile, append, replace, reloadCustomizations } from 'protocol-launcher/textastic';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import { openFileParams, newFileParams, appendParams, replaceParams } from '../../.vitepress/constants/textastic';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/textastic' : 'protocol-launcher');
</script>

# Textastic

[Textastic](https://www.textasticapp.com/) 是一款适用于 iOS、iPadOS 和 macOS 的强大文本编辑器，支持超过 80 种编程和标记语言的语法高亮。**Protocol Launcher** 允许您生成深度链接以在 Textastic 中打开、创建和编辑文件。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Textastic
  </VPLink>
</div>

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}openFile({
  path: 'example.com',
  name: 'index.html',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    在 Textastic 中打开文件
  </VPLink>
</div>

### 新建文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}newFile({
  name: 'foo.txt',
  text: 'bar',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileParams)" target="_self">
    在 Textastic 中新建文件
  </VPLink>
</div>

### 追加文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}append({
  location: 'iCloud',
  name: 'clipboard.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="append(appendParams)" target="_self">
    在 Textastic 中追加文本
  </VPLink>
</div>

### 替换文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}replace({
  location: 'iCloud',
  name: 'scratchpad.txt',
  text: 'foo',
})
```

<div class="flex justify-center">
  <VPLink :href="replace(replaceParams)" target="_self">
    在 Textastic 中替换文本
  </VPLink>
</div>

### 重新加载自定义

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reloadCustomizations' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}reloadCustomizations()
```

<div class="flex justify-center">
  <VPLink :href="reloadCustomizations()" target="_self">
    在 Textastic 中重新加载自定义
  </VPLink>
</div>
