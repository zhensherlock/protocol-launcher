---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, findNotes, openNote, createNote } from 'protocol-launcher/fsnotes';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  findNotesParams,
  openNoteParams,
  createNoteParams,
} from '../../.vitepress/constants/fsnotes';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/fsnotes' : 'protocol-launcher');
</script>

# FSNotes

[FSNotes](https://fsnot.es) is a modern notes manager for macOS and iOS. It's simple, blazing fast, and respects open formats like GitHub Flavored Markdown. **Protocol Launcher** allows you to generate deep links to search, open, or create notes in FSNotes.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open FSNotes
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open FSNotes
  </VPLink>
</div>

### Find Note
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'findNotes' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}findNotes({
  keyword: 'hello',
})
```
<div class="flex justify-center">
  <VPLink :href="findNotes(findNotesParams)" target="_self">
    Open in FSNotes
  </VPLink>
</div>

### Open Note
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}openNote({
  title: 'hello',
  tag: '2026',
})
```
<div class="flex justify-center">
  <VPLink :href="openNote(openNoteParams)" target="_self">
    Open in FSNotes
  </VPLink>
</div>

### Create Note
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNote' : 'fsnotes' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fsnotes.'}}createNote({
  title: 'hello',
  content: 'hello world',
  tags: '2026',
})
```
<div class="flex justify-center">
  <VPLink :href="createNote(createNoteParams)" target="_self">
    Open in FSNotes
  </VPLink>
</div>
