---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  open,
  create,
  get,
  search,
  append,
  prepend,
  capture,
  dictate,
  workspace,
  runAction,
  quickSearch,
  arrange,
  actionSearch,
  commandPalette,
  getCurrentDraft,
  loadActionBarGroup,
  loadActionGroup,
  replaceRange,
  scanDocument,
} from 'protocol-launcher/drafts';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  openParams,
  openWithTitleParams,
  createParams,
  createWithTagParams,
  getParams,
  getWithRetParamParams,
  searchParams,
  appendParams,
  appendWithActionParams,
  prependParams,
  prependWithTagParams,
  captureParams,
  dictateParams,
  workspaceParams,
  runActionParams,
  quickSearchParams,
  arrangeParams,
  actionSearchParams,
  commandPaletteParams,
  getCurrentDraftParams,
  loadActionBarGroupParams,
  loadActionGroupParams,
  replaceRangeParams,
  scanDocumentParams,
} from '../../.vitepress/constants/drafts';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/drafts' : 'protocol-launcher');
</script>

# Drafts

[Drafts](https://getdrafts.com/) is a powerful text capture and automation app for Apple platforms (iPhone, iPad, Mac, Apple Watch). It allows you to quickly capture text and send it to other apps and services through actions. **Protocol Launcher** allows you to generate deep links to create, edit, and manage drafts in Drafts.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Open Drafts

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open()
```

<div class="flex justify-center">
  <VPLink :href="open()" target="_self">
    Open Drafts
  </VPLink>
</div>

### Open Existing Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open({
  uuid: 'UUID-TO-VALID-DRAFT',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openParams)" target="_self">
    Open Draft by UUID
  </VPLink>
</div>

### Open Draft by Title

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open({
  title: 'MyDraft/Header Name',
})
```

<div class="flex justify-center">
  <VPLink :href="open(openWithTitleParams)" target="_self">
    Open Draft by Title
  </VPLink>
</div>

### Create New Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}create({
  text: 'Hello World',
})
```

<div class="flex justify-center">
  <VPLink :href="create(createParams)" target="_self">
    Create New Draft
  </VPLink>
</div>

### Create Draft with Tags

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}create({
  text: 'Hello World',
  tag: ['work', 'important'],
  flagged: true,
})
```

<div class="flex justify-center">
  <VPLink :href="create(createWithTagParams)" target="_self">
    Create Draft with Tags
  </VPLink>
</div>

### Get Draft Content

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}get({
  uuid: 'UUID-TO-VALID-DRAFT',
})
```

<div class="flex justify-center">
  <VPLink :href="get(getParams)" target="_self">
    Get Draft Content
  </VPLink>
</div>

### Get Draft with Return Parameter

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}get({
  uuid: 'UUID-TO-VALID-DRAFT',
  retParam: 'input',
})
```

<div class="flex justify-center">
  <VPLink :href="get(getWithRetParamParams)" target="_self">
    Get Draft with Return Param
  </VPLink>
</div>

### Search Drafts

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}search({
  query: 'meeting',
  tag: 'work',
  folder: 'inbox',
})
```

<div class="flex justify-center">
  <VPLink :href="search(searchParams)" target="_self">
    Search Drafts
  </VPLink>
</div>

### Append Text to Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}append({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-ADD',
})
```

<div class="flex justify-center">
  <VPLink :href="append(appendParams)" target="_self">
    Append Text to Draft
  </VPLink>
</div>

### Append Text with Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}append({
  uuid: 'xxx',
  text: 'Suffix',
  action: 'MyAction',
})
```

<div class="flex justify-center">
  <VPLink :href="append(appendWithActionParams)" target="_self">
    Append Text with Action
  </VPLink>
</div>

### Prepend Text to Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}prepend({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-ADD',
})
```

<div class="flex justify-center">
  <VPLink :href="prepend(prependParams)" target="_self">
    Prepend Text to Draft
  </VPLink>
</div>

### Prepend Text with Tags

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}prepend({
  uuid: 'xxx',
  text: 'Prefix',
  tag: ['work', 'important'],
})
```

<div class="flex justify-center">
  <VPLink :href="prepend(prependWithTagParams)" target="_self">
    Prepend Text with Tags
  </VPLink>
</div>

### Capture Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'capture' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}capture({
  text: 'Note',
  tag: 'work,important',
})
```

<div class="flex justify-center">
  <VPLink :href="capture(captureParams)" target="_self">
    Capture Text
  </VPLink>
</div>

### Dictate Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dictate' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}dictate({
  locale: 'en-US',
  save: false,
  xSuccess: 'myapp://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="dictate(dictateParams)" target="_self">
    Dictate Text
  </VPLink>
</div>

### Load Workspace

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'workspace' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}workspace({
  name: 'Default',
})
```

<div class="flex justify-center">
  <VPLink :href="workspace(workspaceParams)" target="_self">
    Load Workspace
  </VPLink>
</div>

### Run Action on Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runAction' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}runAction({
  text: 'TEXT',
  action: 'VALID-ACTION-NAME',
})
```

<div class="flex justify-center">
  <VPLink :href="runAction(runActionParams)" target="_self">
    Run Action on Text
  </VPLink>
</div>

### Quick Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSearch' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}quickSearch({
  query: 'QUERY-TEXT',
})
```

<div class="flex justify-center">
  <VPLink :href="quickSearch(quickSearchParams)" target="_self">
    Quick Search
  </VPLink>
</div>

### Arrange Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'arrange' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}arrange({
  text: 'unsorted list',
  retParam: 'input',
  xSuccess: 'myapp://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="arrange(arrangeParams)" target="_self">
    Arrange Text
  </VPLink>
</div>

### Action Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'actionSearch' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}actionSearch({
  query: 'QUERY-TEXT',
})
```

<div class="flex justify-center">
  <VPLink :href="actionSearch(actionSearchParams)" target="_self">
    Action Search
  </VPLink>
</div>

### Command Palette

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'commandPalette' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}commandPalette({
  query: 'QUERY-TEXT',
})
```

<div class="flex justify-center">
  <VPLink :href="commandPalette(commandPaletteParams)" target="_self">
    Command Palette
  </VPLink>
</div>

### Get Current Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getCurrentDraft' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}getCurrentDraft({
  xSuccess: 'myapp://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="getCurrentDraft(getCurrentDraftParams)" target="_self">
    Get Current Draft
  </VPLink>
</div>

### Load Action Bar Group

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'loadActionBarGroup' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}loadActionBarGroup({
  name: 'GROUP-NAME',
})
```

<div class="flex justify-center">
  <VPLink :href="loadActionBarGroup(loadActionBarGroupParams)" target="_self">
    Load Action Bar Group
  </VPLink>
</div>

### Load Action Group

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'loadActionGroup' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}loadActionGroup({
  name: 'GROUP-NAME',
})
```

<div class="flex justify-center">
  <VPLink :href="loadActionGroup(loadActionGroupParams)" target="_self">
    Load Action Group
  </VPLink>
</div>

### Replace Range in Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'replaceRange' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}replaceRange({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-INSERT',
  start: 0,
  length: 10,
})
```

<div class="flex justify-center">
  <VPLink :href="replaceRange(replaceRangeParams)" target="_self">
    Replace Range in Draft
  </VPLink>
</div>

### Scan Document

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scanDocument' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}scanDocument({
  save: false,
  retParam: 'input',
  xSuccess: 'myapp://callback',
})
```

<div class="flex justify-center">
  <VPLink :href="scanDocument(scanDocumentParams)" target="_self">
    Scan Document
  </VPLink>
</div>
