---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  connectParams,
  customClientParams,
  customClientMsiParams,
  registerLicenseParams,
  registerLicenseSilentParams,
  registerLicenseCustomClientParams,
  registerLicenseCustomClientMsiParams,
} from '../../.vitepress/constants/anydesk';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/anydesk' : 'protocol-launcher');
</script>

# AnyDesk

[AnyDesk](https://anydesk.com) is a remote desktop app for connecting to remote devices. **Protocol Launcher** allows you to generate AnyDesk URL handlers for remote sessions and license registration.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Connect

AnyDesk documents the standard remote-session URL as `anydesk:<anydesk-id-or-alias>`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connect' : 'anydesk' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}connect({
  idOrAlias: '{{ connectParams.idOrAlias }}',
})
```

### Connect Custom Client

AnyDesk documents `anydesk-<prefix>:<anydesk-id-or-alias>` for non-MSI custom clients.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connectCustomClient' : 'anydesk' }} } from '{{ importPath }}'

const nonMsiUrl = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}connectCustomClient({
  prefix: '{{ customClientParams.prefix }}',
  idOrAlias: '{{ customClientParams.idOrAlias }}',
})
```

### Connect Custom Client MSI

AnyDesk documents `anydesk:AnyDesk-<prefix>_msi:<anydesk-id-or-alias>` for MSI custom clients.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'connectCustomClientMsi' : 'anydesk' }} } from '{{ importPath }}'

const msiUrl = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}connectCustomClientMsi({
  prefix: '{{ customClientMsiParams.prefix }}',
  idOrAlias: '{{ customClientMsiParams.idOrAlias }}',
})
```

### Register License

AnyDesk documents license registration as `anydesk://register-license?key=LICENSE-KEY`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'registerLicense' : 'anydesk' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}registerLicense({
  key: '{{ registerLicenseParams.key }}',
})

const silentUrl = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}registerLicense({
  key: '{{ registerLicenseSilentParams.key }}',
  silent: {{ registerLicenseSilentParams.silent }},
})
```

### Register License Custom Client

AnyDesk documents `anydesk-<prefix>://register-license?key=LICENSE-KEY` for non-MSI custom clients.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'registerLicenseCustomClient' : 'anydesk' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}registerLicenseCustomClient({
  prefix: '{{ registerLicenseCustomClientParams.prefix }}',
  key: '{{ registerLicenseCustomClientParams.key }}',
})
```

### Register License Custom Client MSI

AnyDesk documents `anydesk:AnyDesk-<prefix>_msi://register-license?key=LICENSE-KEY` for MSI custom clients.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'registerLicenseCustomClientMsi' : 'anydesk' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'anydesk.'}}registerLicenseCustomClientMsi({
  prefix: '{{ registerLicenseCustomClientMsiParams.prefix }}',
  key: '{{ registerLicenseCustomClientMsiParams.key }}',
})
```

Appending `&silent` is supported on license registration URLs by passing `silent: true`. These examples intentionally do not render live launch buttons because the official handlers can start a remote session or submit a license key. See the [official AnyDesk URL Handler documentation](https://support.anydesk.com/docs/url-handler).
