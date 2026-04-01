---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, newFile, append, replace } from 'protocol-launcher/coda';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { newFileParams, appendParams, replaceParams } from '../../.vitepress/constants/coda';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/coda' : 'protocol-launcher');
</script>

# Coda

[Coda](https://panic.com/code-editor) (now known as Code Editor) is a portable code editor for iOS, perfect for quick web edits on the go. **Protocol Launcher** allows you to generate deep links to create and edit files in Coda.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Coda
  </VPLink>
</div>

### New File

Creates a new file in Coda. If one exists, a file with a unique name will be created.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}newFile({
  name: 'foo.txt',
  text: 'bar',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileParams)" target="_self">
    New File in Coda
  </VPLink>
</div>

### Append

Append text to a file in Coda, creating it if necessary.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}append({
  name: 'foo.txt',
  text: 'bar',
})
```

<div class="flex justify-center">
  <VPLink :href="append(appendParams)" target="_self">
    Append to File in Coda
  </VPLink>
</div>

### Replace

Replaces the contents of a file in Coda, creating it if necessary.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replace' : 'coda' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'coda.'}}replace({
  name: 'foo.txt',
  text: 'bar',
})
```

<div class="flex justify-center">
  <VPLink :href="replace(replaceParams)" target="_self">
    Replace File in Coda
  </VPLink>
</div>
