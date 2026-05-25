---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { urlEvent } from 'protocol-launcher/hammerspoon';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { multiParamUrlEventParams, urlEventParams } from '../../.vitepress/constants/hammerspoon';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/hammerspoon' : 'protocol-launcher');
</script>

# Hammerspoon

[Hammerspoon](https://www.hammerspoon.org/) is a macOS automation tool that lets you script and control the system with Lua.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### URL Event

Generate a Hammerspoon URL event for a callback registered with `hs.urlevent.bind`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'urlEvent' : 'hammerspoon' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hammerspoon.'}}urlEvent({
  eventName: 'doThingA',
  params: {
    value: '1',
  },
})

const multiParamUrl = {{currentMethod === 'On-Demand' ? '' : 'hammerspoon.'}}urlEvent({
  eventName: 'someEventToHandle',
  params: {
    someParam: 'things',
    otherParam: 'stuff',
  },
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="urlEvent(urlEventParams)" target="_self">
    Send URL Event
  </VPLink>
  <VPLink :href="urlEvent(multiParamUrlEventParams)" target="_self">
    Send URL Event with Parameters
  </VPLink>
</div>

## Official Documentation

- [Hammerspoon hs.urlevent](https://www.hammerspoon.org/docs/hs.urlevent.html)
