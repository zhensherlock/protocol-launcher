---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, play, pause, subscribe } from 'protocol-launcher/pocket-casts';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { subscribeParams } from '../../.vitepress/constants/pocket-casts';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pocket-casts' : 'protocol-launcher');
</script>

# Pocket Casts

[Pocket Casts](https://pocketcasts.com/) 是一款用于收听和关注节目的播客应用。**Protocol Launcher** 允许您生成 Pocket Casts iOS URL scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Pocket Casts
  </VPLink>
</div>

### 播放已暂停的节目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}play()
```

<div class="flex justify-center">
  <VPLink :href="play()" target="_self">
    在 Pocket Casts 中播放
  </VPLink>
</div>

### 暂停正在播放的节目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pause' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}pause()
```

<div class="flex justify-center">
  <VPLink :href="pause()" target="_self">
    在 Pocket Casts 中暂停
  </VPLink>
</div>

### 通过 Feed URL 关注播客

Pocket Casts 要求 feed URL 不带开头的 `http://`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribe' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}subscribe({
  feedUrlWithoutHttp: 'example.com/podcast/rss',
})
```

<div class="flex justify-center">
  <VPLink :href="subscribe(subscribeParams)" target="_self">
    在 Pocket Casts 中关注
  </VPLink>
</div>
