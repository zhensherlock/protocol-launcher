---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openNote, create, addText, search, tags, openTag, renameTag, deleteTag, todo, today, locked, untagged, trash, archive, grabUrl } from 'protocol-launcher/bear';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openNoteParams,
  createParams,
  addTextParams,
  searchParams,
  openTagParams,
  renameTagParams,
  deleteTagParams,
  todoParams,
  grabUrlParams,
} from '../../.vitepress/constants/bear';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/bear' : 'protocol-launcher');
</script>

# Bear

[Bear](https://bear.app/) is a beautiful, flexible writing app for crafting notes and prose. Bear works on iPhone, iPad, and Mac, offering everything you need to write, edit, and organize your ideas. With its powerful tag management system, markdown support, and seamless synchronization across devices, Bear is perfect for everything from quick notes to in-depth articles. **Protocol Launcher** allows you to generate deep links to open notes, create content, search, and manage tags in Bear.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Bear

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open in Bear
  </VPLink>
</div>

### Open Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}openNote({
  title: 'Shopping',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openNote(openNoteParams)" target="_self">
    Open in Bear
  </VPLink>
  <VPLink :href="openNote(openNoteWithHeaderParams)" target="_self">
    Open in Bear
  </VPLink>
</div>

### Create Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}create({
  title: 'Shopping',
  text: 'Milk',
  tags: 'home,groceries',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="create(createParams)" target="_self">
    Add to Bear
  </VPLink>
</div>

### Add Text to Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addText' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}addText({
  text: 'new line',
  id: '4EDAF0D1',
  mode: 'append',
})
```

<div class="flex justify-center">
  <VPLink :href="addText(addTextParams)" target="_self">
    Add to Bear
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}search({
  term: 'nemo',
  tag: 'movies',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Open in Bear
  </VPLink>
</div>

### Open Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}openTag({
  tag: 'work',
})
```

<div class="flex justify-center">
  <VPLink :href="openTag(openTagParams)" target="_self">
    Open in Bear
  </VPLink>
</div>

### Rename Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'renameTag' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}renameTag({
  tag: 'old-tag',
  newTag: 'new-tag',
})
```

<div class="flex justify-center">
  <VPLink :href="renameTag(renameTagParams)" target="_self">
    Open in Bear
  </VPLink>
</div>

### Delete Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTag' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}deleteTag({
  tag: 'obsolete-tag',
})
```

<div class="flex justify-center">
  <VPLink :href="deleteTag(deleteTagParams)" target="_self">
    Open in Bear
  </VPLink>
</div>

### Show Todos

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'todo' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}todo({
  search: 'home',
})
```

<div class="flex justify-center">
  <VPLink :href="todo(todoParams)" target="_self">
    Open in Bear
  </VPLink>
</div>

### Show Today's Notes

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'today' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}today()
```

<div class="flex justify-center">
  <VPLink :href="today()" target="_self">
    Open in Bear
  </VPLink>
</div>

### Show Locked Notes

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'locked' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}locked()
```

<div class="flex justify-center">
  <VPLink :href="locked()" target="_self">
    Open in Bear
  </VPLink>
</div>

### Show Untagged Notes

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'untagged' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}untagged()
```

<div class="flex justify-center">
  <VPLink :href="untagged()" target="_self">
    Open in Bear
  </VPLink>
</div>

### Show Trash

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'trash' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}trash()
```

<div class="flex justify-center">
  <VPLink :href="trash()" target="_self">
    Open in Bear
  </VPLink>
</div>

### Show Archive

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'archive' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}archive()
```

<div class="flex justify-center">
  <VPLink :href="archive()" target="_self">
    Open in Bear
  </VPLink>
</div>

### Grab URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'grabUrl' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}grabUrl({
  url: 'https://bear.app',
})
```

<div class="flex justify-center">
  <VPLink :href="grabUrl(grabUrlParams)" target="_self">
    Add to Bear
  </VPLink>
</div>

### Get All Tags

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tags' : 'bear' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bear.'}}tags({
  token: '123456-123456-123456',
})
```

<div class="flex justify-center">
  <VPLink :href="tags({ token: '123456-123456-123456' })" target="_self">
    Open in Bear
  </VPLink>
</div>
