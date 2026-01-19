---
url: /protocol-launcher/apps/xcode.md
---

# Xcode

[Xcode](https://developer.apple.com/xcode/) is an integrated development environment for Apple platforms. **Protocol Launcher** allows you to generate deep links to open and configure resources in Xcode.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'xcode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'xcode.'}}cloneProject({
  url: 'https://github.com/zhensherlock/protocol-launcher',
})
```
