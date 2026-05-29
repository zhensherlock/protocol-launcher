---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, parse, preferences, show } from 'protocol-launcher/cardhop';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  parseCallParams,
  preferencesNotificationsParams,
  showContactParams,
  showViewParams,
} from '../../.vitepress/constants/cardhop';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/cardhop' : 'protocol-launcher');
</script>

# Cardhop

[Cardhop](https://flexibits.com/cardhop) is a contacts app from Flexibits. **Protocol Launcher** allows you to generate Cardhop links for opening the app, parsing contact actions, showing contacts or views, and opening supported preferences paths.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

Flexibits documents `x-cardhop://`, `parse`, `show`, and `preferences` URL handlers. This module only covers those documented handlers and parameters.

### Open

Open Cardhop.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Cardhop
  </VPLink>
</div>

### Parse

Open Cardhop's parser with the documented `s` text parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}parse({
  s: 'call Mike',
})
```

<div class="flex justify-center">
  <VPLink :href="parse(parseCallParams)" target="_self">
    Parse in Cardhop
  </VPLink>
</div>

Use `list` to filter results, and use one of Cardhop's documented `add` values (`Y`, `y`, `T`, `t`, or `1`-`9`) when a parsed new contact should be added immediately.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}parse({
  s: 'Sarah Jones',
  list: 'Friends',
  add: '1',
})
```

### Show

Show a contact by name or identifier.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}show({
  contact: 'Mike Ross',
})
```

<div class="flex justify-center">
  <VPLink :href="show(showContactParams)" target="_self">
    Show Contact in Cardhop
  </VPLink>
</div>

Show a contact with a documented action and list filter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}show({
  id: 'REPLACE_WITH_CONTACT_ID',
  action: 'mail',
  list: 'Team',
})
```

Show one of Cardhop's documented views.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}show({
  view: 'contacts',
  list: 'Friends',
})
```

<div class="flex justify-center">
  <VPLink :href="show(showViewParams)" target="_self">
    Show Contacts View
  </VPLink>
</div>

### Preferences

Open a supported Cardhop preferences path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preferences' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}preferences({
  path: 'notifications',
})
```

<div class="flex justify-center">
  <VPLink :href="preferences(preferencesNotificationsParams)" target="_self">
    Open Notification Preferences
  </VPLink>
</div>

## Official Documentation

- [Cardhop for iOS: Integration with other apps](https://flexibits.com/cardhop-ios/help/integration-with-other-apps)
- [Cardhop for Mac: Integration with other apps](https://flexibits.com/cardhop/help/integration-with-other-apps)
