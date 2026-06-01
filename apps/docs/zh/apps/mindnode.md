---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openDocument } from 'protocol-launcher/mindnode';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openDocumentParams } from '../../.vitepress/constants/mindnode';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/mindnode' : 'protocol-launcher');
</script>

# MindNode

[MindNode](https://www.mindnode.com/) 是一款思维导图应用。**Protocol Launcher** 允许你生成 MindNode URL scheme 链接。

## 使用

有两种方式可以使用此库：

- 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
- 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

MindNode 官方 URL scheme 文档列出了 `mindnode://open?name=YourDocument`，用于打开 MindNode iCloud container 中的文件。本模块只实现这个已文档化的 URL 格式。

### 打开文档

按名称打开 MindNode iCloud container 中的文档。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'mindnode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'mindnode.'}}openDocument({
  name: 'YourDocument',
})
```

<div class="flex justify-center">
  <VPLink :href="openDocument(openDocumentParams)" target="_self">
    打开 MindNode 文档
  </VPLink>
</div>

## 生成的 URL

```ts
openDocument({ name: 'YourDocument' })
// => 'mindnode://open?name=YourDocument'
```

## 官方文档

- [Improving Integrations with Things and Sharing Providers](https://www.mindnode.com/blog/improving-integrations)
