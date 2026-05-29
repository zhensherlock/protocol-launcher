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

[Spotify](https://open.spotify.com/) 是音乐、播客和有声读物串流服务。**Protocol Launcher** 可以生成用于打开 Spotify 内容的官方 Spotify 链接。

## 使用

有两种方式可以使用这个库：

- 按需从子路径导入，支持 Tree Shaking，保持打包体积较小。
- 从根包全量导入，适合快速脚本或演示，但会包含所有应用模块。

生产构建建议选择按需导入；全量导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

Spotify 官方 Content Linking 文档覆盖 Spotify URI（`spotify:...`）、`https://spotify.link/content_linking` 链接，以及来自 `external_urls.spotify` 的 fallback web link。这些 helper 只对应这些官方写法，不包含未公开文档说明的播放或搜索命令。

### Open URI

打开官方 Spotify URI。Spotify 文档说明这些 URI 是 Spotify API 返回的值，例如 `spotify:album:4oktVvRuO1In9B7Hz0xm0a`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUri' : 'spotify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spotify.'}}openUri({
  uri: 'spotify:album:4oktVvRuO1In9B7Hz0xm0a',
})
```
<div class="flex justify-center">
  <VPLink :href="openUri(openUriParams)" target="_self">
    在 Spotify 中打开 URI
  </VPLink>
</div>

### Open iOS Content Link

使用官方的 `~campaign` 和 `$canonical_url` 参数生成 Spotify iOS content linking URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openIosContentLink' : 'spotify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spotify.'}}openIosContentLink({
  campaign: 'com.app',
  canonicalUrl: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
})
```
<div class="flex justify-center">
  <VPLink :href="openIosContentLink(openIosContentLinkParams)" target="_self">
    打开 iOS Content Link
  </VPLink>
</div>

### Open Android Content Link

使用官方的 `~campaign`、`$deeplink_path` 和 `$fallback_url` 参数生成 Spotify Android content linking URL。

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
    打开 Android Content Link
  </VPLink>
</div>

### Open Web Link

打开来自 `external_urls.spotify` 的 Spotify fallback web link。提供 `utmCampaign` 时，helper 会序列化 Spotify 官方的 `utm_campaign` 归因参数，并保留已有 query 参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebLink' : 'spotify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'spotify.'}}openWebLink({
  url: 'https://open.spotify.com/track/55fmthmn3rgnk9Wyx7G5dU',
  utmCampaign: 'com.app',
})
```
<div class="flex justify-center">
  <VPLink :href="openWebLink(openWebLinkParams)" target="_self">
    打开 Web Link
  </VPLink>
</div>

## 官方文档

- [Spotify iOS Content Linking](https://developer.spotify.com/documentation/ios/tutorials/content-linking)
- [Spotify Android Content Linking](https://developer.spotify.com/documentation/android/tutorials/content-linking)
- [Spotify URIs and IDs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
