---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ivory' : 'protocol-launcher');
</script>

# Ivory

[Ivory](https://tapbots.com/ivory/) 是 Tapbots 开发的 Mastodon 客户端。**Protocol Launcher** 允许你生成 Ivory URL scheme 链接。

## 使用

有两种方式使用此库：

- On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
- Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Tapbots 将 `acct` 记录为账户选择器。它可以是完整的 `@user@host`、短格式 `@user`，也可以留空表示当前激活的 Ivory 账户。省略 `acct` 时，Protocol Launcher 会生成类似 `ivory:///home` 的 URL。

本模块只暴露 Ivory 官方列出的 URL 形态：tab URL、`openURL`、`status`、`user_profile` 和 `post`。`callbackUrl` 只用于官方记录的 modal action，并会序列化为官方 `callback_url` query 参数。

### Tabs

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHome, openTimeline, openMentions, openLists, openFavorites, openBookmarks, openStatistics, openProfileTab, openSearch' : 'ivory' }} } from '{{ importPath }}'

const homeUrl = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openHome()
const timelineUrl = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openTimeline({ acct: '@alice' })
const mentionsUrl = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openMentions({ acct: '@alice' })
const listsUrl = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openLists()
const favoritesUrl = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openFavorites()
const bookmarksUrl = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openBookmarks()
const statisticsUrl = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openStatistics()
const profileTabUrl = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openProfileTab({ acct: '@alice@mastodon.social' })
const searchUrl = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openSearch()
```

### 打开 URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'ivory' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openUrl({
  acct: '@alice@mastodon.social',
  url: 'https://mastodon.social/@tapbots',
  callbackUrl: 'launcher://done',
})
```

### 打开 Status

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStatus' : 'ivory' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openStatus({
  acct: '@alice@mastodon.social',
  statusId: '110123456789',
})
```

### 打开 Profile

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProfile' : 'ivory' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openProfile({
  acct: '@alice@mastodon.social',
  userAcct: '@tapbots@mastodon.social',
})
```

### Compose

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'compose' : 'ivory' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}compose({
  acct: '@alice',
  callbackUrl: 'launcher://done',
})
```

### Compose Text Path

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'composeText' : 'ivory' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}composeText({
  acct: '@alice',
  text: 'Hello Ivory',
})
```

### Compose Reply

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'composeReply' : 'ivory' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}composeReply({
  acct: '@alice',
  text: 'Hello Ivory',
  inReplyToStatusUrl: 'https://mastodon.social/@tapbots/110123456789',
})
```

## 生成的 URL

```ts
openHome()
// => 'ivory:///home'

openTimeline({ acct: '@alice' })
// => 'ivory://@alice/timeline'

openUrl({
  acct: '@alice@mastodon.social',
  url: 'https://mastodon.social/@tapbots',
  callbackUrl: 'launcher://done',
})
// => 'ivory://@alice@mastodon.social/openURL?url=https%3A%2F%2Fmastodon.social%2F%40tapbots&callback_url=launcher%3A%2F%2Fdone'

openStatus({
  acct: '@alice@mastodon.social',
  statusId: '110123456789',
})
// => 'ivory://@alice@mastodon.social/status/110123456789'

openProfile({
  acct: '@alice@mastodon.social',
  userAcct: '@tapbots@mastodon.social',
})
// => 'ivory://@alice@mastodon.social/user_profile/@tapbots@mastodon.social'

compose()
// => 'ivory:///post'

compose({
  acct: '@alice',
  callbackUrl: 'launcher://done',
})
// => 'ivory://@alice/post?callback_url=launcher%3A%2F%2Fdone'

composeText({
  acct: '@alice',
  text: 'Hello Ivory',
})
// => 'ivory://@alice/post/Hello%20Ivory'

composeReply({
  acct: '@alice',
  text: 'Hello Ivory',
  inReplyToStatusUrl: 'https://mastodon.social/@tapbots/110123456789',
})
// => 'ivory://@alice/post?text=Hello%20Ivory&in_reply_to_status_url=https%3A%2F%2Fmastodon.social%2F%40tapbots%2F110123456789'
```

## 官方文档

- [Ivory URL Schemes](https://tapbots.com/support/ivory/tips/urlschemes)
