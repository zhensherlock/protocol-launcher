---
url: /protocol-launcher/apps/joplin.md
---

# Joplin

[Joplin](https://joplinapp.org/) is an open source note-taking app for organizing notes. **Protocol Launcher** allows you to generate links that open notes, folders, and tags in Joplin.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

Joplin external links use `joplin://x-callback-url/<action>` with an `id` query parameter. The official documentation lists `openNote`, `openFolder`, and `openTag`.

### Open Note

Open a Joplin note by note ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'joplin' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'joplin.'}}openNote({
  id: 'REPLACE_WITH_NOTE_ID',
})
```

### Open Folder

Open a Joplin folder by folder ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'joplin' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'joplin.'}}openFolder({
  id: 'REPLACE_WITH_FOLDER_ID',
})
```

### Open Tag

Open a Joplin tag by tag ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'joplin' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'joplin.'}}openTag({
  id: 'REPLACE_WITH_TAG_ID',
})
```

## Official Documentation

* [Joplin External URL links](https://joplinapp.org/help/apps/external_links/)
