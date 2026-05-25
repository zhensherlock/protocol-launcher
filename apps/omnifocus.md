---
url: /protocol-launcher/apps/omnifocus.md
---

# OmniFocus

[OmniFocus](https://www.omnigroup.com/omnifocus/) is a professional task management app. **Protocol Launcher** allows you to generate deep links for OmniFocus.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open OmniFocus

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}open()
```

### Add Action

Create a new action, optionally assigning project, tag/context, due date, flag, and x-callback-url parameters.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}add({
  name: 'Pick up milk',
  note: 'You gotta',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}add({
  name: 'Email team',
  context: 'Mac',
  due: 'jun 25 8am',
  estimate: '30m',
  flag: true,
  project: 'Launch',
  revealNewItem: true,
})

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}add({
  name: 'My shiny new task',
  autosave: true,
  xSuccess: 'omnifocus:///',
})
```

### Paste TaskPaper

Paste TaskPaper content into the Inbox, Projects, or another OmniFocus target.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}paste({
  content: '- Pick up milk',
  target: 'inbox',
})

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}paste({
  content: 'Launch:\n\t- Draft announcement',
  target: 'projects',
  index: 0,
})
```

### Open Built-In Perspectives

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox, openForecast, openToday' : 'omnifocus' }} } from '{{ importPath }}'

const inboxUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openInbox()
const forecastUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openForecast()
const todayUrl = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openToday()
```

### Open Custom Perspective

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPerspective' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openPerspective({
  name: 'Due Soon',
})
```

### Open Task

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'omnifocus' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnifocus.'}}openTask({
  id: 'mbp0SlWkvqq',
})
```

## Official Documentation

* [OmniFocus URL Schemes](https://inside.omnifocus.com/url-schemes)
