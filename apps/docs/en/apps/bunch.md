---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { close, edit, open, prefs, raw, refresh, reveal, setPref, snippet, toggle } from 'protocol-launcher/bunch';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  closePathParams,
  closeParams,
  editParams,
  editPathParams,
  openBetaParams,
  openCallbackParams,
  openPathParams,
  openParams,
  openShortcutParams,
  openSuccessParams,
  openWithVariablesParams,
  rawFileParams,
  rawTextParams,
  setPrefFolderParams,
  setPrefToggleParams,
  snippetParams,
  snippetPathParams,
  togglePathParams,
  toggleParams,
  toggleTagParams,
} from '../../.vitepress/constants/bunch';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/bunch' : 'protocol-launcher');
</script>

# Bunch

[Bunch](https://bunchapp.co/) is a macOS workspace automation app. **Protocol Launcher** allows you to generate deep links for Bunch.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

All helpers below support Bunch's documented `x-callback-url` path format and official `x-source`, `x-success`, `x-delay`, and `x-bunch-beta` URL values when those parameters apply.

### Open Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
})

const shortcutUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  syntax: 'shortcut',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'WorkBunch',
  syntax: 'path',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="open(openParams)" target="_self">
    Open Bunch Full URL
  </VPLink>
  <VPLink :href="open(openShortcutParams)" target="_self">
    Open Bunch Shortcut URL
  </VPLink>
  <VPLink :href="open(openPathParams)" target="_self">
    Open Bunch Path URL
  </VPLink>
</div>

### Open Bunch Beta

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  scheme: 'x-bunch-beta',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openBetaParams)" target="_self">
    Open in Bunch Beta
  </VPLink>
</div>

### Open With Frontmatter Values

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Default',
  variables: {
    launch: 'TextEdit',
  },
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithVariablesParams)" target="_self">
    Open With Variables
  </VPLink>
</div>

### Open With Callback Parameters

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'bunch' }} } from '{{ importPath }}'

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  xCallback: true,
  'x-source': 'com.googlecode.iterm2',
})

const successUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}open({
  bunch: 'Comms',
  'x-success': 'com.brettterpstra.marked2',
  'x-delay': 15,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="open(openCallbackParams)" target="_self">
    Open With x-callback-url
  </VPLink>
  <VPLink :href="open(openSuccessParams)" target="_self">
    Open Then Launch Marked 2
  </VPLink>
</div>

### Close Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'close' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}close({
  bunch: 'Comms',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}close({
  bunch: 'Comms',
  syntax: 'path',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="close(closeParams)" target="_self">
    Close Bunch Full URL
  </VPLink>
  <VPLink :href="close(closePathParams)" target="_self">
    Close Bunch Path URL
  </VPLink>
</div>

### Toggle Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  bunch: 'Comms',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  bunch: 'Comms',
  syntax: 'path',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="toggle(toggleParams)" target="_self">
    Toggle Bunch Full URL
  </VPLink>
  <VPLink :href="toggle(togglePathParams)" target="_self">
    Toggle Bunch Path URL
  </VPLink>
</div>

### Toggle Tagged Bunches

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}toggle({
  tag: 'Tag1+Tag2',
})
```

<div class="flex justify-center">
  <VPLink :href="toggle(toggleTagParams)" target="_self">
    Toggle Tagged Bunches
  </VPLink>
</div>

### Edit Bunch

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'edit' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}edit({
  bunch: 'Example',
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}edit({
  bunch: 'Example',
  syntax: 'path',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="edit(editParams)" target="_self">
    Edit Bunch Full URL
  </VPLink>
  <VPLink :href="edit(editPathParams)" target="_self">
    Edit Bunch Path URL
  </VPLink>
</div>

### Run Raw Bunch Text Or File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'raw' : 'bunch' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}raw({
  file: '~/MiscBunch.bunch',
})

const textUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}raw({
  txt: '(dnd on)',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="raw(rawFileParams)" target="_self">
    Run Raw File
  </VPLink>
  <VPLink :href="raw(rawTextParams)" target="_self">
    Run Raw Text
  </VPLink>
</div>

### Refresh Bunch Files

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'refresh' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}refresh()
```

<div class="flex justify-center">
  <VPLink :href="refresh()" target="_self">
    Refresh Bunch Files
  </VPLink>
</div>

### Reveal Bunch Folder

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reveal' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}reveal()
```

<div class="flex justify-center">
  <VPLink :href="reveal()" target="_self">
    Reveal Bunch Folder
  </VPLink>
</div>

### Set Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setPref' : 'bunch' }} } from '{{ importPath }}'

const toggleUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}setPref({
  toggleBunches: 1,
})

const folderUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}setPref({
  configDir: '~/Dropbox/Sync/Bunches',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="setPref(setPrefToggleParams)" target="_self">
    Enable Toggle Bunches
  </VPLink>
  <VPLink :href="setPref(setPrefFolderParams)" target="_self">
    Set Bunch Folder
  </VPLink>
</div>

### Run Snippet

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'snippet' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}snippet({
  file: 'useful.snippets',
  fragment: 'Music',
  variables: {
    playlist: 'spotify:playlist:3cSpIL4Q0H3uqdBMbT6c9x',
  },
})

const pathUrl = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}snippet({
  file: 'useful.snippets',
  fragment: 'Speak',
  syntax: 'path',
  variables: {
    var1: 'foo',
    var2: 'bar baz',
  },
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="snippet(snippetParams)" target="_self">
    Run Snippet Full URL
  </VPLink>
  <VPLink :href="snippet(snippetPathParams)" target="_self">
    Run Snippet Path URL
  </VPLink>
</div>

### Open Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prefs' : 'bunch' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bunch.'}}prefs()
```

<div class="flex justify-center">
  <VPLink :href="prefs()" target="_self">
    Open Bunch Preferences
  </VPLink>
</div>

## Official Documentation

- [The Bunch URL Handler](https://bunchapp.co/docs/integration/url-handler/)
