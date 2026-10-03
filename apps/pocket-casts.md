---
url: /protocol-launcher/apps/pocket-casts.md
---

# Pocket Casts

[Pocket Casts](https://pocketcasts.com/) is a podcast app for listening to and following shows. **Protocol Launcher** allows you to generate Pocket Casts iOS URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}open()
```

### Play Paused Episode

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}play()
```

### Pause Playing Episode

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pause' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}pause()
```

### Follow Podcast by Feed URL

Pocket Casts expects the feed URL without a leading `http://`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribe' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}subscribe({
  feedUrlWithoutHttp: 'example.com/podcast/rss',
})
```

### Open Feed in Web Player

Open a podcast from its RSS feed URL in Pocket Casts Web. The complete feed URL is percent-encoded, including any query parameters. The link opens the podcast page; the user chooses Follow there.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFeed' : 'pocketCasts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pocketCasts.'}}openFeed({
  feedUrl: 'https://example.com/feed.xml?format=rss'
})
```

## Official Documentation

* [URL scheme documentation](https://support.pocketcasts.com/knowledge-base/third-party-integration/)
