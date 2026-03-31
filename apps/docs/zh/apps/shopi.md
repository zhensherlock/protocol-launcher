---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { addItem, clearList, createList, showList, showLists } from 'protocol-launcher/shopi';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { addItemParams, clearListParams, createListParams, showListParams } from '../../.vitepress/constants/shopi';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/shopi' : 'protocol-launcher');
</script>

# Shopi

[Shopi](http://sapient-pair.com/shopi/) 是一款专为 iPhone 设计的智能购物清单应用，专注于帮助您捕获和购买您想买的商品。**Protocol Launcher** 允许您生成深度链接以在 Shopi 中添加商品、创建列表和管理购物清单。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 显示所有列表

显示 Shopi 中的所有购物清单。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showLists' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}showLists()
```

<div class="flex justify-center">
  <VPLink :href="showLists()" target="_self">
    显示所有列表
  </VPLink>
</div>

### 显示列表

显示 Shopi 中的特定购物清单。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showList' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}showList({
  name: 'groceries',
})
```

<div class="flex justify-center">
  <VPLink :href="showList(showListParams)" target="_self">
    显示列表
  </VPLink>
</div>

### 创建列表

在 Shopi 中创建新的购物清单。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createList' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}createList({
  name: 'weekly shopping',
})
```

<div class="flex justify-center">
  <VPLink :href="createList(createListParams)" target="_self">
    创建列表
  </VPLink>
</div>

### 添加商品

向 Shopi 的购物清单中添加商品。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addItem' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}addItem({
  list: 'groceries',
  name: 'milk',
  amount: '2',
})
```

<div class="flex justify-center">
  <VPLink :href="addItem(addItemParams)" target="_self">
    添加商品
  </VPLink>
</div>

### 清空列表

清空 Shopi 中购物清单的商品。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clearList' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}clearList({
  name: 'groceries',
  crossedOnly: 'yes',
})
```

<div class="flex justify-center">
  <VPLink :href="clearList(clearListParams)" target="_self">
    清空列表
  </VPLink>
</div>
