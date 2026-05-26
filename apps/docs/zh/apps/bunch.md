---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { close, edit, open, prefs, raw, refresh, reveal, setPref, snippet, toggle } from 'protocol-launcher/bunch';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  closePathParams,
  closeParams,
  editParams,
  editPathParams,
  openBetaParams,
  openCallbackParams,
  openPathParams,
  openParams,
  openShortcutParams,
  openSuccessParams,
  openWithVariablesParams,
  rawFileParams,
  rawTextParams,
  setPrefFolderParams,
  setPrefToggleParams,
  snippetParams,
  snippetPathParams,
  togglePathParams,
  toggleParams,
  toggleTagParams,
} from '../../.vitepress/constants/bunch';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/bunch' : 'protocol-launcher');
</script>

# Bunch

[Bunch](https://bunchapp.co/) 是一款 macOS 工作区自动化应用。**Protocol Launcher** 可以为 Bunch 生成深度链接。

## 使用方式

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

以下 helper 在适用时都支持 Bunch 文档中的 `x-callback-url` 路径格式，以及官方的 `x-source`、`x-success`、`x-delay` 和 `x-bunch-beta` URL 值。

### 打开 Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
})

const shortcutUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  syntax: 'shortcut',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'WorkBunch',
  syntax: 'path',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="open(openParams)" target="_self">
    使用完整 URL 打开 Bunch
  </VPLink>
  <VPLink :href="open(openShortcutParams)" target="_self">
    使用 Shortcut URL 打开 Bunch
  </VPLink>
  <VPLink :href="open(openPathParams)" target="_self">
    使用 Path URL 打开 Bunch
  </VPLink>
</div>

### 使用 Bunch Beta 打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  scheme: 'x-bunch-beta',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openBetaParams)" target="_self">
    在 Bunch Beta 中打开
  </VPLink>
</div>

### 带 Frontmatter 值打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Default',
  variables: {
    launch: 'TextEdit',
  },
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithVariablesParams)" target="_self">
    带变量打开
  </VPLink>
</div>

### 带 Callback 参数打开

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  xCallback: true,
  'x-source': 'com.googlecode.iterm2',
})

const successUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  'x-success': 'com.brettterpstra.marked2',
  'x-delay': 15,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="open(openCallbackParams)" target="_self">
    使用 x-callback-url 打开
  </VPLink>
  <VPLink :href="open(openSuccessParams)" target="_self">
    打开后启动 Marked 2
  </VPLink>
</div>

### 关闭 Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'close' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}close({
  bunch: 'Comms',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}close({
  bunch: 'Comms',
  syntax: 'path',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="close(closeParams)" target="_self">
    使用完整 URL 关闭 Bunch
  </VPLink>
  <VPLink :href="close(closePathParams)" target="_self">
    使用 Path URL 关闭 Bunch
  </VPLink>
</div>

### 切换 Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  bunch: 'Comms',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  bunch: 'Comms',
  syntax: 'path',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="toggle(toggleParams)" target="_self">
    使用完整 URL 切换 Bunch
  </VPLink>
  <VPLink :href="toggle(togglePathParams)" target="_self">
    使用 Path URL 切换 Bunch
  </VPLink>
</div>

### 切换带标签的 Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  tag: 'Tag1+Tag2',
})
```

<div class="flex justify-center">
  <VPLink :href="toggle(toggleTagParams)" target="_self">
    切换带标签的 Bunch
  </VPLink>
</div>

### 编辑 Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'edit' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}edit({
  bunch: 'Example',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}edit({
  bunch: 'Example',
  syntax: 'path',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="edit(editParams)" target="_self">
    使用完整 URL 编辑 Bunch
  </VPLink>
  <VPLink :href="edit(editPathParams)" target="_self">
    使用 Path URL 编辑 Bunch
  </VPLink>
</div>

### 运行原始 Bunch 文本或文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'raw' : 'bunch' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}raw({
  file: '~/MiscBunch.bunch',
})

const textUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}raw({
  txt: '(dnd on)',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="raw(rawFileParams)" target="_self">
    运行原始文件
  </VPLink>
  <VPLink :href="raw(rawTextParams)" target="_self">
    运行原始文本
  </VPLink>
</div>

### 刷新 Bunch 文件

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'refresh' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}refresh()
```

<div class="flex justify-center">
  <VPLink :href="refresh()" target="_self">
    刷新 Bunch 文件
  </VPLink>
</div>

### 在 Finder 中显示 Bunch 文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reveal' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}reveal()
```

<div class="flex justify-center">
  <VPLink :href="reveal()" target="_self">
    显示 Bunch 文件夹
  </VPLink>
</div>

### 设置偏好

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setPref' : 'bunch' }} } from '{{ importPath }}'

const toggleUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}setPref({
  toggleBunches: 1,
})

const folderUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}setPref({
  configDir: '~/Dropbox/Sync/Bunches',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="setPref(setPrefToggleParams)" target="_self">
    启用 Toggle Bunches
  </VPLink>
  <VPLink :href="setPref(setPrefFolderParams)" target="_self">
    设置 Bunch 文件夹
  </VPLink>
</div>

### 运行 Snippet

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'snippet' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}snippet({
  file: 'useful.snippets',
  fragment: 'Music',
  variables: {
    playlist: 'spotify:playlist:3cSpIL4Q0H3uqdBMbT6c9x',
  },
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}snippet({
  file: 'useful.snippets',
  fragment: 'Speak',
  syntax: 'path',
  variables: {
    var1: 'foo',
    var2: 'bar baz',
  },
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="snippet(snippetParams)" target="_self">
    使用完整 URL 运行 Snippet
  </VPLink>
  <VPLink :href="snippet(snippetPathParams)" target="_self">
    使用 Path URL 运行 Snippet
  </VPLink>
</div>

### 打开偏好设置

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prefs' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}prefs()
```

<div class="flex justify-center">
  <VPLink :href="prefs()" target="_self">
    打开 Bunch 偏好设置
  </VPLink>
</div>

## 官方文档

- [The Bunch URL Handler](https://bunchapp.co/docs/integration/url-handler/)
