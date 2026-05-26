---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openScript, runScript, exec } from 'protocol-launcher/pythonista';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  execParams,
  openICloudPathScriptParams,
  openICloudScriptParams,
  openPythonista2Params,
  openPythonista3Params,
  openScriptParams,
  runICloudScriptParams,
  runScriptParams,
  runScriptWithArgsParams,
  runScriptWithArgvParams,
  runScriptWithPyParams,
  runScriptWithVersionParams,
} from '../../.vitepress/constants/pythonista';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pythonista' : 'protocol-launcher');
</script>

# Pythonista

[Pythonista](https://omz-software.com/pythonista/) is a Python development environment for iOS. **Protocol Launcher** allows you to generate deep links to open Pythonista, edit or run scripts, pass command-line arguments, select the Python interpreter version, and execute embedded code.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Pythonista
  </VPLink>
</div>

### Open Pythonista 3

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open({
  scheme: 'pythonista3',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openPythonista3Params)" target="_self">
    Open Pythonista 3
  </VPLink>
</div>

### Open Pythonista 2

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}open({
  scheme: 'pythonista2',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openPythonista2Params)" target="_self">
    Open Pythonista 2
  </VPLink>
</div>

### Open Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'MyScript.py',
})
```

<div class="flex justify-center">
  <VPLink :href="openScript(openScriptParams)" target="_self">
    Open Script in Pythonista
  </VPLink>
</div>

### Open iCloud Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'MyScript.py',
  root: 'icloud',
})
```

<div class="flex justify-center">
  <VPLink :href="openScript(openICloudScriptParams)" target="_self">
    Open iCloud Script
  </VPLink>
</div>

### Open iCloud Script by Path

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}openScript({
  path: 'iCloud/MyScript.py',
})
```

<div class="flex justify-center">
  <VPLink :href="openScript(openICloudPathScriptParams)" target="_self">
    Open iCloud Script by Path
  </VPLink>
</div>

### Run Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptParams)" target="_self">
    Run Script
  </VPLink>
</div>

### Run iCloud Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  root: 'icloud',
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runICloudScriptParams)" target="_self">
    Run iCloud Script
  </VPLink>
</div>

### Run Script with args

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript',
  args: 'foo bar',
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptWithArgsParams)" target="_self">
    Run Script with args
  </VPLink>
</div>

### Run Script with argv

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript',
  argv: ['foo', 'bar'],
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptWithArgvParams)" target="_self">
    Run Script with argv
  </VPLink>
</div>

### Run Script with version

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  version: 3,
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptWithVersionParams)" target="_self">
    Run Script with version
  </VPLink>
</div>

### Run Script with py

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}runScript({
  path: 'MyScript.py',
  py: 3,
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptWithPyParams)" target="_self">
    Run Script with py
  </VPLink>
</div>

### Execute Code

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exec' : 'pythonista' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pythonista.'}}exec({
  code: 'print("Hello from Pythonista")',
})
```

<div class="flex justify-center">
  <VPLink :href="exec(execParams)" target="_self">
    Execute Code in Pythonista
  </VPLink>
</div>
