---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFeed } from 'protocol-launcher/reeder';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openFeedParams } from '../../.vitepress/constants/reeder';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/reeder' : 'protocol-launcher');
</script>

# Reeder

[Reeder](https://reeder.app/) 是一款订阅阅读器应用。**Protocol Launcher** 可以生成 Reeder URL scheme 链接。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Reeder 官方帮助只文档化了两种 URL scheme 形式：`reed://` 用于打开 Reeder，`reed://feed-url.com` 用于打开 Reeder 并自动搜索指定 URL 的 feed。此模块只暴露这些已文档化的形式。

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'reeder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'reeder.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Reeder
  </VPLink>
</div>

### 打开 Feed

打开 Reeder，并自动搜索指定 URL 的 feed。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFeed' : 'reeder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'reeder.'}}openFeed({
  url: 'feed-url.com',
})
```

<div class="flex justify-center">
  <VPLink :href="openFeed(openFeedParams)" target="_self">
    在 Reeder 中打开 Feed
  </VPLink>
</div>

## 生成的 URL

```ts
open()
// => 'reed://'

openFeed({
  url: 'feed-url.com',
})
// => 'reed://feed-url.com'
```

## 官方文档

- [Reeder Help - URL Scheme](https://reederapp.com/help/)
