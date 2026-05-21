---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, newFile, quickSearch } from 'protocol-launcher/ia-writer';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openParams, newFileParams, quickSearchParams } from '../../.vitepress/constants/ia-writer';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ia-writer' : 'protocol-launcher');
</script>

# iA Writer

[iA Writer](https://ia.net/writer) 是一款适用于 macOS、iPadOS 和 iOS 的专注写作应用。**Protocol Launcher** 允许您生成 iA Writer URL Commands，使用 `ia-writer://` URL scheme，并支持 x-callback-url。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开文档

如果找到现有文档则在编辑器中打开，否则打开新的空文档。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}open({
  path: '/Drafts/Notes.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    在 iA Writer 中打开文档
  </VPLink>
</div>

### 新建文件

在编辑器中打开一个新文档。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}newFile({
  path: '/Drafts/Meeting Notes.txt',
  text: '# Meeting Notes\n\n',
  author: 'AI',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileParams)" target="_self">
    在 iA Writer 中新建文件
  </VPLink>
</div>

### 快速搜索

使用给定查询打开 Quick Search。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSearch' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}quickSearch({
  query: 'meeting notes',
})
```

<div class="flex justify-center">
  <VPLink :href="quickSearch(quickSearchParams)" target="_self">
    在 iA Writer 中搜索
  </VPLink>
</div>

### 读取文件

读取并返回文件内容。iA Writer 的数据命令需要 `auth-token`，并会在 `x-success` 上返回 `path` 和 `text` 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'read' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}read({
  authToken: 'REPLACE_WITH_YOUR_TOKEN',
  path: '/Drafts/Notes.txt',
  xSuccess: 'myapp://callback',
})
```

### 写入文件

创建或修改现有文件，并返回文件内容。iA Writer 的数据命令需要 `auth-token`，并会在 `x-success` 上返回 `path` 和 `text` 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'write' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}write({
  authToken: 'REPLACE_WITH_YOUR_TOKEN',
  path: '/Drafts/Notes.txt',
  text: 'Hello world',
  mode: 'add',
  addLocation: 'end',
  addPadding: 'paragraph',
  author: 'AI',
  xSuccess: 'myapp://callback',
})
```

### 版本信息

返回 iA Writer 应用版本和 URL scheme 版本。iA Writer 会在 `x-success` 上返回 `scheme-version` 和 `app-version` 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'version' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}version({
  xSuccess: 'myapp://callback',
})
```

## 官方文档

- [iA Writer URL Commands](https://ia.net/writer/support/help/url-commands)
