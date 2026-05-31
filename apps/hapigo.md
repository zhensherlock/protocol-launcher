---
url: /protocol-launcher/apps/hapigo.md
---

# HapiGo

[HapiGo](https://www.hapigo.com/) is a macOS launcher for quickly opening apps and files. **Protocol Launcher** allows you to generate HapiGo URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

HapiGo's official URL scheme is `hapigo://open?extensionID={id}&query={query}`. The documentation defines `query` as the keyword and `extensionID` as the extension id. It currently exposes four built-in extension IDs: `APP`, `FILE`, `CLIPBOARD`, and `TRANSLATE`. This module only provides helpers for those documented IDs.

When HapiGo is in mixed search mode, HapiGo documents that `APP` and `FILE` have the same effect and both send text to the main search.

### Search App

Send text to HapiGo app search.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchApp' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}searchApp({
  query: 'hapigo',
})
```

### Search File

Send text to HapiGo file search.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchFile' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}searchFile({
  query: 'pdf',
})
```

### Search Clipboard

Send text to HapiGo clipboard search.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchClipboard' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}searchClipboard({
  query: 'request',
})
```

### Translate

Send text to HapiGo Translate.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'translate' : 'hapigo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hapigo.'}}translate({
  query: 'app',
})
```

## Generated URLs

```ts
searchApp({ query: 'hapigo' })
// => 'hapigo://open?extensionID=APP&query=hapigo'

searchFile({ query: 'pdf' })
// => 'hapigo://open?extensionID=FILE&query=pdf'

searchClipboard({ query: 'request' })
// => 'hapigo://open?extensionID=CLIPBOARD&query=request'

translate({ query: 'app' })
// => 'hapigo://open?extensionID=TRANSLATE&query=app'
```

## Official Documentation

* [HapiGo API & PopClip plugin](https://docs-cn.hapigo.com/adv/urlscheme)
