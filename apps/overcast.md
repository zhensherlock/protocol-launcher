---
url: /protocol-launcher/apps/overcast.md
---

# Overcast

[Overcast](https://overcast.fm/) is a popular podcast app for iOS and macOS. **Protocol Launcher** allows you to generate deep links to subscribe to podcasts and open Overcast.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'overcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'overcast.'}}open()
```

### Add Podcast Subscription

Subscribe to a podcast RSS feed in Overcast using x-callback-url standard.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'overcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'overcast.'}}add({
  url: 'https://example.com/podcast/rss',
})
```

### Add Podcast Subscription with Callback

Subscribe with a callback URL after successfully subscribing.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'overcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'overcast.'}}add({
  url: 'https://example.com/podcast/rss',
  xSuccess: 'myapp://success',
})
```
