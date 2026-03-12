---
url: /protocol-launcher/apps/things.md
---

# Things

[Things](https://culturedcode.com/things/) is an award-winning personal task manager that helps you plan your day, manage your projects, and make real progress toward your goals. It combines a beautiful, simple design with powerful features to help you get organized and focus on what matters today. **Protocol Launcher** allows you to generate deep links to open Things and interact with your tasks.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Things

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'things' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}open()
```

### Search

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'things' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}search({
  query: 'vacation',
})
```

### Show

Show a built-in list, project, area, tag, or to-do.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'things' }} } from '{{ importPath }}'

// Show Today list
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  id: 'today',
})

// Show project by ID
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  id: 'GJJVZHE7SNu7xcVuH2xDDh',
})

// Show by query
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  query: 'vacation',
})

// Show by query with filter
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}show({
  query: 'vacation',
  filter: 'errand',
})
```

### Add Project

Add a new project to Things.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addProject' : 'things' }} } from '{{ importPath }}'

// Add project with start date
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}addProject({
  title: 'Build treehouse',
  when: 'today',
})

// Add project to area
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}addProject({
  title: 'Plan Birthday Party',
  area: 'Family',
})

// Add project with deadline and area
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}addProject({
  title: 'Submit Tax',
  deadline: 'December 31',
  areaId: 'Lg8UqVPXo2SbJNiBpDBBQ',
})
```

### Update Project

Update an existing project (requires auth-token).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateProject' : 'things' }} } from '{{ importPath }}'

// Update project start date
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}updateProject({
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  when: 'tomorrow',
})

// Add tags to project
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}updateProject({
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  addTags: 'Important',
})

// Clear project deadline
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}updateProject({
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  deadline: '',
})
```

### Add To-Do

Add a new to-do to Things.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'things' }} } from '{{ importPath }}'

// Add simple to-do
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}add({
  title: 'Book flights',
})

// Add to-do with notes and tags
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}add({
  title: 'Buy milk',
  notes: 'Low fat.',
  when: 'evening',
  tags: 'Errand',
})

// Add multiple to-dos
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}add({
  titles: 'Milk\nBeer\nCheese',
  list: 'Shopping',
})
```

### Update To-Do

Update an existing to-do (requires auth-token).

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'update' : 'things' }} } from '{{ importPath }}'

// Update to-do start date
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  when: 'today',
})

// Update to-do title
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  title: 'Buy bread',
})

// Append notes to to-do
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  appendNotes: 'Wholemeal bread',
})

// Clear to-do deadline
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}update({
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  deadline: '',
})
```

### JSON Import

Advanced JSON-based import for projects and to-dos.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'json' : 'things' }} } from '{{ importPath }}'

// Import project with to-dos
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}json({
  data: [
    {
      type: 'project',
      attributes: {
        title: 'Go Shopping',
        items: [
          {
            type: 'to-do',
            attributes: {
              title: 'Bread',
            },
          },
          {
            type: 'to-do',
            attributes: {
              title: 'Milk',
            },
          },
        ],
      },
    },
  ],
})

// Import with auth-token
const url = {{currentMethod === 'On-Demand' ? '' : 'things.'}}json({
  authToken: 'xxx',
  data: [
    {
      type: 'to-do',
      attributes: {
        title: 'Milk',
      },
    },
  ],
})
```
