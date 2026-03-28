---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { create, replace, replaceSelection, content, open, append, prepend } from 'protocol-launcher/1writer';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  createParams,
  replaceParams,
  replaceSelectionParams,
  contentParams,
  openParams,
  appendParams,
  prependParams,
} from '../../.vitepress/constants/1writer';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/1writer' : 'protocol-launcher');
</script>

# 1Writer

[1Writer](https://1writerapp.com/) is a powerful Markdown text editor for iOS with Dropbox, Google Drive, and iCloud support. **Protocol Launcher** allows you to generate deep links to create, edit, and manage documents in 1Writer using the `onewriter://` URL scheme with x-callback-url protocol.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Create Document

Creates a new document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}create({
  path: 'Dropbox/Documents',
  name: 'Notes.txt',
  text: 'Hello world',
})
```

<div class="flex justify-center">
  <VPLink :href="create(createParams)" target="_self">
    Create Document in 1Writer
  </VPLink>
</div>

### Replace Document

Replaces content of a document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}replace({
  path: 'Dropbox/Documents/Notes.txt',
  text: 'Hello world',
})
```

<div class="flex justify-center">
  <VPLink :href="replace(replaceParams)" target="_self">
    Replace Document in 1Writer
  </VPLink>
</div>

### Replace Selection

Replaces selected text in the current editing document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceSelection' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}replaceSelection({
  text: 'New text',
})
```

<div class="flex justify-center">
  <VPLink :href="replaceSelection(replaceSelectionParams)" target="_self">
    Replace Selection in 1Writer
  </VPLink>
</div>

### Get Content

Returns content of a document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'content' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}content({
  path: 'Dropbox/Documents/Notes.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="content(contentParams)" target="_self">
    Get Content from 1Writer
  </VPLink>
</div>

### Open Document

Opens an existing document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}open({
  path: 'Dropbox/Documents/Notes.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    Open Document in 1Writer
  </VPLink>
</div>

### Append Document

Appends content to an existing document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}append({
  path: 'Dropbox/Documents/Notes.txt',
  text: 'Hello world',
})
```

<div class="flex justify-center">
  <VPLink :href="append(appendParams)" target="_self">
    Append to Document in 1Writer
  </VPLink>
</div>

### Prepend Document

Prepends content to an existing document.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'oneWriter' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'oneWriter.'}}prepend({
  path: 'Dropbox/Documents/Notes.txt',
  text: 'Hello world',
})
```

<div class="flex justify-center">
  <VPLink :href="prepend(prependParams)" target="_self">
    Prepend to Document in 1Writer
  </VPLink>
</div>
