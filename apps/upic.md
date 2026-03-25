---
url: /protocol-launcher/apps/upic.md
---

# uPic

[uPic](https://blog.svend.cc/upic/) is a simple Mac image hosting client. **Protocol Launcher** allows you to generate deep links to upload files in uPic.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open uPic

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'upic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upic.'}}open()
```

### Upload File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'uploadFile' : 'upic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upic.'}}uploadFile({
  filePath: '{{ appStore.isWindows ? 'C:\\Users\\Public\\Pictures\\test.png' : '/Users/Public/Pictures/test.png' }}',
})
```
