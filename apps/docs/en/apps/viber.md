---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openBotChat, openBotInfo, openBotQrScanner, openChatExtension } from 'protocol-launcher/viber';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { botChatParams, botInfoParams, botQrScannerParams, chatExtensionParams } from '../../.vitepress/constants/viber';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/viber' : 'protocol-launcher');
</script>

# Viber

[Viber](https://www.viber.com/) is a messaging app and bot platform. **Protocol Launcher** allows you to generate Viber URL scheme links for bot and Chat Extension workflows.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

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

<div class="flex justify-center">
  <VPLink :href="openBotChat(botChatParams)" target="_self">
    Open Viber Bot Chat
  </VPLink>
</div>

### Open Bot Info

Viber documents the bot info screen deeplink as supported on Android and iOS, and not supported on Desktop.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openBotInfo' : 'viber' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openBotInfo({
  uri: 'examplebot',
})
```

<div class="flex justify-center">
  <VPLink :href="openBotInfo(botInfoParams)" target="_self">
    Open Viber Bot Info
  </VPLink>
</div>

### Open Bot QR Scanner

Viber documents the bot QR scanner deeplink for mobile users. The official limitations list Viber 17.1.0.6 and above on Android, Viber 17.2 and above on iOS, and no Desktop support.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openBotQrScanner' : 'viber' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'viber.'}}openBotQrScanner({
  chatURI: 'examplebot',
})
```

<div class="flex justify-center">
  <VPLink :href="openBotQrScanner(botQrScannerParams)" target="_self">
    Open Viber QR Scanner
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="openChatExtension(chatExtensionParams)" target="_self">
    Open Viber Chat Extension
  </VPLink>
</div>

## Official Docs

- [Viber DeepLinks](https://developers.viber.com/docs/tools/deep-links/)
- [Viber Chat Extensions](https://developers.viber.com/docs/guides/chatex/)
