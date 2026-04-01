---
url: /protocol-launcher/apps/simple-scan.md
---

# Simple Scan

[Simple Scan](https://agiletortoise.com/simple-scan/) is a quick, easy way to scan paper documents to optimized, searchable PDF documents (or images) and send them almost anywhere. **Protocol Launcher** allows you to generate deep links to open Simple Scan and trigger scanning with predefined destinations and formats.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Simple Scan

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'simpleScan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'simpleScan.'}}open()
```

### Scan

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scan' : 'simpleScan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'simpleScan.'}}scan({
  destination: 'email',
  format: 'pdf',
  quality: 'original',
})
```
