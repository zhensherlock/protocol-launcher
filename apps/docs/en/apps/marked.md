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

[Marked](https://marked2app.com/) is a macOS Markdown preview app. **Protocol Launcher** allows you to generate deep links for Marked.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

The helpers below mirror the commands and parameters documented by Marked.

### Add Custom Style

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

### Set Defaults

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

### Run JavaScript

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

### Open Help

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
    Open Marked Help Page
  </VPLink>
  <VPLink :href="help(helpPathParams)" target="_self">
    Open Marked Help Anchor
  </VPLink>
</div>

### Open Document

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

### Paste Clipboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'marked' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}paste()
```

### Preview Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preview' : 'marked' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'marked.'}}preview({
  text: 'Some text to preview\n',
})
```

<div class="flex justify-center">
  <VPLink :href="preview(previewParams)" target="_self">
    Preview Text in Marked
  </VPLink>
</div>

### Refresh Preview

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

### Set Preview Style

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

## Generated URLs

```ts-vue
addStyle(addStyleCssParams)
// x-marked://addstyle?name=My%20new%20style&css=body%20%7B%20color:%20red%3B%20%7D

addStyle(addStyleFileParams)
// x-marked://addstyle?file=/Users/myuser/Custom%20Styles/Unicorn.css

defaults(defaultsParams)
// x-marked://defaults?syntaxHighlight=1&includeMathJax=0

defaults(defaultsNoRefreshParams)
// x-marked://defaults?syntaxHighlight=1&refresh=0

runJavaScript(runJavaScriptParams)
// x-marked://do?js=Marked.file.refresh()

runJavaScript(runJavaScriptPathParams)
// x-marked://do/filename1/filename2?js=Marked.file.refresh()

open(openParams)
// x-marked://open?file=/Users/username/Desktop/report.md

open(openPathParams)
// x-marked://open/~/nvALT2.2

open(openDirectPathParams)
// x-marked:///Users/username/Desktop/report.md

open(openRaiseParams)
// x-marked://open?file=filename.md&raise=true

paste()
// x-marked://paste

refresh(refreshFileParams)
// x-marked://refresh?file=/Users/username/Desktop/report.md

refresh(refreshAllParams)
// x-marked://refresh?file=all

refresh(refreshPathParams)
// x-marked://refresh/filename1/filename2

style(styleParams)
// x-marked://style?css=Github

style(styleFileParams)
// x-marked://style?file=filename1,filename2&css=Github

style(stylePathParams)
// x-marked://style/all?css=Github
```

## Official Documentation

- [Marked URL Handler](https://marked2app.com/help/URL_Handler.html)
