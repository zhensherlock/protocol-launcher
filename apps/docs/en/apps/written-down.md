---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { openEntry, openJournal } from 'protocol-launcher/written-down';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { openEntryParams, openJournalParams } from '../../.vitepress/constants/written-down';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/written-down' : 'protocol-launcher');
</script>

# Written Down

[Written Down](https://tinkerbuilt.com/written-down/) is a journal app for writing personal entries. **Protocol Launcher** allows you to generate links for creating and editing entries, opening entries, and opening journals in Written Down.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

Written Down documents `writtendown://x-callback-url/[action]?[action parameters]` for `create`, `open-entry`, `edit-entry`, and `open-journal`. Optional values are omitted when not provided.

### Create

Create a new entry. All action parameters are optional; when `journalID` is omitted, Written Down uses the first journal.

Official action parameters:

- `text`: body text for the new entry.
- `journalID`: unique identifier for the journal to create an entry in; defaults to the first journal if omitted.
- `tags`: comma-separated list of tags to add to the entry.
- `latlng`: comma-separated latitude and longitude values for entry location; defaults to the current location if omitted.
- `date`: date and time for the entry in ISO 8601 format; defaults to the current date and time if omitted.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'writtenDown' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'writtenDown.'}}create({
  text: "It's beautiful today",
  journalID: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
  tags: 'thoughts,weather',
  latlng: '37.331686,-122.030656',
  date: '2017-12-19T16:39:57-08:00',
})
```

Official `x-success` return parameters: `id`, `text`, and `journalID`.

### Open Entry

Open and display an entry by its required `id`.

Official action parameters:

- `id`: required unique identifier for the entry to be opened.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEntry' : 'writtenDown' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'writtenDown.'}}openEntry({
  id: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
})
```

<div class="flex justify-center">
  <VPLink :href="openEntry(openEntryParams)" target="_self">
    Open Entry in Written Down
  </VPLink>
</div>

Official `x-success` return parameters: `id`, `text`, and `journalID`.

### Edit Entry

Edit an existing entry by its required `id`. Written Down documents `mode` values of `append`, `replace`, and `prepend`, and `tagMode` values of `append`, `replace`, and `delete`.

Official action parameters:

- `id`: required unique identifier of the entry to edit.
- `text`: text to be added to the entry.
- `mode`: whether to `append`, `replace`, or `prepend` the text to the entry; defaults to `append` if omitted.
- `tags`: comma-separated list of tags to apply to the entry.
- `tagMode`: whether to `append`, `replace`, or `delete` the provided tags; defaults to `append` if omitted.
- `latlng`: comma-separated latitude and longitude values for entry location; omitted leaves location unchanged, and `delete` removes the location.
- `date`: date and time for the entry in ISO 8601 format; omitted leaves the date unchanged.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editEntry' : 'writtenDown' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'writtenDown.'}}editEntry({
  id: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
  text: 'Another thought',
  mode: 'replace',
  tags: 'thoughts,feelings',
  tagMode: 'delete',
  latlng: 'delete',
  date: '2017-12-19T16:39:57-08:00',
})
```

Official `x-success` return parameters: `id`, `text`, and `journalID`.

### Open Journal

Open and display a journal by its required `journalID`.

Official action parameters:

- `journalID`: required unique identifier for the journal to be opened.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openJournal' : 'writtenDown' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'writtenDown.'}}openJournal({
  journalID: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
})
```

<div class="flex justify-center">
  <VPLink :href="openJournal(openJournalParams)" target="_self">
    Open Journal in Written Down
  </VPLink>
</div>

Official `x-success` return parameters: `journalID`.

## Official Documentation

- [Written Down X-Callback-URL Scheme](https://tinkerbuilt.com/faq/x-callback-url/)
