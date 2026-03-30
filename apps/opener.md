---
url: /protocol-launcher/apps/opener.md
---

# Opener

[Opener](https://www.opener.link/) is an iOS app that allows you to open links from the web in other apps instead. **Protocol Launcher** allows you to generate deep links to show options and store product details in Opener.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Show Options

Launch Opener and show the available options to open a given URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOptions' : 'opener' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opener.'}}showOptions({
  url: 'https://twitter.com/piercedavid/status/594646584232542208',
})
```

### Show Options (Disable Auto Open)

Launch Opener and show the available options without automatic opening.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showOptions' : 'opener' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opener.'}}showOptions({
  url: 'https://example.com',
  allowAutoOpen: false,
})
```

### Show Store Product Details

Show the details of an iTunes product within Opener in an SKStoreProductViewController or an iOS store app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showStoreProductDetails' : 'opener' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'opener.'}}showStoreProductDetails({
  id: '989565871',
})
```
