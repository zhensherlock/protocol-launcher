---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, view } from 'protocol-launcher/ftstreets';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { viewParams } from '../../.vitepress/constants/ftstreets';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ftstreets' : 'protocol-launcher');
</script>

# Streets

[Streets](https://www.futuretap.com/apps/streets) 是在 iPhone、iPad、Apple Watch 和 Mac 上浏览街景全景图的最佳方式。**Protocol Launcher** 允许您生成深度链接以在 Streets 中查看街景全景图。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'ftstreets' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ftstreets.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Streets
  </VPLink>
</div>

### 查看全景图

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'ftstreets' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ftstreets.'}}view({
  location: { lat: 48.872112, lng: 2.332977 },
  heading: 60,
  pitch: 7,
  title: 'Apple Store Opéra',
})
```

<div class="flex justify-center">
  <VPLink :href="view(viewParams)" target="_self">
    在 Streets 中查看全景图
  </VPLink>
</div>
