---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, lookup, search } from 'protocol-launcher/terminology';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { lookupParams, searchParams } from '../../.vitepress/constants/terminology';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/terminology' : 'protocol-launcher',
);
</script>

# Terminology

[Terminology](https://agiletortoise.com/terminology/) 是一款英语语言浏览器——集词典、同义词词典和研究工具于一体。**Protocol Launcher** 允许您生成深度链接以在 Terminology 中查找单词和搜索。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'terminology' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'terminology.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Terminology
  </VPLink>
</div>

### 查找单词

直接在 Terminology 中打开某个术语的详细查询页面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'lookup' : 'terminology' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'terminology.'}}lookup({
  text: 'automation',
})
```

<div class="flex justify-center">
  <VPLink :href="lookup(lookupParams)" target="_self">
    在 Terminology 中打开
  </VPLink>
</div>

### 搜索

直接在 Terminology 中打开单词搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'terminology' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'terminology.'}}search({
  q: 'protocol',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    在 Terminology 中打开
  </VPLink>
</div>
