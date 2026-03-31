---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { addItem, clearList, createList, showList, showLists } from 'protocol-launcher/shopi';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { addItemParams, clearListParams, createListParams, showListParams } from '../../.vitepress/constants/shopi';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/shopi' : 'protocol-launcher');
</script>

# Shopi

[Shopi](http://sapient-pair.com/shopi/) is a clever shopping list app for iPhone that's focused on helping you capture and shop for the items you want to buy. **Protocol Launcher** allows you to generate deep links to add items, create lists, and manage your shopping lists in Shopi.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Show Lists

Show all shopping lists in Shopi.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showLists' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}showLists()
```

<div class="flex justify-center">
  <VPLink :href="showLists()" target="_self">
    Show All Lists
  </VPLink>
</div>

### Show List

Show a specific shopping list in Shopi.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showList' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}showList({
  name: 'groceries',
})
```

<div class="flex justify-center">
  <VPLink :href="showList(showListParams)" target="_self">
    Show List
  </VPLink>
</div>

### Create List

Create a new shopping list in Shopi.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createList' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}createList({
  name: 'weekly shopping',
})
```

<div class="flex justify-center">
  <VPLink :href="createList(createListParams)" target="_self">
    Create List
  </VPLink>
</div>

### Add Item

Add an item to a shopping list in Shopi.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addItem' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}addItem({
  list: 'groceries',
  name: 'milk',
  amount: '2',
})
```

<div class="flex justify-center">
  <VPLink :href="addItem(addItemParams)" target="_self">
    Add Item
  </VPLink>
</div>

### Clear List

Clear items from a shopping list in Shopi.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clearList' : 'shopi' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shopi.'}}clearList({
  name: 'groceries',
  crossedOnly: 'yes',
})
```

<div class="flex justify-center">
  <VPLink :href="clearList(clearListParams)" target="_self">
    Clear List
  </VPLink>
</div>
