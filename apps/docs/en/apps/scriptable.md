---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openScript, addScript, runScript } from 'protocol-launcher/scriptable';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openScriptParams, openScriptWithSettingsParams, runScriptParams, runScriptWithEditorParams } from '../../.vitepress/constants/scriptable';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/scriptable' : 'protocol-launcher');
</script>

# Scriptable

[Scriptable](https://www.scriptable.app/) is an automation app for iOS that lets you write JavaScript scripts to interact with native iOS APIs. **Protocol Launcher** allows you to generate deep links to open Scriptable, create new scripts, or run existing scripts.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Scriptable
  </VPLink>
</div>

### Add Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}addScript()
```

<div class="flex justify-center">
  <VPLink :href="addScript()" target="_self">
    Add New Script
  </VPLink>
</div>

### Open Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}openScript({
  scriptName: 'Example',
})
```

<div class="flex justify-center">
  <VPLink :href="openScript(openScriptParams)" target="_self">
    Open Script in Scriptable
  </VPLink>
</div>

### Open Script with Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}openScript({
  scriptName: 'Example',
  openSettings: true,
})
```

<div class="flex justify-center">
  <VPLink :href="openScript(openScriptWithSettingsParams)" target="_self">
    Open Script with Settings
  </VPLink>
</div>

### Run Script

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}runScript({
  scriptName: 'Example',
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptParams)" target="_self">
    Run Script
  </VPLink>
</div>

### Run Script with Editor

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'scriptable' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scriptable.'}}runScript({
  scriptName: 'Example',
  openEditor: true,
})
```

<div class="flex justify-center">
  <VPLink :href="runScript(runScriptWithEditorParams)" target="_self">
    Run Script with Editor
  </VPLink>
</div>
