---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, search, app } from 'protocol-launcher/app-store';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openParams,
  searchParams,
  appParams,
  appWithActionParams,
} from '../../.vitepress/constants/app-store';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/app-store' : 'protocol-launcher');
</script>

# App Store

[App Store](https://www.apple.com/app-store/) 是由苹果公司为其 iOS、iPadOS 和 watchOS 操作系统开发和维护的数字分发平台。**Protocol Launcher** 允许你生成深度链接，用于在 App Store 中打开并配置资源。

## 使用

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 App Store

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 App Store
  </VPLink>
</div>

### 打开特定页面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}open({
  path: 'account/subscriptions',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    打开 App Store
  </VPLink>
</div>

### 搜索应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}search({
  query: 'things',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    在 App Store 中搜索
  </VPLink>
</div>

### 打开应用页面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'app' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}app({
  id: '836500024',
})
```

<div class="flex justify-center">
  <VPLink :href="app(appParams)" target="_self">
    打开应用页面
  </VPLink>
</div>

### 打开应用页面并执行操作

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'app' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}app({
  id: '836500024',
  action: 'write-review',
})
```

<div class="flex justify-center">
  <VPLink :href="app(appWithActionParams)" target="_self">
    撰写评论
  </VPLink>
</div>
