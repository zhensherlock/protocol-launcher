---
url: /protocol-launcher/apps/drafts.md
---

# Drafts

[Drafts](https://getdrafts.com/) is a powerful text capture and automation app for Apple platforms (iPhone, iPad, Mac, Apple Watch). It allows you to quickly capture text and send it to other apps and services through actions. **Protocol Launcher** allows you to generate deep links to create, edit, and manage drafts in Drafts.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Drafts

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open()
```

### Open Existing Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open({
  uuid: 'UUID-TO-VALID-DRAFT',
})
```

### Open Draft by Title

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}open({
  title: 'MyDraft/Header Name',
})
```

### Create New Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}create({
  text: 'Hello World',
})
```

### Create Draft with Tags

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'create' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}create({
  text: 'Hello World',
  tag: ['work', 'important'],
  flagged: true,
})
```

### Get Draft Content

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}get({
  uuid: 'UUID-TO-VALID-DRAFT',
})
```

### Get Draft with Return Parameter

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}get({
  uuid: 'UUID-TO-VALID-DRAFT',
  retParam: 'input',
})
```

### Search Drafts

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}search({
  query: 'meeting',
  tag: 'work',
  folder: 'inbox',
})
```

### Append Text to Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}append({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-ADD',
})
```

### Append Text with Action

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'append' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}append({
  uuid: 'xxx',
  text: 'Suffix',
  action: 'MyAction',
})
```

### Prepend Text to Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}prepend({
  uuid: 'UUID-TO-VALID-DRAFT',
  text: 'TEXT-TO-ADD',
})
```

### Prepend Text with Tags

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'prepend' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}prepend({
  uuid: 'xxx',
  text: 'Prefix',
  tag: ['work', 'important'],
})
```

### Capture Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'capture' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}capture({
  text: 'Note',
  tag: 'work,important',
})
```

### Dictate Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'dictate' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}dictate({
  locale: 'en-US',
  save: false,
  xSuccess: 'myapp://callback',
})
```

### Load Workspace

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'workspace' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}workspace({
  name: 'Default',
})
```

### Run Action on Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runAction' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}runAction({
  text: 'TEXT',
  action: 'VALID-ACTION-NAME',
})
```

### Quick Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'quickSearch' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}quickSearch({
  query: 'QUERY-TEXT',
})
```

### Arrange Text

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'arrange' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}arrange({
  text: 'unsorted list',
  retParam: 'input',
  xSuccess: 'myapp://callback',
})
```

### Action Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'actionSearch' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}actionSearch({
  query: 'QUERY-TEXT',
})
```

### Command Palette

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'commandPalette' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}commandPalette({
  query: 'QUERY-TEXT',
})
```

### Get Current Draft

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'getCurrentDraft' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}getCurrentDraft({
  xSuccess: 'myapp://callback',
})
```

### Load Action Bar Group

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'loadActionBarGroup' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}loadActionBarGroup({
  name: 'GROUP-NAME',
})
```

### Load Action Group

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'loadActionGroup' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}loadActionGroup({
  name: 'GROUP-NAME',
})
```

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

### Scan Document

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scanDocument' : 'drafts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'drafts.'}}scanDocument({
  save: false,
  retParam: 'input',
  xSuccess: 'myapp://callback',
})
```
