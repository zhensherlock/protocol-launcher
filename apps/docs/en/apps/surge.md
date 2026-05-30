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

Surge's official manual documents four iOS URL scheme actions: `surge:///start`, `surge:///stop`, `surge:///toggle`, and `surge:///install-config?url=x`. The `url` value for `install-config` must be percent-encoded, so `installConfig()` accepts the raw configuration URL and serializes it as the official `url` query parameter.

The only documented option is `autoclose=true`, which can be used with `start`, `stop`, and `toggle`, but cannot be used with `install-config`.

Surge also documents x-callback-url support from v3.4 with the `surge` scheme and only the `start`, `stop`, and `toggle` actions. This module therefore exposes only those three x-callback action URLs and does not add callback query parameters that are not listed on the Surge page.

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

- [Surge URL Scheme](https://manual.nssurge.com/others/url-scheme.html)
