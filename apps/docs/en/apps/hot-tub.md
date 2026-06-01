---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  addSource,
  addSourceRedirect,
  handoffFavorite,
  handoffOpen,
  handoffProfile,
  handoffSearch,
  message,
  notification,
  openProfile,
  openWebView,
  play,
  search,
} from 'protocol-launcher/hot-tub';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addSourceParams,
  addSourceRedirectParams,
  handoffFavoriteParams,
  handoffOpenParams,
  handoffProfileParams,
  handoffSearchParams,
  messageParams,
  notificationParams,
  openProfileParams,
  openWebViewParams,
  playUrlParams,
  playVideoParams,
  searchParams,
} from '../../.vitepress/constants/hot-tub';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/hot-tub' : 'protocol-launcher');
</script>

# Hot Tub

[Hot Tub](https://hottubapp.io/) is a video app for adding sources and opening videos. **Protocol Launcher** allows you to generate Hot Tub URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

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

<div class="flex justify-center">
  <VPLink :href="addSource(addSourceParams)" target="_self">
    Add Source
  </VPLink>
</div>

### Add Source Redirect

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addSourceRedirect' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}addSourceRedirect({
  domain: 'api.myvideosite.com',
})
```

<div class="flex justify-center">
  <VPLink :href="addSourceRedirect(addSourceRedirectParams)" target="_blank">
    Open Add Source Redirect
  </VPLink>
</div>

### Open Web Page

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebView' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}openWebView({
  url: 'https://help.example.com',
})
```

<div class="flex justify-center">
  <VPLink :href="openWebView(openWebViewParams)" target="_self">
    Open Web Page
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}search({
  q: 'funny cats',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search
  </VPLink>
</div>

### Open Uploader Profile

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProfile' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}openProfile({
  uploader: 'yanks',
})
```

<div class="flex justify-center">
  <VPLink :href="openProfile(openProfileParams)" target="_self">
    Open Uploader Profile
  </VPLink>
</div>

### Handoff Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'handoffSearch' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}handoffSearch({
  baseUrl: 'https://hottubapp.io',
  q: 'nature documentaries',
})
```

<div class="flex justify-center">
  <VPLink :href="handoffSearch(handoffSearchParams)" target="_blank">
    Open Search Handoff
  </VPLink>
</div>

### Handoff Profile

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'handoffProfile' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}handoffProfile({
  baseUrl: 'https://hottubapp.io',
  uploader: 'yanks',
})
```

<div class="flex justify-center">
  <VPLink :href="handoffProfile(handoffProfileParams)" target="_blank">
    Open Profile Handoff
  </VPLink>
</div>

### Handoff Generic Page

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'handoffOpen' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}handoffOpen({
  baseUrl: 'https://hottubapp.io',
  url: 'https://example.com/watch/12345',
})
```

<div class="flex justify-center">
  <VPLink :href="handoffOpen(handoffOpenParams)" target="_blank">
    Open Page Handoff
  </VPLink>
</div>

### Handoff Favorite

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'handoffFavorite' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}handoffFavorite({
  baseUrl: 'https://hottubapp.io',
  url: 'https://example.com/watch/12345',
})
```

<div class="flex justify-center">
  <VPLink :href="handoffFavorite(handoffFavoriteParams)" target="_blank">
    Open Favorite Handoff
  </VPLink>
</div>

### Play Video

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}play({
  video: 'https://www.youtube.com/watch?v=y0sF5xhGreA',
})
```

<div class="flex justify-center">
  <VPLink :href="play(playVideoParams)" target="_self">
    Play Video
  </VPLink>
</div>

### Play Web Video

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}play({
  url: 'https://www.youtube.com/watch?v=y0sF5xhGreA',
})
```

<div class="flex justify-center">
  <VPLink :href="play(playUrlParams)" target="_self">
    Play Web Video
  </VPLink>
</div>

### Notification

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'notification' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}notification({
  type: 'success',
  title: 'Success',
  message: 'Video added to playlist!',
})
```

<div class="flex justify-center">
  <VPLink :href="notification(notificationParams)" target="_self">
    Show Notification
  </VPLink>
</div>

### Debug Message

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'message' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}message({
  content: 'Configuration loaded: API v2.1, 15 channels active',
})
```

<div class="flex justify-center">
  <VPLink :href="message(messageParams)" target="_self">
    Show Debug Message
  </VPLink>
</div>

## Official Documentation

- [Hot Tub URL Schemes](https://docs.hottubapp.io/developers/url-schemes/)
