---
url: /protocol-launcher/apps/cal2todo.md
---

# Cal2Todo

[Cal2Todo](https://apps.apple.com/sg/app/cal2todo/id475987733) is a simple calendar and task manager for iOS. **Protocol Launcher** allows you to generate deep links to add events to Cal2Todo.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}open()
```

### Add Event

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}add({
  title: 'Meeting',
  notes: 'Discuss project roadmap',
})
```

### Add Event with Callback URLs

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'cal2todo' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cal2todo.'}}add({
  title: 'Meeting',
  xSuccess: 'myapp://ok',
  xSource: 'myapp',
  xError: 'myapp://cancel',
})
```
