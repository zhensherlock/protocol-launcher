---
url: /protocol-launcher/apps/verdent.md
---

# Verdent

[Verdent](https://verdent.ai/) is an AI-powered coding partner designed to bring the joy back to coding by focusing on creation. It pairs a world-class coding agent with multiple frontier models to help you build from scratch, ship features in existing repos, and handle complex debugging. With features like Agent Mode for execution and Plan Mode for collaborative planning, Verdent handles the complexity so you can stay in flow. **Protocol Launcher** allows you to generate deep links to open Verdent.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Verdent

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'verdent' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'verdent.'}}open()
```
