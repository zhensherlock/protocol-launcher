---
url: /protocol-launcher/apps/spotify.md
---

# Spotify

[Spotify](https://open.spotify.com/) is a music, podcast, and audiobook streaming service. **Protocol Launcher** allows you to generate official Spotify links for opening Spotify content.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

Spotify's official content linking docs cover Spotify URIs (`spotify:...`), `https://spotify.link/content_linking` links, and fallback web links from `external_urls.spotify`. These helpers mirror those documented forms and do not include undocumented playback or search commands.

### Open URI

Open an official Spotify URI. Spotify documents these as values returned by Spotify APIs, for example `spotify:album:4oktVvRuO1In9B7Hz0xm0a`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUri' : 'spotify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spotify.'}}openUri({
  uri: 'spotify:album:4oktVvRuO1In9B7Hz0xm0a',
})
```

### Open iOS Content Link

Generate Spotify's iOS content linking URL with the official `~campaign` and `$canonical_url` parameters.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openIosContentLink' : 'spotify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spotify.'}}openIosContentLink({
  campaign: 'com.app',
  canonicalUrl: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
})
```

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

### Open Web Link

Open a Spotify fallback web link from `external_urls.spotify`. When `utmCampaign` is provided, the helper serializes Spotify's official `utm_campaign` attribution parameter and keeps existing query parameters.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebLink' : 'spotify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spotify.'}}openWebLink({
  url: 'https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU',
  utmCampaign: 'com.app',
})
```

## Official Documentation

* [Spotify iOS Content Linking](https://developer.spotify.com/documentation/ios/tutorials/content-linking)
* [Spotify Android Content Linking](https://developer.spotify.com/documentation/android/tutorials/content-linking)
* [Spotify URIs and IDs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
