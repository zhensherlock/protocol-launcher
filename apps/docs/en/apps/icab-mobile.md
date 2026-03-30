---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openUrl, addBookmark, search } from 'protocol-launcher/icab-mobile';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openUrlParams, addBookmarkParams, addBookmarkWithFolderParams, searchParams } from '../../.vitepress/constants/icab-mobile';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/icab-mobile' : 'protocol-launcher');
</script>

# iCab Mobile

[iCab Mobile](http://www.icab-mobile.de/index.html) is a web browser for the iPhone, iPad and Apple Watch. **Protocol Launcher** allows you to generate deep links to open URLs, add bookmarks, and search in iCab Mobile.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Browser

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open iCab Mobile
  </VPLink>
</div>

### Open URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUrl' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}openUrl({
  url: 'https://www.example.com/',
})
```

<div class="flex justify-center">
  <VPLink :href="openUrl(openUrlParams)" target="_self">
    Open URL in iCab Mobile
  </VPLink>
</div>

### Add Bookmark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}addBookmark({
  url: 'https://www.example.com/',
  title: 'Example',
})
```

<div class="flex justify-center">
  <VPLink :href="addBookmark(addBookmarkParams)" target="_self">
    Add Bookmark in iCab Mobile
  </VPLink>
</div>

### Add Bookmark with Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}addBookmark({
  url: 'https://www.example.com/',
  title: 'Example',
  folder: 'Favorites',
})
```

<div class="flex justify-center">
  <VPLink :href="addBookmark(addBookmarkWithFolderParams)" target="_self">
    Add Bookmark with Folder in iCab Mobile
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'icabMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'icabMobile.'}}search({
  query: 'hello world',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in iCab Mobile
  </VPLink>
</div>
