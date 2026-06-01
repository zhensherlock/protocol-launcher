---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  brightness,
  clipboard,
  define,
  dropbox,
  dropboxAddPhoto,
  dropboxAppend,
  dropboxClipboard,
  dropboxCopyDirectLink,
  dropboxNew,
  dropboxPrepend,
  email,
  messaging,
  open,
  qr,
  schedule,
  shareSheet,
  speak,
} from 'protocol-launcher/launch-center-pro';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  clipboardPhotoParams,
  clipboardTextParams,
  dropboxAddPhotoParams,
  dropboxAppendParams,
  dropboxClipboardParams,
  dropboxNewParams,
  dropboxPrependParams,
  emailParams,
  messagingDropboxParams,
  messagingGifParams,
  messagingParams,
  scheduleActionParams,
  scheduleUrlParams,
  shareSheetParams,
  speakParams,
} from '../../.vitepress/constants/launch-center-pro';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/launch-center-pro' : 'protocol-launcher');
</script>

# Launch Center Pro

[Launch Center Pro](https://contrast.co/launch-center-pro/) is an iOS launcher for running actions and shortcuts. **Protocol Launcher** allows you to generate deep links for Launch Center Pro actions documented by Contrast.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Methods

These helpers follow Contrast's official [x-callback-url Support](https://help.contrast.co/hc/en-us/articles/200611883-x-callback-url-Support), [Dropbox Actions](https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions), [Scheduling Action Notifications](https://help.contrast.co/hc/en-us/articles/360024275852-Scheduling-Action-Notifications), and release note examples. Undocumented or discontinued Launch Center Pro actions are not wrapped.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Launch Center Pro
  </VPLink>
</div>

### Brightness

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'brightness' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}brightness()

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}brightness({
  xSuccess: 'tweetbot://',
})
```

<div class="flex justify-center">
  <VPLink :href="brightness()" target="_self">
    Open Brightness Action
  </VPLink>
</div>

### Clipboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clipboard' : 'launchCenterPro' }} } from '{{ importPath }}'

const textUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}clipboard({
  text: 'mytext',
})

const photoUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}clipboard({
  attach: 'photo:last',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="clipboard(clipboardTextParams)" target="_self">
    Copy Text with Launch Center Pro
  </VPLink>
  <VPLink :href="clipboard(clipboardPhotoParams)" target="_self">
    Copy Last Photo with Launch Center Pro
  </VPLink>
</div>

### Define

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'define' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}define()
```

<div class="flex justify-center">
  <VPLink :href="define()" target="_self">
    Open Define Action
  </VPLink>
</div>

### Speak

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'speak' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}speak({
  text: 'Hello master!',
})

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}speak({
  text: 'Hello master!',
  xSuccess: '[action:15]',
})
```

<div class="flex justify-center">
  <VPLink :href="speak(speakParams)" target="_self">
    Speak Text with Launch Center Pro
  </VPLink>
</div>

### Email

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'email' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}email({
  to: 'sample@contrast.co',
  subject: 'Last Photo',
  body: '',
  cc: '',
  bcc: '',
  attach: 'photo:last',
})
```

<div class="flex justify-center">
  <VPLink :href="email(emailParams)" target="_self">
    Start Email Action
  </VPLink>
</div>

### Messaging

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'messaging' : 'launchCenterPro' }} } from '{{ importPath }}'

const photoUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}messaging({
  to: '555-555-5555',
  attach: 'photo:last',
})

const dropboxPhotoUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}messaging({
  to: '555-555-5555',
  body: '[prompt:Body]',
  attach: 'photo:dropbox',
  path: 'reactions',
})

const gifUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}messaging({
  attach: 'photo:gif',
  'gif-search': 'excited',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="messaging(messagingParams)" target="_self">
    Start Message with Last Photo
  </VPLink>
  <VPLink :href="messaging(messagingDropboxParams)" target="_self">
    Start Message with Dropbox Photo
  </VPLink>
  <VPLink :href="messaging(messagingGifParams)" target="_self">
    Start Message with Giphy Photo
  </VPLink>
</div>

### Dropbox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropbox' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropbox()
```

<div class="flex justify-center">
  <VPLink :href="dropbox()" target="_self">
    Open Dropbox Action
  </VPLink>
</div>

### Dropbox Add Photo

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxAddPhoto' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxAddPhoto({
  attach: 'photo:frontcamera',
  path: '/selfies/',
})

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxAddPhoto({
  attach: 'photo:last',
  path: '/snaps/',
  getlink: 'yes',
  xSuccess: 'launch://tweet?text=[clipboard]',
})
```

<div class="flex justify-center">
  <VPLink :href="dropboxAddPhoto(dropboxAddPhotoParams)" target="_self">
    Add Photo to Dropbox
  </VPLink>
</div>

### Dropbox Copy Direct Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxCopyDirectLink' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxCopyDirectLink()
```

<div class="flex justify-center">
  <VPLink :href="dropboxCopyDirectLink()" target="_self">
    Copy Dropbox Direct Link
  </VPLink>
</div>

### Schedule Action Notification

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'schedule' : 'launchCenterPro' }} } from '{{ importPath }}'

const actionUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}schedule({
  action: 179,
  in: '1h',
  repeat: 'specificdays',
  days: 'm,tu,w,th,f',
})

const urlNotification = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}schedule({
  url: '[url:https://apple.com]',
  in: '10min',
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="schedule(scheduleActionParams)" target="_self">
    Schedule Action Notification
  </VPLink>
  <VPLink :href="schedule(scheduleUrlParams)" target="_self">
    Schedule URL Notification
  </VPLink>
</div>

### Share Sheet

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'shareSheet' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}shareSheet({
  attach: 'photo:last',
  text: '[prompt-fleksy:Notes]',
  url: '[clipboard]',
})
```

<div class="flex justify-center">
  <VPLink :href="shareSheet(shareSheetParams)" target="_self">
    Open Share Sheet
  </VPLink>
</div>

### QR Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'qr' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}qr()
```

<div class="flex justify-center">
  <VPLink :href="qr()" target="_self">
    Open QR Action
  </VPLink>
</div>

### Dropbox New Text File

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxNew' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxNew({
  text: '[prompt-return:My Note]',
  path: '/Notes/',
  name: 'MyFile.markdown',
  overwrite: 'NO',
})
```

<div class="flex justify-center">
  <VPLink :href="dropboxNew(dropboxNewParams)" target="_self">
    Create Dropbox Text File
  </VPLink>
</div>

### Dropbox Append Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxAppend' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxAppend({
  text: 'Next line',
  name: 'MyFile.markdown',
  linebreak: 'NO',
})
```

<div class="flex justify-center">
  <VPLink :href="dropboxAppend(dropboxAppendParams)" target="_self">
    Append Dropbox Text
  </VPLink>
</div>

### Dropbox Prepend Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxPrepend' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxPrepend({
  text: 'First line\nBody',
  name: 'note_[firstline].text',
  leavefirstline: 'NO',
})
```

<div class="flex justify-center">
  <VPLink :href="dropboxPrepend(dropboxPrependParams)" target="_self">
    Prepend Dropbox Text
  </VPLink>
</div>

### Dropbox Clipboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxClipboard' : 'launchCenterPro' }} } from '{{ importPath }}'

const browserUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxClipboard()

const linkUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxClipboard({
  path: '/photos/',
  linkonly: 'yes',
})
```

<div class="flex justify-center">
  <VPLink :href="dropboxClipboard(dropboxClipboardParams)" target="_self">
    Copy Dropbox Link
  </VPLink>
</div>
