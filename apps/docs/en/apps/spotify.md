---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openUri, openIosContentLink, openAndroidContentLink, openWebLink } from 'protocol-launcher/spotify';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openUriParams,
  openIosContentLinkParams,
  openAndroidContentLinkParams,
  openWebLinkParams,
} from '../../.vitepress/constants/spotify';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/spotify' : 'protocol-launcher');
</script>

# Spotify

[Spotify](https://open.spotify.com/) is a music, podcast, and audiobook streaming service. **Protocol Launcher** allows you to generate official Spotify links for opening Spotify content.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

Spotify's official content linking docs cover Spotify URIs (`spotify:...`), `https://spotify.link/content_linking` links, and fallback web links from `external_urls.spotify`. These helpers mirror those documented forms and do not include undocumented playback or search commands.

### Open URI

Open an official Spotify URI. Spotify documents these as values returned by Spotify APIs, for example `spotify:album:4oktVvRuO1In9B7Hz0xm0a`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUri' : 'spotify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spotify.'}}openUri({
  uri: 'spotify:album:4oktVvRuO1In9B7Hz0xm0a',
})
```
<div class="flex justify-center">
  <VPLink :href="openUri(openUriParams)" target="_self">
    Open URI in Spotify
  </VPLink>
</div>

### Open iOS Content Link

Generate Spotify's iOS content linking URL with the official `~campaign` and `$canonical_url` parameters.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openIosContentLink' : 'spotify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spotify.'}}openIosContentLink({
  campaign: 'com.app',
  canonicalUrl: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
})
```
<div class="flex justify-center">
  <VPLink :href="openIosContentLink(openIosContentLinkParams)" target="_self">
    Open iOS Content Link
  </VPLink>
</div>

### Open Android Content Link

Generate Spotify's Android content linking URL with the official `~campaign`, `$deeplink_path`, and `$fallback_url` parameters.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAndroidContentLink' : 'spotify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spotify.'}}openAndroidContentLink({
  campaign: 'com.app',
  deeplinkPath: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
  fallbackUrl: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
})
```
<div class="flex justify-center">
  <VPLink :href="openAndroidContentLink(openAndroidContentLinkParams)" target="_self">
    Open Android Content Link
  </VPLink>
</div>

### Open Web Link

Open a Spotify fallback web link from `external_urls.spotify`. When `utmCampaign` is provided, the helper serializes Spotify's official `utm_campaign` attribution parameter and keeps existing query parameters.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebLink' : 'spotify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spotify.'}}openWebLink({
  url: 'https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU',
  utmCampaign: 'com.app',
})
```
<div class="flex justify-center">
  <VPLink :href="openWebLink(openWebLinkParams)" target="_self">
    Open Web Link
  </VPLink>
</div>

## Official Documentation

- [Spotify iOS Content Linking](https://developer.spotify.com/documentation/ios/tutorials/content-linking)
- [Spotify Android Content Linking](https://developer.spotify.com/documentation/android/tutorials/content-linking)
- [Spotify URIs and IDs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
