---
url: /protocol-launcher/apps/hot-tub.md
---

# Hot Tub

[Hot Tub](https://hottubapp.io/) is a video app for adding sources and opening videos. **Protocol Launcher** allows you to generate Hot Tub URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only exposes the custom URL scheme actions listed in Hot Tub's official URL Schemes documentation: `source`, `webview`, `search`, `profile`, `play`, `notification`, and `message`.

The `play` helper accepts either `video` for API-based videos or `url` for web-based video players. For profiles, Hot Tub documents `uploader` and accepts `creator` as an alias on the custom scheme.

The same official page also documents `https://hottubapp.io/add/{domain}` for source redirects and `https://<host>/app?...` for universal-link handoff. Handoff helpers require `baseUrl` because Hot Tub says the host must serve `/app` and have the associated domain configured.

### Add Source

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addSource' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}addSource({
  url: 'https://api.myvideosite.com',
})
```

### Add Source Redirect

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addSourceRedirect' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}addSourceRedirect({
  domain: 'api.myvideosite.com',
})
```

### Open Web Page

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebView' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}openWebView({
  url: 'https://help.example.com',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}search({
  q: 'funny cats',
})
```

### Open Uploader Profile

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProfile' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}openProfile({
  uploader: 'yanks',
})
```

### Handoff Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'handoffSearch' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}handoffSearch({
  baseUrl: 'https://hottubapp.io',
  q: 'nature documentaries',
})
```

### Handoff Profile

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'handoffProfile' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}handoffProfile({
  baseUrl: 'https://hottubapp.io',
  uploader: 'yanks',
})
```

### Handoff Generic Page

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'handoffOpen' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}handoffOpen({
  baseUrl: 'https://hottubapp.io',
  url: 'https://example.com/watch/12345',
})
```

### Handoff Favorite

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'handoffFavorite' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}handoffFavorite({
  baseUrl: 'https://hottubapp.io',
  url: 'https://example.com/watch/12345',
})
```

### Play Video

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}play({
  video: 'https://www.youtube.com/watch?v=y0sF5xhGreA',
})
```

### Play Web Video

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}play({
  url: 'https://www.youtube.com/watch?v=y0sF5xhGreA',
})
```

### Notification

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'notification' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}notification({
  type: 'success',
  title: 'Success',
  message: 'Video added to playlist!',
})
```

### Debug Message

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'message' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}message({
  content: 'Configuration loaded: API v2.1, 15 channels active',
})
```

## Official Documentation

* [Hot Tub URL Schemes](https://docs.hottubapp.io/developers/url-schemes/)
