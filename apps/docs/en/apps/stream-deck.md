---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { encodedOauth2RedirectProxy, oauth2RedirectProxy, pluginMessage } from 'protocol-launcher/stream-deck';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { oauth2RedirectProxyParams, passivePluginMessageParams, pluginMessageParams } from '../../.vitepress/constants/stream-deck';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/stream-deck' : 'protocol-launcher');
</script>

# Stream Deck

[Stream Deck](https://www.elgato.com/stream-deck) is Elgato's shortcut controller app. **Protocol Launcher** allows you to generate Stream Deck URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Scheme

Elgato's official Stream Deck SDK documentation defines plugin deep-link messages with this format: `streamdeck://plugins/message/<PLUGIN_UUID>[path]["?" query]["#" fragment]`.

Stream Deck 7.0 and later also supports passive deep-links by adding the documented `streamdeck=hidden` query string parameter.

The same official page also documents the OAuth2 redirect proxy URL format: `https://oauth2-redirect.elgato.com/streamdeck/plugins/message/<PLUGIN_UUID>`. Use the plugin deep-link URL as the callback URL unless the authorization provider does not accept custom URL schemes.

### Plugin Message

Send a deep-link message to a Stream Deck plugin.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pluginMessage' : 'streamDeck' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'streamDeck.'}}pluginMessage({
  pluginUuid: 'com.elgato.hello-world',
  path: '/hello',
  query: { name: 'Elgato' },
  fragment: 'waving',
})
```

<div class="flex justify-center">
  <VPLink :href="pluginMessage(pluginMessageParams)" target="_self">
    Open in Stream Deck
  </VPLink>
</div>

### Passive Plugin Message

Send a passive deep-link message by setting the documented `streamdeck=hidden` query parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pluginMessage' : 'streamDeck' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'streamDeck.'}}pluginMessage({
  pluginUuid: 'com.elgato.hello-world',
  path: '/hello',
  query: { streamdeck: 'hidden' },
})
```

<div class="flex justify-center">
  <VPLink :href="pluginMessage(passivePluginMessageParams)" target="_self">
    Open Passive Link
  </VPLink>
</div>

### OAuth2 Redirect Proxy

Create the documented OAuth2 redirect proxy URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'oauth2RedirectProxy' : 'streamDeck' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'streamDeck.'}}oauth2RedirectProxy({
  pluginUuid: 'com.elgato.hello-world',
  path: '/auth',
})
```

<div class="flex justify-center">
  <VPLink :href="oauth2RedirectProxy(oauth2RedirectProxyParams)" target="_self">
    Open Redirect Proxy
  </VPLink>
</div>

### Encoded OAuth2 Redirect Proxy

Create the encoded OAuth2 redirect proxy URL shown by the official URL Builder.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'encodedOauth2RedirectProxy' : 'streamDeck' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'streamDeck.'}}encodedOauth2RedirectProxy({
  pluginUuid: 'com.elgato.hello-world',
  path: '/auth',
})
```

## Generated URLs

```ts
pluginMessage({
  pluginUuid: 'com.elgato.hello-world',
  path: '/hello',
  query: { name: 'Elgato' },
  fragment: 'waving',
})
// => 'streamdeck://plugins/message/com.elgato.hello-world/hello?name=Elgato#waving'

pluginMessage({
  pluginUuid: 'com.elgato.hello-world',
  path: '/hello',
  query: { streamdeck: 'hidden' },
})
// => 'streamdeck://plugins/message/com.elgato.hello-world/hello?streamdeck=hidden'

oauth2RedirectProxy({
  pluginUuid: 'com.elgato.hello-world',
  path: '/auth',
})
// => 'https://oauth2-redirect.elgato.com/streamdeck/plugins/message/com.elgato.hello-world/auth'

encodedOauth2RedirectProxy({
  pluginUuid: 'com.elgato.hello-world',
  path: '/auth',
})
// => 'https%3A%2F%2Foauth2-redirect.elgato.com%2Fstreamdeck%2Fplugins%2Fmessage%2Fcom.elgato.hello-world%2Fauth'
```

## Official Documentation

- [Stream Deck SDK Deep-Linking](https://docs.elgato.com/streamdeck/sdk/guides/deep-linking/)
