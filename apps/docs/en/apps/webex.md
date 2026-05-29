---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openChat, openSpace } from 'protocol-launcher/webex';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/webex' : 'protocol-launcher');
</script>

# Webex

[Webex](https://www.webex.com/) is a collaboration app for messaging, meetings, and calling. **Protocol Launcher** allows you to generate Webex URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Webex documents `webexteams://im?email=...` for creating or opening a one-person space and `webexteams://im?space=...` for opening an existing space. A Webex developer blog documents `webexteams://meet?sip=...` and `webextel:` click-to-call examples. Webex's cross-launch documentation documents `webextel://login?...`, `webexauth://login?...`, `webexauth://logout`, and `https://cisco.webex.com/logout?...` with the parameters shown below.

Webex also lists `CLICKTOCALL:`, `SIP:`, `TEL:` (not on iOS), and `WEBEXTEL:` as protocol handlers that can start calls when Webex App is the default calling application. This module only adds helpers for complete URL formats that Webex documents with concrete parameters or examples.

### Open Chat

Create or open a Webex chat/space with one person by email address.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChat' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}openChat({
  email: 'barbara@example.com',
})
```

<div class="flex justify-center">
  <VPLink :href="openChat({ email: 'barbara@example.com' })" target="_self">
    Open Webex Chat
  </VPLink>
</div>

### Open Space

Open an existing Webex space by space ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSpace' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}openSpace({
  space: '0000aa-a0a0',
})
```

<div class="flex justify-center">
  <VPLink :href="openSpace({ space: '0000aa-a0a0' })" target="_self">
    Open Webex Space by ID
  </VPLink>
</div>

### Meet by SIP

Place a Webex App meeting/call to a SIP address using `webexteams://meet?sip=...`. This may launch a call, so the docs show the generated URL without a live preview link.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'meet' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}meet({
  sip: 'user@example.com',
})
```

### Webex Click-to-Call

Place a URI based call with the Webex App using the `webextel:` protocol handler.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'call' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}call({
  destination: '+1234567890',
})
```

### Cross-Launch Call

Cross launch Webex App to make a call with the documented `webextel://login` URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'crossLaunchCall' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}crossLaunchCall({
  telephone: '123456789',
  xSource: 'App B',
  xSuccess: 'appb://success_flow',
  xCancel: 'appb://cancel_flow',
})
```

### Cross-Launch Sign-In

Cross launch Webex App to sign in with an email address using the documented `webexauth://login` URL. Webex documents `telephone`, `x-source`, `x-success`, and `x-cancel` as iOS-only parameters.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'crossLaunchSignIn' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}crossLaunchSignIn({
  email: 'user1@example.com',
  telephone: '123456789',
  xSource: 'App B',
  xSuccess: 'appb://success_flow',
  xCancel: 'appb://cancel_flow',
})
```

### Logout

Log out of Webex App using the documented `webexauth://logout` URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'logout' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}logout()
```

### Universal Link Logout

Log out of Webex App on managed iOS/iPadOS devices with the documented Universal Link Callback URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'universalLinkLogout' : 'webex' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'webex.'}}universalLinkLogout({
  ulcSuccess: 'https://sampledomain.com/success',
  ulcError: 'https://sampledomain.com/error',
})
```

## Official Documentation

- [Webex App: Add links for meetings or spaces with webexteams protocol](https://help.webex.com/en-us/article/n5yzg8y/Webex-Add-Links)
- [Build a Click-to-Call Shortcut Using Adaptive Cards in Webex](https://developer.webex.com/blog/build-a-click-to-call-shortcut-using-adaptive-cards-in-webex)
- [Webex App: Cross launch URL for sign-in and calling](https://help.webex.com/en-us/article/n45mhmab/Webex-App-%7C-Cross-launch-URL-for-sign-in-and-calling)
