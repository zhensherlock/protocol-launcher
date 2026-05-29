---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  monitorServer,
  open,
  openAccount,
  openNotifications,
  openNotificationsLog,
  openServer,
  openTriggers,
  openView,
  openWidgets,
  runServer,
} from 'protocol-launcher/pushcut';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/pushcut' : 'protocol-launcher',
);
</script>

# Pushcut

[Pushcut](https://www.pushcut.io/) is an automation app. **Protocol Launcher** allows you to generate official Pushcut URL scheme links for opening Pushcut and its documented views.

Pushcut's official URL scheme starts with `pushcut://`. The documented open form is `pushcut://open/` followed by one of these view names: `notifications`, `triggers`, `widgets`, `server`, `account`, `runServer`, `monitorServer`, or `notificationsLog`.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Pushcut

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Pushcut
  </VPLink>
</div>

### Open View

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openView' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openView({
  view: 'notifications',
})
```

<div class="flex justify-center">
  <VPLink :href="openView({ view: 'notifications' })" target="_self">
    Open Pushcut View
  </VPLink>
</div>

### Open Notifications

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotifications' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openNotifications()
```

<div class="flex justify-center">
  <VPLink :href="openNotifications()" target="_self">
    Open Notifications
  </VPLink>
</div>

### Open Triggers

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTriggers' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openTriggers()
```

<div class="flex justify-center">
  <VPLink :href="openTriggers()" target="_self">
    Open Triggers
  </VPLink>
</div>

### Open Widgets

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWidgets' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openWidgets()
```

<div class="flex justify-center">
  <VPLink :href="openWidgets()" target="_self">
    Open Widgets
  </VPLink>
</div>

### Open Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openServer' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openServer()
```

<div class="flex justify-center">
  <VPLink :href="openServer()" target="_self">
    Open Server
  </VPLink>
</div>

### Open Account

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAccount' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openAccount()
```

<div class="flex justify-center">
  <VPLink :href="openAccount()" target="_self">
    Open Account
  </VPLink>
</div>

### Run Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runServer' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}runServer()
```

<div class="flex justify-center">
  <VPLink :href="runServer()" target="_self">
    Run Server
  </VPLink>
</div>

### Monitor Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'monitorServer' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}monitorServer()
```

<div class="flex justify-center">
  <VPLink :href="monitorServer()" target="_self">
    Monitor Server
  </VPLink>
</div>

### Open Notifications Log

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotificationsLog' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openNotificationsLog()
```

<div class="flex justify-center">
  <VPLink :href="openNotificationsLog()" target="_self">
    Open Notifications Log
  </VPLink>
</div>

## References

- [Pushcut URL Scheme](https://www.pushcut.io/support/url-scheme)
