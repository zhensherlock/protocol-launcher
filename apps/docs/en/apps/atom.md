---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile } from 'protocol-launcher/atom';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  openFileParams,
} from '../../.vitepress/constants/atom';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/atom' : 'protocol-launcher');
</script>

# Atom

[Atom](https://atom.io/) is a free and open-source text editor for macOS, Windows, and Linux. Built with HTML, JavaScript, CSS, and Node.js integration, it runs on the Electron framework. It features cross-platform editing, a built-in package manager, and deep integration with Git and GitHub. **Protocol Launcher** allows you to generate deep links to open resources in Atom.

::: info
Atom and all its repositories were archived on December 15, 2022.
:::

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Atom
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'atom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'atom.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Atom
  </VPLink>
</div>

### Open File
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'atom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'atom.'}}openFile({
  path: '{{ appStore.isWindows ? 'C:\Windows\System32\drivers\etc\hosts' : '/etc/hosts' }}',
  line: 1,
  column: 2,
})
```
<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams(appStore.isWindows))" target="_self">
    Open in Atom
  </VPLink>
</div>
