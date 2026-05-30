---
url: /protocol-launcher/apps/pdf-viewer.md
---

# PDF Viewer

[PDF Viewer](https://pdfviewer.io/) is a PDF reader for viewing and managing PDF documents. **Protocol Launcher** allows you to generate PDF Viewer URL scheme links.

PDF Viewer's official URL scheme action form is `pdfviewer://x-callback-url/[action]?[action parameters]&[x-callback parameters]`. The official FAQ documents `open-file` and `add-file` action parameters.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

Open a local file from the documented `path` parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pdfViewer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfViewer.'}}openFile({
  path: '/Quick Start.pdf',
})
```

### Add File

Store a file, or download from `url`, locally as `filename`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addFile' : 'pdfViewer' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfViewer.'}}addFile({
  open: true,
  url: 'https://pspdfkit.com/downloads/case-study-box.pdf',
})
```

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

* [PDF Viewer URL Scheme](https://pdfviewer.io/faq/ios-how-can-i-integrate-pdf-viewer-into-my-website-or-iphone-ipad-app/)
