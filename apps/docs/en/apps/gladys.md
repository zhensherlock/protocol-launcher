---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { createItem, pasteClipboard } from 'protocol-launcher/gladys';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  createItemWithTextParams,
  createItemWithUrlParams,
  createItemWithBase64Params,
  pasteClipboardParams,
  pasteClipboardWithTitleParams,
  pasteClipboardWithLabelsParams,
} from '../../.vitepress/constants/gladys';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/gladys' : 'protocol-launcher');
</script>

# Gladys

[Gladys](http://www.bru.build/app/gladys) is a drag-and-drop shelf app for iPad that holds things you want to set aside, such as links, text snippets, map locations, contacts, images, photos, emails, messages and much more. **Protocol Launcher** allows you to generate deep links to create items and paste from clipboard in Gladys.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Create Item with Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createItem' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}createItem({
  text: 'Hi There',
  title: 'Greeting',
  labels: 'Created Items,New Items',
  note: 'Some Notes',
})
```

<div class="flex justify-center">
  <VPLink :href="createItem(createItemWithTextParams)" target="_self">
    Create Item with Text
  </VPLink>
</div>

### Create Item with URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createItem' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}createItem({
  url: 'http://bru.build',
  title: 'The Gladys Guy',
  labels: 'Developer,iOS,macOS,Embedded',
  note: 'Some Notes',
})
```

<div class="flex justify-center">
  <VPLink :href="createItem(createItemWithUrlParams)" target="_self">
    Create Item with URL
  </VPLink>
</div>

### Create Item with Base64 Data

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createItem' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}createItem({
  base64data: 'RXhhbXBsZSB0ZXh0IGZpbGUuCg==',
  title: 'Test.txt',
  labels: 'Text Files',
  note: 'Pretending I am a file',
})
```

<div class="flex justify-center">
  <VPLink :href="createItem(createItemWithBase64Params)" target="_self">
    Create Item with Base64 Data
  </VPLink>
</div>

### Paste Clipboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteClipboard' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}pasteClipboard()
```

<div class="flex justify-center">
  <VPLink :href="pasteClipboard(pasteClipboardParams)" target="_self">
    Paste Clipboard
  </VPLink>
</div>

### Paste Clipboard with Title

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteClipboard' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}pasteClipboard({
  title: 'Override The Title',
})
```

<div class="flex justify-center">
  <VPLink :href="pasteClipboard(pasteClipboardWithTitleParams)" target="_self">
    Paste Clipboard with Title
  </VPLink>
</div>

### Paste Clipboard with Labels and Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteClipboard' : 'gladys' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'gladys.'}}pasteClipboard({
  title: 'Override The Title',
  labels: 'Pasted Items,New Items',
  note: 'Some Notes',
})
```

<div class="flex justify-center">
  <VPLink :href="pasteClipboard(pasteClipboardWithLabelsParams)" target="_self">
    Paste Clipboard with Labels
  </VPLink>
</div>
