---
url: /protocol-launcher/apps/story-planner.md
---

# Story Planner

[Story Planner](https://www.storyplanner.app/) is a powerful planning app for writers to plot stories and organize writing projects. **Protocol Launcher** allows you to generate deep links to open Story Planner and manage your writing projects.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Story Planner

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'storyPlanner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'storyPlanner.'}}open()
```

### Add Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'add' : 'storyPlanner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'storyPlanner.'}}add({
  title: 'The Master Cat',
})
```

### Open Project

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'project' : 'storyPlanner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'storyPlanner.'}}project({
  title: 'My Novel',
  tab: 'characters',
})
```
