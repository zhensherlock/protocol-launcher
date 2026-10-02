---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/surge' : 'protocol-launcher');
</script>

# Surge

[Surge](https://nssurge.com/) is a network toolbox. **Protocol Launcher** allows you to generate Surge URL scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

start/stop/toggle are iOS-only. Configuration/module installation and license activation use surge on iOS and macOS; surgeconfig is a macOS compatibility scheme (Mac 6.7.0+). autoclose is iOS-only and cannot be used with install-config. On iOS, license activation requires no active non-trial license; on macOS, the activation window must already be open. The current reference lists callbacks for start/stop/toggle.

### Start

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'start' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}start()
```

### Start And Auto Close

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'start' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}start({
  autoclose: true,
})
```

### Stop

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stop' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}stop()
```

### Toggle

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'toggle' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}toggle({
  autoclose: true,
})
```

### Install Config

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installConfig' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}installConfig({
  url: 'https://example.com/surge.conf',
})
```

### X-Callback Start

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStart' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}xCallbackStart()
```

### X-Callback Stop

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackStop' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}xCallbackStop()
```

### X-Callback Toggle

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'xCallbackToggle' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}xCallbackToggle()
```


### Install Module

Install a module from its URL. The URL is percent-encoded; scheme also accepts surgeconfig for macOS compatibility.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installModule' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}installModule({
  'url': 'https://example.com/example.sgmodule'
})
```

### Email License Activation

Prefill the email-license activation flow.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'emailLicense' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}emailLicense({
  'email': 'name@example.com',
  'key': 'REPLACE_WITH_LICENSE_KEY'
})
```

### Team License Activation

Prefill the team-license activation flow. enterprise-license is the canonical route; team-license is an app-side alias.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'enterpriseLicense' : 'surge' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'surge.'}}enterpriseLicense({
  'companyID': 'REPLACE_WITH_COMPANY_ID',
  'userID': 'REPLACE_WITH_USER_ID',
  'passcode': 'REPLACE_WITH_PASSCODE'
})
```

## Generated URLs

```ts
start()
// => 'surge:///start'

start({ autoclose: true })
// => 'surge:///start?autoclose=true'

stop()
// => 'surge:///stop'

toggle({ autoclose: true })
// => 'surge:///toggle?autoclose=true'

installConfig({
  url: 'https://example.com/surge.conf',
})
// => 'surge:///install-config?url=https%3A%2F%2Fexample.com%2Fsurge.conf'

xCallbackStart()
// => 'surge://x-callback-url/start'

xCallbackStop()
// => 'surge://x-callback-url/stop'

xCallbackToggle()
// => 'surge://x-callback-url/toggle'
```

## Official Documentation

- [Surge URL Scheme](https://manual.nssurge.com/tools/url-scheme.html)

## Official Documentation

- [URL scheme](https://manual.nssurge.com/tools/url-scheme.html)
