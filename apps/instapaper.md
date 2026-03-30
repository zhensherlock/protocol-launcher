---
url: /protocol-launcher/apps/instapaper.md
---

# Instapaper

[Instapaper](https://instapaper.com/) is a read-it-later service that allows you to save web pages and articles for later reading. **Protocol Launcher** allows you to generate deep links to add URLs to Instapaper using the x-callback-url standard.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Add URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'instapaper' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'instapaper.'}}add({
  url: 'https://example.com/article',
  xSource: 'MyReader',
  xSuccess: 'myapp://success',
})
```
