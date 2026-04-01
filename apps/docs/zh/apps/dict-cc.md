---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, search } from 'protocol-launcher/dict-cc';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openParams, searchParams } from '../../.vitepress/constants/dict-cc';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/dict-cc' : 'protocol-launcher');
</script>

# dict.cc

[dict.cc](https://www.dict.cc/) 是一个免费的英德多语言词典。**Protocol Launcher** 允许您生成深度链接以在 dict.cc 中搜索翻译。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 dict.cc

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 dict.cc
  </VPLink>
</div>

### 打开 dict.cc Plus

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}open({
  plus: true,
})
```

<div class="flex justify-center">
  <VPLink :href="open({ plus: true })" target="_self">
    打开 dict.cc Plus
  </VPLink>
</div>

### 搜索单词

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}open({
  word: 'hello',
  languagePair: 'de-en',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    在 dict.cc 中搜索
  </VPLink>
</div>

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}search({
  word: 'world',
  languagePair: 'en-de',
  newSearch: true,
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    在 dict.cc 中搜索
  </VPLink>
</div>
