---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, findNotes, openNote, createNote } from 'protocol-launcher/fsnotes';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  findNotesParams,
  openNoteParams,
  createNoteParams,
} from '../../.vitepress/constants/fsnotes';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/fsnotes' : 'protocol-launcher');
const currentMethodDesc = computed(() => currentMethod.value === 'On-Demand' ? '按需加载' : '全量导入');
</script>

# FSNotes

[FSNotes](https://fsnot.es) 是一款适用于 macOS 和 iOS 的现代笔记管理器。它简洁、高效，并支持 GitHub Flavored Markdown 等开放格式。**Protocol Launcher** 允许您生成深度链接，以便在 FSNotes 中搜索、打开或创建笔记。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 FSNotes
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 FSNotes
  </VPLink>
</div>

### 搜索笔记
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findNotes' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}findNotes({
  keyword: 'hello',
})
```
<div class="flex justify-center">
  <VPLink :href="findNotes(findNotesParams)" target="_self">
    在 FSNotes 中打开
  </VPLink>
</div>

### 打开笔记
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}openNote({
  title: 'hello',
  tag: '2026',
})
```
<div class="flex justify-center">
  <VPLink :href="openNote(openNoteParams)" target="_self">
    在 FSNotes 中打开
  </VPLink>
</div>

### 创建笔记
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNote' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}createNote({
  title: 'hello',
  content: 'hello world',
  tags: '2026',
})
```
<div class="flex justify-center">
  <VPLink :href="createNote(createNoteParams)" target="_self">
    在 FSNotes 中创建
  </VPLink>
</div>
