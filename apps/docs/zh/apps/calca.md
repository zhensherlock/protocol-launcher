---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, create, calc } from 'protocol-launcher/calca';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { createParams, calcParams } from '../../.vitepress/constants/calca';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/calca' : 'protocol-launcher');
</script>

# Calca

[Calca](http://calca.io/) 是一款热爱数学的文本编辑器，可以在您输入时给出答案。**Protocol Launcher** 允许您生成深度链接以在 Calca 中创建文档和执行计算。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Calca

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Calca
  </VPLink>
</div>

### 创建文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}create({
  body: '2+2=>',
  title: 'Math',
})
```

<div class="flex justify-center">
  <VPLink :href="create(createParams)" target="_self">
    在 Calca 中创建文档
  </VPLink>
</div>

### 计算

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calc' : 'calca' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'calca.'}}calc({
  body: '2+2=>',
  xSuccess: 'app://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="calc(calcParams)" target="_self">
    在 Calca 中计算
  </VPLink>
</div>
