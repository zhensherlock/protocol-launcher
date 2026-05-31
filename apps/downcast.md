---
url: /protocol-launcher/apps/downcast.md
---

# Downcast

[Downcast](https://www.downcastapp.com/) is a podcast app for iOS, Mac, Apple Watch, and CarPlay. **Protocol Launcher** allows you to generate official URL scheme links to import podcast feed subscriptions in Downcast.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Downcast's official knowledge base documents `itpc://`, `podcast://`, `feed://`, and `downcast://` as supported podcast feed URL schemes. When one of those URLs is opened, Downcast attempts to import a subscription for the podcast at that URL.

The `subscribe()` helper expects a complete URL that already uses one of those documented schemes. The `subscribeFeedUrl()` helper returns the exact documented Chrome RSS Subscription Extension template: `downcast://feed-url=%s`.

### Downcast Scheme

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'downcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'downcast.'}}open()
```

### Subscribe with a Feed Scheme

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribe' : 'downcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'downcast.'}}subscribe({
  url: 'itpc://example.com/podcast/rss',
})
```

### Chrome RSS Extension Template

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribeFeedUrl' : 'downcast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'downcast.'}}subscribeFeedUrl()
```

```ts
subscribeFeedUrl()
// => 'downcast://feed-url=%s'
```

## Official Documentation

* [Downcast URL Schemes & Opening Feed URLs](https://support.downcast.fm/article/efmhyEOyOj-url-schemes-opening-feed-ur-ls-mac)
