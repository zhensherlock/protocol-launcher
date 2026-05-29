---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFilter, openNote, openNotebook, view, viewTag } from 'protocol-launcher/upnote';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openFilterParams,
  openNoteParams,
  openNotebookParams,
  viewAllNotesParams,
  viewSearchParams,
  viewTagParams,
} from '../../.vitepress/constants/upnote';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/upnote' : 'protocol-launcher');
</script>

# UpNote

[UpNote](https://getupnote.com/) is a note-taking app for writing and organizing notes. **Protocol Launcher** allows you to generate links for opening notes, notebooks, tags, filters, and views, and creating notes and notebooks in UpNote.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

UpNote documents `upnote://x-callback-url/<action>` endpoints for opening notes, creating notes and notebooks, viewing notebooks, viewing tags, opening filters, and dynamic views.

### Open Note

Open a note with `noteId` and `new_window`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}openNote({
  noteId: 'REPLACE_WITH_NOTE_ID',
  newWindow: false,
})
```

<div class="flex justify-center">
  <VPLink :href="openNote(openNoteParams)" target="_self">
    Open Note in UpNote
  </VPLink>
</div>

### New Note

Create a note with `title`, `text`, `notebook`, `new_window`, and `markdown`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}newNote({
  title: 'Daily Plan',
  text: '# Today',
  notebook: 'Work',
  newWindow: true,
  markdown: true,
})
```

### Open Notebook

View notes in a notebook by `notebookId`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotebook' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}openNotebook({
  notebookId: 'REPLACE_WITH_NOTEBOOK_ID',
})
```

<div class="flex justify-center">
  <VPLink :href="openNotebook(openNotebookParams)" target="_self">
    Open Notebook in UpNote
  </VPLink>
</div>

### New Notebook

Create a notebook with a title.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNotebook' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}newNotebook({
  title: 'Projects',
})
```

### View Tag

View notes in a tag by tag title.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewTag' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}viewTag({
  tag: 'project',
})
```

<div class="flex justify-center">
  <VPLink :href="viewTag(viewTagParams)" target="_self">
    View UpNote Tag
  </VPLink>
</div>

### Open Filter

View notes in a filter by `filterId`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFilter' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}openFilter({
  filterId: 'REPLACE_WITH_FILTER_ID',
})
```

<div class="flex justify-center">
  <VPLink :href="openFilter(openFilterParams)" target="_self">
    Open UpNote Filter
  </VPLink>
</div>

### Dynamic View

Use the documented `view` endpoint with `mode`, `noteId`, `notebookId`, `tagId`, `filterId`, `spaceId`, `action`, and `query`. UpNote documents `spaceId` as a unique space id or `default`; `notebooks`, `tags`, and `filters` modes require their matching ids.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'view' : 'upnote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}view({
  mode: 'all_notes',
})

const notebookUrl = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}view({
  mode: 'notebooks',
  notebookId: 'REPLACE_WITH_NOTEBOOK_ID',
  spaceId: 'default',
})

const searchUrl = {{currentMethod === 'On-Demand' ? '' : 'upnote.'}}view({
  action: 'search',
  query: 'meeting notes',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="view(viewAllNotesParams)" target="_self">
    View All Notes in UpNote
  </VPLink>
  <VPLink :href="view(viewSearchParams)" target="_self">
    Search in UpNote
  </VPLink>
</div>

## Official Documentation

- [UpNote x-callback-url endpoints](https://help.getupnote.com/resources/x-callback-url-endpoints)
