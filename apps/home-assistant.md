---
url: /protocol-launcher/apps/home-assistant.md
---

# Home Assistant

[Home Assistant](https://www.home-assistant.io/) is an open source home automation platform. **Protocol Launcher** allows you to generate official Home Assistant companion app URL handler links and tag universal links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Navigate

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigate' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}navigate({
  path: '/dashboard-mobile/my-subview',
})
```

Use the documented `server` query parameter to select a configured server:

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigate' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}navigate({
  path: '/webcams',
  server: 'My home',
})
```

### Call Service

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'callService' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}callService({
  service: 'device_tracker.see',
  params: {
    entity_id: 'device_tracker.entity',
  },
})
```

### Fire Event

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'fireEvent' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}fireEvent({
  eventType: 'custom_event',
  params: {
    entity_id: 'MY_CUSTOM_EVENT',
  },
})
```

### Send Location

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sendLocation' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}sendLocation()
```

### Open Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTag' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}openTag({
  tagId: '50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D',
})
```

Home Assistant documents tags as universal links with the `https://www.home-assistant.io/tag/<tag id>` format.

### NFC Universal Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'nfcUniversalLink' : 'homeAssistant' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'homeAssistant.'}}nfcUniversalLink({
  url: 'homeassistant://navigate/dashboard-mobile/my-subview',
})
```

Home Assistant documents the old-style universal link format as `https://www.home-assistant.io/ios/nfc/?url=<a URL you could use with the existing URL handler>`.

## Generated URLs

```ts
navigate(navigateParams)
// => 'homeassistant://navigate/dashboard-mobile/my-subview?server=My%20home'

callService({
  service: 'device_tracker.see',
  params: { entity_id: 'device_tracker.entity' },
})
// => 'homeassistant://call_service/device_tracker.see?entity_id=device_tracker.entity'

fireEvent({
  eventType: 'custom_event',
  params: { entity_id: 'MY_CUSTOM_EVENT' },
})
// => 'homeassistant://fire_event/custom_event?entity_id=MY_CUSTOM_EVENT'

sendLocation()
// => 'homeassistant://send_location/'

openTag({ tagId: '50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D' })
// => 'https://www.home-assistant.io/tag/50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D'

nfcUniversalLink({ url: 'homeassistant://navigate/dashboard-mobile/my-subview' })
// => 'https://www.home-assistant.io/ios/nfc/?url=homeassistant%3A%2F%2Fnavigate%2Fdashboard-mobile%2Fmy-subview'
```

## References

* [Home Assistant URL Handler](https://companion.home-assistant.io/docs/integrations/url-handler/)
* [Home Assistant Universal Links, NFC & QR Tags](https://companion.home-assistant.io/docs/integrations/universal-links/)
