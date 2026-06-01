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

[Hot Tub](https://hottubapp.io/) 是一款用于添加来源和打开视频的视频应用。**Protocol Launcher** 允许你生成 Hot Tub URL scheme 链接。

## 使用

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

此模块只暴露 Hot Tub 官方 URL Schemes 文档列出的 custom URL scheme 动作：`source`、`webview`、`search`、`profile`、`play`、`notification` 和 `message`。

`play` helper 接收 `video` 或 `url` 二选一：`video` 用于基于 API 的视频，`url` 用于网页播放器。对于 profile，Hot Tub 文档使用 `uploader`，同时说明 custom scheme 接受 `creator` 作为别名。

同一篇官方文档还记录了 `https://hottubapp.io/add/{domain}` source redirect 和 `https://<host>/app?...` universal-link handoff。Handoff helpers 要求传入 `baseUrl`，因为 Hot Tub 文档说明这个 host 必须提供 `/app` 并配置 associated domain。

### 添加 Source

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addSource' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}addSource({
  url: 'https://api.myvideosite.com',
})
```

<div class="flex justify-center">
  <VPLink :href="addSource(addSourceParams)" target="_self">
    添加 Source
  </VPLink>
</div>

### 添加 Source Redirect

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addSourceRedirect' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}addSourceRedirect({
  domain: 'api.myvideosite.com',
})
```

<div class="flex justify-center">
  <VPLink :href="addSourceRedirect(addSourceRedirectParams)" target="_blank">
    打开 Source Redirect
  </VPLink>
</div>

### 打开网页

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebView' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}openWebView({
  url: 'https://help.example.com',
})
```

<div class="flex justify-center">
  <VPLink :href="openWebView(openWebViewParams)" target="_self">
    打开网页
  </VPLink>
</div>

### 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}search({
  q: 'funny cats',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    搜索
  </VPLink>
</div>

### 打开 Uploader Profile

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProfile' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}openProfile({
  uploader: 'yanks',
})
```

<div class="flex justify-center">
  <VPLink :href="openProfile(openProfileParams)" target="_self">
    打开 Uploader Profile
  </VPLink>
</div>

### Handoff 搜索

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'handoffSearch' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}handoffSearch({
  baseUrl: 'https://hottubapp.io',
  q: 'nature documentaries',
})
```

<div class="flex justify-center">
  <VPLink :href="handoffSearch(handoffSearchParams)" target="_blank">
    打开搜索 Handoff
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
    打开 Profile Handoff
  </VPLink>
</div>

### Handoff 通用页面

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'handoffOpen' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}handoffOpen({
  baseUrl: 'https://hottubapp.io',
  url: 'https://example.com/watch/12345',
})
```

<div class="flex justify-center">
  <VPLink :href="handoffOpen(handoffOpenParams)" target="_blank">
    打开页面 Handoff
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
    打开 Favorite Handoff
  </VPLink>
</div>

### 播放视频

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}play({
  video: 'https://www.youtube.com/watch?v=y0sF5xhGreA',
})
```

<div class="flex justify-center">
  <VPLink :href="play(playVideoParams)" target="_self">
    播放视频
  </VPLink>
</div>

### 播放网页视频

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'play' : 'hotTub' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hotTub.'}}play({
  url: 'https://www.youtube.com/watch?v=y0sF5xhGreA',
})
```

<div class="flex justify-center">
  <VPLink :href="play(playUrlParams)" target="_self">
    播放网页视频
  </VPLink>
</div>

### 通知

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
    显示通知
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
    显示 Debug Message
  </VPLink>
</div>

## 官方文档

- [Hot Tub URL Schemes](https://docs.hottubapp.io/developers/url-schemes/)
