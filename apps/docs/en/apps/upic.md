---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, uploadFile } from 'protocol-launcher/upic';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import { uploadFileParams } from '../../.vitepress/constants/upic';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/upic' : 'protocol-launcher');
</script>

# uPic

[uPic](https://blog.svend.cc/upic/) is a simple Mac image hosting client. **Protocol Launcher** allows you to generate deep links to upload files in uPic.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open uPic

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'upic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upic.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open uPic
  </VPLink>
</div>

### Upload File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'uploadFile' : 'upic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'upic.'}}uploadFile({
  filePath: '{{ appStore.isWindows ? 'C:\\Users\\Public\\Pictures\\test.png' : '/Users/Public/Pictures/test.png' }}',
})
```

<div class="flex justify-center">
  <VPLink :href="uploadFile(uploadFileParams(appStore.isWindows))" target="_self">
    Upload File in uPic
  </VPLink>
</div>
