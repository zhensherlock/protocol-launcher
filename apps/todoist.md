---
url: /protocol-launcher/apps/todoist.md
---

# Todoist

[Todoist](https://www.todoist.com/) is a to-do list and task management application. **Protocol Launcher** allows you to generate deep links to open views and add tasks in Todoist.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open App

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}open()
```

### Add Task

Add a task to Todoist (Mobile only). This opens and pre-fills the form but does not automatically submit.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTask' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}addTask({
  content: 'Buy Milk',
  date: 'Tomorrow @ 14:00',
  priority: 4,
})
```

### Open Quick Add

Open the Global Quick Add panel (Desktop only, 9.2.0+). This opens and pre-fills the panel but does not automatically submit.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openQuickAdd' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openQuickAdd({
  content: 'My Task',
  description: 'This is a description',
})
```

### Search

Search in Todoist (Android mobile and Desktop 9.10.0+).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}search({
  query: 'Test & Today',
})
```

### Open Inbox

Open the Inbox view in Todoist.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openInbox' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openInbox()
```

### Open Today

Open the Today view in Todoist.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openToday' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openToday()
```

### Open Upcoming

Open the Upcoming view in Todoist.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openUpcoming' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openUpcoming()
```

### Open Project

Open a specific project by ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProject({
  id: '128501470',
})
```

### Open Projects

Open the Projects view. On desktop, you can optionally filter by workspace ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProjects' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProjects({
  workspaceId: '1234',
})
```

### Open Label

Open a specific label. On mobile, use label name. On desktop, use label ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLabel' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openLabel({
  name: 'Urgent',
})
```

### Open Labels

Open the Labels view (Mobile only).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLabels' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openLabels()
```

### Open Filter

Open a specific filter by ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFilter' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFilter({
  id: '9',
})
```

### Open Filters

Open the Filters view (Mobile only).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFilters' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFilters()
```

### Open Filters & Labels

Open the Filters & Labels view (Desktop only).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFiltersLabels' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openFiltersLabels()
```

### Open Task

Open a specific task by ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTask' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTask({
  id: '12345',
})
```

### Open Team Inbox

Open the Team Inbox view (Mobile only, Business accounts). Non-business accounts will be redirected to inbox.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTeaminbox' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTeaminbox()
```

### Open Templates

Open the Templates view (Desktop only). You can optionally open a specific template by ID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTemplates' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openTemplates({
  id: '123',
})
```

### Open Notifications

Open the Notifications view in Todoist.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotifications' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openNotifications()
```

### Open Profile

Open the Profile view (Mobile only).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProfile' : 'todoist' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todoist.'}}openProfile()
```
