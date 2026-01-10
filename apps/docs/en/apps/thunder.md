---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { downloadUrl } from 'protocol-launcher/thunder';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  downloadUrlParams,
} from '../../.vitepress/constants/thunder';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/thunder' : 'protocol-launcher');
</script>

# Thunder

[Thunder](https://www.xunlei.com/) is a popular download manager. **Protocol Launcher** allows you to generate deep links to automatically open download resources in Thunder.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Download URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadUrl' : 'thunder' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'thunder.'}}downloadUrl({
  url: 'https://raw.githubusercontent.com/zhensherlock/zhensherlock/main/profile-3d-contrib/profile-night-view.svg',
})
```
<div class="flex justify-center">
  <VPLink :href="downloadUrl(downloadUrlParams)" target="_self">
    Open in Thunder
  </VPLink>
</div>
