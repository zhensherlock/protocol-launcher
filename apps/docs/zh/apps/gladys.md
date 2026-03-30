---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { createItem, pasteClipboard } from 'protocol-launcher/gladys';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  createItemWithTextParams,
  createItemWithUrlParams,
  createItemWithBase64Params,
  pasteClipboardParams,
  pasteClipboardWithTitleParams,
  pasteClipboardWithLabelsParams,
} from '../../.vitepress/constants/gladys';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/gladys' : 'protocol-launcher');
</script>

# Gladys

[Gladys](http://www.bru.build/app/gladys) 是一款适用于 iPad 的拖放搁架应用，可以临时存储您想要放置的内容，例如链接、文本片段、地图位置、联系人、图像、照片、电子邮件、消息等等。**Protocol Launcher** 允许您生成深度链接以在 Gladys 中创建项目和从剪贴板粘贴。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 创建文本项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createItem' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}createItem({
  text: 'Hi There',
  title: 'Greeting',
  labels: 'Created Items,New Items',
  note: 'Some Notes',
})
```

<div class="flex justify-center">
  <VPLink :href="createItem(createItemWithTextParams)" target="_self">
    创建文本项目
  </VPLink>
</div>

### 创建 URL 项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createItem' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}createItem({
  url: 'http://bru.build',
  title: 'The Gladys Guy',
  labels: 'Developer,iOS,macOS,Embedded',
  note: 'Some Notes',
})
```

<div class="flex justify-center">
  <VPLink :href="createItem(createItemWithUrlParams)" target="_self">
    创建 URL 项目
  </VPLink>
</div>

### 创建 Base64 数据项目

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createItem' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}createItem({
  base64data: 'RXhhbXBsZSB0ZXh0IGZpbGUuCg==',
  title: 'Test.txt',
  labels: 'Text Files',
  note: 'Pretending I am a file',
})
```

<div class="flex justify-center">
  <VPLink :href="createItem(createItemWithBase64Params)" target="_self">
    创建 Base64 数据项目
  </VPLink>
</div>

### 粘贴剪贴板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteClipboard' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}pasteClipboard()
```

<div class="flex justify-center">
  <VPLink :href="pasteClipboard(pasteClipboardParams)" target="_self">
    粘贴剪贴板
  </VPLink>
</div>

### 粘贴剪贴板（带标题）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteClipboard' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}pasteClipboard({
  title: 'Override The Title',
})
```

<div class="flex justify-center">
  <VPLink :href="pasteClipboard(pasteClipboardWithTitleParams)" target="_self">
    粘贴剪贴板（带标题）
  </VPLink>
</div>

### 粘贴剪贴板（带标签和备注）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteClipboard' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}pasteClipboard({
  title: 'Override The Title',
  labels: 'Pasted Items,New Items',
  note: 'Some Notes',
})
```

<div class="flex justify-center">
  <VPLink :href="pasteClipboard(pasteClipboardWithLabelsParams)" target="_self">
    粘贴剪贴板（带标签）
  </VPLink>
</div>
