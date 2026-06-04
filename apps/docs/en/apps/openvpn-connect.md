---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/openvpn-connect' : 'protocol-launcher');
</script>

# OpenVPN Connect

[OpenVPN Connect](https://openvpn.net/client/) is OpenVPN's official VPN client. **Protocol Launcher** allows you to generate OpenVPN Connect URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

OpenVPN's Access Server token URL documentation defines a token URL as an HTTPS URL with an authentication token for a connection profile. To trigger the OpenVPN Connect import process, the token URL is prefixed with `openvpn://import-profile/`. These helpers accept the raw `https://` token URL and add exactly that prefix.

The official docs require Access Server 2.11.0 or newer and OpenVPN Connect 3.3.6 or newer for this client import process. The OpenVPN Connect FAQ also says the app installs `openvpn://` and `openvpn-connect://` URL schemes for installation detection, but it does not document an action format for `openvpn-connect://`. This module therefore only exposes the documented token URL import format.

Use placeholders in examples and tests. Do not publish real token URLs, credentials, server names, or profile tokens.

### Import Profile

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importProfile' : 'openvpnConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'openvpnConnect.'}}importProfile({
  url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
})
```

### Import Profile Token URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importProfileTokenUrl' : 'openvpnConnect' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'openvpnConnect.'}}importProfileTokenUrl({
  url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
})
```

## Generated URLs

```ts
importProfile({
  url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
})
// => 'openvpn://import-profile/https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN'

importProfileTokenUrl({
  url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
})
// => 'openvpn://import-profile/https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN'
```

## References

- [Access Server's Token URL Feature](https://openvpn.net/as-docs/token-url.html)
- [Tutorial: Manage Token URLs from the Command-line Interface](https://openvpn.net/as-docs/tutorials/tutorial--token-url-cli.html)
- [Troubleshooting FAQs for OpenVPN Connect](https://openvpn.net/connect-docs/troubleshooting-faqs.html)
