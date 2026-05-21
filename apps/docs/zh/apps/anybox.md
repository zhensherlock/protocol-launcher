---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  show,
  paste,
  save,
  download,
  saveTab,
  openLinkFromPasteboard,
  copyPasteboardLinkAsMarkdown,
  quickFind,
  quickSave,
  stashBox,
  toggleAnydock,
  newNote,
  latestPhoto,
  photos,
  xCallbackSave,
  xCallbackPaste,
} from 'protocol-launcher/anybox';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  pasteParams,
  saveParams,
  downloadParams,
  saveTabParams,
  quickFindParams,
  xCallbackSaveParams,
  xCallbackPasteParams,
} from '../../.vitepress/constants/anybox';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/anybox' : 'protocol-launcher');
</script>

# Anybox

[Anybox](https://anybox.app/) 是一个用于保存、查找和整理链接的书签与链接管理应用。**Protocol Launcher** 基于官方 URL Schemes 文档生成 Anybox URL，包括 save、paste、Quick Find、macOS 工具、iOS 照片动作，以及 x-callback-url save/paste 动作。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 显示 Anybox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}show()
```

<div class="flex justify-center">
  <VPLink :href="show()" target="_self">
    显示 Anybox
  </VPLink>
</div>

### 粘贴剪贴板内容

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}paste({
  tag: 'Reading',
  starred: 'yes',
})
```

<div class="flex justify-center">
  <VPLink :href="paste(pasteParams)" target="_self">
    在 Anybox 中粘贴剪贴板内容
  </VPLink>
</div>

### 保存文本内容

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'save' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}save({
  text: 'https://example.com/article',
  tag: 'Reading',
  starred: 'yes',
  archive: 'webarchive',
})
```

<div class="flex justify-center">
  <VPLink :href="save(saveParams)" target="_self">
    在 Anybox 中保存文本内容
  </VPLink>
</div>

### 下载 URL（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'download' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}download({
  url: 'https://example.com/file.pdf',
  tag: 'Reading',
})
```

<div class="flex justify-center">
  <VPLink :href="download(downloadParams)" target="_self">
    在 Anybox 中下载 URL
  </VPLink>
</div>

### 保存当前标签页（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'saveTab' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}saveTab({
  tag: 'Reading',
  starred: 'yes',
  archive: 'pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="saveTab(saveTabParams)" target="_self">
    在 Anybox 中保存当前标签页
  </VPLink>
</div>

### 从剪贴板打开链接

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLinkFromPasteboard' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}openLinkFromPasteboard()
```

<div class="flex justify-center">
  <VPLink :href="openLinkFromPasteboard()" target="_self">
    从剪贴板打开链接
  </VPLink>
</div>

### 将剪贴板链接复制为 Markdown（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyPasteboardLinkAsMarkdown' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}copyPasteboardLinkAsMarkdown()
```

<div class="flex justify-center">
  <VPLink :href="copyPasteboardLinkAsMarkdown()" target="_self">
    将剪贴板链接复制为 Markdown
  </VPLink>
</div>

### Quick Find

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickFind' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}quickFind({
  q: 'research',
})
```

<div class="flex justify-center">
  <VPLink :href="quickFind(quickFindParams)" target="_self">
    打开 Anybox Quick Find
  </VPLink>
</div>

### Quick Save（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSave' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}quickSave()
```

<div class="flex justify-center">
  <VPLink :href="quickSave()" target="_self">
    打开 Anybox Quick Save
  </VPLink>
</div>

### Stash Box（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stashBox' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}stashBox()
```

<div class="flex justify-center">
  <VPLink :href="stashBox()" target="_self">
    打开 Anybox Stash Box
  </VPLink>
</div>

### 切换 Anydock（macOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleAnydock' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}toggleAnydock()
```

<div class="flex justify-center">
  <VPLink :href="toggleAnydock()" target="_self">
    切换 Anydock
  </VPLink>
</div>

### 新建笔记（iOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}newNote()
```

<div class="flex justify-center">
  <VPLink :href="newNote()" target="_self">
    在 Anybox 中打开新建笔记
  </VPLink>
</div>

### 最新照片（iOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'latestPhoto' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}latestPhoto()
```

<div class="flex justify-center">
  <VPLink :href="latestPhoto()" target="_self">
    在 Anybox 中保存最新照片
  </VPLink>
</div>

### 照片（iOS）

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'photos' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}photos()
```

<div class="flex justify-center">
  <VPLink :href="photos()" target="_self">
    在 Anybox 中打开照片选择器
  </VPLink>
</div>

### x-callback-url 保存

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackSave' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}xCallbackSave({
  text: 'helloWorld',
  xSuccess: 'successURL',
  xError: 'errorURL',
})
```

<div class="flex justify-center">
  <VPLink :href="xCallbackSave(xCallbackSaveParams)" target="_self">
    通过 x-callback-url 在 Anybox 中保存
  </VPLink>
</div>

### x-callback-url 粘贴

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackPaste' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}xCallbackPaste({
  xSuccess: 'successURL',
  xError: 'errorURL',
})
```

<div class="flex justify-center">
  <VPLink :href="xCallbackPaste(xCallbackPasteParams)" target="_self">
    通过 x-callback-url 在 Anybox 中粘贴
  </VPLink>
</div>
