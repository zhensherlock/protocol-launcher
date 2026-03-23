---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, openFile, addLibrary, runPlugin } from 'protocol-launcher/sketch';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openFileParams, openFileWithLayerParams, addLibraryParams, runPluginParams, runPluginWithQueryParams } from '../../.vitepress/constants/sketch';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/sketch' : 'protocol-launcher');
</script>

# Sketch

[Sketch](https://www.sketch.com/) is a vector graphics editor for macOS primarily used for user interface and icon design. **Protocol Launcher** allows you to generate deep links to open files, add libraries, and run plugins in Sketch.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Sketch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Sketch
  </VPLink>
</div>

### Open File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}openFile({
  path: '/Users/name/Documents/design.sketch',
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileParams)" target="_self">
    Open File in Sketch
  </VPLink>
</div>

### Open File with Layer Focus and Zoom

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}openFile({
  path: '/Users/name/Documents/design.sketch',
  centerOnLayer: 'layer-123',
  zoom: 2,
})
```

<div class="flex justify-center">
  <VPLink :href="openFile(openFileWithLayerParams)" target="_self">
    Open File with Layer Focus in Sketch
  </VPLink>
</div>

### Add Library

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addLibrary' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}addLibrary({
  url: 'https://developer.apple.com/design/downloads/sketch.rss',
})
```

<div class="flex justify-center">
  <VPLink :href="addLibrary(addLibraryParams)" target="_self">
    Add Library to Sketch
  </VPLink>
</div>

### Run Plugin

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runPlugin' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}runPlugin({
  pluginId: 'com.example.sketch.messenger',
  commandId: 'message.show',
})
```

<div class="flex justify-center">
  <VPLink :href="runPlugin(runPluginParams)" target="_self">
    Run Plugin in Sketch
  </VPLink>
</div>

### Run Plugin with Query Parameters

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runPlugin' : 'sketch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'sketch.'}}runPlugin({
  pluginId: 'com.example.sketch.messenger',
  commandId: 'message.show',
  query: { msg: 'Hello World' },
})
```

<div class="flex justify-center">
  <VPLink :href="runPlugin(runPluginWithQueryParams)" target="_self">
    Run Plugin with Query in Sketch
  </VPLink>
</div>
