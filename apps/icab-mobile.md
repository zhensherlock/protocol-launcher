---
url: /protocol-launcher/apps/icab-mobile.md
---

# iCab Mobile

[iCab Mobile](http://www.icab-mobile.de/index.html) is a web browser for the iPhone, iPad and Apple Watch. **Protocol Launcher** allows you to generate deep links to open URLs, add bookmarks, and search in iCab Mobile.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Browser

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}open()
```

### Open URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}openUrl({
  url: 'https://www.example.com/',
})
```

### Add Bookmark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}addBookmark({
  url: 'https://www.example.com/',
  title: 'Example',
})
```

### Add Bookmark with Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}addBookmark({
  url: 'https://www.example.com/',
  title: 'Example',
  folder: 'Favorites',
})
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}search({
  query: 'hello world',
})
```
