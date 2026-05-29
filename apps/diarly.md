---
url: /protocol-launcher/apps/diarly.md
---

# Diarly

[Diarly](https://diarly.app/) is a journaling app for writing and organizing daily entries. **Protocol Launcher** allows you to generate links for opening entries or notes, appending text, creating notes, and searching entries in Diarly.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

Diarly documents `diarly://x-callback-url/[action]?[parameters]` for `open`, `append`, and `create`, plus `diarly://search?text=...` for search. Daily entry identifiers use `day` in `dd-mm-yyyy` format and optional `journal`; note identifiers use `id`.

### Open

Open a note by its unique `id`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}open({
  id: 'REPLACE_WITH_NOTE_ID',
})
```

Open a daily entry with `day` and optional `journal`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}open({
  day: '01-01-2019',
  journal: '2bc759b2-9dd8-4186-ba64-12890f5642c9',
})
```

### Append / Add

Append text to a note or daily entry identified by `id` or by `day` and optional `journal`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}append({
  day: '16-12-2020',
  text: 'Hello World',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}append({
  id: 'REPLACE_WITH_NOTE_ID',
  text: 'Hello World',
})
```

### Create Note

Create a new note with `text` and optional `journal`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}create({
  text: 'Hello World',
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}create({
  journal: 'Personal',
  text: 'Hello World',
})
```

### Search

Search Diarly entries with `text`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'diarly' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'diarly.'}}search({
  text: '@onThisDay',
})
```

## Official Documentation

* [Diarly X-Callback-URL Scheme Documentation](https://diarly.app/help/x-callback-url-scheme-documentation.html)
