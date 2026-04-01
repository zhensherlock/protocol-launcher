---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, runCode } from 'protocol-launcher/pyto';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { runCodeParams, runCodeWithXSuccessParams } from '../../.vitepress/constants/pyto';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/pyto' : 'protocol-launcher');
</script>

# Pyto

[Pyto](https://pyto.readthedocs.io/) is an open source app to code and run Python code locally on an iPad or iPhone. **Protocol Launcher** allows you to generate deep links to run Python code in Pyto using x-callback URLs.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Pyto
  </VPLink>
</div>

### Run Code

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runCode' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}runCode({
  code: 'import sys; print(sys.version)',
})
```

<div class="flex justify-center">
  <VPLink :href="runCode(runCodeParams)" target="_self">
    Run Python Code in Pyto
  </VPLink>
</div>

### Run Code with Callback

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runCode' : 'pyto' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pyto.'}}runCode({
  code: 'import sys; print(sys.version)',
  xSuccess: 'shortcuts://run-shortcut?name=HandleResult',
})
```

<div class="flex justify-center">
  <VPLink :href="runCode(runCodeWithXSuccessParams)" target="_self">
    Run Code with Success Callback
  </VPLink>
</div>
