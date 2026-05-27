---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFile, runScript } from 'protocol-launcher/filemaker';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openDocumentsFileParams,
  openHostedFileParams,
  openVersionedFileParams,
  runScriptOpenFileParams,
  runScriptParams,
  runScriptWithParams,
} from '../../.vitepress/constants/filemaker';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/filemaker' : 'protocol-launcher');
</script>

# Claris FileMaker

[Claris FileMaker](https://www.claris.com/filemaker/) is a database app platform. **Protocol Launcher** allows you to generate FileMaker Pro URLs for opening files and running scripts.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

The helpers below mirror Claris's official [Opening FileMaker Pro files using a URL](https://help.claris.com/en/pro-help/content/opening-files-url.html) documentation. Only the documented file-opening URL and script URL parameters are exposed: `script`, `param`, `option`, and local variables.

### Open File

Open a shared or local FileMaker Pro file. The official URL format supports `fmp` for the last installed version and `fmpXX` for a specific major version. The `address` can be a DNS name or IP address, `~` for the user's Documents folder, or `$` for an already open file. The optional `credentials` payload maps to the documented `account:password@` URL segment; examples omit credentials.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'filemaker' }} } from '{{ importPath }}'

const hostedUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}openFile({
  address: 'sales.example.com',
  filename: 'My Addresses.fmp12',
})

const documentsUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}openFile({
  address: '~',
  filename: 'Clients',
})

const versionedUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}openFile({
  version: 22,
  address: 'sales.example.com',
  filename: 'My Addresses',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openFile(openHostedFileParams)" target="_self">
    Open Hosted File
  </VPLink>
  <VPLink :href="openFile(openDocumentsFileParams)" target="_self">
    Open Documents File
  </VPLink>
</div>

### Run Script

Run a FileMaker script in a shared, local, or already open file. The official format allows a script parameter, an option value for handling a running script, and multiple local variables.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'filemaker' }} } from '{{ importPath }}'

const localUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}runScript({
  address: '~',
  filename: 'Clients',
  script: 'ListClients',
})

const parameterUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}runScript({
  address: 'sales.example.com',
  filename: 'Clients',
  script: 'ListClients',
  param: 'TopClients',
  option: 3,
  variables: [{ name: 'NumberToList', value: 10 }],
})

const openFileUrl = {{currentMethod === 'On-Demand' ? '' : 'filemaker.'}}runScript({
  address: '$',
  filename: 'Clients',
  script: 'ListClients',
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptParams)" target="_self">
    Run Script
  </VPLink>
</div>

## Generated URLs

```ts-vue
openFile(openHostedFileParams)
// fmp://sales.example.com/My%20Addresses.fmp12

openFile(openDocumentsFileParams)
// fmp://~/Clients

openFile(openVersionedFileParams)
// fmp22://sales.example.com/My%20Addresses

runScript(runScriptParams)
// fmp://~/Clients?script=ListClients

runScript(runScriptWithParams)
// fmp://sales.example.com/Clients?script=ListClients&param=TopClients&option=3&$NumberToList=10

runScript(runScriptOpenFileParams)
// fmp://$/Clients?script=ListClients
```

## Official Documentation

- [Opening FileMaker Pro files using a URL](https://help.claris.com/en/pro-help/content/opening-files-url.html)
