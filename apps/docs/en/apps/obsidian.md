---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { open, openNote, newNote, search, insert, command, options, settings } from 'protocol-launcher/obsidian'
import { SelectInstallationMethod } from '../../.vitepress/components'
import { openNoteParams, newNoteParams, searchParams, insertParams, commandParams, optionsParams, settingsParams } from '../../.vitepress/constants/obsidian'

const currentMethod = ref('On-Demand')
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/obsidian' : 'protocol-launcher',
)
</script>

# Obsidian

[Obsidian](https://obsidian.md/) is a powerful knowledge base that works on top of a local folder of plain text Markdown files. **Protocol Launcher** allows you to generate deep links to open notes, create new notes, search, and execute commands in Obsidian.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Browser

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    <Button Text>
  </VPLink>
</div>

### Open Note

Open a specific note in Obsidian.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNote' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}openNote({
  vault: 'My Vault',
  file: 'Notes/Meeting.md',
})
```

<div class="flex justify-center">
  <VPLink :href="openNote(openNoteParams)" target="_self">
    Open Note in Obsidian
  </VPLink>
</div>

### New Note

Create a new note in Obsidian.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newNote' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}newNote({
  vault: 'My Vault',
  name: 'New Note',
  content: 'Hello World',
})
```

<div class="flex justify-center">
  <VPLink :href="newNote(newNoteParams)" target="_self">
    Create New Note in Obsidian
  </VPLink>
</div>

### Search

Search for notes in Obsidian.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}search({
  vault: 'My Vault',
  query: 'meeting notes',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search in Obsidian
  </VPLink>
</div>

### Insert

Insert content into the current note in Obsidian.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'insert' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}insert({
  vault: 'My Vault',
  content: '## Heading',
})
```

<div class="flex justify-center">
  <VPLink :href="insert(insertParams)" target="_self">
    Insert Content in Obsidian
  </VPLink>
</div>

### Command

Execute a command in Obsidian.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'command' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}command({
  vault: 'My Vault',
  id: 'editor:save-file',
})
```

<div class="flex justify-center">
  <VPLink :href="command(commandParams)" target="_self">
    Execute Command in Obsidian
  </VPLink>
</div>

### Options

Open Obsidian options (quick settings) for a vault.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'options' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}options({
  vault: 'My Vault',
})
```

<div class="flex justify-center">
  <VPLink :href="options(optionsParams)" target="_self">
    Open Options in Obsidian
  </VPLink>
</div>

### Settings

Open Obsidian settings.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'settings' : 'obsidian' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'obsidian.'}}settings({
  vault: 'My Vault',
  page: 'editor',
})
```

<div class="flex justify-center">
  <VPLink :href="settings(settingsParams)" target="_self">
    Open Settings in Obsidian
  </VPLink>
</div>
