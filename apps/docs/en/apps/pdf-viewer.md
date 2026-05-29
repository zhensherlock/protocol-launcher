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

[PDF Viewer](https://pdfviewer.io/) is a PDF reader for viewing and managing PDF documents. **Protocol Launcher** allows you to generate PDF Viewer URL scheme links.

PDF Viewer's official URL scheme action form is `pdfviewer://x-callback-url/[action]?[action parameters]&[x-callback parameters]`. The official FAQ documents `open-file` and `add-file` action parameters.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open File

Open a local file from the documented `path` parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pdfViewer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfViewer.'}}openFile({
  path: '/Quick Start.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    Open File in PDF Viewer
  </VPLink>
</div>

### Add File

Store a file, or download from `url`, locally as `filename`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addFile' : 'pdfViewer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfViewer.'}}addFile({
  open: true,
  url: 'https://pspdfkit.com/downloads/case-study-box.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="addFile(addFileUrlParams)" target="_self">
    Add URL File to PDF Viewer
  </VPLink>
</div>

Both `data` and `filename` are required to add a file from base64 data. The generated URL encodes the `data` parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addFile' : 'pdfViewer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfViewer.'}}addFile({
  open: false,
  filename: 'Document.pdf',
  data: 'JVBERi0xLjMKJcTl8uXrp/Og0MTGCg==',
})
```

## References

- [PDF Viewer URL Scheme](https://pdfviewer.io/faq/ios-how-can-i-integrate-pdf-viewer-into-my-website-or-iphone-ipad-app/)
