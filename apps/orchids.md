---
url: /protocol-launcher/apps/orchids.md
---

# Orchids

[Orchids](https://www.orchids.app/) is an AI-powered app builder that enables you to build web apps, mobile apps, games, CLI tools, and AI agents. It supports every language and framework and integrates with your existing AI subscriptions. **Protocol Launcher** allows you to generate deep links to open Orchids.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Orchids

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'orchids' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'orchids.'}}open()
```
