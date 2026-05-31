---
url: /protocol-launcher/apps/buchen.md
---

# Buchen

[Buchen](https://www.borovia.co/) is a bookmark manager. **Protocol Launcher** allows you to generate Buchen URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Buchen's official support page documents exactly these URL scheme forms:

* `buchen://add-tag?name=<tag name>`
* `buchen://add?name=<bookmark name>&url=<url>&browser=<browser ?>`
* `buchen://go-bookmarks`
* `buchen://go-tags`
* `buchen://go-folders`

The official page says any parameter block containing `?` is optional, and any URL passed as a value must be URL encoded. `addBookmark()` percent-encodes the bookmark URL as a query value. The optional `browser` value is limited to the official names: `safari`, `edge`, `icab mobile`, `opera`, `brave`, `chrome`, `firefox`, `firefox focus`, `duckduckgo`, `quiche`, and `jayson`.

Buchen documents `safari` as another name for the default browser, and says browser values are referenced everywhere with these names, including Buchen JSON export files.

### Add Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTag' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}addTag({
  name: 'reading list',
})
```

### Add Bookmark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}addBookmark({
  name: 'Protocol Launcher',
  url: 'https://www.example.com/',
})
```

### Add Bookmark with Browser

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}addBookmark({
  name: 'Protocol Launcher',
  url: 'https://www.example.com/search?q=url scheme',
  browser: 'firefox focus',
})
```

### Go to Bookmarks

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'goBookmarks' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}goBookmarks()
```

### Go to Tags

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'goTags' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}goTags()
```

### Go to Folders

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'goFolders' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}goFolders()
```

## Generated URLs

```ts
addTag({
  name: 'reading list',
})
// => 'buchen://add-tag?name=reading%20list'

addBookmark({
  name: 'Protocol Launcher',
  url: 'https://www.example.com/',
})
// => 'buchen://add?name=Protocol%20Launcher&url=https%3A%2F%2Fwww.example.com%2F'

addBookmark({
  name: 'Protocol Launcher',
  url: 'https://www.example.com/search?q=url scheme',
  browser: 'firefox focus',
})
// => 'buchen://add?name=Protocol%20Launcher&url=https%3A%2F%2Fwww.example.com%2Fsearch%3Fq%3Durl%20scheme&browser=firefox%20focus'

goBookmarks()
// => 'buchen://go-bookmarks'

goTags()
// => 'buchen://go-tags'

goFolders()
// => 'buchen://go-folders'
```

## Official Documentation

* [Buchen Supported URL Schemes](https://www.borovia.co/buchen.support.html)
