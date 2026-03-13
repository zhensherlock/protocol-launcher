---
url: /protocol-launcher/apps/evernote.md
---

# Evernote

[Evernote](https://evernote.com/) is a powerful note-taking and organization app that helps you capture ideas, manage tasks, and store information. With Evernote, you can create notes, organize notebooks, and sync across all your devices. **Protocol Launcher** allows you to generate deep links to open Evernote and view specific notes.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Evernote

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'evernote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'evernote.'}}open()
```

### View Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewNote' : 'evernote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'evernote.'}}viewNote({
  userId: '123456',
  shardId: 's29',
  noteGuid: 'abcd-efgh-ijkl-mnop',
})
```
