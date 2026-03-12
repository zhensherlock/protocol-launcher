---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openPreferences, navigateTo, gallery, customSearch } from 'protocol-launcher/alfred';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  navigateToWorkflowsPath,
  navigateToResolveDependenciesPath,
  navigateToWorkflowPath,
  navigateToSnippetsPath,
  galleryWorkflowParams,
  galleryWorkflow1PasswordParams,
  customSearchGithubParams,
} from '../../.vitepress/constants/alfred';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/alfred' : 'protocol-launcher');
</script>

# Alfred

[Alfred](https://www.alfredapp.com/) 是一款屡获殊荣的 macOS 效率应用。它通过热键、关键词、文本扩展等功能提升您的工作效率。搜索您的 Mac 和网络，并使用自定义操作来控制您的 Mac。**Protocol Launcher** 允许您生成深度链接来打开 Alfred、导航偏好设置、浏览画廊中的工作流以及创建自定义搜索。

## 用法

有两种使用此库的方式：

- 按需导入（On-Demand）从子路径导入，支持 tree-shaking，保持打包体积小。
- 完整导入（Full Import）从根包导入，使用方便但包含所有应用模块。

生产构建请选择按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Alfred

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Alfred
  </VPLink>
</div>

### 打开偏好设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPreferences' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}openPreferences()
```

<div class="flex justify-center">
  <VPLink :href="openPreferences()" target="_self">
    打开 Alfred 偏好设置
  </VPLink>
</div>

### 导航到偏好设置部分

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: '{{ navigateToWorkflowsPath }}',
})
```

<div class="flex justify-center">
  <VPLink :href="navigateTo(navigateToWorkflowsPath)" target="_self">
    导航到工作流
  </VPLink>
</div>

### 导航到解析依赖

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: '{{ navigateToResolveDependenciesPath }}',
})
```

<div class="flex justify-center">
  <VPLink :href="navigateTo(navigateToResolveDependenciesPath)" target="_self">
    导航到解析依赖
  </VPLink>
</div>

### 导航到指定工作流

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: '{{ navigateToWorkflowPath }}',
})
```

<div class="flex justify-center">
  <VPLink :href="navigateTo(navigateToWorkflowPath)" target="_self">
    导航到工作流
  </VPLink>
</div>

### 导航到代码片段

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: '{{ navigateToSnippetsPath }}',
})
```

<div class="flex justify-center">
  <VPLink :href="navigateTo(navigateToSnippetsPath)" target="_self">
    导航到代码片段
  </VPLink>
</div>

### 打开画廊工作流

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gallery' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}gallery({
  author: '{{ galleryWorkflowParams.author }}',
  workflow: '{{ galleryWorkflowParams.workflow }}',
})
```

<div class="flex justify-center">
  <VPLink :href="gallery(galleryWorkflowParams)" target="_self">
    打开 About Mac 工作流
  </VPLink>
</div>

### 打开 1Password 画廊工作流

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gallery' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}gallery({
  author: '{{ galleryWorkflow1PasswordParams.author }}',
  workflow: '{{ galleryWorkflow1PasswordParams.workflow }}',
})
```

<div class="flex justify-center">
  <VPLink :href="gallery(galleryWorkflow1PasswordParams)" target="_self">
    打开 1Password 工作流
  </VPLink>
</div>

### 创建自定义搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customSearch' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}customSearch({
  title: '{{ customSearchGithubParams.title }}',
  keyword: '{{ customSearchGithubParams.keyword }}',
  url: '{{ customSearchGithubParams.url }}',
})
```

<div class="flex justify-center">
  <VPLink :href="customSearch(customSearchGithubParams)" target="_self">
    创建 GitHub 自定义搜索
  </VPLink>
</div>
