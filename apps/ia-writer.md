---
url: /protocol-launcher/apps/ia-writer.md
---

# iA Writer

[iA Writer](https://ia.net/writer) is a focused writing app for macOS, iPadOS, and iOS. **Protocol Launcher** allows you to generate iA Writer URL Commands with the `ia-writer://` scheme and x-callback-url support.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Document

Opens Editor with an existing document if found, or a new empty document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}open({
  path: '/Drafts/Notes.txt',
})
```

### New File

Opens Editor with a new document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}newFile({
  path: '/Drafts/Meeting Notes.txt',
  text: '# Meeting Notes\n\n',
  author: 'AI',
})
```

### Quick Search

Opens Quick Search with a given query.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSearch' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}quickSearch({
  query: 'meeting notes',
})
```

### Read File

Reads and returns file contents. iA Writer requires an `auth-token` for data commands and returns `path` and `text` parameters on `x-success`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'read' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}read({
  authToken: 'REPLACE_WITH_YOUR_TOKEN',
  path: '/Drafts/Notes.txt',
  xSuccess: 'myapp://callback',
})
```

### Write File

Creates or modifies an existing file and returns file contents. iA Writer requires an `auth-token` for data commands and returns `path` and `text` parameters on `x-success`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'write' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}write({
  authToken: 'REPLACE_WITH_YOUR_TOKEN',
  path: '/Drafts/Notes.txt',
  text: 'Hello world',
  mode: 'add',
  addLocation: 'end',
  addPadding: 'paragraph',
  author: 'AI',
  xSuccess: 'myapp://callback',
})
```

### Version

Returns iA Writer app version and URL scheme version. iA Writer returns `scheme-version` and `app-version` parameters on `x-success`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'version' : 'iaWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'iaWriter.'}}version({
  xSuccess: 'myapp://callback',
})
```

## Official Documentation

* [iA Writer URL Commands](https://ia.net/writer/support/help/url-commands)
