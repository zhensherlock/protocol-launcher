---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { downloadUrl, openInternalFile } from 'protocol-launcher/goodreader';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { downloadUrlParams, openInternalFileParams } from '../../.vitepress/constants/goodreader';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/goodreader' : 'protocol-launcher',
);
</script>

# GoodReader

[GoodReader](https://www.goodreader.com/) is a file viewer and file manager for iPad and iPhone. **Protocol Launcher** allows you to generate GoodReader URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Internal File

Open a file from GoodReader's internal file storage using the documented `gropen://` prefix and the file's internal path. The path is appended exactly as provided.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInternalFile' : 'goodreader' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodreader.'}}openInternalFile({
  path: 'Manuals/Guide.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openInternalFile(openInternalFileParams)" target="_self">
    Open Internal File in GoodReader
  </VPLink>
</div>

### Download URL

Send an HTTP or HTTPS URL to GoodReader by adding the documented `g` prefix to the original URL scheme.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadUrl' : 'goodreader' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'goodreader.'}}downloadUrl({
  url: 'https://example.com/Guide.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="downloadUrl(downloadUrlParams)" target="_self">
    Download URL in GoodReader
  </VPLink>
</div>

## References

- [GoodReader file management](https://www.goodreader.com/how-to-manage-files-in-goodreader)
- [GoodReader built-in web browser](https://www.goodreader.com/goodreader-networking-built-in-web-browser)
