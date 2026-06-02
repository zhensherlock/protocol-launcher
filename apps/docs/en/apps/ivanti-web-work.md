---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openFullScreenHttpUrl, openFullScreenHttpsUrl, openHttpUrl, openHttpsUrl } from 'protocol-launcher/ivanti-web-work';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openFullScreenHttpUrlParams, openFullScreenHttpsUrlParams, openHttpUrlParams, openHttpsUrlParams } from '../../.vitepress/constants/ivanti-web-work';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ivanti-web-work' : 'protocol-launcher');
</script>

# Ivanti Web@Work

[Ivanti Web@Work](https://www.ivanti.com/en-gb/products/productivity-apps/web-work) is a secure mobile browser by Ivanti. **Protocol Launcher** allows you to generate Web@Work URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Ivanti's official Web@Work for iOS guide documents four schemes: `mibrowser://` for HTTP connections, `mibrowsers://` for HTTPS connections, `mibrowserf://` for full-screen web clips using HTTP, and `mibrowsersf://` for full-screen web clips using HTTPS.

This module only replaces the standard URL prefix that matches the selected connection type. It does not add parameters or expose undocumented Web@Work actions.

### Open HTTP URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHttpUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openHttpUrl({
  url: 'http://www.example.com/intranet',
})
```

<div class="flex justify-center">
  <VPLink :href="openHttpUrl(openHttpUrlParams)" target="_self">
    Open HTTP URL in Ivanti Web@Work
  </VPLink>
</div>

### Open HTTPS URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHttpsUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openHttpsUrl({
  url: 'https://www.example.com/secure',
})
```

<div class="flex justify-center">
  <VPLink :href="openHttpsUrl(openHttpsUrlParams)" target="_self">
    Open HTTPS URL in Ivanti Web@Work
  </VPLink>
</div>

### Open Full-Screen HTTP URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFullScreenHttpUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openFullScreenHttpUrl({
  url: 'http://www.example.com/app',
})
```

<div class="flex justify-center">
  <VPLink :href="openFullScreenHttpUrl(openFullScreenHttpUrlParams)" target="_self">
    Open full-screen HTTP URL in Ivanti Web@Work
  </VPLink>
</div>

### Open Full-Screen HTTPS URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFullScreenHttpsUrl' : 'ivantiWebWork' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ivantiWebWork.'}}openFullScreenHttpsUrl({
  url: 'https://www.example.com/app',
})
```

<div class="flex justify-center">
  <VPLink :href="openFullScreenHttpsUrl(openFullScreenHttpsUrlParams)" target="_self">
    Open full-screen HTTPS URL in Ivanti Web@Work
  </VPLink>
</div>

## Generated URLs

```ts
openHttpUrl({
  url: 'http://www.example.com/intranet',
})
// => 'mibrowser://www.example.com/intranet'

openHttpsUrl({
  url: 'https://www.example.com/secure',
})
// => 'mibrowsers://www.example.com/secure'

openFullScreenHttpUrl({
  url: 'http://www.example.com/app',
})
// => 'mibrowserf://www.example.com/app'

openFullScreenHttpsUrl({
  url: 'https://www.example.com/app',
})
// => 'mibrowsersf://www.example.com/app'
```

## References

- [Ivanti Web@Work URL schemes](https://help.ivanti.com/mi/help/en_US/WW/2.x.x/gdi/WebAtWorkForiOS/Website_authentication_u.htm)
