---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { open, createEntry, editEntry, viewEntry, filterByTag, openCalendar, openDailyPrompt, openDate, openOnThisDay, openSettings, openStarred, openTimeline, openRecentPrompts, openTags, openBook, openTemplates, openRedeem, openEncryptionKey, openSiri, openMedia } from 'protocol-launcher/day-one';
import { openTagsParams } from '../../.vitepress/constants/day-one';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { useAppStore } from '../../.vitepress/stores/app';
import {
  createEntryParams,
  editEntryParams,
  viewEntryParams,
  filterByTagParams,
  openDailyPromptParams,
  openDateParams,
} from '../../.vitepress/constants/day-one';

const appStore = useAppStore();
const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/day-one' : 'protocol-launcher');
</script>

# Day One

[Day One](https://dayoneapp.com/) is the #1 journaling app for capturing life's moments. **Protocol Launcher** allows you to generate deep links to create, edit, and view journal entries in Day One.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

Windows supports calendar, timeline, media, settings, templates, redeem, and blank new-entry links. It ignores entry text, tags, journal, and prompt parameters, and does not support view/edit by entry ID. Use `openTimeline({ platform: 'windows' })` on Windows; the default keeps `dayone://entries` for other platforms.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Day One
  </VPLink>
</div>

### Create Entry

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createEntry' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}createEntry({
  entry: 'Hello World',
  tags: 'work, test',
})
```

<div class="flex justify-center">
  <VPLink :href="createEntry(createEntryParams)" target="_self">
    Create Entry in Day One
  </VPLink>
</div>

### Edit Entry

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editEntry' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}editEntry({
  entryId: '3415BB00651C4533B41F62544A775CCC',
})
```

<div class="flex justify-center">
  <VPLink :href="editEntry(editEntryParams)" target="_self">
    Edit Entry in Day One
  </VPLink>
</div>

### View Entry

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'viewEntry' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}viewEntry({
  entryId: '22B178B33B2A4149538280F9C34102C5',
})
```

<div class="flex justify-center">
  <VPLink :href="viewEntry(viewEntryParams)" target="_self">
    View Entry in Day One
  </VPLink>
</div>

### Filter by Tag

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'filterByTag' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}filterByTag({
  tag: 'work',
})
```

<div class="flex justify-center">
  <VPLink :href="filterByTag(filterByTagParams)" target="_self">
    Filter by Tag in Day One
  </VPLink>
</div>

### Open Calendar

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCalendar' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openCalendar()
```

<div class="flex justify-center">
  <VPLink :href="openCalendar()" target="_self">
    Open Calendar in Day One
  </VPLink>
</div>

### Open Daily Prompt

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDailyPrompt' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openDailyPrompt({
  promptId: 'ck7zw8sybj6kv09983znvrmof',
})
```

<div class="flex justify-center">
  <VPLink :href="openDailyPrompt(openDailyPromptParams)" target="_self">
    Open Daily Prompt in Day One
  </VPLink>
</div>

### Open Date

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDate' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openDate({
  date: '2020-04-02',
})
```

<div class="flex justify-center">
  <VPLink :href="openDate(openDateParams)" target="_self">
    Open Date in Day One
  </VPLink>
</div>

### Open On This Day

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openOnThisDay' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openOnThisDay()
```

<div class="flex justify-center">
  <VPLink :href="openOnThisDay()" target="_self">
    Open On This Day in Day One
  </VPLink>
</div>

### Open Settings

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSettings' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openSettings()
```

<div class="flex justify-center">
  <VPLink :href="openSettings()" target="_self">
    Open Settings in Day One
  </VPLink>
</div>

### Open Starred

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openStarred' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openStarred()
```

<div class="flex justify-center">
  <VPLink :href="openStarred()" target="_self">
    Open Starred in Day One
  </VPLink>
</div>

### Open Timeline

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTimeline' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openTimeline()
```

<div class="flex justify-center">
  <VPLink :href="openTimeline({ platform: appStore.isWindows ? 'windows' : undefined })" target="_self">
    Open Timeline in Day One
  </VPLink>
</div>

### Recent Prompts

Open recent prompts on iOS.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRecentPrompts' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openRecentPrompts()
```

<div class="flex justify-center">
  <VPLink :href="openRecentPrompts()" target="_self">
    Recent Prompts
  </VPLink>
</div>

### Open Tag

Apply a tag filter on iOS or macOS.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTags' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openTags({
  name: 'work'
})
```

<div class="flex justify-center">
  <VPLink :href="openTags(openTagsParams)" target="_self">
    Open Tag
  </VPLink>
</div>

### Book Printing

Open book printing on iOS.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openBook' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openBook()
```

<div class="flex justify-center">
  <VPLink :href="openBook()" target="_self">
    Book Printing
  </VPLink>
</div>

### Templates

Open templates on iOS or Windows.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTemplates' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openTemplates()
```

<div class="flex justify-center">
  <VPLink :href="openTemplates()" target="_self">
    Templates
  </VPLink>
</div>

### Redeem Code

Open code redemption on iOS or Windows.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRedeem' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openRedeem()
```

<div class="flex justify-center">
  <VPLink :href="openRedeem()" target="_self">
    Redeem Code
  </VPLink>
</div>

### Encryption Key

Open the encryption key view on iOS or macOS.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEncryptionKey' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openEncryptionKey()
```

<div class="flex justify-center">
  <VPLink :href="openEncryptionKey()" target="_self">
    Encryption Key
  </VPLink>
</div>

### Siri Shortcuts

Open Siri Shortcuts settings on iOS.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSiri' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openSiri()
```

<div class="flex justify-center">
  <VPLink :href="openSiri()" target="_self">
    Siri Shortcuts
  </VPLink>
</div>

### Media

Open the media view on Windows.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openMedia' : 'dayOne' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dayOne.'}}openMedia()
```

<div class="flex justify-center">
  <VPLink :href="openMedia()" target="_self">
    Media
  </VPLink>
</div>

## Official Documentation

- [URL scheme documentation](https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/)
