---
url: /protocol-launcher/apps/reeder.md
---

# Reeder

[Reeder](https://reeder.app/) is a feed reader app. **Protocol Launcher** allows you to generate Reeder URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Reeder's official help documents only two URL scheme forms: `reed://` to open Reeder, and `reed://feed-url.com` to open Reeder and automatically search for a feed at the specified URL. This module exposes only those documented forms.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'reeder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'reeder.'}}open()
```

### Open Feed

Open Reeder and automatically search for a feed at the specified URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFeed' : 'reeder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'reeder.'}}openFeed({
  url: 'feed-url.com',
})
```

## Generated URLs

```ts
open()
// => 'reed://'

openFeed({
  url: 'feed-url.com',
})
// => 'reed://feed-url.com'
```

## Official Documentation

* [Reeder Help - URL Scheme](https://reederapp.com/help/)
