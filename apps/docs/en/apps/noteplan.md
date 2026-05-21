---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  addNote,
  addText,
  openNote,
  openView,
  search,
  selectTag,
  toggleSidebar,
} from 'protocol-launcher/noteplan';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addNoteParams,
  addTextParams,
  openNoteDateParams,
  openNoteTitleParams,
  openViewParams,
  searchFilterParams,
  searchTextParams,
  selectTagParams,
  toggleSidebarParams,
} from '../../.vitepress/constants/noteplan';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/noteplan' : 'protocol-launcher');
</script>

# NotePlan

[NotePlan](https://noteplan.co/) combines notes, calendar notes, and tasks. **Protocol Launcher** allows you to generate NotePlan x-callback-url links for the actions documented in NotePlan's official URL scheme reference.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Note

Open a calendar note, regular note, or note filename.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}openNote({
  noteDate: 'today',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}openNote({
  noteTitle: 'Fleeting Notes#Second Brain',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}openNote({
  filename: 'folder/note.txt',
  heading: 'Ideas',
  splitView: 'yes',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openNote(openNoteDateParams)" target="_self">
    Open Today's Note
  </VPLink>
  <VPLink :href="openNote(openNoteTitleParams)" target="_self">
    Open Note by Title
  </VPLink>
</div>

### Open View

Open a view by name and/or folder.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openView' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}openView({
  name: 'Project Tasks',
  folder: '10 - Projects',
})
```

<div class="flex justify-center">
  <VPLink :href="openView(openViewParams)" target="_self">
    Open NotePlan View
  </VPLink>
</div>

### Add Text

Add text to a note identified by date, title, or filename.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addText' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}addText({
  noteDate: 'today',
  text: '* Hello World',
  mode: 'append',
  openNote: 'yes',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}addText({
  noteTitle: 'Test Note',
  text: '* Hello World',
  mode: 'prepend',
})
```

<div class="flex justify-center">
  <VPLink :href="addText(addTextParams)" target="_self">
    Add Text to Today's Note
  </VPLink>
</div>

### Add Note

Create a regular note with a title and/or text.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addNote' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}addNote({
  noteTitle: 'New Note',
  openNote: 'yes',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}addNote({
  text: 'Hello World',
  folder: 'Projects',
  highlightStart: 9999,
  highlightLength: 0,
})
```

<div class="flex justify-center">
  <VPLink :href="addNote(addNoteParams)" target="_self">
    Add Note in NotePlan
  </VPLink>
</div>

### Delete Note

Generate a URL that deletes a note identified by title, date, or filename.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteNote' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}deleteNote({
  noteTitle: 'New Note',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}deleteNote({
  noteDate: 'tomorrow',
})
```

### Select Tag

Select a tag or mention. Include the leading `#` or `@`; pass an empty string to show all notes.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'selectTag' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}selectTag({
  name: '#noteplan',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}selectTag({
  name: '',
})
```

<div class="flex justify-center">
  <VPLink :href="selectTag(selectTagParams)" target="_self">
    Select NotePlan Tag
  </VPLink>
</div>

### Search

Search by text or open an existing filter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}search({
  text: 'noteplan',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}search({
  filter: 'Upcoming',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="search(searchTextParams)" target="_self">
    Search in NotePlan
  </VPLink>
  <VPLink :href="search(searchFilterParams)" target="_self">
    Open NotePlan Filter
  </VPLink>
</div>

### Run Plugin

Run a NotePlan plugin command by plugin name or plugin ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runPlugin' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}runPlugin({
  pluginName: ' Note Statistics',
  command: 'nc',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}runPlugin({
  pluginID: 'example.Plugin',
  command: 'run',
  arg0: 'first',
  arg1: 'second',
})
```

### Install Plugin

Generate a URL to install a NotePlan plugin by plugin ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installPlugin' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}installPlugin({
  pluginID: 'dwertheimer.Favorites',
})
```

### Toggle Sidebar

Toggle, show, or hide the sidebar.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleSidebar' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}toggleSidebar()

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}toggleSidebar({
  forceOpen: 'yes',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}toggleSidebar({
  forceCollapse: 'yes',
  animated: 'no',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="toggleSidebar()" target="_self">
    Toggle NotePlan Sidebar
  </VPLink>
  <VPLink :href="toggleSidebar(toggleSidebarParams)" target="_self">
    Open NotePlan Sidebar
  </VPLink>
</div>

### Note Info

Request the absolute file path and name of the currently opened note through `x-success`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'noteInfo' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}noteInfo({
  xSuccess: 'sourceapp://x-callback-url',
})
```

### x-success

Every documented NotePlan x-callback-url action supports `xSuccess`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addText' : 'noteplan' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'noteplan.'}}addText({
  noteDate: 'today',
  text: 'Hello',
  xSuccess: 'sourceapp://x-callback-url',
})
```

## Official Reference

- [NotePlan X-Callback-Url Scheme](https://help.noteplan.co/article/49-x-callback-url-scheme)
