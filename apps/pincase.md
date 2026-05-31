---
url: /protocol-launcher/apps/pincase.md
---

# Pincase

[Pincase](https://pincaseapp.com/) is a Pinboard.in client for iOS. **Protocol Launcher** allows you to generate Pincase x-callback-url links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Pincase's official API page documents only these URL scheme actions:

* `pincaseapp://x-callback-url/add`
* `pincaseapp://x-callback-url/open`

For `add`, the official parameter table lists `url`, `title`, `private`, `toread`, `noui`, `x-success`, `x-error`, and `x-cancel`. The same official page's add-bookmark example uses `later=yes`; `addBookmark()` serializes either `toread` or `later` only when you pass that key and does not infer one from the other.

For `open`, Pincase documents `mode`, `tag`, and `username`. It also says `x-source`, `x-success`, `x-error`, and `x-cancel` will not work for this action, so the open helpers do not accept callback options. Official mode values are `menu`, `personal_unread`, `personal_recent`, `personal_tag`, `public_popular`, `public_recent`, `public_japanese`, `public_wikipedia`, `public_fandom`, `public_favorite_stream`, `public_tag`, and `public_username`. The official parameter row says `tag` is used with `mode=personal_tag` or `mode=public_tag`; `openTag()` is limited to those two values.

### Add Bookmark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}addBookmark({
  url: 'http://pincaseapp.com/',
  title: 'Pincase - A simple, elegant and powerful Pinboard.in client for iOS',
  noui: 'yes',
  later: 'yes',
})
```

### Add Bookmark with Callbacks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}addBookmark({
  url: 'https://www.example.com/article?ref=url scheme',
  title: 'Example Article',
  private: 'no',
  toread: 'no',
  noui: 'no',
  xSuccess: 'myapp://success',
  xError: 'myapp://error',
  xCancel: 'myapp://cancel',
})
```

### Open Public Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}open({
  mode: 'public_tag',
  tag: 'iOS',
})
```

### Open Unread

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUnread' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}openUnread()
```

### Open Recent

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRecent' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}openRecent()
```

### Open Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'pincase' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pincase.'}}openTag({
  mode: 'personal_tag',
  tag: 'reading list',
})
```

## Generated URLs

```ts
addBookmark({
  url: 'http://pincaseapp.com/',
  title: 'Pincase - A simple, elegant and powerful Pinboard.in client for iOS',
  noui: 'yes',
  later: 'yes',
})
// => 'pincaseapp://x-callback-url/add?url=http%3A%2F%2Fpincaseapp.com%2F&title=Pincase%20-%20A%20simple%2C%20elegant%20and%20powerful%20Pinboard.in%20client%20for%20iOS&noui=yes&later=yes'

addBookmark({
  url: 'https://www.example.com/article?ref=url scheme',
  title: 'Example Article',
  private: 'no',
  toread: 'no',
  noui: 'no',
  xSuccess: 'myapp://success',
  xError: 'myapp://error',
  xCancel: 'myapp://cancel',
})
// => 'pincaseapp://x-callback-url/add?url=https%3A%2F%2Fwww.example.com%2Farticle%3Fref%3Durl%20scheme&title=Example%20Article&private=no&toread=no&noui=no&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror&x-cancel=myapp%3A%2F%2Fcancel'

open({ mode: 'public_tag', tag: 'iOS' })
// => 'pincaseapp://x-callback-url/open?mode=public_tag&tag=iOS'

openUnread()
// => 'pincaseapp://x-callback-url/open?mode=personal_unread'

openRecent()
// => 'pincaseapp://x-callback-url/open?mode=personal_recent'

openTag({ mode: 'personal_tag', tag: 'reading list' })
// => 'pincaseapp://x-callback-url/open?mode=personal_tag&tag=reading%20list'
```

## Official Documentation

* [Pincase URL Schemes](https://pincaseapp.com/api.html)
