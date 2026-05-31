---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { scanId } from 'protocol-launcher/scannr';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { scanIdWithCallbackParams } from '../../.vitepress/constants/scannr';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/scannr' : 'protocol-launcher');
</script>

# Scannr

[Scannr](https://scannrapp.com/) is an app for ID scanning to obtain data from driver's licences. **Protocol Launcher** allows you to generate the official Scannr URL scheme links documented as `scannr://` and `scannr://?callbackScheme=<foo>`.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Scan ID

Launch Scannr with the Android URL scheme documented as `scannr://`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scanId' : 'scannr' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scannr.'}}scanId()
```

<div class="flex justify-center">
  <VPLink :href="scanId()" target="_self">
    Scan ID with Scannr
  </VPLink>
</div>

### Scan ID with iOS Callback

Launch Scannr with the iOS URL scheme documented as `scannr://?callbackScheme=<foo>`. The calling app must define the `foo` URL scheme and follow Scannr's `LSApplicationQueriesSchemes` setup.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scanId' : 'scannr' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'scannr.'}}scanId({
  callbackScheme: 'foo',
})
```

<div class="flex justify-center">
  <VPLink :href="scanId(scanIdWithCallbackParams)" target="_self">
    Scan ID with iOS Callback
  </VPLink>
</div>

## Official Documentation

- [Scannr URL scheme integration](https://scannrapp.com/scannr_url_scheme.pdf)
