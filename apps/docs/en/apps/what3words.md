---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { showCurrentLocation, showThreeWords } from 'protocol-launcher/what3words';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/what3words' : 'protocol-launcher');
</script>

# what3words

[what3words](https://what3words.com/) is a location app for finding and sharing precise locations with 3 word addresses. **Protocol Launcher** allows you to generate mobile links to open the what3words app at the user's current location or navigate to a 3 word address.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

The official what3words mobile linking documentation lists two supported `w3w://show` URI forms: `?currentlocation` and `?threewords=[word.word.word]`. This module exposes only those documented forms.

### Show Current Location

Generate the documented URL that opens the what3words app at the user's current location.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showCurrentLocation' : 'what3words' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'what3words.'}}showCurrentLocation()
```

<div class="flex justify-center">
  <VPLink :href="showCurrentLocation()" target="_self">
    Show Current Location
  </VPLink>
</div>

### Show Three Words

Generate the documented URL that navigates to a 3 word address in the what3words app. Pass the address in `word.word.word` form.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showThreeWords' : 'what3words' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'what3words.'}}showThreeWords({
  threeWords: 'daring.lion.race',
})
```

<div class="flex justify-center">
  <VPLink :href="showThreeWords({ threeWords: 'daring.lion.race' })" target="_self">
    Show 3 Word Address
  </VPLink>
</div>

## Generated URLs

```ts
showCurrentLocation()
// => 'w3w://show?currentlocation'

showThreeWords({ threeWords: 'daring.lion.race' })
// => 'w3w://show?threewords=daring.lion.race'
```

## Official Documentation

- [Mobile linking to the what3words app](https://developer.what3words.com/tutorial/mobile-linking-to-the-what3words-app)
