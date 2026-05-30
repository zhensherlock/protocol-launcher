---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { newContact, openContact, selectFilter, show } from 'protocol-launcher/busycontacts';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  newContactParams,
  openContactParams,
  selectFilterParams,
  showContactParams,
} from '../../.vitepress/constants/busycontacts';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/busycontacts' : 'protocol-launcher');
</script>

# BusyContacts

[BusyContacts](https://www.busymac.com/busycontacts/) is a contacts app for macOS. **Protocol Launcher** allows you to generate official BusyContacts URL handler links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

BusyMac documents `busycontacts://show/`, `busycontacts://open/`, `busycontacts://new/`, `busycontacts://filter/`, and `busycontacts://backup`. This module only covers those documented handlers.

### Show

Show a contact by UID, X-ABUID, or email address.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'busycontacts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'busycontacts.'}}show({
  identifier: 'test@apple.com',
})
```

<div class="flex justify-center">
  <VPLink :href="show(showContactParams)" target="_self">
    Show Contact
  </VPLink>
</div>

### Open Contact

Open a contact in a separate floating window.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openContact' : 'busycontacts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'busycontacts.'}}openContact({
  identifier: 'B8FB81A6-659D-4E66-B1B7-97A95A144C83:ABPerson',
})
```

<div class="flex justify-center">
  <VPLink :href="openContact(openContactParams)" target="_self">
    Open Contact Window
  </VPLink>
</div>

### New Contact

Create a new contact from BusyContacts' natural language string. Include an address book hint in the same string with the documented ` /Hint` suffix.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newContact' : 'busycontacts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'busycontacts.'}}newContact({
  text: 'Bob Jones 555-1212',
})
```

<div class="flex justify-center">
  <VPLink :href="newContact(newContactParams)" target="_self">
    New Contact
  </VPLink>
</div>

### Select Filter

Select a BusyContacts Smart Filter by exact name.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'selectFilter' : 'busycontacts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'busycontacts.'}}selectFilter({
  name: 'friends',
})
```

<div class="flex justify-center">
  <VPLink :href="selectFilter(selectFilterParams)" target="_self">
    Select Filter
  </VPLink>
</div>

### Backup

Create a backup in BusyContacts' configured default backup location. Because this triggers a background backup, the docs show the generated string without a launch button.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'backup' : 'busycontacts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'busycontacts.'}}backup()
```

## Generated URLs

```ts
show({ identifier: 'test@apple.com' })
// => 'busycontacts://show/test@apple.com'

show({ identifier: 'f90221ac-84a8-4f40-a699-5930b59a24d1' })
// => 'busycontacts://show/f90221ac-84a8-4f40-a699-5930b59a24d1'

openContact({ identifier: 'B8FB81A6-659D-4E66-B1B7-97A95A144C83:ABPerson' })
// => 'busycontacts://open/B8FB81A6-659D-4E66-B1B7-97A95A144C83:ABPerson'

newContact({ text: 'Bob Jones 555-1212' })
// => 'busycontacts://new/Bob%20Jones%20555-1212'

newContact({ text: 'Bob Jones 123 Main Street, Anytown USA /iCloud' })
// => 'busycontacts://new/Bob%20Jones%20123%20Main%20Street,%20Anytown%20USA%20/iCloud'

selectFilter({ name: 'friends' })
// => 'busycontacts://filter/friends'

selectFilter({ name: 'Team Contacts' })
// => 'busycontacts://filter/Team%20Contacts'

backup()
// => 'busycontacts://backup'
```

## References

- [BusyContacts URL Handler](https://www.busymac.com/docs/busycontacts/56235-url-handler)
