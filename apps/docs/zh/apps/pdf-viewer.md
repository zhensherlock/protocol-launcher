---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { addFile, openFile } from 'protocol-launcher/pdf-viewer';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { addFileUrlParams, openFileParams } from '../../.vitepress/constants/pdf-viewer';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/pdf-viewer' : 'protocol-launcher',
);
</script>

# PDF Viewer

[PDF Viewer](https://pdfviewer.io/) 是一款用于阅读和管理 PDF 文档的 PDF 阅读器。**Protocol Launcher** 可以生成 PDF Viewer URL scheme 链接。

PDF Viewer 官方 URL scheme 动作格式为 `pdfviewer://x-callback-url/[action]?[action parameters]&[x-callback parameters]`。官方 FAQ 明确记录了 `open-file` 和 `add-file` 的动作参数。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

### 打开文件

通过官方文档中的 `path` 参数打开本地文件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pdfViewer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfViewer.'}}openFile({
  path: '/Quick Start.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    在 PDF Viewer 中打开文件
  </VPLink>
</div>

### 添加文件

将文件，或从 `url` 下载的文件，以 `filename` 存储到本地。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addFile' : 'pdfViewer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfViewer.'}}addFile({
  open: true,
  url: 'https://pspdfkit.com/downloads/case-study-box.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="addFile(addFileUrlParams)" target="_self">
    添加 URL 文件到 PDF Viewer
  </VPLink>
</div>

如果通过 base64 `data` 添加文件，`data` 与 `filename` 都是必需的。helper 会在生成 URL 时对 `data` 参数进行 URL 编码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addFile' : 'pdfViewer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfViewer.'}}addFile({
  open: false,
  filename: 'Document.pdf',
  data: 'JVBERi0xLjMKJcTl8uXrp/Og0MTGCg==',
})
```

## 参考资料

- [PDF Viewer URL Scheme](https://pdfviewer.io/faq/ios-how-can-i-integrate-pdf-viewer-into-my-website-or-iphone-ipad-app/)
