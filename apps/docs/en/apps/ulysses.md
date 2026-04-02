---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openItem, newSheet, insert, attachNote, attachKeywords, newGroup, copy, openAll, openFavorites, openRecent } from 'protocol-launcher/ulysses';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openItemParams, newSheetParams, insertParams, attachNoteParams, attachKeywordsParams, newGroupParams, copyParams } from '../../.vitepress/constants/ulysses';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ulysses' : 'protocol-launcher');
</script>

# Ulysses

[Ulysses](https://ulysses.app/) is a powerful writing app for Mac, iPad and iPhone. **Protocol Launcher** allows you to generate deep links to create and manage sheets, groups, and notes in Ulysses.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Ulysses
  </VPLink>
</div>

### Open Item

Open a sheet or group by identifier, name, or path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openItem' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openItem({
  id: 'DCj45UWKr_g15y2vBPwJdQ',
})
```

<div class="flex justify-center">
  <VPLink :href="openItem(openItemParams)" target="_self">
    Open Item in Ulysses
  </VPLink>
</div>

### New Sheet

Create a new sheet with optional content, group, format, and position.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newSheet' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}newSheet({
  text: 'My new sheet content',
  group: '/Books',
  format: 'markdown',
  index: 0,
})
```

<div class="flex justify-center">
  <VPLink :href="newSheet(newSheetParams)" target="_self">
    Create New Sheet
  </VPLink>
</div>

### Insert Text

Insert or append text to an existing sheet.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'insert' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}insert({
  id: 'H8zLAmc1I0njH-0Ql-3YGQ',
  text: 'Inserted text',
  format: 'markdown',
  position: 'end',
  newline: 'prepend',
})
```

<div class="flex justify-center">
  <VPLink :href="insert(insertParams)" target="_self">
    Insert Text in Ulysses
  </VPLink>
</div>

### Attach Note

Attach a note to a sheet.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'attachNote' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}attachNote({
  id: 'H8zLAmc1I0njH-0Ql-3YGQ',
  text: 'My new note',
  format: 'markdown',
})
```

<div class="flex justify-center">
  <VPLink :href="attachNote(attachNoteParams)" target="_self">
    Attach Note in Ulysses
  </VPLink>
</div>

### Attach Keywords

Add keywords to a sheet.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'attachKeywords' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}attachKeywords({
  id: 'H8zLAmc1I0njH-0Ql-3YGQ',
  keywords: 'Draft,Important',
})
```

<div class="flex justify-center">
  <VPLink :href="attachKeywords(attachKeywordsParams)" target="_self">
    Attach Keywords in Ulysses
  </VPLink>
</div>

### New Group

Create a new group for organizing sheets.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newGroup' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}newGroup({
  name: 'My Group',
  parent: '/Books',
  index: 0,
})
```

<div class="flex justify-center">
  <VPLink :href="newGroup(newGroupParams)" target="_self">
    Create New Group
  </VPLink>
</div>

### Copy Item

Copy a sheet or group to a target location.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copy' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}copy({
  id: 'hZ7IX2jqKbVmPGlYUXkZjQ',
  targetGroup: 'H8zLAmc1I0njH-0Ql-3YGQ',
  index: 4,
})
```

<div class="flex justify-center">
  <VPLink :href="copy(copyParams)" target="_self">
    Copy Item in Ulysses
  </VPLink>
</div>

### Open All

Open the special "All" group showing all sheets.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAll' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openAll()
```

<div class="flex justify-center">
  <VPLink :href="openAll()" target="_self">
    Open All in Ulysses
  </VPLink>
</div>

### Open Favorites

Open the special "Favorites" group.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFavorites' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openFavorites()
```

<div class="flex justify-center">
  <VPLink :href="openFavorites()" target="_self">
    Open Favorites in Ulysses
  </VPLink>
</div>

### Open Recent

Open the special "Last 7 Days" (Recent) group.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRecent' : 'ulysses' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ulysses.'}}openRecent()
```

<div class="flex justify-center">
  <VPLink :href="openRecent()" target="_self">
    Open Recent in Ulysses
  </VPLink>
</div>
