---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  open,
  create,
  get,
  search,
  append,
  prepend,
  capture,
  dictate,
  workspace,
  runAction,
  quickSearch,
  arrange,
  actionSearch,
  commandPalette,
  getCurrentDraft,
  loadActionBarGroup,
  loadActionGroup,
  replaceRange,
  scanDocument,
} from 'protocol-launcher/drafts';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openParams,
  openWithTitleParams,
  createParams,
  createWithTagParams,
  getParams,
  getWithRetParamParams,
  searchParams,
  appendParams,
  appendWithActionParams,
  prependParams,
  prependWithTagParams,
  captureParams,
  dictateParams,
  workspaceParams,
  runActionParams,
  quickSearchParams,
  arrangeParams,
  actionSearchParams,
  commandPaletteParams,
  getCurrentDraftParams,
  loadActionBarGroupParams,
  loadActionGroupParams,
  replaceRangeParams,
  scanDocumentParams,
} from '../../.vitepress/constants/drafts';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/drafts' : 'protocol-launcher');
</script>

# Drafts

[Drafts](https://getdrafts.com/) 是一款适用于 Apple 平台（iPhone、iPad、Mac、Apple Watch）的强大文本捕获和自动化应用。它可以让您快速捕获文本，并通过操作（Actions）将文本发送到其他应用和服务。**Protocol Launcher** 允许您生成深度链接以在 Drafts 中创建、编辑和管理草稿。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开 Drafts

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    打开 Drafts
  </VPLink>
</div>

### 打开现有草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open({
  uuid: 'UUID-TO-VALID-DRAFT',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    通过 UUID 打开草稿
  </VPLink>
</div>

### 通过标题打开草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open({
  title: 'MyDraft/Header Name',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithTitleParams)" target="_self">
    通过标题打开草稿
  </VPLink>
</div>

### 创建新草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}create({
  text: 'Hello World',
})
```

<div class="flex justify-center">
  <VPLink :href="create(createParams)" target="_self">
    创建新草稿
  </VPLink>
</div>

### 创建带标签的草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}create({
  text: 'Hello World',
  tag: ['work', 'important'],
  flagged: true,
})
```

<div class="flex justify-center">
  <VPLink :href="create(createWithTagParams)" target="_self">
    创建带标签的草稿
  </VPLink>
</div>

### 获取草稿内容

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}get({
  uuid: 'UUID-TO-VALID-DRAFT',
})
```

<div class="flex justify-center">
  <VPLink :href="get(getParams)" target="_self">
    获取草稿内容
  </VPLink>
</div>

### 获取草稿内容（带返回参数）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}get({
  uuid: 'UUID-TO-VALID-DRAFT',
  retParam: 'input',
})
```

<div class="flex justify-center">
  <VPLink :href="get(getWithRetParamParams)" target="_self">
    获取草稿内容（带返回参数）
  </VPLink>
</div>

### 搜索草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}search({
  query: 'meeting',
  tag: 'work',
  folder: 'inbox',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    搜索草稿
  </VPLink>
</div>

### 追加文本到草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}append({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-ADD',
})
```

<div class="flex justify-center">
  <VPLink :href="append(appendParams)" target="_self">
    追加文本到草稿
  </VPLink>
</div>

### 追加文本并执行操作

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}append({
  uuid: 'xxx',
  text: 'Suffix',
  action: 'MyAction',
})
```

<div class="flex justify-center">
  <VPLink :href="append(appendWithActionParams)" target="_self">
    追加文本并执行操作
  </VPLink>
</div>

### 在草稿开头添加文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}prepend({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-ADD',
})
```

<div class="flex justify-center">
  <VPLink :href="prepend(prependParams)" target="_self">
    在草稿开头添加文本
  </VPLink>
</div>

### 在草稿开头添加文本并带标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}prepend({
  uuid: 'xxx',
  text: 'Prefix',
  tag: ['work', 'important'],
})
```

<div class="flex justify-center">
  <VPLink :href="prepend(prependWithTagParams)" target="_self">
    在草稿开头添加文本并带标签
  </VPLink>
</div>

### 捕获文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'capture' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}capture({
  text: 'Note',
  tag: 'work,important',
})
```

<div class="flex justify-center">
  <VPLink :href="capture(captureParams)" target="_self">
    捕获文本
  </VPLink>
</div>

### 口述文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dictate' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}dictate({
  locale: 'en-US',
  save: false,
  xSuccess: 'myapp://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="dictate(dictateParams)" target="_self">
    口述文本
  </VPLink>
</div>

### 加载工作区

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'workspace' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}workspace({
  name: 'Default',
})
```

<div class="flex justify-center">
  <VPLink :href="workspace(workspaceParams)" target="_self">
    加载工作区
  </VPLink>
</div>

### 对文本执行操作

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runAction' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}runAction({
  text: 'TEXT',
  action: 'VALID-ACTION-NAME',
})
```

<div class="flex justify-center">
  <VPLink :href="runAction(runActionParams)" target="_self">
    对文本执行操作
  </VPLink>
</div>

### 快速搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSearch' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}quickSearch({
  query: 'QUERY-TEXT',
})
```

<div class="flex justify-center">
  <VPLink :href="quickSearch(quickSearchParams)" target="_self">
    快速搜索
  </VPLink>
</div>

### 整理文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'arrange' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}arrange({
  text: 'unsorted list',
  retParam: 'input',
  xSuccess: 'myapp://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="arrange(arrangeParams)" target="_self">
    整理文本
  </VPLink>
</div>

### 操作搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'actionSearch' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}actionSearch({
  query: 'QUERY-TEXT',
})
```

<div class="flex justify-center">
  <VPLink :href="actionSearch(actionSearchParams)" target="_self">
    操作搜索
  </VPLink>
</div>

### 命令面板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'commandPalette' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}commandPalette({
  query: 'QUERY-TEXT',
})
```

<div class="flex justify-center">
  <VPLink :href="commandPalette(commandPaletteParams)" target="_self">
    命令面板
  </VPLink>
</div>

### 获取当前草稿

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getCurrentDraft' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}getCurrentDraft({
  xSuccess: 'myapp://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="getCurrentDraft(getCurrentDraftParams)" target="_self">
    获取当前草稿
  </VPLink>
</div>

### 加载操作栏组

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'loadActionBarGroup' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}loadActionBarGroup({
  name: 'GROUP-NAME',
})
```

<div class="flex justify-center">
  <VPLink :href="loadActionBarGroup(loadActionBarGroupParams)" target="_self">
    加载操作栏组
  </VPLink>
</div>

### 加载操作组

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'loadActionGroup' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}loadActionGroup({
  name: 'GROUP-NAME',
})
```

<div class="flex justify-center">
  <VPLink :href="loadActionGroup(loadActionGroupParams)" target="_self">
    加载操作组
  </VPLink>
</div>

### 替换草稿中的范围

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceRange' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}replaceRange({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-INSERT',
  start: 0,
  length: 10,
})
```

<div class="flex justify-center">
  <VPLink :href="replaceRange(replaceRangeParams)" target="_self">
    替换草稿中的范围
  </VPLink>
</div>

### 扫描文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scanDocument' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}scanDocument({
  save: false,
  retParam: 'input',
  xSuccess: 'myapp://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="scanDocument(scanDocumentParams)" target="_self">
    扫描文档
  </VPLink>
</div>
