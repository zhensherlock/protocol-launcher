---
url: /protocol-launcher/apps/telegram.md
---

# Telegram

[Telegram](https://telegram.org) is a cloud-based instant messaging platform. **Protocol Launcher** allows you to generate deep links to open and configure resources in Telegram.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Telegram

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'telegram' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'telegram.'}}open()
```
