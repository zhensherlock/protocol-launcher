---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open } from 'protocol-launcher/zoom';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/zoom' : 'protocol-launcher');
</script>

# Zoom

[Zoom](https://www.zoom.com/) is a video conferencing and communication app. **Protocol Launcher** allows you to generate Zoom URL scheme links for launching Zoom and Zoom Phone call or SMS flows.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Zoom's Meeting SDK iOS documentation documents `zoomus://` for launching the Zoom app. Zoom Phone documentation documents `callto:{phoneNumberToCall}`, `tel:{phoneNumberToCall}`, and `zoomphonecall://{phoneNumbertoCall}` for outbound calls. Zoom's outbound SMS documentation documents `zoomphonesms://{recipient_nr}?callerid={from_nr}`.

The `callerId` option serializes to Zoom's official `callerid` query key. This module does not expose meeting join or start helpers because the current official pages referenced here do not document `zoommtg://` meeting URLs.

### Open Zoom

Launch the Zoom app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'zoom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zoom.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Zoom
  </VPLink>
</div>

### Zoom Phone Call

Launch Zoom Phone and place an outbound call. Zoom says a successful `zoomphonecall://...` execution auto-dials the number, so this page shows generated examples without a live preview link.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'phoneCall' : 'zoom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zoom.'}}phoneCall({
  phoneNumber: '+15551234567',
  callerId: '+15557654321',
})
```

### `callto` URI Scheme

Launch Zoom Phone with the `callto` URI scheme.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'callto' : 'zoom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zoom.'}}callto({
  phoneNumber: '+123456789',
})
```

### `tel` URI Scheme

Launch Zoom Phone with the `tel` URI scheme.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'tel' : 'zoom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zoom.'}}tel({
  phoneNumber: '+123456789',
})
```

### Zoom Phone SMS

Launch Zoom Phone SMS using the official `zoomphonesms://{recipient_nr}?callerid={from_nr}` scheme.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'phoneSms' : 'zoom' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'zoom.'}}phoneSms({
  phoneNumber: '+123456789',
  callerId: '+16692520210',
})
```

## Official Documentation

- [Launch Zoom from your app](https://developers.zoom.us/docs/meeting-sdk/ios/resource/launch-zoom-client-from-your-app/)
- [Initiate an outbound call](https://developers.zoom.us/docs/phone/outbound-call/)
- [Initiate an outbound SMS](https://developers.zoom.us/docs/phone/outbound-sms/)
