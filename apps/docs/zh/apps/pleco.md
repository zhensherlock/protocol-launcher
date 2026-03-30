---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { clipboard, definition, importFlashcards, search } from 'protocol-launcher/pleco';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { searchParams, definitionParams, importFlashcardsParams } from '../../.vitepress/constants/pleco';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pleco' : 'protocol-launcher');
</script>

# Pleco

[Pleco](https://www.pleco.com/) 是全球最好的 iOS 和 Android 中文词典应用。**Protocol Launcher** 允许您生成深度链接，用于在 Pleco 中搜索单词、查看释义和导入抽认卡。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}search({
  q: '你好',
  xSource: 'MyApp',
  xSuccess: 'myapp://success',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    在 Pleco 中搜索
  </VPLink>
</div>

### 释义

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'definition' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}definition({
  hw: '你好',
  py: 'ni3hao3',
  sec: 'stroke',
  xSource: 'MyApp',
  xSuccess: 'myapp://success',
})
```

<div class="flex justify-center">
  <VPLink :href="definition(definitionParams)" target="_self">
    在 Pleco 中查看释义
  </VPLink>
</div>

### 剪贴板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clipboard' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}clipboard()
```

<div class="flex justify-center">
  <VPLink :href="clipboard()" target="_self">
    打开 Pleco 剪贴板
  </VPLink>
</div>

### 导入抽认卡

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importFlashcards' : 'pleco' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pleco.'}}importFlashcards({
  u: 'https://example.com/flashcards.txt',
  xSource: 'MyApp',
  xSuccess: 'myapp://success',
})
```

<div class="flex justify-center">
  <VPLink :href="importFlashcards(importFlashcardsParams)" target="_self">
    在 Pleco 中导入抽认卡
  </VPLink>
</div>
