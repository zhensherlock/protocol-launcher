---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, add } from 'protocol-launcher/cal2todo';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { addParams, addWithCallbackParams } from '../../.vitepress/constants/cal2todo';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/cal2todo' : 'protocol-launcher');
</script>

# Cal2Todo

[Cal2Todo](https://apps.apple.com/sg/app/cal2todo/id475987733) is a simple calendar and task manager for iOS. **Protocol Launcher** allows you to generate deep links to add events to Cal2Todo.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Cal2Todo
  </VPLink>
</div>

### Add Event

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}add({
  title: 'Meeting',
  notes: 'Discuss project roadmap',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addParams)" target="_self">
    Add Event
  </VPLink>
</div>

### Add Event with Callback URLs

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}add({
  title: 'Meeting',
  xSuccess: 'myapp://ok',
  xSource: 'myapp',
  xError: 'myapp://cancel',
})
```

<div class="flex justify-center">
  <VPLink :href="add(addWithCallbackParams)" target="_self">
    Add Event with Callback
  </VPLink>
</div>
