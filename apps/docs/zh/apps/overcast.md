---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, add } from 'protocol-launcher/overcast';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openParams, addParams } from '../../.vitepress/constants/overcast';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/overcast' : 'protocol-launcher');
</script>

# Overcast

[Overcast](https://overcast.fm/) 是一款适用于 iOS 和 macOS 的热门播客应用程序。**Protocol Launcher** 允许您生成深度链接以订阅播客和打开 Overcast。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'overcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'overcast.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Overcast
  </VPLink>
</div>

### 订阅播客

使用 x-callback-url 标准在 Overcast 中订阅播客 RSS 源。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'overcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'overcast.'}}add({
  url: 'https://example.com/podcast/rss',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addParams)" target="_self">
    订阅播客
  </VPLink>
</div>

### 带回调的播客订阅

订阅成功后会跳转到回调 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'overcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'overcast.'}}add({
  url: 'https://example.com/podcast/rss',
  xSuccess: 'myapp://success',
})
```

<div class="flex justify-center">
  <VPLink :href="add({ url: 'https://example.com/podcast/rss', xSuccess: 'myapp://success' })" target="_self">
    带回调订阅
  </VPLink>
</div>
