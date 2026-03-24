---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, appHostSharing } from 'protocol-launcher/termius';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { appHostSharingParams } from '../../.vitepress/constants/termius';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/termius' : 'protocol-launcher');
</script>

# Termius

[Termius](https://termius.com/) is a modern SSH client built for productivity and collaboration, available on macOS, Windows, Linux, iOS, and Android. **Protocol Launcher** allows you to generate deep links to open Termius and quickly add new server hosts.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Termius

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'termius' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'termius.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Termius
  </VPLink>
</div>

### Add New Host

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'appHostSharing' : 'termius' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'termius.'}}appHostSharing({
  label: 'Production Database',
  ip: '192.168.1.100',
  port: 22,
  username: 'admin',
  os: 'linux',
})
```

<div class="flex justify-center">
  <VPLink :href="appHostSharing(appHostSharingParams)" target="_self">
    Add New Host in Termius
  </VPLink>
</div>
