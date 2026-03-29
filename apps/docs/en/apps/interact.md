---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, scratchpad } from 'protocol-launcher/interact';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { scratchpadParams } from '../../.vitepress/constants/interact';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/interact' : 'protocol-launcher');
</script>

# Interact Scratchpad

[Interact Scratchpad](https://docs.getdrafts.com/docs/misc/interact-scratchpad) is a free Mac menu bar utility to ease the creation of contacts from snippets of text, like email signatures and more. **Protocol Launcher** allows you to generate deep links to open the Interact Scratchpad with pre-filled text for contact parsing.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Interact Scratchpad

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'interact' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'interact.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Interact Scratchpad
  </VPLink>
</div>

### Open Scratchpad with Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scratchpad' : 'interact' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'interact.'}}scratchpad({
  text: 'John Doe\njohn@example.com\n888-555-1234',
})
```

<div class="flex justify-center">
  <VPLink :href="scratchpad(scratchpadParams)" target="_self">
    Open Scratchpad with Text
  </VPLink>
</div>
