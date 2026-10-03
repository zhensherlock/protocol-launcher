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

Joplin external links use `joplin://x-callback-url/<action>` with an `id` query parameter. The official documentation lists `openNote`, `openFolder`, and `openTag`, plus the desktop callback commands below. Callback URLs must use a known application scheme or the `x-callback-url` host; Joplin rejects HTTP and HTTPS callbacks.

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

### Get Current Note

Desktop only. Return the selected note to the calling app through an x-callback-url.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getCurrentNote' : 'joplin' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'joplin.'}}getCurrentNote({
  xSuccess: 'hook://x-callback-url/setCurrentNode'
})
```

### Create Note

Desktop only. Create a note in the current notebook and return its title and URL through the callback.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNote' : 'joplin' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'joplin.'}}createNote({
  title: 'Meeting notes',
  body: '# Agenda',
  xSuccess: 'hook://x-callback-url/setCurrentNode',
  xError: 'hook://x-callback-url/error'
})
```

## Official Documentation

* [Joplin External URL links](https://joplinapp.org/help/apps/external_links/)
