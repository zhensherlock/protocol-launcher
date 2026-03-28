---
url: /protocol-launcher/apps/1writer.md
---

# 1Writer

[1Writer](https://1writerapp.com/) is a powerful Markdown text editor for iOS with Dropbox, Google Drive, and iCloud support. **Protocol Launcher** allows you to generate deep links to create, edit, and manage documents in 1Writer using the `onewriter://` URL scheme with x-callback-url protocol.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Create Document

Creates a new document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}create({
  path: 'Dropbox/Documents',
  name: 'Notes.txt',
  text: 'Hello world',
})
```

### Replace Document

Replaces content of a document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}replace({
  path: 'Dropbox/Documents/Notes.txt',
  text: 'Hello world',
})
```

### Replace Selection

Replaces selected text in the current editing document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceSelection' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}replaceSelection({
  text: 'New text',
})
```

### Get Content

Returns content of a document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'content' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}content({
  path: 'Dropbox/Documents/Notes.txt',
})
```

### Open Document

Opens an existing document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}open({
  path: 'Dropbox/Documents/Notes.txt',
})
```

### Append Document

Appends content to an existing document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}append({
  path: 'Dropbox/Documents/Notes.txt',
  text: 'Hello world',
})
```

### Prepend Document

Prepends content to an existing document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}prepend({
  path: 'Dropbox/Documents/Notes.txt',
  text: 'Hello world',
})
```
