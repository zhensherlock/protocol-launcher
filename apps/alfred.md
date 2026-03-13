---
url: /protocol-launcher/apps/alfred.md
---

# Alfred

[Alfred](https://www.alfredapp.com/) is an award-winning productivity app for macOS. It boosts your efficiency with hotkeys, keywords, text expansion and more. Search your Mac and the web, and be more productive with custom actions to control your Mac. **Protocol Launcher** allows you to generate deep links to open Alfred, navigate preferences, browse workflows in the gallery, and create custom searches.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Alfred

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}open()
```

### Open Preferences

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPreferences' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}openPreferences()
```

### Navigate to Preferences Section

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: 'workflows',
})
```

### Navigate to Resolve Dependencies

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: 'workflows>resolvedependencies',
})
```

### Navigate to Specific Workflow

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: 'workflows>workflow>user.workflow.81CBDAC6-527B-4B33-BA4E-F12563EBED09',
})
```

### Navigate to Snippets

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'navigateTo' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}navigateTo({
  path: 'features>snippets',
})
```

### Open Gallery Workflow

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gallery' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}gallery({
  author: '{{ galleryWorkflowParams.author }}',
  workflow: '{{ galleryWorkflowParams.workflow }}',
})
```

### Open 1Password Gallery Workflow

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'gallery' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}gallery({
  author: '{{ galleryWorkflow1PasswordParams.author }}',
  workflow: '{{ galleryWorkflow1PasswordParams.workflow }}',
})
```

### Create Custom Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customSearch' : 'alfred' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'alfred.'}}customSearch({
  title: '{{ customSearchGithubParams.title }}',
  keyword: '{{ customSearchGithubParams.keyword }}',
  url: '{{ customSearchGithubParams.url }}',
})
```
