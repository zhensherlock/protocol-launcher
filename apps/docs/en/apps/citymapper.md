---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { directions, webDirections } from 'protocol-launcher/citymapper';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  destinationDirectionsParams,
  eventDirectionsParams,
} from '../../.vitepress/constants/citymapper';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/citymapper' : 'protocol-launcher');
</script>

# Citymapper

[Citymapper](https://citymapper.com/) is a public transport and urban navigation app. **Protocol Launcher** allows you to generate official Citymapper directions links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Citymapper documents `endcoord` as the required destination coordinate, formatted as `latitude,longitude`. `endname` and `endaddress` are optional destination details. `startcoord`, `startname`, and `startaddress` use the same format for an explicit start point.

`arrivalTime` maps to Citymapper's documented `arrival_time` parameter and should be an ISO-8601 date/time string. Citymapper's page also mentions the older `arriveby` parameter as deprecated, so this module only exposes `arrivalTime`.

For x-callback-url links, `xSource` and `xSuccess` serialize to the official `x-source` and `x-success` parameters.

### Web Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'webDirections' : 'citymapper' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'citymapper.'}}webDirections({
  endcoord: '51.537060,-0.079179',
  endname: 'The Proud Archivist',
  endaddress: '2-10 Hertford Road, London, N1 5ET',
})
```

<div class="flex justify-center">
  <VPLink :href="webDirections(destinationDirectionsParams)" target="_self">
    Open Citymapper Web Directions
  </VPLink>
</div>

### Native Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'citymapper' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'citymapper.'}}directions({
  endcoord: '51.537060,-0.079179',
  endname: 'The Proud Archivist',
  endaddress: '2-10 Hertford Road, London, N1 5ET',
})
```

<div class="flex justify-center">
  <VPLink :href="directions(destinationDirectionsParams)" target="_self">
    Open Citymapper App Directions
  </VPLink>
</div>

### Directions With Arrival Time

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'directions' : 'citymapper' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'citymapper.'}}directions({
  startcoord: '51.500729,-0.124625',
  startname: 'Westminster',
  startaddress: 'London SW1A 0AA',
  endcoord: '51.537060,-0.079179',
  endname: 'The Proud Archivist',
  endaddress: '2-10 Hertford Road, London, N1 5ET',
  arrivalTime: '2016-08-06T21:00+01:00',
})
```

<div class="flex justify-center">
  <VPLink :href="directions(eventDirectionsParams)" target="_self">
    Open Timed Directions
  </VPLink>
</div>

### X-Callback Directions

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackDirections' : 'citymapper' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'citymapper.'}}xCallbackDirections({
  endcoord: '51.537060,-0.079179',
  endname: 'The Proud Archivist',
  endaddress: '2-10 Hertford Road, London, N1 5ET',
  xSource: 'My App Name',
  xSuccess: 'myappscheme://',
})
```

## Official Documentation

- [Launch Citymapper for Directions](https://citymapper.com/tools/1053/automatically-generating-citymapper-directions-links)
