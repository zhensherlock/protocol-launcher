---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, addLink, addMemo, openFolder, openInbox, openSmartFolder, openStarred, openTag, search } from 'protocol-launcher/cubox';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addLinkParams,
  addMemoParams,
  openFolderParams,
  openSmartFolderParams,
  openTagParams,
  searchParams,
} from '../../.vitepress/constants/cubox';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/cubox' : 'protocol-launcher');
</script>

# Cubox

[Cubox](https://www.cubox.pro/) 是新一代 AI 稍后阅读助手，让您的收藏读得懂、记得住、用得上。**Protocol Launcher** 允许您生成深度链接以在 Cubox 中添加内容和导航。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Cubox
  </VPLink>
</div>

### 添加链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addLink' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}addLink({
  url: 'https://example.com/article',
})
```

<div class="flex justify-center">
  <VPLink :href="addLink(addLinkParams)" target="_self">
    添加链接到 Cubox
  </VPLink>
</div>

### 添加备忘

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addMemo' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}addMemo({
  memo: 'Remember to buy groceries',
})
```

<div class="flex justify-center">
  <VPLink :href="addMemo(addMemoParams)" target="_self">
    添加备忘到 Cubox
  </VPLink>
</div>

### 打开文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openFolder({
  name: 'Reading List',
})
```

<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams)" target="_self">
    在 Cubox 中打开文件夹
  </VPLink>
</div>

### 打开收件箱

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openInbox()
```

<div class="flex justify-center">
  <VPLink :href="openInbox()" target="_self">
    在 Cubox 中打开收件箱
  </VPLink>
</div>

### 打开智能文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSmartFolder' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openSmartFolder({
  name: 'Recent Articles',
})
```

<div class="flex justify-center">
  <VPLink :href="openSmartFolder(openSmartFolderParams)" target="_self">
    在 Cubox 中打开智能文件夹
  </VPLink>
</div>

### 打开星标

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStarred' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openStarred()
```

<div class="flex justify-center">
  <VPLink :href="openStarred()" target="_self">
    在 Cubox 中打开星标
  </VPLink>
</div>

### 打开标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openTag({
  name: 'important',
})
```

<div class="flex justify-center">
  <VPLink :href="openTag(openTagParams)" target="_self">
    在 Cubox 中打开标签
  </VPLink>
</div>

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}search({
  query: 'typescript',
  type: 'card',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    在 Cubox 中搜索
  </VPLink>
</div>
