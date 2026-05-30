---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { launchConfiguration, newTab, newWindow, tabConfig } from 'protocol-launcher/warp';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  launchConfigurationParams,
  newTabParams,
  newWindowParams,
  tabConfigNewWindowParams,
} from '../../.vitepress/constants/warp';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/warp' : 'protocol-launcher');
</script>

# Warp

[Warp](https://www.warp.dev/) is a modern terminal for developers. **Protocol Launcher** allows you to generate deep links to open new Warp windows, tabs, Launch Configurations, and Tab Configs.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open New Window

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newWindow' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}newWindow({
  path: 'path_to_folder',
})
```

<div class="flex justify-center">
  <VPLink :href="newWindow(newWindowParams)" target="_self">
    Open New Warp Window
  </VPLink>
</div>

### Open New Tab

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTab' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}newTab({
  path: 'path_to_folder',
})
```

<div class="flex justify-center">
  <VPLink :href="newTab(newTabParams)" target="_self">
    Open New Warp Tab
  </VPLink>
</div>

### Open Launch Configuration

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchConfiguration' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}launchConfiguration({
  path: 'launch_configuration_path',
})
```

<div class="flex justify-center">
  <VPLink :href="launchConfiguration(launchConfigurationParams)" target="_self">
    Open Launch Configuration
  </VPLink>
</div>

### Open Tab Config

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tabConfig' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}tabConfig({
  name: 'my_tab',
  newWindow: true,
})
```

<div class="flex justify-center">
  <VPLink :href="tabConfig(tabConfigNewWindowParams)" target="_self">
    Open Tab Config
  </VPLink>
</div>

### Warp Preview

Warp's official URI scheme documentation says Warp Preview uses the `warppreview://` scheme. Pass `scheme: 'warppreview'` to target Warp Preview with the same helpers.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newTab' : 'warp' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'warp.'}}newTab({
  path: 'path_to_folder',
  scheme: 'warppreview',
})
```

[Official Warp URI Scheme documentation](https://docs.warp.dev/terminal/more-features/uri-scheme)
