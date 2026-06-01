---
url: /protocol-launcher/apps/launch-center-pro.md
---

# Launch Center Pro

[Launch Center Pro](https://contrast.co/launch-center-pro/) is an iOS launcher for running actions and shortcuts. **Protocol Launcher** allows you to generate deep links for Launch Center Pro actions documented by Contrast.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

These helpers follow Contrast's official [x-callback-url Support](https://help.contrast.co/hc/en-us/articles/200611883-x-callback-url-Support), [Dropbox Actions](https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions), [Scheduling Action Notifications](https://help.contrast.co/hc/en-us/articles/360024275852-Scheduling-Action-Notifications), and release note examples. Undocumented or discontinued Launch Center Pro actions are not wrapped.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}open()
```

### Brightness

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'brightness' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}brightness()

const callbackUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}brightness({
  xSuccess: 'tweetbot://',
})
```

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

### Define

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'define' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}define()
```

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

### Dropbox

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropbox' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropbox()
```

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

### Dropbox Copy Direct Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxCopyDirectLink' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxCopyDirectLink()
```

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

### Share Sheet

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'shareSheet' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}shareSheet({
  attach: 'photo:last',
  text: '[prompt-fleksy:Notes]',
  url: '[clipboard]',
})
```

### QR Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'qr' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}qr()
```

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

### Dropbox Append Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxAppend' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxAppend({
  text: 'Next line',
  name: 'MyFile.markdown',
  linebreak: 'NO',
})
```

### Dropbox Prepend Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxPrepend' : 'launchCenterPro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxPrepend({
  text: 'First line\nBody',
  name: 'note_[firstline].text',
  leavefirstline: 'NO',
})
```

### Dropbox Clipboard

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dropboxClipboard' : 'launchCenterPro' }} } from '{{ importPath }}'

const browserUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxClipboard()

const linkUrl = {{currentMethod === 'On-Demand' ? '' : 'launchCenterPro.'}}dropboxClipboard({
  path: '/photos/',
  linkonly: 'yes',
})
```
