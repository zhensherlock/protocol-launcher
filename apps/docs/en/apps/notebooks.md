---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openDocument, openInternalLink, search } from 'protocol-launcher/notebooks';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openDocumentParams,
  openInternalLinkParams,
  searchParams,
} from '../../.vitepress/constants/notebooks';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/notebooks' : 'protocol-launcher');
</script>

# Notebooks

[Notebooks](https://www.notebooksapp.com/) is a note-taking and writing app. **Protocol Launcher** allows you to generate Notebooks URL scheme links for opening documents, adding notes, searching, creating items, appending text, importing URLs, and starting sharing or sync.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Documents

Notebooks documents two forms for opening a document: `notebooks://show/<path>` and the direct internal-link form `notebooks://<path>`. Paths are relative to the Notebooks root.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument, openInternalLink' : 'notebooks' }} } from '{{ importPath }}'

const showUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}openDocument({
  path: 'escaped path to document',
})

const internalUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}openInternalLink({
  path: 'escaped path to document',
})
```

<div class="flex justify-center gap-3">
  <VPLink :href="openDocument(openDocumentParams)" target="_self">Open Document</VPLink>
  <VPLink :href="openInternalLink(openInternalLinkParams)" target="_self">Open Internal Link</VPLink>
</div>

### Add, Search, and Append

Use `addNote()` for `notebooks://addnote/`, `search()` for `notebooks://search/`, and `append()` for `notebooks://append/`. The optional `parent`, `scope`, and `doc` values are Notebooks paths.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addNote, search, append' : 'notebooks' }} } from '{{ importPath }}'

const noteUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}addNote({
  text: 'note body',
  title: 'Title is optional',
  parent: 'path to parent',
})

const searchUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}search({
  term: 'term to search for',
  scope: 'book/to/search',
})

const appendUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}append({
  text: 'text to add',
  doc: 'path to document.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">Search Notebooks</VPLink>
</div>

### New Document, Task, and Sketch

Notebooks documents `addNewDoc`, `addNewTask`, and `addNewSketch`. Each can optionally include a parent book path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newDocument, newTask, newSketch' : 'notebooks' }} } from '{{ importPath }}'

const documentUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}newDocument({
  parent: 'path to parent',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}newTask({
  parent: 'path to parent',
})

const sketchUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}newSketch({
  parent: 'path to parent',
})
```

### Import, Sharing, and Sync

Use `grab()` to import a document from a URL. On iPhone and iPad, Notebooks also documents `wifi_sharing` and `webdav_sync`, each optionally scoped to a book path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'grab, wifiSharing, webdavSync' : 'notebooks' }} } from '{{ importPath }}'

const grabUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}grab({
  url: 'URL',
  title: 'Title of document',
  parent: 'Path to target book',
})

const sharingUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}wifiSharing({
  path: 'Path To Book To Share',
})

const syncUrl = {{currentMethod === 'On-Demand' ? '' : 'notebooks.'}}webdavSync({
  path: 'Path To Book To Sync',
})
```

## Generated URLs

```ts
openDocument({ path: 'escaped path to document' })
// => 'notebooks://show/escaped%20path%20to%20document'

openInternalLink({ path: 'escaped path to document' })
// => 'notebooks://escaped%20path%20to%20document'

addNote({ text: 'note body', title: 'Title is optional', parent: 'path to parent' })
// => 'notebooks://addnote/note%20body&title=Title%20is%20optional&parent=path%20to%20parent'

addNote({ text: 'note body', title: 'title for document' })
// => 'notebooks://addnote/note%20body&title=title%20for%20document'

addNote({ text: 'note body' })
// => 'notebooks://addnote/note%20body'

search({ term: 'term to search for', scope: 'book/to/search' })
// => 'notebooks://search/term%20to%20search%20for&scope=book/to/search'

newDocument({ parent: 'path to parent' })
// => 'notebooks://addNewDoc&parent=path%20to%20parent'

newDocument()
// => 'notebooks://addNewDoc'

newTask({ parent: 'path to parent' })
// => 'notebooks://addNewTask&parent=path%20to%20parent'

newSketch({ parent: 'path to parent' })
// => 'notebooks://addNewSketch&parent=path%20to%20parent'

append({ text: 'text to add', doc: 'path to document.txt' })
// => 'notebooks://append/text%20to%20add&doc=path%20to%20document.txt'

grab({ url: 'URL', title: 'Title of document' })
// => 'notebooks://grab/URL&title=Title%20of%20document'

grab({ url: 'URL', title: 'Title of document', parent: 'Path to target book' })
// => 'notebooks://grab/URL&title=Title%20of%20document&parent=Path%20to%20target%20book'

grab({ url: 'URL' })
// => 'notebooks://grab/URL'

wifiSharing({ path: 'Path To Book To Share' })
// => 'notebooks://wifi_sharing/Path%20To%20Book%20To%20Share'

wifiSharing()
// => 'notebooks://wifi_sharing'

webdavSync({ path: 'Path To Book To Sync' })
// => 'notebooks://webdav_sync/Path%20To%20Book%20To%20Sync'
```

## References

- [Notebooks URL Schemes](https://www.notebooksapp.com/notebooks-url-schemes/)
