---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, addLink, addMemo, openFolder, openInbox, openSmartFolder, openStarred, openTag, search } from 'protocol-launcher/cubox';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addLinkParams,
  addMemoParams,
  openFolderParams,
  openSmartFolderParams,
  openTagParams,
  searchParams,
} from '../../.vitepress/constants/cubox';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/cubox' : 'protocol-launcher');
</script>

# Cubox

[Cubox](https://www.cubox.pro/) is a next-generation AI-powered read-it-later assistant that helps you save, organize, and truly understand what you read. **Protocol Launcher** allows you to generate deep links to add content and navigate within Cubox.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Cubox
  </VPLink>
</div>

### Add Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addLink' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}addLink({
  url: 'https://example.com/article',
})
```

<div class="flex justify-center">
  <VPLink :href="addLink(addLinkParams)" target="_self">
    Add Link to Cubox
  </VPLink>
</div>

### Add Memo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addMemo' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}addMemo({
  memo: 'Remember to buy groceries',
})
```

<div class="flex justify-center">
  <VPLink :href="addMemo(addMemoParams)" target="_self">
    Add Memo to Cubox
  </VPLink>
</div>

### Open Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFolder' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openFolder({
  name: 'Reading List',
})
```

<div class="flex justify-center">
  <VPLink :href="openFolder(openFolderParams)" target="_self">
    Open Folder in Cubox
  </VPLink>
</div>

### Open Inbox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openInbox()
```

<div class="flex justify-center">
  <VPLink :href="openInbox()" target="_self">
    Open Inbox in Cubox
  </VPLink>
</div>

### Open Smart Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSmartFolder' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openSmartFolder({
  name: 'Recent Articles',
})
```

<div class="flex justify-center">
  <VPLink :href="openSmartFolder(openSmartFolderParams)" target="_self">
    Open Smart Folder in Cubox
  </VPLink>
</div>

### Open Starred

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStarred' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openStarred()
```

<div class="flex justify-center">
  <VPLink :href="openStarred()" target="_self">
    Open Starred in Cubox
  </VPLink>
</div>

### Open Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}openTag({
  name: 'important',
})
```

<div class="flex justify-center">
  <VPLink :href="openTag(openTagParams)" target="_self">
    Open Tag in Cubox
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'cubox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cubox.'}}search({
  query: 'typescript',
  type: 'card',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in Cubox
  </VPLink>
</div>
