---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { cloneProject } from 'protocol-launcher/xcode';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  cloneProjectParams,
} from '../../.vitepress/constants/xcode';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/xcode' : 'protocol-launcher');
</script>

# Xcode

[Xcode](https://developer.apple.com/xcode/) is an integrated development environment for Apple platforms. **Protocol Launcher** allows you to generate deep links to open and configure resources in Xcode.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Clone Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cloneProject' : 'xcode' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'xcode.'}}cloneProject({
  url: 'https://github.com/zhensherlock/protocol-launcher',
})
```
<div class="flex justify-center">
  <VPLink :href="cloneProject(cloneProjectParams)" target="_self">
    Open in Xcode
  </VPLink>
</div>
