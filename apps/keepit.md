---
url: /protocol-launcher/apps/keepit.md
---

# Keep It

[Keep It](https://reinventedsoftware.com/keepit/) is an app for organizing notes, files, web links, and lists. **Protocol Launcher** allows you to generate URLs to open Keep It items and lists, add content, and append text or attachments.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

This module only wraps the official Keep It URL Support surface: `keepit://link?item=...`, `keepit://link?list=...`, `keepit://x-callback-url/add?...`, and `keepit://x-callback-url/append?...`.

The `add` and `append` helpers URL-encode parameters and support the standard x-callback parameters mentioned by Keep It's documentation. For `tags`, Keep It's official examples keep the comma separator unescaped, so the generated URL does the same.

## URL Methods

### Open Item

Open a Keep It item by identifier.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openItem' : 'keepit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keepit.'}}openItem({
  item: 'C96F26E6-A566-457E-A448-5B0F527714DE',
})
```

### Open List

Open a Keep It list by identifier.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openList' : 'keepit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keepit.'}}openList({
  list: 'AllItems',
})
```

### Add Web Link

Add a web link to Keep It.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'keepit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keepit.'}}add({
  name: 'Apple Homepage',
  source: 'http://apple.com',
})
```

### Add Note

Add text as a Keep It note or text file.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'keepit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keepit.'}}add({
  text: 'The quick brown fox',
  list: 'AllItems',
})
```

### Append Text

Append text to a Keep It item.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'keepit' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keepit.'}}append({
  text: 'The quick brown fox',
  item: 'C96F26E6-A566-457E-A448-5B0F527714DE',
})
```

## Generated URLs

```ts
openItem(itemLinkParams)
// => 'keepit://link?item=C96F26E6-A566-457E-A448-5B0F527714DE'

openList(listLinkParams)
// => 'keepit://link?list=AllItems'

add(addWebLinkParams)
// => 'keepit://x-callback-url/add?name=Apple%20Homepage&source=http%3A%2F%2Fapple.com'

add(addNoteParams)
// => 'keepit://x-callback-url/add?text=The%20quick%20brown%20fox&list=AllItems'

append(appendTextParams)
// => 'keepit://x-callback-url/append?text=The%20quick%20brown%20fox&item=C96F26E6-A566-457E-A448-5B0F527714DE'
```

## Official Documentation

* [Keep It URL Support](https://reinventedsoftware.com/keepit/urlsupport.html)
