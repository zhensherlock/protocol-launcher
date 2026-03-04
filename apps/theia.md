---
url: /protocol-launcher/apps/theia.md
---

# Theia

[Theia](https://theia-ide.org/) is an open-source, extensible platform for building cloud and desktop IDEs. It's designed with a modular architecture, embraces VS Code extensions, and allows for deep customization to create tailored development experiences. **Protocol Launcher** allows you to generate deep links to open Theia.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Theia

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'theia' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'theia.'}}open()
```
