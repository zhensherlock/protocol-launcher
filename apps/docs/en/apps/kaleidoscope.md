---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, compare, clipboard, history } from 'protocol-launcher/kaleidoscope';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  compareParams,
  clipboardParams,
  historyParams,
} from '../../.vitepress/constants/kaleidoscope';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/kaleidoscope' : 'protocol-launcher');
</script>

# Kaleidoscope

[Kaleidoscope](https://kaleidoscope.app/) is the world's most powerful file comparison and merge app. It allows you to spot differences in text and image files, or even folders full of files. **Protocol Launcher** allows you to generate deep links to open and compare resources in Kaleidoscope.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Kaleidoscope
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Kaleidoscope
  </VPLink>
</div>

### Compare Files
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'compare' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}compare({
  previousPath: '/Users/dev/Desktop/previous.md',
  latestPath: '/Users/dev/Desktop/latest.md',
})
```
<div class="flex justify-center">
  <VPLink :href="compare(compareParams)" target="_self">
    Open in Kaleidoscope
  </VPLink>
</div>

### Compare Clipboard
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clipboard' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}clipboard({
  label: 'Clipboard',
})
```
<div class="flex justify-center">
  <VPLink :href="clipboard(clipboardParams)" target="_self">
    Open in Kaleidoscope
  </VPLink>
</div>

### Open History
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'history' : 'kaleidoscope' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'kaleidoscope.'}}history({
  label: 'History',
  filePath: '/Users/dev/protocol-launcher/packages/protocol-launcher/src/kaleidoscope/history.ts',
})
```
<div class="flex justify-center">
  <VPLink :href="history(historyParams)" target="_self">
    Open in Kaleidoscope
  </VPLink>
</div>
