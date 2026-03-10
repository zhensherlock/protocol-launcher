---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, addScript } from 'protocol-launcher/apple-script';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addScriptParams,
} from '../../.vitepress/constants/apple-script';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/apple-script' : 'protocol-launcher');
</script>

# Apple Script Editor

AppleScript is a scripting language created by Apple that allows you to control scriptable macOS applications and parts of the operating system itself. You can write scripts to automate repetitive tasks, combine features from different applications, and build complex workflows. **Protocol Launcher** provides utilities to generate and execute AppleScripts.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Apple Script Editor
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'appleScript' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleScript.'}}open()
```
<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Apple Script Editor
  </VPLink>
</div>

### Add Script
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addScript' : 'appleScript' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'appleScript.'}}addScript({
  script: 'display dialog "Hello, World!"'
})
```
<div class="flex justify-center">
  <VPLink :href="addScript(addScriptParams)" target="_self">
    OpenOpen in Apple Script Editor
  </VPLink>
</div>
