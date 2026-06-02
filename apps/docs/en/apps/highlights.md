---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, openFileAtPage } from 'protocol-launcher/highlights';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openFileAtPageParams, openFileParams } from '../../.vitepress/constants/highlights';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/highlights' : 'protocol-launcher',
);
</script>

# Highlights

[Highlights](https://highlightsapp.net/) is a PDF reader for reading and annotating PDF documents. **Protocol Launcher** allows you to generate Highlights URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open File

Open a PDF file using the documented `highlights://Users/test.pdf` URL shape.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'highlights' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'highlights.'}}openFile({
  path: '/Users/test.pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    Open File in Highlights
  </VPLink>
</div>

### Open File At Page

Open the same PDF file and scroll to a documented page fragment.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFileAtPage' : 'highlights' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'highlights.'}}openFileAtPage({
  path: '/Users/test.pdf',
  page: 3,
})
```

<div class="flex justify-center">
  <VPLink :href="openFileAtPage(openFileAtPageParams)" target="_self">
    Open File at Page in Highlights
  </VPLink>
</div>

## References

- [Highlights Version 1.2 URL-scheme notes](https://highlightsapp.net/changelog/2015/01/03/Version-1.2/)
