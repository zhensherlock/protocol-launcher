---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  connectByMacParams,
  connectSosParams,
} from '../../.vitepress/constants/splashtop-business';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/splashtop-business' : 'protocol-launcher');
</script>

# Splashtop Business

[Splashtop Business](https://www.splashtop.com/products/business-access) is a remote access and support app from Splashtop. **Protocol Launcher** allows you to generate Splashtop Business URI links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Splashtop documents the Business app URI as `st-business://com.splashtop.business` with `account` plus either `mac` for a remote/host computer or `sos` for an SOS session code.

Splashtop's desktop shortcut article also mentions Remote Command and File Transfer shortcut types, but it does not publish URI parameters for constructing those sessions. This module does not expose helpers for those shortcut types.

Use placeholders in examples and tests. Do not publish real Splashtop accounts, MAC addresses, session codes, credentials, or license data.

### Connect By Mac

Launch Splashtop Business and connect to a remote computer identified by MAC address.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connectByMac' : 'splashtopBusiness' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'splashtopBusiness.'}}connectByMac({
  account: '{{ connectByMacParams.account }}',
  mac: '{{ connectByMacParams.mac }}',
})
```

### Connect SOS

Launch Splashtop Business with an SOS session code.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connectSos' : 'splashtopBusiness' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'splashtopBusiness.'}}connectSos({
  account: '{{ connectSosParams.account }}',
  sos: '{{ connectSosParams.sos }}',
})
```

## Generated URLs

```ts
connectByMac({
  account: 'email@example.com',
  mac: 'C04A001C72EC',
})
// => 'st-business://com.splashtop.business?account=email@example.com&mac=C04A001C72EC'

connectSos({
  account: 'url.launch@splashtop',
  sos: '123456789',
})
// => 'st-business://com.splashtop.business?account=url.launch@splashtop&sos=123456789'
```

These examples intentionally do not render live launch buttons because the official handlers can start remote access or attended support sessions.

## References

- [Splashtop desktop shortcuts](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/115001482866-How-to-create-a-desktop-shortcut-to-always-connect-to-a-specific-computer)
- [Splashtop RMM URI launch](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/115001642066-Other-RMMs)
- [Splashtop SOS UI comparison](https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/36936249788955-Comparison-of-Legacy-and-New-UI-in-Splashtop-SOS)
