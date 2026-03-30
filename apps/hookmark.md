---
url: /protocol-launcher/apps/hookmark.md
---

# Hookmark

[Hookmark](https://hookproductivity.com/) is a macOS app that lets you create contextual bookmarks and bidirectional links between files, emails, web pages, and more. **Protocol Launcher** allows you to generate deep links to open resources in Hookmark.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Hookmark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}open()
```

### Open Address Book

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAddressBook' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openAddressBook()
```

### Open Email

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEmail' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openEmail({
  id: '<CABc123xyz@mail.gmail.com>',
})
```

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openFile({
  path: '/Applications',
  name: 'Applications',
})
```

### Open Notes

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotes' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openNotes()
```

### Open Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openSearch({
  query: 'project',
})
```

### Open Spotify

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSpotify' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openSpotify()
```
