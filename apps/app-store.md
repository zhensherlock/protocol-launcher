---
url: /protocol-launcher/apps/app-store.md
---

# App Store

[App Store](https://www.apple.com/app-store/) is a digital distribution platform developed and maintained by Apple Inc. for mobile apps on its iOS, iPadOS, and watchOS operating systems. **Protocol Launcher** allows you to generate deep links to open and configure resources in App Store.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App Store

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}open()
```

### Open Specific Page

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}open({
  path: 'account/subscriptions',
})
```

### Search Apps

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}search({
  query: 'things',
})
```

### Open App Page

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'app' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}app({
  id: '836500024',
})
```

### Open App Page with Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'app' : 'appStore' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appStore.'}}app({
  id: '836500024',
  action: 'write-review',
})
```
