---
url: /protocol-launcher/apps/stream-deck.md
---

# Stream Deck

[Stream Deck](https://www.elgato.com/stream-deck) is Elgato's shortcut controller app. **Protocol Launcher** allows you to generate Stream Deck URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

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

### OAuth2 Redirect Proxy

Create the documented OAuth2 redirect proxy URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'oauth2RedirectProxy' : 'streamDeck' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'streamDeck.'}}oauth2RedirectProxy({
  pluginUuid: 'com.elgato.hello-world',
  path: '/auth',
})
```

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

* [Stream Deck SDK Deep-Linking](https://docs.elgato.com/streamdeck/sdk/guides/deep-linking/)
