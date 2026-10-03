---
url: /protocol-launcher/apps/fsnotes.md
---

# FSNotes

[FSNotes](https://fsnot.es) is a modern notes manager for macOS and iOS. It's simple, blazing fast, and respects open formats like GitHub Flavored Markdown. **Protocol Launcher** allows you to generate deep links to search, open, or create notes in FSNotes.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

The current macOS URL handler supports new, open and find. openNote() accepts txt to append content (or create the note if absent); tag takes precedence over title. findNotes() accepts an optional id to open a title/name, falling back to search. Query values and search path components are encoded.

### Open FSNotes

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}open()
```

### Find Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findNotes' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}findNotes({
  keyword: 'hello',
})
```

### Open Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}openNote({
  title: 'hello',
  tag: '2026',
})
```

### Create Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNote' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}createNote({
  title: 'hello',
  content: 'hello world',
  tags: '2026',
})
```

### Create with the Native Scheme

Use the native fsnotes://new/ route. Plain text (txt) takes precedence over html, folder selects the destination, and open: true opens a new window. The existing createNote() helper retains the compatible nv://make/ route and supports txt/open.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}newNote({
  'title': 'Meeting',
  'txt': '# Agenda',
  'folder': 'Work',
  'open': true
})
```

## Official Documentation

* [URL scheme](https://github.com/glushchenko/fsnotes/blob/v7.3.4/FSNotes/AppDelegate%2BURLRoutes.swift)
