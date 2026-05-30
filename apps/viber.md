---
url: /protocol-launcher/apps/viber.md
---

# Viber

[Viber](https://www.viber.com/) is a messaging app and bot platform. **Protocol Launcher** allows you to generate Viber URL scheme links for bot and Chat Extension workflows.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Bot Chat

Viber documents `context` and `text` as optional parameters for bot chat deeplinks.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openBotChat' : 'viber' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openBotChat({
  chatURI: 'examplebot',
  context: 'checkout',
  text: 'Hi there!',
})
```

### Open Bot Info

Viber documents the bot info screen deeplink as supported on Android and iOS, and not supported on Desktop.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openBotInfo' : 'viber' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openBotInfo({
  uri: 'examplebot',
})
```

### Open Bot QR Scanner

Viber documents the bot QR scanner deeplink for mobile users. The official limitations list Viber 17.1.0.6 and above on Android, Viber 17.2 and above on iOS, and no Desktop support.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openBotQrScanner' : 'viber' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openBotQrScanner({
  chatURI: 'examplebot',
})
```

### Open Chat Extension

Viber documents three Chat Extension deeplink scenarios: open the default screen, open a service, or open a service with a search term.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openChatExtension' : 'viber' }} } from '{{ importPath }}'

const defaultUrl = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openChatExtension()

const serviceUrl = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openChatExtension({
  service: 'example',
})

const searchUrl = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openChatExtension({
  service: 'example',
  search: 'coffee',
})
```

## Official Docs

* [Viber DeepLinks](https://developers.viber.com/docs/tools/deep-links/)
* [Viber Chat Extensions](https://developers.viber.com/docs/guides/chatex/)
