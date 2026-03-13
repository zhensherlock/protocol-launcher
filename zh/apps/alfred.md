---
url: /protocol-launcher/zh/apps/alfred.md
---

# Alfred

[Alfred](https://www.alfredapp.com/) 是一款屡获殊荣的 macOS 效率应用。它通过热键、关键词、文本扩展等功能提升您的工作效率。搜索您的 Mac 和网络，并使用自定义操作来控制您的 Mac。**Protocol Launcher** 允许您生成深度链接来打开 Alfred、导航偏好设置、浏览画廊中的工作流以及创建自定义搜索。

## 用法

有两种使用此库的方式：

* 按需导入（On-Demand）从子路径导入，支持 tree-shaking，保持打包体积小。
* 完整导入（Full Import）从根包导入，使用方便但包含所有应用模块。

生产构建请选择按需导入；完整导入适合快速脚本或演示。

### 打开 Alfred

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}open()
```

### 打开偏好设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPreferences' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}openPreferences()
```

### 导航到偏好设置部分

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: '{{ navigateToWorkflowsPath }}',
})
```

### 导航到解析依赖

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: '{{ navigateToResolveDependenciesPath }}',
})
```

### 导航到指定工作流

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: '{{ navigateToWorkflowPath }}',
})
```

### 导航到代码片段

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: '{{ navigateToSnippetsPath }}',
})
```

### 打开画廊工作流

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gallery' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}gallery({
  author: '{{ galleryWorkflowParams.author }}',
  workflow: '{{ galleryWorkflowParams.workflow }}',
})
```

### 打开 1Password 画廊工作流

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gallery' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}gallery({
  author: '{{ galleryWorkflow1PasswordParams.author }}',
  workflow: '{{ galleryWorkflow1PasswordParams.workflow }}',
})
```

### 创建自定义搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customSearch' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}customSearch({
  title: '{{ customSearchGithubParams.title }}',
  keyword: '{{ customSearchGithubParams.keyword }}',
  url: '{{ customSearchGithubParams.url }}',
})
```
