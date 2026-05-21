---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { save, open, pick, last, random, unread, starred, untagged, read, tag } from 'protocol-launcher/goodlinks';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { saveParams, openParams, pickParams, tagParams } from '../../.vitepress/constants/goodlinks';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/goodlinks' : 'protocol-launcher');
</script>

# GoodLinks

[GoodLinks](https://goodlinks.app/) 是一个用于保存和阅读链接的稍后阅读应用。**Protocol Launcher** 允许您完全基于官方 URL scheme 生成 GoodLinks x-callback-url 动作：save、open、pick、last、random、unread、starred、untagged、read 和 tag。

GoodLinks 支持 `x-success`、`x-error` 和 `x-cancel` 回调 URL。需要时可分别通过 `xSuccess`、`xError` 和 `xCancel` 传入。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 保存链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'save' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}save({
  url: 'https://apple.com',
  starred: '1',
  tags: 'apple ios',
})
```

<div class="flex justify-center">
  <VPLink :href="save(saveParams)" target="_self">
    在 GoodLinks 中保存链接
  </VPLink>
</div>

### 打开链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}open({
  url: 'https://example.com/article',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    在 GoodLinks 中打开链接
  </VPLink>
</div>

### 选择链接详情

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pick' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}pick({
  urlParam: 'link',
  titleParam: 'name',
  summaryParam: 'description',
})
```

<div class="flex justify-center">
  <VPLink :href="pick(pickParams)" target="_self">
    在 GoodLinks 中选择链接详情
  </VPLink>
</div>

### 打开最后一个未读链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'last' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}last()
```

<div class="flex justify-center">
  <VPLink :href="last()" target="_self">
    在 GoodLinks 中打开最后一个未读链接
  </VPLink>
</div>

### 打开随机未读链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'random' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}random()
```

<div class="flex justify-center">
  <VPLink :href="random()" target="_self">
    在 GoodLinks 中打开随机未读链接
  </VPLink>
</div>

### 显示未读列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'unread' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}unread()
```

<div class="flex justify-center">
  <VPLink :href="unread()" target="_self">
    在 GoodLinks 中显示未读列表
  </VPLink>
</div>

### 显示星标列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'starred' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}starred()
```

<div class="flex justify-center">
  <VPLink :href="starred()" target="_self">
    在 GoodLinks 中显示星标列表
  </VPLink>
</div>

### 显示未标记列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'untagged' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}untagged()
```

<div class="flex justify-center">
  <VPLink :href="untagged()" target="_self">
    在 GoodLinks 中显示未标记列表
  </VPLink>
</div>

### 显示已读列表

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'read' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}read()
```

<div class="flex justify-center">
  <VPLink :href="read()" target="_self">
    在 GoodLinks 中显示已读列表
  </VPLink>
</div>

### 显示带标签的链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tag' : 'goodlinks' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodlinks.'}}tag({
  name: 'apple',
})
```

<div class="flex justify-center">
  <VPLink :href="tag(tagParams)" target="_self">
    在 GoodLinks 中显示带标签的链接
  </VPLink>
</div>
