---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openTaskOrGroup } from 'protocol-launcher/tim';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openTaskOrGroupParams } from '../../.vitepress/constants/tim';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/tim' : 'protocol-launcher');
</script>

# Tim

[Tim](https://tim.neat.software/) is a macOS time tracker. **Protocol Launcher** allows you to generate Tim deep links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Tim's official help page documents exactly these URL forms: `tim://`, `tim://[id]`, `tim://[id]?action=start&notes=My%20Notes`, `tim://?action=stop`, `tim://create?type=[task|group]&title=My%20Title&notes=My%20Notes`, and `tim://x-callback-url/getCurrentUrl?x-success=https://www.apple.com`.

`createTask()` and `createGroup()` expose only the documented `task`/`group` type plus `title` and `notes`. The official page does not name any other query fields, so this module does not add them.

### Open Tim

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Tim
  </VPLink>
</div>

### Open Task Or Group

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTaskOrGroup' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}openTaskOrGroup({
  id: 'D43FA035-6406-495D-9ADD-46721986040F',
})
```

<div class="flex justify-center">
  <VPLink :href="openTaskOrGroup(openTaskOrGroupParams)" target="_self">
    Open Task Or Group
  </VPLink>
</div>

### Start Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTask' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}startTask({
  id: 'D43FA035-6406-495D-9ADD-46721986040F',
  notes: 'My Notes',
})
```

### Stop Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stopTimer' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}stopTimer()
```

### Create Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTask' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}createTask({
  title: 'My Title',
  notes: 'My Notes',
})
```

### Create Group

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createGroup' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}createGroup({
  title: 'My Title',
  notes: 'My Notes',
})
```

### Get Current URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getCurrentUrl' : 'tim' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tim.'}}getCurrentUrl({
  xSuccess: 'https://www.apple.com',
})
```

## Generated URLs

```ts
open()
// => 'tim://'

openTaskOrGroup({
  id: 'D43FA035-6406-495D-9ADD-46721986040F',
})
// => 'tim://D43FA035-6406-495D-9ADD-46721986040F'

startTask({
  id: 'D43FA035-6406-495D-9ADD-46721986040F',
  notes: 'My Notes',
})
// => 'tim://D43FA035-6406-495D-9ADD-46721986040F?action=start&notes=My%20Notes'

stopTimer()
// => 'tim://?action=stop'

createTask({
  title: 'My Title',
  notes: 'My Notes',
})
// => 'tim://create?type=task&title=My%20Title&notes=My%20Notes'

createGroup({
  title: 'My Title',
  notes: 'My Notes',
})
// => 'tim://create?type=group&title=My%20Title&notes=My%20Notes'

getCurrentUrl({
  xSuccess: 'https://www.apple.com',
})
// => 'tim://x-callback-url/getCurrentUrl?x-success=https://www.apple.com'
```

## Official Documentation

- [Tim Time Tracker Help](https://tim.neat.software/help)
