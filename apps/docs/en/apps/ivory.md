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

[Ivory](https://tapbots.com/ivory/) is a Mastodon client by Tapbots. **Protocol Launcher** allows you to generate Ivory URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Tapbots documents `acct` as the account selector. It can be a fully qualified `@user@host`, a short `@user`, or blank for the currently active Ivory account. When `acct` is omitted, Protocol Launcher generates URLs such as `ivory:///home`.

This module only exposes the official Ivory URL shapes: tab URLs, `openURL`, `status`, `user_profile`, and `post`. `callbackUrl` is only available for the documented modal actions and serializes to the official `callback_url` query parameter.

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

### Open URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'ivory' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openUrl({
  acct: '@alice@mastodon.social',
  url: 'https://mastodon.social/@tapbots',
  callbackUrl: 'launcher://done',
})
```

### Open Status

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStatus' : 'ivory' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivory.'}}openStatus({
  acct: '@alice@mastodon.social',
  statusId: '110123456789',
})
```

### Open Profile

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

## Generated URLs

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

## Official Documentation

- [Ivory URL Schemes](https://tapbots.com/support/ivory/tips/urlschemes)
