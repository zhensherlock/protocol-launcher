---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, search } from 'protocol-launcher/dict-cc';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openParams, searchParams } from '../../.vitepress/constants/dict-cc';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/dict-cc' : 'protocol-launcher');
</script>

# dict.cc

[dict.cc](https://www.dict.cc/) is a free English-German and multilingual dictionary. **Protocol Launcher** allows you to generate deep links to search for translations in dict.cc.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open dict.cc

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open dict.cc
  </VPLink>
</div>

### Open dict.cc Plus

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}open({
  plus: true,
})
```

<div class="flex justify-center">
  <VPLink :href="open({ plus: true })" target="_self">
    Open dict.cc Plus
  </VPLink>
</div>

### Search with Word

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}open({
  word: 'hello',
  languagePair: 'de-en',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    Search in dict.cc
  </VPLink>
</div>

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'dictCc' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dictCc.'}}search({
  word: 'world',
  languagePair: 'en-de',
  newSearch: true,
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in dict.cc
  </VPLink>
</div>
