---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  show,
  paste,
  save,
  download,
  saveTab,
  openLinkFromPasteboard,
  copyPasteboardLinkAsMarkdown,
  quickFind,
  quickSave,
  stashBox,
  toggleAnydock,
  newNote,
  latestPhoto,
  photos,
  xCallbackSave,
  xCallbackPaste,
} from 'protocol-launcher/anybox';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  pasteParams,
  saveParams,
  downloadParams,
  saveTabParams,
  quickFindParams,
  xCallbackSaveParams,
  xCallbackPasteParams,
} from '../../.vitepress/constants/anybox';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/anybox' : 'protocol-launcher');
</script>

# Anybox

[Anybox](https://anybox.app/) is a bookmark and link manager for saving, finding, and organizing links. **Protocol Launcher** generates Anybox URLs from the official URL Schemes documentation, including save, paste, Quick Find, macOS utilities, iOS photo actions, and x-callback-url save/paste actions.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Show Anybox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}show()
```

<div class="flex justify-center">
  <VPLink :href="show()" target="_self">
    Show Anybox
  </VPLink>
</div>

### Paste Clipboard Content

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}paste({
  tag: 'Reading',
  starred: 'yes',
})
```

<div class="flex justify-center">
  <VPLink :href="paste(pasteParams)" target="_self">
    Paste Clipboard Content in Anybox
  </VPLink>
</div>

### Save Text Content

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'save' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}save({
  text: 'https://example.com/article',
  tag: 'Reading',
  starred: 'yes',
  archive: 'webarchive',
})
```

<div class="flex justify-center">
  <VPLink :href="save(saveParams)" target="_self">
    Save Text Content in Anybox
  </VPLink>
</div>

### Download URL (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'download' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}download({
  url: 'https://example.com/file.pdf',
  tag: 'Reading',
})
```

<div class="flex justify-center">
  <VPLink :href="download(downloadParams)" target="_self">
    Download URL in Anybox
  </VPLink>
</div>

### Save Current Tab (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'saveTab' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}saveTab({
  tag: 'Reading',
  starred: 'yes',
  archive: 'pdf',
})
```

<div class="flex justify-center">
  <VPLink :href="saveTab(saveTabParams)" target="_self">
    Save Current Tab in Anybox
  </VPLink>
</div>

### Open Link From Pasteboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLinkFromPasteboard' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}openLinkFromPasteboard()
```

<div class="flex justify-center">
  <VPLink :href="openLinkFromPasteboard()" target="_self">
    Open Link From Pasteboard
  </VPLink>
</div>

### Copy Pasteboard Link As Markdown (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyPasteboardLinkAsMarkdown' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}copyPasteboardLinkAsMarkdown()
```

<div class="flex justify-center">
  <VPLink :href="copyPasteboardLinkAsMarkdown()" target="_self">
    Copy Pasteboard Link as Markdown
  </VPLink>
</div>

### Quick Find

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickFind' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}quickFind({
  q: 'research',
})
```

<div class="flex justify-center">
  <VPLink :href="quickFind(quickFindParams)" target="_self">
    Open Quick Find in Anybox
  </VPLink>
</div>

### Quick Save (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSave' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}quickSave()
```

<div class="flex justify-center">
  <VPLink :href="quickSave()" target="_self">
    Open Quick Save in Anybox
  </VPLink>
</div>

### Stash Box (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stashBox' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}stashBox()
```

<div class="flex justify-center">
  <VPLink :href="stashBox()" target="_self">
    Open Stash Box in Anybox
  </VPLink>
</div>

### Toggle Anydock (macOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggleAnydock' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}toggleAnydock()
```

<div class="flex justify-center">
  <VPLink :href="toggleAnydock()" target="_self">
    Toggle Anydock
  </VPLink>
</div>

### New Note (iOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}newNote()
```

<div class="flex justify-center">
  <VPLink :href="newNote()" target="_self">
    Open New Note in Anybox
  </VPLink>
</div>

### Latest Photo (iOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'latestPhoto' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}latestPhoto()
```

<div class="flex justify-center">
  <VPLink :href="latestPhoto()" target="_self">
    Save Latest Photo in Anybox
  </VPLink>
</div>

### Photos (iOS)

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'photos' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}photos()
```

<div class="flex justify-center">
  <VPLink :href="photos()" target="_self">
    Open Photos Picker in Anybox
  </VPLink>
</div>

### x-callback-url Save

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackSave' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}xCallbackSave({
  text: 'helloWorld',
  xSuccess: 'successURL',
  xError: 'errorURL',
})
```

<div class="flex justify-center">
  <VPLink :href="xCallbackSave(xCallbackSaveParams)" target="_self">
    Save with x-callback-url in Anybox
  </VPLink>
</div>

### x-callback-url Paste

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackPaste' : 'anybox' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anybox.'}}xCallbackPaste({
  xSuccess: 'successURL',
  xError: 'errorURL',
})
```

<div class="flex justify-center">
  <VPLink :href="xCallbackPaste(xCallbackPasteParams)" target="_self">
    Paste with x-callback-url in Anybox
  </VPLink>
</div>
