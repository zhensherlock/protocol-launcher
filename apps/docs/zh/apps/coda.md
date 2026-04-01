---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, newFile, append, replace } from 'protocol-launcher/coda';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { newFileParams, appendParams, replaceParams } from '../../.vitepress/constants/coda';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/coda' : 'protocol-launcher');
</script>

# Coda

[Coda](https://panic.com/code-editor)（现名为 Code Editor）是一款适用于 iOS 的便携式代码编辑器，非常适合在移动中进行快速的网页编辑。**Protocol Launcher** 允许您生成深度链接以在 Coda 中创建和编辑文件。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Coda
  </VPLink>
</div>

### 新建文件

在 Coda 中创建新文件。如果文件已存在，将创建一个具有唯一名称的文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}newFile({
  name: 'foo.txt',
  text: 'bar',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileParams)" target="_self">
    在 Coda 中新建文件
  </VPLink>
</div>

### 追加内容

向 Coda 中的文件追加文本，如果文件不存在则会创建。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}append({
  name: 'foo.txt',
  text: 'bar',
})
```

<div class="flex justify-center">
  <VPLink :href="append(appendParams)" target="_self">
    向 Coda 文件追加内容
  </VPLink>
</div>

### 替换内容

替换 Coda 中文件的内容，如果文件不存在则会创建。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}replace({
  name: 'foo.txt',
  text: 'bar',
})
```

<div class="flex justify-center">
  <VPLink :href="replace(replaceParams)" target="_self">
    替换 Coda 文件内容
  </VPLink>
</div>
