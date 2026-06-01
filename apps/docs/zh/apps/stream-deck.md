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

[Stream Deck](https://www.elgato.com/stream-deck) 是 Elgato 的快捷控制器应用。**Protocol Launcher** 可以生成 Stream Deck URL scheme 链接。

## 使用方式

这个库有两种使用方式：

- On-Demand 从子路径导入，支持 tree-shaking，能让产物更小。
- Full Import 从根包导入，适合快速脚本或演示，但会包含全部 app 模块。

生产构建建议选择 On-Demand；快速脚本或 demo 可以选择 Full Import。

<SelectInstallationMethod v-model="currentMethod" />

## URL Scheme

Elgato 官方 Stream Deck SDK 文档定义的插件 deep-link message 格式为：`streamdeck://plugins/message/<PLUGIN_UUID>[path]["?" query]["#" fragment]`。

Stream Deck 7.0 及之后版本也支持 passive deep-link，方式是添加官方文档中的 `streamdeck=hidden` query string 参数。

同一篇官方文档还记录了 OAuth2 redirect proxy URL 格式：`https://oauth2-redirect.elgato.com/streamdeck/plugins/message/<PLUGIN_UUID>`。除非授权服务商不接受 custom URL scheme，否则应优先使用插件 deep-link URL 作为 callback URL。

### Plugin Message

向 Stream Deck 插件发送 deep-link message。

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
    在 Stream Deck 中打开
  </VPLink>
</div>

### Passive Plugin Message

通过设置官方文档中的 `streamdeck=hidden` query 参数发送 passive deep-link message。

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
    打开 Passive Link
  </VPLink>
</div>

### OAuth2 Redirect Proxy

生成官方文档中的 OAuth2 redirect proxy URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'oauth2RedirectProxy' : 'streamDeck' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'streamDeck.'}}oauth2RedirectProxy({
  pluginUuid: 'com.elgato.hello-world',
  path: '/auth',
})
```

<div class="flex justify-center">
  <VPLink :href="oauth2RedirectProxy(oauth2RedirectProxyParams)" target="_self">
    打开 Redirect Proxy
  </VPLink>
</div>

### Encoded OAuth2 Redirect Proxy

生成官方 URL Builder 展示的 encoded OAuth2 redirect proxy URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'encodedOauth2RedirectProxy' : 'streamDeck' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'streamDeck.'}}encodedOauth2RedirectProxy({
  pluginUuid: 'com.elgato.hello-world',
  path: '/auth',
})
```

## 生成的 URL

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

## 官方文档

- [Stream Deck SDK Deep-Linking](https://docs.elgato.com/streamdeck/sdk/guides/deep-linking/)
