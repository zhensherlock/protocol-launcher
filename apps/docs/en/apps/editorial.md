---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  back,
  command,
  newFile,
  open,
  openWeb,
} from 'protocol-launcher/editorial';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openParams,
  openWithRootParams,
  openWithSelectionParams,
  openWithCommandParams,
  newFileParams,
  newFileWithRootParams,
  newFileWithSelectionParams,
  newFileWithCommandParams,
  openWebHttpParams,
  openWebHttpsParams,
  commandParams,
  commandWithInputParams,
  commandWithSuccessParams,
} from '../../.vitepress/constants/editorial';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/editorial' : 'protocol-launcher');
</script>

# Editorial

[Editorial](https://omz-software.com/editorial/) is a powerful text editor and automation app for iOS and iPadOS. It features a Python-based scripting environment and workflow automation capabilities. **Protocol Launcher** allows you to generate deep links to open files, create new documents, run workflows, and open web pages in Editorial.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Editorial

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'back' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}back()
```

<div class="flex justify-center">
  <VPLink :href="back()" target="_self">
    Open Editorial
  </VPLink>
</div>

### Open Existing File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    Open File in Editorial
  </VPLink>
</div>

### Open File from Dropbox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  root: 'dropbox',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithRootParams)" target="_self">
    Open File from Dropbox
  </VPLink>
</div>

### Open File with Selection

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  selection: '0-10',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithSelectionParams)" target="_self">
    Open File with Text Selection
  </VPLink>
</div>

### Open File with Workflow Command

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}open({
  filename: 'myfile.txt',
  command: 'My Workflow',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithCommandParams)" target="_self">
    Open File and Run Workflow
  </VPLink>
</div>

### Create New File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileParams)" target="_self">
    Create New File
  </VPLink>
</div>

### Create New File in Dropbox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  root: 'dropbox',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileWithRootParams)" target="_self">
    Create New File in Dropbox
  </VPLink>
</div>

### Create New File with Selection

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  selection: '0-10',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileWithSelectionParams)" target="_self">
    Create New File with Selection
  </VPLink>
</div>

### Create New File with Workflow Command

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFile' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}newFile({
  filename: 'newfile.txt',
  command: 'My Workflow',
})
```

<div class="flex justify-center">
  <VPLink :href="newFile(newFileWithCommandParams)" target="_self">
    Create New File and Run Workflow
  </VPLink>
</div>

### Open Web Page (HTTP)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeb' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}openWeb({
  url: 'http://apple.com',
})
```

<div class="flex justify-center">
  <VPLink :href="openWeb(openWebHttpParams)" target="_self">
    Open HTTP Page
  </VPLink>
</div>

### Open Web Page (HTTPS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWeb' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}openWeb({
  url: 'https://google.com',
})
```

<div class="flex justify-center">
  <VPLink :href="openWeb(openWebHttpsParams)" target="_self">
    Open HTTPS Page
  </VPLink>
</div>

### Run Workflow Command

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
})
```

<div class="flex justify-center">
  <VPLink :href="command(commandParams)" target="_self">
    Run Workflow
  </VPLink>
</div>

### Run Workflow with Input

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
  input: 'some input',
})
```

<div class="flex justify-center">
  <VPLink :href="command(commandWithInputParams)" target="_self">
    Run Workflow with Input
  </VPLink>
</div>

### Run Workflow with Success Callback

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'editorial' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'editorial.'}}command({
  command: 'My Workflow',
  xSuccess: 'myapp://success',
})
```

<div class="flex justify-center">
  <VPLink :href="command(commandWithSuccessParams)" target="_self">
    Run Workflow with Callback
  </VPLink>
</div>
