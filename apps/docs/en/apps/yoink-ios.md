---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  addString,
  copyToClipboard,
  downloadUrl,
  pasteFromClipboard,
  showDownloadUi,
} from 'protocol-launcher/yoink-ios';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addStringParams,
  copyToClipboardParams,
  downloadUrlParams,
  pasteFromClipboardParams,
} from '../../.vitepress/constants/yoink-ios';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/yoink-ios' : 'protocol-launcher');
</script>

# Yoink for iOS

[Yoink for iPad and iPhone](https://eternalstorms.at/yoink/ios/) is a shelf app for collecting files and snippets on iPad and iPhone. **Protocol Launcher** allows you to generate official Yoink for iOS URL scheme actions.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

This module only wraps the URL scheme actions documented in Yoink for iPad and iPhone Usage Tips: `pastefromclipboard`, `copytoclipboard`, `showdownloadui`, `downloadurl`, and `addstring`.

The official page documents `x-success` and `x-error` callback parameters for the scheme. `showdownloadui` does not accept callbacks because Yoink states that this action does not call back to the calling app.

The official page shows its generic format as `yoink://[action]...`, while every concrete action example uses `yoinkios://...`; this module follows those concrete action examples.

## URL Methods

### Paste From Clipboard

Paste the current clipboard contents into Yoink.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pasteFromClipboard' : 'yoinkIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yoinkIos.'}}pasteFromClipboard({
  title: 'My Title',
  createStack: 0,
})
```

<div class="flex justify-center">
  <VPLink :href="pasteFromClipboard(pasteFromClipboardParams)" target="_self">
    Paste Clipboard Into Yoink
  </VPLink>
</div>

### Copy To Clipboard

Copy an item from Yoink to the clipboard by index. In Yoink, `0` is the topmost item.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'copyToClipboard' : 'yoinkIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yoinkIos.'}}copyToClipboard({
  index: 0,
})
```

<div class="flex justify-center">
  <VPLink :href="copyToClipboard(copyToClipboardParams)" target="_self">
    Copy First Yoink Item
  </VPLink>
</div>

### Show Download UI

Show Yoink's download UI.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showDownloadUi' : 'yoinkIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yoinkIos.'}}showDownloadUi()
```

<div class="flex justify-center">
  <VPLink :href="showDownloadUi()" target="_self">
    Show Yoink Download UI
  </VPLink>
</div>

### Download URL

Download a URL in Yoink.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'downloadUrl' : 'yoinkIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yoinkIos.'}}downloadUrl({
  url: 'https://eternalstorms.at/yoink/Yoink.zip',
})
```

<div class="flex justify-center">
  <VPLink :href="downloadUrl(downloadUrlParams)" target="_self">
    Download URL in Yoink
  </VPLink>
</div>

### Add String

Save a string in Yoink.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addString' : 'yoinkIos' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'yoinkIos.'}}addString({
  string: 'Yoink is available on\u0002iOS and macOS',
  title: 'Yoink Availability',
})
```

<div class="flex justify-center">
  <VPLink :href="addString(addStringParams)" target="_self">
    Add String to Yoink
  </VPLink>
</div>

## Generated URLs

```ts
pasteFromClipboard(pasteFromClipboardParams)
// => 'yoinkios://pastefromclipboard?title=My%20Title&createStack=0'

copyToClipboard(copyToClipboardParams)
// => 'yoinkios://copytoclipboard?index=0'

showDownloadUi()
// => 'yoinkios://showdownloadui'

downloadUrl(downloadUrlParams)
// => 'yoinkios://downloadurl?url=https%3A%2F%2Feternalstorms.at%2Fyoink%2FYoink.zip'

addString(addStringParams)
// => 'yoinkios://addstring?string=Yoink%20is%20available%20on%02iOS%20and%20macOS&title=Yoink%20Availability'
```

## Official Documentation

- [Yoink for iPad and iPhone Usage Tips](https://eternalstorms.at/yoink/ios/tips/)
