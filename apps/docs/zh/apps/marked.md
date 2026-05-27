---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { addStyle, defaults, help, open, paste, preview, refresh, runJavaScript, style } from 'protocol-launcher/marked';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addStyleCssParams,
  addStyleFileParams,
  defaultsNoRefreshParams,
  defaultsParams,
  helpParams,
  helpPathParams,
  openDirectPathParams,
  openParams,
  openPathParams,
  openRaiseParams,
  previewParams,
  refreshAllParams,
  refreshFileParams,
  refreshPathParams,
  runJavaScriptParams,
  runJavaScriptPathParams,
  styleFileParams,
  styleParams,
  stylePathParams,
} from '../../.vitepress/constants/marked';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/marked' : 'protocol-launcher');
</script>

# Marked

[Marked](https://marked2app.com/) 是一款 macOS Markdown 预览应用。**Protocol Launcher** 允许你为 Marked 生成深度链接。

## 使用方式

提供两种使用方式：

- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

<SelectInstallationMethod v-model="currentMethod" />

## URL 方法

以下 helper 严格对应 Marked 官方文档中列出的命令和参数。

### 添加自定义样式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addStyle' : 'marked' }} } from '{{ importPath }}'

const cssUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}addStyle({
  name: 'My new style',
  css: 'body { color: red; }',
})

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}addStyle({
  file: '/Users/myuser/Custom Styles/Unicorn.css',
})
```

### 设置 Defaults

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'defaults' : 'marked' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}defaults({
  syntaxHighlight: 1,
  includeMathJax: 0,
})

const noRefreshUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}defaults({
  syntaxHighlight: 1,
  refresh: 0,
})
```

### 运行 JavaScript

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runJavaScript' : 'marked' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}runJavaScript({
  js: 'Marked.file.refresh()',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}runJavaScript({
  path: 'filename1/filename2',
  syntax: 'path',
  js: 'Marked.file.refresh()',
})
```

### 打开帮助

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'help' : 'marked' }} } from '{{ importPath }}'

const pageUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}help({
  page: 'Document_Statistics',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}help({
  path: 'Keyword_Highlighting:editingkeywords',
  syntax: 'path',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="help(helpParams)" target="_self">
    打开 Marked 帮助页面
  </VPLink>
  <VPLink :href="help(helpPathParams)" target="_self">
    打开 Marked 帮助锚点
  </VPLink>
</div>

### 打开文档

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'marked' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}open({
  file: '/Users/username/Desktop/report.md',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}open({
  path: '~/nvALT2.2',
  syntax: 'path',
})

const directPathUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}open({
  path: '/Users/username/Desktop/report.md',
  syntax: 'direct',
})

const raiseUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}open({
  file: 'filename.md',
  raise: true,
})
```

### 预览剪贴板

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'marked' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}paste()
```

### 预览文本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preview' : 'marked' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}preview({
  text: 'Some text to preview\n',
})
```

<div class="flex justify-center">
  <VPLink :href="preview(previewParams)" target="_self">
    在 Marked 中预览文本
  </VPLink>
</div>

### 刷新预览

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'refresh' : 'marked' }} } from '{{ importPath }}'

const allUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}refresh()

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}refresh({
  file: '/Users/username/Desktop/report.md',
})

const explicitAllUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}refresh({
  file: 'all',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}refresh({
  path: 'filename1/filename2',
  syntax: 'path',
})
```

### 设置预览样式

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'style' : 'marked' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}style({
  css: 'Github',
})

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}style({
  file: 'filename1,filename2',
  css: 'Github',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}style({
  path: 'all',
  syntax: 'path',
  css: 'Github',
})
```

## 官方文档

- [Marked URL Handler](https://marked2app.com/help/URL_Handler.html)
