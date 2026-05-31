---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  openDocument,
  openDocumentRow,
  openLegacyLink,
  openLink,
} from 'protocol-launcher/omnioutliner';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  documentParams,
  documentRowParams,
  existingLinkParams,
  legacyLinkParams,
} from '../../.vitepress/constants/omnioutliner';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/omnioutliner' : 'protocol-launcher');
</script>

# OmniOutliner

[OmniOutliner](https://www.omnigroup.com/omnioutliner/) is an outlining app from The Omni Group. **Protocol Launcher** allows you to generate OmniOutliner Omni Links and Legacy Links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Document

Omni Links support document (`doc`) links. Provide the path, document name, and Omni Links Folder ID from your OmniOutliner Connected Folder.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'omnioutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openDocument({
  documentName: 'My Outline.ooutline',
  folder: 'iCloud Drive',
})
```

<div class="flex justify-center">
  <VPLink :href="openDocument(documentParams)" target="_self">
    Open Document
  </VPLink>
</div>

### Open Document Row

Document Omni Links can include optional Elements, each added after the `folder` parameter with `&`. OmniOutliner currently documents `focus` for Focus and `row` for Row Selection.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocumentRow' : 'omnioutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openDocumentRow({
  path: 'foo/bar',
  documentName: 'My Outline.ooutline',
  folder: 'Work Server 9070',
  focus: 'mDFTZpAeCb8',
  row: 'fh4Q0jgg5iB',
})
```

<div class="flex justify-center">
  <VPLink :href="openDocumentRow(documentRowParams)" target="_self">
    Open Document Row
  </VPLink>
</div>

### Open Legacy Link

Legacy Links only support the `open` link type. They work as long as the document containing the destination is open, and can include optional `focus` and `row` Elements.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLegacyLink' : 'omnioutliner' }} } from '{{ importPath }}'

const openUrl = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openLegacyLink()

const rowUrl = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openLegacyLink({
  focus: 'nBZUyLQl3b6',
  row: 'j3NzslZpCi8',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openLegacyLink()" target="_self">
    Open Legacy Link
  </VPLink>
  <VPLink :href="openLegacyLink(legacyLinkParams)" target="_self">
    Open Legacy Row
  </VPLink>
</div>

### Open Existing Link

Use `openLink()` when you already have a full `omnioutliner:///doc/...` Omni Link or `omnioutliner:///open...` Legacy Link copied from OmniOutliner.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLink' : 'omnioutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openLink({
  url: 'omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive',
})
```

<div class="flex justify-center">
  <VPLink :href="openLink(existingLinkParams)" target="_self">
    Open Existing Link
  </VPLink>
</div>

## Generated URLs

```ts
openDocument({ documentName: 'My Outline.ooutline', folder: 'iCloud Drive' })
// => 'omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive'

openDocumentRow({
  path: 'foo/bar',
  documentName: 'My Outline.ooutline',
  folder: 'Work Server 9070',
  focus: 'mDFTZpAeCb8',
  row: 'fh4Q0jgg5iB',
})
// => 'omnioutliner:///doc/foo/bar/My%20Outline.ooutline?folder=Work%20Server%209070&focus=mDFTZpAeCb8&row=fh4Q0jgg5iB'

openLegacyLink()
// => 'omnioutliner:///open'

openLegacyLink({ focus: 'nBZUyLQl3b6', row: 'j3NzslZpCi8' })
// => 'omnioutliner:///open?focus=nBZUyLQl3b6&row=j3NzslZpCi8'
```

## Official Documentation

- [OmniOutliner 6 Omni Links and Legacy Links](https://support.omnigroup.com/documentation/omnioutliner/universal/6.1/en/connect/)
