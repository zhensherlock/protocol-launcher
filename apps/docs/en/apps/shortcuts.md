---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, create, openGallery, openShortcut, runShortcut, xCallbackRunShortcut } from 'protocol-launcher/shortcuts';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openGalleryQueryParams,
  openShortcutParams,
  runShortcutParams,
  runShortcutWithTextInputParams,
  runShortcutWithClipboardInputParams,
  xCallbackRunShortcutParams,
  xCallbackRunShortcutWithCallbacksParams,
} from '../../.vitepress/constants/shortcuts';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/shortcuts' : 'protocol-launcher');
</script>

# Shortcuts

[Shortcuts](https://www.apple.com/shortcuts/) is a powerful automation tool for iOS, iPadOS, and macOS that lets you accomplish more with less effort. With Shortcuts, you can quickly perform everyday tasks by simply saying a few words or tapping a button. You can create custom shortcuts that combine multiple steps from different apps into one streamlined action, or choose from hundreds of pre-made shortcuts in the Gallery. **Protocol Launcher** allows you to generate deep links to open Shortcuts and interact with your workflows.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Shortcuts

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'shortcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Shortcuts
  </VPLink>
</div>

### Create Shortcut

Create a new shortcut in Shortcuts.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'shortcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}create()
```

<div class="flex justify-center">
  <VPLink :href="create()" target="_self">
    Create Shortcut
  </VPLink>
</div>

### Open Gallery

Open the Shortcuts Gallery to browse and discover shortcuts.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openGallery' : 'shortcuts' }} } from '{{ importPath }}'

// Open gallery without search
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}openGallery()

// Open gallery with search query
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}openGallery({
  query: 'photos',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="openGallery()" target="_self">
    Open Gallery
  </VPLink>
  <VPLink :href="openGallery(openGalleryQueryParams)" target="_self">
    Open Gallery with Search
  </VPLink>
</div>

### Open Shortcut

Open a specific shortcut in the gallery.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openShortcut' : 'shortcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}openShortcut({
  name: 'Kaleidoscope Compare',
})
```

<div class="flex justify-center">
  <VPLink :href="openShortcut(openShortcutParams)" target="_self">
    Open Shortcut
  </VPLink>
</div>

### Run Shortcut

Run a specific shortcut with optional input.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runShortcut' : 'shortcuts' }} } from '{{ importPath }}'

// Run shortcut without input
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}runShortcut({
  name: 'Kaleidoscope Compare',
})

// Run shortcut with text input
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}runShortcut({
  name: '将文本转为音频',
  input: 'text',
  text: '测试将文本转为音频',
})

// Run shortcut with clipboard input
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}runShortcut({
  name: 'Add to Notes',
  input: 'clipboard',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="runShortcut(runShortcutParams)" target="_self">
    Run Shortcut
  </VPLink>
  <VPLink :href="runShortcut(runShortcutWithTextInputParams)" target="_self">
    Run Shortcut with Text Input
  </VPLink>
  <VPLink :href="runShortcut(runShortcutWithClipboardInputParams)" target="_self">
    Run Shortcut with Clipboard Input
  </VPLink>
</div>

### Run Shortcut with X-Callback-URL

Run a shortcut using the x-callback-url protocol for advanced callback handling.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackRunShortcut' : 'shortcuts' }} } from '{{ importPath }}'

// Run shortcut without callbacks
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}xCallbackRunShortcut({
  name: '计算小费',
  input: 'text',
  text: '24.99',
})

// Run shortcut with success and cancel callbacks
const url = {{currentMethod === 'On-Demand' ? '' : 'shortcuts.'}}xCallbackRunShortcut({
  name: '计算小费',
  input: 'text',
  text: '24.99',
  xSuccess: 'myapp://success',
  xCancel: 'myapp://cancel',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="xCallbackRunShortcut(xCallbackRunShortcutParams)" target="_self">
    Run Shortcut with X-Callback-URL
  </VPLink>
  <VPLink :href="xCallbackRunShortcut(xCallbackRunShortcutWithCallbacksParams)" target="_self">
    Run Shortcut with Callbacks
  </VPLink>
</div>
