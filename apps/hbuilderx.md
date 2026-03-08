---
url: /protocol-launcher/apps/hbuilderx.md
---

# HBuilderX

[HBuilderX](https://www.dcloud.io/hbuilderx.html) is a lightweight, ultra-fast modern editor built on a C++ architecture. It features powerful AST-based syntax analysis and is purpose-built for Vue, significantly boosting development efficiency. Beyond a superior coding experience, it offers Markdown-first support, a clean eye-friendly interface, and efficient geek-style operations. **Protocol Launcher** allows you to generate deep links to quickly open resources in HBuilderX.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open HBuilderX

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'hbuilderx' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hbuilderx.'}}open()
```
