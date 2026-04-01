---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, lookup, search } from 'protocol-launcher/terminology';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { lookupParams, searchParams } from '../../.vitepress/constants/terminology';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/terminology' : 'protocol-launcher',
);
</script>

# Terminology

[Terminology](https://agiletortoise.com/terminology/) is a browser for the English language – part dictionary, part thesaurus, and part research tool. **Protocol Launcher** allows you to generate deep links to look up words and search in Terminology.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Terminology

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'terminology' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'terminology.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Terminology
  </VPLink>
</div>

### Lookup Word

Open directly to a detail look up for a term in Terminology.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'lookup' : 'terminology' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'terminology.'}}lookup({
  text: 'automation',
})
```

<div class="flex justify-center">
  <VPLink :href="lookup(lookupParams)" target="_self">
    Open in Terminology
  </VPLink>
</div>

### Search

Open directly to a word search for a string in Terminology.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'terminology' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'terminology.'}}search({
  q: 'protocol',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Open in Terminology
  </VPLink>
</div>
