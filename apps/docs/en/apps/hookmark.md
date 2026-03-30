---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openAddressBook, openEmail, openFile, openNotes, openSearch, openSpotify } from 'protocol-launcher/hookmark';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import { openFileParams, openEmailParams, openSearchParams } from '../../.vitepress/constants/hookmark';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/hookmark' : 'protocol-launcher');
</script>

# Hookmark

[Hookmark](https://hookproductivity.com/) is a macOS app that lets you create contextual bookmarks and bidirectional links between files, emails, web pages, and more. **Protocol Launcher** allows you to generate deep links to open resources in Hookmark.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Hookmark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Hookmark
  </VPLink>
</div>

### Open Address Book

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAddressBook' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openAddressBook()
```

<div class="flex justify-center">
  <VPLink :href="openAddressBook()" target="_self">
    Open Address Book in Hookmark
  </VPLink>
</div>

### Open Email

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEmail' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openEmail({
  id: '<CABc123xyz@mail.gmail.com>',
})
```

<div class="flex justify-center">
  <VPLink :href="openEmail(openEmailParams)" target="_self">
    Open Email in Hookmark
  </VPLink>
</div>

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openFile({
  path: '/Applications',
  name: 'Applications',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    Open File in Hookmark
  </VPLink>
</div>

### Open Notes

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotes' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openNotes()
```

<div class="flex justify-center">
  <VPLink :href="openNotes()" target="_self">
    Open Notes in Hookmark
  </VPLink>
</div>

### Open Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSearch' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openSearch({
  query: 'project',
})
```

<div class="flex justify-center">
  <VPLink :href="openSearch(openSearchParams)" target="_self">
    Open Search in Hookmark
  </VPLink>
</div>

### Open Spotify

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSpotify' : 'hookmark' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hookmark.'}}openSpotify()
```

<div class="flex justify-center">
  <VPLink :href="openSpotify()" target="_self">
    Open Spotify in Hookmark
  </VPLink>
</div>
