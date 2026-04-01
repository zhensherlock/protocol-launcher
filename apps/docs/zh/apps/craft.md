---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, createBlock, createDocument, createNewDocument, openDailyNote, openDocument, openSearch, openSpace } from 'protocol-launcher/craft';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openDocumentParams, createDocumentParams, createBlockParams, openDailyNoteParams, openSearchParams, openSpaceParams } from '../../.vitepress/constants/craft';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/craft' : 'protocol-launcher');
</script>

# Craft

[Craft](https://www.craft.do) 是一个强大、美观的工具，用于创建文档、管理任务和组织您的工作和生活。**Protocol Launcher** 允许您生成深度链接以在 Craft 中打开和创建内容。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Craft
  </VPLink>
</div>

### 打开文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openDocument({
  spaceId: 'abc-123',
  blockId: 'xyz-789',
})
```

<div class="flex justify-center">
  <VPLink :href="openDocument(openDocumentParams)" target="_self">
    在 Craft 中打开文档
  </VPLink>
</div>

### 创建文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createDocument({
  spaceId: 'abc-123',
  title: 'My Note',
  content: 'Hello **World**',
  folderId: '',
})
```

<div class="flex justify-center">
  <VPLink :href="createDocument(createDocumentParams)" target="_self">
    在 Craft 中创建文档
  </VPLink>
</div>

### 创建新文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNewDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createNewDocument()
```

<div class="flex justify-center">
  <VPLink :href="createNewDocument()" target="_self">
    在 Craft 中创建新文档
  </VPLink>
</div>

### 创建块

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createBlock' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createBlock({
  parentBlockId: 'doc-123',
  spaceId: 'abc-123',
  content: 'New content',
  index: 9999,
})
```

<div class="flex justify-center">
  <VPLink :href="createBlock(createBlockParams)" target="_self">
    在 Craft 中创建块
  </VPLink>
</div>

### 打开每日笔记

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDailyNote' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openDailyNote({
  spaceId: 'abc-123',
  type: 'today',
})
```

<div class="flex justify-center">
  <VPLink :href="openDailyNote(openDailyNoteParams)" target="_self">
    在 Craft 中打开每日笔记
  </VPLink>
</div>

### 打开搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openSearch({
  spaceId: 'abc-123',
  query: 'vacation plans',
})
```

<div class="flex justify-center">
  <VPLink :href="openSearch(openSearchParams)" target="_self">
    在 Craft 中搜索
  </VPLink>
</div>

### 打开空间

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSpace' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openSpace({
  spaceId: 'abc-123',
  tab: 'calendar',
})
```

<div class="flex justify-center">
  <VPLink :href="openSpace(openSpaceParams)" target="_self">
    在 Craft 中打开空间
  </VPLink>
</div>
