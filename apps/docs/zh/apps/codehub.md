---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, createGist } from 'protocol-launcher/codehub';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { createGistParams } from '../../.vitepress/constants/codehub';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/codehub' : 'protocol-launcher');
</script>

# CodeHub

[CodeHub](https://github.com/CodeHubApp/CodeHub) 是在 iPhone、iPod Touch 和 iPad 上浏览和维护 GitHub 仓库的最佳方式。**Protocol Launcher** 允许您生成深度链接以打开 CodeHub 和创建 GitHub Gist。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开应用

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'codehub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codehub.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 CodeHub
  </VPLink>
</div>

### 创建 Gist

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createGist' : 'codehub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'codehub.'}}createGist({
  description: 'Hello from Protocol Launcher',
  public: true,
  files: {
    'hello.txt': 'Hello, World!',
    'codehub.txt': 'CodeHub is awesome!',
  },
})
```

<div class="flex justify-center">
  <VPLink :href="createGist(createGistParams)" target="_self">
    在 CodeHub 中创建 Gist
  </VPLink>
</div>
