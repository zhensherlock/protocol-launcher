---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { play, save, openMovie, openSeries, openSeason, openEpisode } from 'protocol-launcher/infuse';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  playParams,
  saveParams,
  openMovieParams,
  openSeriesParams,
  openSeasonParams,
  openEpisodeParams,
} from '../../.vitepress/constants/infuse';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/infuse' : 'protocol-launcher');
</script>

# Infuse

[Infuse](https://firecore.com/infuse) is a video player for Apple devices. **Protocol Launcher** allows you to generate Infuse URL scheme links for playing videos, saving links, downloading media, and opening library items.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

Infuse x-callback URLs use `infuse://x-callback-url/<action>`. Firecore documents `play` and `save` actions with repeated `url` entries, optional `filename` and `sub` entries, and optional `x-success` / `x-error` callbacks. These helpers use `xSuccess` and `xError` option names and serialize them to the official query keys. Library links use `infuse://movie/...` and `infuse://series/...` with TMDB ID numbers.

### Play

Play one or more videos as a temporary playlist.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'infuse' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'infuse.'}}play({
  url: [
    'https://files.firecore.com/infuse/sample-5s-360p.mp4',
    'https://files.firecore.com/infuse/mov_bbb.mp4',
  ],
  filename: ['Inception-2010.mp4', 'Mad-Men-S01-E01.mp4'],
  sub: [
    'https://files.firecore.com/infuse/example.srt',
    'https://files.firecore.com/infuse/example2.srt',
  ],
  xSuccess: 'some-app://success',
  xError: 'some-app://error',
})
```
<div class="flex justify-center">
  <VPLink :href="play(playParams)" target="_self">
    Play in Infuse
  </VPLink>
</div>

### Save

Save one or more video links for later playback. Firecore documents `download` as `0` for saving the link only or `1` for saving and downloading.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'save' : 'infuse' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'infuse.'}}save({
  url: [
    'https://files.firecore.com/infuse/sample-5s-360p.mp4',
    'https://files.firecore.com/infuse/mov_bbb.mp4',
  ],
  filename: ['Inception-2010.mp4', 'Mad-Men-S01-E01.mp4'],
  sub: [
    'https://files.firecore.com/infuse/example1.srt',
    'https://files.firecore.com/infuse/example2.srt',
  ],
  download: 0,
  xSuccess: 'some-app://success',
  xError: 'some-app://error',
})
```
<div class="flex justify-center">
  <VPLink :href="save(saveParams)" target="_self">
    Save in Infuse
  </VPLink>
</div>

### Open Movie

Open an Infuse movie library item by TMDB movie ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMovie' : 'infuse' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'infuse.'}}openMovie({
  tmdbId: 12345,
})
```
<div class="flex justify-center">
  <VPLink :href="openMovie(openMovieParams)" target="_self">
    Open Movie in Infuse
  </VPLink>
</div>

### Open Series

Open an Infuse TV series library item by TMDB series ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSeries' : 'infuse' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'infuse.'}}openSeries({
  tmdbId: 12345,
})
```
<div class="flex justify-center">
  <VPLink :href="openSeries(openSeriesParams)" target="_self">
    Open Series in Infuse
  </VPLink>
</div>

### Open Season

Open an Infuse TV series season by TMDB series ID and season number.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSeason' : 'infuse' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'infuse.'}}openSeason({
  tmdbId: 12345,
  seasonNumber: 1,
})
```
<div class="flex justify-center">
  <VPLink :href="openSeason(openSeasonParams)" target="_self">
    Open Season in Infuse
  </VPLink>
</div>

### Open Episode

Open an Infuse TV series episode by TMDB series ID, season number, and episode number.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEpisode' : 'infuse' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'infuse.'}}openEpisode({
  tmdbId: 12345,
  seasonNumber: 1,
  episodeNumber: 2,
})
```
<div class="flex justify-center">
  <VPLink :href="openEpisode(openEpisodeParams)" target="_self">
    Open Episode in Infuse
  </VPLink>
</div>

## Official Documentation

- [Firecore API for Third-Party Apps & Services](https://support.firecore.com/hc/en-us/articles/215090997-API-for-Third-Party-Apps-Services)
