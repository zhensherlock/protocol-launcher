---
url: /protocol-launcher/apps/microsoft-edge.md
---

# Microsoft Edge

[Microsoft Edge](https://www.microsoft.com/zh-cn/edge/?form=MA13FJ) is a web browser developed by Microsoft based on the Chromium open-source project. **Protocol Launcher** allows you to generate deep links to open URLs in Microsoft Edge.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Browser

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'microsoftEdge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftEdge.'}}open()
```

### Open URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'microsoftEdge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftEdge.'}}openUrl({
  url: 'https://www.google.com/',
})
```
