---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openRemotePdf, openSyncedFile } from 'protocol-launcher/pdf-expert';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openFileParams, openRemotePdfParams, openSyncedFileParams } from '../../.vitepress/constants/pdf-expert';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/pdf-expert' : 'protocol-launcher',
);
</script>

# PDF Expert

[PDF Expert](https://pdfexpert.com/) is Readdle's PDF editor and reader for Mac, iPad, and iPhone. **Protocol Launcher** allows you to generate PDF Expert URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Remote PDF

Save and open a direct PDF URL by adding the documented `PDFE` prefix.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemotePdf' : 'pdfExpert' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfExpert.'}}openRemotePdf({
  url: 'https://example.com/Guide.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openRemotePdf(openRemotePdfParams)" target="_self">
    Open Remote PDF in PDF Expert
  </VPLink>
</div>

### Open File

Open a file stored in PDF Expert's Documents tab with the documented `PDFEFILE:///Folder/Subfolder/File.pdf` form.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pdfExpert' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfExpert.'}}openFile({
  path: 'Folder/Subfolder/File.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    Open File in PDF Expert
  </VPLink>
</div>

If folder names contain spaces, Readdle documents using `%20`; pass those escapes in `path`.

### Open Synced File

Open a file kept in Synced folders with the documented `pdfefile:///SyncedFolders/` static path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSyncedFile' : 'pdfExpert' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfExpert.'}}openSyncedFile({
  path: 'folder1/folder2/test.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openSyncedFile(openSyncedFileParams)" target="_self">
    Open Synced File in PDF Expert
  </VPLink>
</div>

Readdle notes that other app languages may require the translated version of the Synced folders part of the URL. This helper generates the documented English static path `pdfefile:///SyncedFolders/`.

## References

- [Readdle PDF Expert URL schemes](https://support.readdle.com/pdfexpert/en_US/for-developers/url-schemes)
