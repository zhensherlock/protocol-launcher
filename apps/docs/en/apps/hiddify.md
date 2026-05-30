---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/hiddify' : 'protocol-launcher');
</script>

# Hiddify

[Hiddify](https://hiddify.com/) is a proxy and VPN client. **Protocol Launcher** allows you to generate Hiddify URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Hiddify documents the active URL scheme as `hiddify://import/<sublink>#name`. The `<sublink>` value may be a Clash link, Singbox link, v2ray sublink, or a single proxy link. The older `install-sub`, `install-config`, and `install-proxy` URL forms are marked deprecated in Hiddify's documentation, so this module does not expose helpers for them.

Hiddify's Profile Title section lists the URL fragment, anything after `#`, as one source for the imported profile title. Use placeholder or synthetic values in examples and tests. Do not publish real subscription tokens, proxy passwords, or private server names.

### Import Config

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importConfig' : 'hiddify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hiddify.'}}importConfig({
  sublink: 'https://hiddify.com/autosub',
  name: 'name',
})
```

### Import Subscription URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importSubscriptionUrl' : 'hiddify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hiddify.'}}importSubscriptionUrl({
  sublink: 'https://example.com/subscriptions/v2ray.txt',
})
```

### Import Proxy URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importProxyUrl' : 'hiddify' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hiddify.'}}importProxyUrl({
  sublink: 'trojan://REPLACE_WITH_PASSWORD@example.com:443#name',
})
```

## Generated URLs

```ts
importConfig({
  sublink: 'https://hiddify.com/autosub',
  name: 'name',
})
// => 'hiddify://import/https://hiddify.com/autosub#name'

importSubscriptionUrl({
  sublink: 'https://example.com/subscriptions/v2ray.txt',
})
// => 'hiddify://import/https://example.com/subscriptions/v2ray.txt'

importProxyUrl({
  sublink: 'trojan://REPLACE_WITH_PASSWORD@example.com:443#name',
})
// => 'hiddify://import/trojan://REPLACE_WITH_PASSWORD@example.com:443#name'
```

## References

- [Hiddify URL Scheme](https://hiddify.com/app/URL-Scheme/)
