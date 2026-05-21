---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { clip, note, search } from 'protocol-launcher/devonthink';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { searchParams } from '../../.vitepress/constants/devonthink';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/devonthink' : 'protocol-launcher');
</script>

# DEVONthink

[DEVONthink](https://www.devontechnologies.com/apps/devonthink) is a document and information manager for macOS. **Protocol Launcher** generates both DEVONthink URL commands (`x-devonthink://`) and DEVONthink item links (`x-devonthink-item://`) from the official DEVONthink Help references.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## URL Commands

DEVONthink URL commands use the `x-devonthink://<command>` scheme. They are commands, not x-callback-url links.

### Create Formatted Note

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createFormattedNote' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createFormattedNote({
  title: 'New Note',
  source: '<p>Hello</p>',
})
```

### Create HTML

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createHTML' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createHTML({
  title: 'Page',
  source: '<h1>Hello</h1>',
})
```

### Create Markdown

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createMarkdown' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createMarkdown({
  title: 'Readme',
  text: '# Hello',
})
```

### Create PDF

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createPDF' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createPDF({
  location: 'https://www.devontechnologies.com',
  width: 800,
  paginated: 1,
})
```

### Create RTF

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createRTF' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createRTF({
  title: 'New bookmark',
  location: 'http://www.devontechnologies.com',
  noselector: 1,
})

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createRTF({
  title: 'Selection',
  selection: 'Selected text',
})
```

### Create Web Archive

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createWebArchive' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createWebArchive({
  title: 'DEVONtechnologies',
  location: 'https://www.devontechnologies.com',
})
```

### Create Bookmark

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createBookmark' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createBookmark({
  title: 'DEVONtechnologies',
  location: 'https://www.devontechnologies.com',
})
```

### Create Group

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createGroup' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createGroup({
  title: 'Inbox',
  destination: 'F8E2A5A6-0000-0000-0000-000000000000',
})
```

### Create Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createText' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}createText({
  title: 'Plain Note',
  text: 'Hello World',
})
```

### Clip

Open the Clip to DEVONthink panel.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'clip' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}clip()
```

<div class="flex justify-center">
  <VPLink :href="clip()" target="_self">
    Open Clip to DEVONthink
  </VPLink>
</div>

### Note

Open the Take Note panel.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'note' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}note()
```

<div class="flex justify-center">
  <VPLink :href="note()" target="_self">
    Open Take Note
  </VPLink>
</div>

### Search

Initiate a search in open DEVONthink databases.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}search({
  query: 'invoice',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in DEVONthink
  </VPLink>
</div>

## Item Links

DEVONthink item links use the `x-devonthink-item://<uuid>` scheme. They point to existing DEVONthink databases, groups, documents, or specific locations inside supported documents.

### Item Link

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'itemLink' : 'devonthink' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}itemLink({
  uuid: '929D101B-35AC-474C-801C-D8818C48DB80',
  reveal: 1,
})

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}itemLink({
  uuid: 'PDF-ID',
  page: 5,
})

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}itemLink({
  uuid: 'TEXT-FILE-ID',
  search: 'iPad Pro',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}itemLink({
  uuid: 'MOVIE-ID',
  time: 43.5,
})

const url = {{currentMethod === 'On-Demand' ? '' : 'devonthink.'}}itemLink({
  uuid: '929D101B-35AC-474C-801C-D8818C48DB80',
  line: 125,
})
```

## Official References

- [DEVONthink URL Commands](https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html)
- [DEVONthink Item Links](https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-itemlinks.html)
