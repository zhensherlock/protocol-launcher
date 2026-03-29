---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, add } from 'protocol-launcher/cal2todo';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { addParams, addWithCallbackParams } from '../../.vitepress/constants/cal2todo';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/cal2todo' : 'protocol-launcher');
</script>

# Cal2Todo

[Cal2Todo](https://apps.apple.com/sg/app/cal2todo/id475987733) 是一款适用于 iOS 的简单日历和任务管理器。**Protocol Launcher** 允许您生成深度链接以向 Cal2Todo 添加事件。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Cal2Todo
  </VPLink>
</div>

### 添加事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}add({
  title: 'Meeting',
  notes: 'Discuss project roadmap',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addParams)" target="_self">
    添加事件
  </VPLink>
</div>

### 添加带回调 URL 的事件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}add({
  title: 'Meeting',
  xSuccess: 'myapp://ok',
  xSource: 'myapp',
  xError: 'myapp://cancel',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addWithCallbackParams)" target="_self">
    添加带回调的事件
  </VPLink>
</div>
