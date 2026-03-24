---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openDate } from 'protocol-launcher/itsycal';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openDateParams } from '../../.vitepress/constants/itsycal';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/itsycal' : 'protocol-launcher');
</script>

# Itsycal

[Itsycal](https://www.mowglii.com/itsycal/) 是 Mac 的一款小型菜单栏日历应用。**Protocol Launcher** 允许您生成深度链接以打开 Itsycal 并导航到特定日期。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Itsycal

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Itsycal
  </VPLink>
</div>

### 打开特定日期

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}openDate({
  date: '2024-01-10',
})
```

<div class="flex justify-center">
  <VPLink :href="openDate(openDateParams)" target="_self">
    在 Itsycal 中打开日期
  </VPLink>
</div>

### 打开今天

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'itsycal' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'itsycal.'}}openDate()
```

<div class="flex justify-center">
  <VPLink :href="openDate()" target="_self">
    在 Itsycal 中打开今天
  </VPLink>
</div>
