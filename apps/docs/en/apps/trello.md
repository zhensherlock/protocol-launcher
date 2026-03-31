---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, createBoard, createCard, showBoard, showCard } from 'protocol-launcher/trello';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  createBoardParams,
  createCardParams,
  showBoardParams,
  showCardParams,
} from '../../.vitepress/constants/trello';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/trello' : 'protocol-launcher');
</script>

# Trello

[Trello](https://trello.com/) is a collaboration tool that organizes your projects into boards. **Protocol Launcher** allows you to generate deep links to create boards and cards, and navigate to specific content in Trello.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Trello

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Trello
  </VPLink>
</div>

### Create Board

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createBoard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}createBoard({
  name: 'My New Board',
  organization: 'My Organization',
  permission: 'private',
  xSuccess: 'myapp://success',
  xError: 'myapp://failure',
})
```

<div class="flex justify-center">
  <VPLink :href="createBoard(createBoardParams)" target="_self">
    Create Board in Trello
  </VPLink>
</div>

### Create Card

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createCard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}createCard({
  shortlink: '81QRDHnt',
  name: 'MyCardName',
  description: 'MyCardDescription',
  listId: '526e7338ffa7dfb94d0084a7',
})
```

<div class="flex justify-center">
  <VPLink :href="createCard(createCardParams)" target="_self">
    Create Card in Trello
  </VPLink>
</div>

### Show Board

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showBoard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}showBoard({
  shortlink: '81QRDHnt',
  xSource: 'MyTestApp',
})
```

<div class="flex justify-center">
  <VPLink :href="showBoard(showBoardParams)" target="_self">
    Show Board in Trello
  </VPLink>
</div>

### Show Card

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showCard' : 'trello' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'trello.'}}showCard({
  id: '526e7338ffa7dfb94d0084a6',
  xSource: 'MyTestApp',
})
```

<div class="flex justify-center">
  <VPLink :href="showCard(showCardParams)" target="_self">
    Show Card in Trello
  </VPLink>
</div>
