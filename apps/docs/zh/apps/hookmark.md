---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openAddressBook, openEmail, openFile, openNotes, openSearch, openSpotify } from 'protocol-launcher/hookmark';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import { openFileParams, openEmailParams, openSearchParams } from '../../.vitepress/constants/hookmark';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/hookmark' : 'protocol-launcher');
</script>

# Hookmark

[Hookmark](https://hookproductivity.com/) 是一款 macOS 应用程序，可让您在文件、电子邮件、网页等之间创建上下文书签和双向链接。**Protocol Launcher** 允许您生成深度链接以在 Hookmark 中打开资源。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Hookmark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Hookmark
  </VPLink>
</div>

### 打开通讯录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAddressBook' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openAddressBook()
```

<div class="flex justify-center">
  <VPLink :href="openAddressBook()" target="_self">
    在 Hookmark 中打开通讯录
  </VPLink>
</div>

### 打开电子邮件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEmail' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openEmail({
  id: '<CABc123xyz@mail.gmail.com>',
})
```

<div class="flex justify-center">
  <VPLink :href="openEmail(openEmailParams)" target="_self">
    在 Hookmark 中打开电子邮件
  </VPLink>
</div>

### 打开文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openFile({
  path: '/Applications',
  name: 'Applications',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    在 Hookmark 中打开文件
  </VPLink>
</div>

### 打开备忘录

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotes' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openNotes()
```

<div class="flex justify-center">
  <VPLink :href="openNotes()" target="_self">
    在 Hookmark 中打开备忘录
  </VPLink>
</div>

### 打开搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openSearch({
  query: 'project',
})
```

<div class="flex justify-center">
  <VPLink :href="openSearch(openSearchParams)" target="_self">
    在 Hookmark 中打开搜索
  </VPLink>
</div>

### 打开 Spotify

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSpotify' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openSpotify()
```

<div class="flex justify-center">
  <VPLink :href="openSpotify()" target="_self">
    在 Hookmark 中打开 Spotify
  </VPLink>
</div>
