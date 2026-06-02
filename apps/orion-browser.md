---
url: /protocol-launcher/apps/orion-browser.md
---

# Orion Browser

[Orion Browser](https://browser.kagi.com/) is a WebKit browser from Kagi for Apple devices. **Protocol Launcher** allows you to generate deep links to open URLs and search in Orion Browser for iOS.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module follows Orion Browser's official [FAQ](https://browser.kagi.com/faq.html), which documents the iOS `orion://open-url?url=url` and `orion://search?q=query` schemes.

### Open URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'orionBrowser' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'orionBrowser.'}}openUrl({
  url: 'https://browser.kagi.com/',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'orionBrowser' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'orionBrowser.'}}search({
  query: 'privacy browser',
})
```
