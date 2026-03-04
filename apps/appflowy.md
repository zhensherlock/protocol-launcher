---
url: /protocol-launcher/apps/appflowy.md
---

# AppFlowy

[AppFlowy](https://appflowy.io/) is an AI-powered collaborative workspace where you achieve more without losing control of your data. It's an open-source alternative to Notion, designed for individuals and teams who value privacy and a native cross-platform experience. Built with Flutter and Rust, it provides a powerful toolbox for projects, wikis, and databases. **Protocol Launcher** allows you to generate deep links to open resources in AppFlowy.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open AppFlowy

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appflowy' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appflowy.'}}open()
```
