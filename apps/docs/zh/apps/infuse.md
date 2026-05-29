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

[Infuse](https://firecore.com/infuse) 是一款面向 Apple 设备的视频播放器。**Protocol Launcher** 可以生成用于在 Infuse 中播放视频、保存链接、下载和打开媒体库条目的 URL scheme 链接。

## 用法

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

Infuse x-callback URL 使用 `infuse://x-callback-url/<action>`。Firecore 官方文档列出了 `play` 和 `save` 动作，支持重复的 `url` 条目、可选的 `filename` 和 `sub` 条目，以及可选的 `x-success` / `x-error` 回调。这些 helper 使用 `xSuccess` 和 `xError` 选项名，并序列化为官方 query key。媒体库链接使用带 TMDB ID 数字的 `infuse://movie/...` 和 `infuse://series/...`。

### 播放

将一个或多个视频作为临时播放列表播放。

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
    在 Infuse 中播放
  </VPLink>
</div>

### 保存

保存一个或多个视频链接，之后可再播放。Firecore 官方文档将 `download` 定义为 `0` 表示仅保存链接，`1` 表示保存并下载。

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
    保存到 Infuse
  </VPLink>
</div>

### 打开电影

通过 TMDB movie ID 打开 Infuse 媒体库中的电影条目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMovie' : 'infuse' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'infuse.'}}openMovie({
  tmdbId: 12345,
})
```
<div class="flex justify-center">
  <VPLink :href="openMovie(openMovieParams)" target="_self">
    在 Infuse 中打开电影
  </VPLink>
</div>

### 打开剧集

通过 TMDB series ID 打开 Infuse 媒体库中的 TV series 条目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSeries' : 'infuse' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'infuse.'}}openSeries({
  tmdbId: 12345,
})
```
<div class="flex justify-center">
  <VPLink :href="openSeries(openSeriesParams)" target="_self">
    在 Infuse 中打开剧集
  </VPLink>
</div>

### 打开季

通过 TMDB series ID 和 season number 打开 Infuse 媒体库中的 TV series season。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSeason' : 'infuse' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'infuse.'}}openSeason({
  tmdbId: 12345,
  seasonNumber: 1,
})
```
<div class="flex justify-center">
  <VPLink :href="openSeason(openSeasonParams)" target="_self">
    在 Infuse 中打开季
  </VPLink>
</div>

### 打开单集

通过 TMDB series ID、season number 和 episode number 打开 Infuse 媒体库中的 TV series episode。

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
    在 Infuse 中打开单集
  </VPLink>
</div>

## 官方文档

- [Firecore API for Third-Party Apps & Services](https://support.firecore.com/hc/en-us/articles/215090997-API-for-Third-Party-Apps-Services)
