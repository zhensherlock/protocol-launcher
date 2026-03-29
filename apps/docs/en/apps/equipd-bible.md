---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, lookup, scripture } from 'protocol-launcher/equipd-bible';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { lookupParams, scriptureParams } from '../../.vitepress/constants/equipd-bible';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/equipd-bible' : 'protocol-launcher');
</script>

# Equipd Bible

[Equipd Bible](https://www.equipd.me/) is an EPUB reader optimised for Bible study and ministry use. Compare multiple languages and translations side-by-side. **Protocol Launcher** allows you to generate deep links to open scriptures in Equipd Bible.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'equipdBible' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'equipdBible.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Equipd Bible
  </VPLink>
</div>

### Lookup Scripture

Lookup a scripture in Equipd Bible using the x-callback-url scheme. This is the most powerful method of integrating with the Equipd Bible app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'lookup' : 'equipdBible' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'equipdBible.'}}lookup({
  scripture: 'John3:16',
})
```

<div class="flex justify-center">
  <VPLink :href="lookup(lookupParams)" target="_self">
    Lookup Scripture in Equipd Bible
  </VPLink>
</div>

### Open Scripture

Open a specific scripture in Equipd Bible using the basic URL scheme.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scripture' : 'equipdBible' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'equipdBible.'}}scripture({
  scripture: '2Timothy3:15,16',
})
```

<div class="flex justify-center">
  <VPLink :href="scripture(scriptureParams)" target="_self">
    Open Scripture in Equipd Bible
  </VPLink>
</div>
