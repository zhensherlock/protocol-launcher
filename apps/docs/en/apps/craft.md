---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, createBlock, createDocument, createNewDocument, openDailyNote, openDocument, openSearch, openSpace } from 'protocol-launcher/craft';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openDocumentParams, createDocumentParams, createBlockParams, openDailyNoteParams, openSearchParams, openSpaceParams } from '../../.vitepress/constants/craft';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/craft' : 'protocol-launcher');
</script>

# Craft

[Craft](https://www.craft.do) is a powerful, beautiful tool for creating documents, managing tasks, and organizing your work and life. **Protocol Launcher** allows you to generate deep links to open and create content in Craft.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Craft
  </VPLink>
</div>

### Open Document

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openDocument({
  spaceId: 'abc-123',
  blockId: 'xyz-789',
})
```

<div class="flex justify-center">
  <VPLink :href="openDocument(openDocumentParams)" target="_self">
    Open Document in Craft
  </VPLink>
</div>

### Create Document

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createDocument({
  spaceId: 'abc-123',
  title: 'My Note',
  content: 'Hello **World**',
  folderId: '',
})
```

<div class="flex justify-center">
  <VPLink :href="createDocument(createDocumentParams)" target="_self">
    Create Document in Craft
  </VPLink>
</div>

### Create New Document

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createNewDocument' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createNewDocument()
```

<div class="flex justify-center">
  <VPLink :href="createNewDocument()" target="_self">
    Create New Document in Craft
  </VPLink>
</div>

### Create Block

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createBlock' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}createBlock({
  parentBlockId: 'doc-123',
  spaceId: 'abc-123',
  content: 'New content',
  index: 9999,
})
```

<div class="flex justify-center">
  <VPLink :href="createBlock(createBlockParams)" target="_self">
    Create Block in Craft
  </VPLink>
</div>

### Open Daily Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDailyNote' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openDailyNote({
  spaceId: 'abc-123',
  type: 'today',
})
```

<div class="flex justify-center">
  <VPLink :href="openDailyNote(openDailyNoteParams)" target="_self">
    Open Daily Note in Craft
  </VPLink>
</div>

### Open Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openSearch({
  spaceId: 'abc-123',
  query: 'vacation plans',
})
```

<div class="flex justify-center">
  <VPLink :href="openSearch(openSearchParams)" target="_self">
    Search in Craft
  </VPLink>
</div>

### Open Space

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSpace' : 'craft' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'craft.'}}openSpace({
  spaceId: 'abc-123',
  tab: 'calendar',
})
```

<div class="flex justify-center">
  <VPLink :href="openSpace(openSpaceParams)" target="_self">
    Open Space in Craft
  </VPLink>
</div>
