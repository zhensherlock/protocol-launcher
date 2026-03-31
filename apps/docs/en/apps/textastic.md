---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, newFile, append, replace, reloadCustomizations } from 'protocol-launcher/textastic';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import { openFileParams, newFileParams, appendParams, replaceParams } from '../../.vitepress/constants/textastic';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/textastic' : 'protocol-launcher');
</script>

# Textastic

[Textastic](https://www.textasticapp.com/) is a powerful text editor for iOS, iPadOS, and macOS with syntax highlighting for over 80 programming and markup languages. **Protocol Launcher** allows you to generate deep links to open, create, and edit files in Textastic.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Textastic
  </VPLink>
</div>

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}openFile({
  path: 'example.com',
  name: 'index.html',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    Open File in Textastic
  </VPLink>
</div>

### New File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}newFile({
  name: 'foo.txt',
  text: 'bar',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileParams)" target="_self">
    Create New File in Textastic
  </VPLink>
</div>

### Append Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}append({
  location: 'iCloud',
  name: 'clipboard.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="append(appendParams)" target="_self">
    Append Text in Textastic
  </VPLink>
</div>

### Replace Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}replace({
  location: 'iCloud',
  name: 'scratchpad.txt',
  text: 'foo',
})
```

<div class="flex justify-center">
  <VPLink :href="replace(replaceParams)" target="_self">
    Replace Text in Textastic
  </VPLink>
</div>

### Reload Customizations

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reloadCustomizations' : 'textastic' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'textastic.'}}reloadCustomizations()
```

<div class="flex justify-center">
  <VPLink :href="reloadCustomizations()" target="_self">
    Reload Customizations in Textastic
  </VPLink>
</div>
