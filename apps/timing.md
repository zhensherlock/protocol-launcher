---
url: /protocol-launcher/apps/timing.md
---

# Timing

[Timing](https://timingapp.com/) is an automatic time tracking app for Mac. **Protocol Launcher** allows you to generate official URL scheme links for Timing.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Timing's official URL scheme page says these URLs require at least Timing Expert. It also uses different schemes depending on the target: `timing2helper://` for tracker app actions and `timing2://` for the main Timing app.

This module exposes only the documented URL forms: `startTimer`, `stopTimer`, `createTimeEntry`, `editTimeEntry/<time-entry-id>`, and `selectProjects/<project-name-or-id>`.

## URL Methods

### Start Timer

Generate the documented URL that starts a timer in the Timing tracker app. Set `startImmediately` to `false` when you want Timing to present the dialogue first.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'startTimer' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}startTimer({
  title: 'Some title',
  notes: 'Some\nnotes',
  project: 'Work',
  estimatedDuration: 600,
  startDate: '2022-04-01T12:00:00Z',
  startImmediately: false,
  center: true,
})
```

### Stop Timer

Generate the documented URL that stops the currently running timer, if available. `hideNotification` suppresses the notification when the timer is stopped.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'stopTimer' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}stopTimer({
  hideNotification: true,
})
```

### Create Time Entry

Generate the documented URL that creates a new time entry in the Timing tracker app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTimeEntry' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}createTimeEntry({
  title: 'Some title',
  notes: 'Some\nnotes',
  project: 'Work',
  startDate: '2022-04-01T12:00:00Z',
  endDate: '2022-04-01T12:30:00Z',
  createImmediately: false,
  center: true,
})
```

Timing documents `createImmediately` as available only when at least `startDate`, `endDate`, and one of `title` or `project` are provided. `center` and `obtainFocus` are only available when `createImmediately` is not true.

### Edit Time Entry

Generate the documented URL that presents a dialogue to edit a time entry by ID. Timing also documents `latest` for editing the most recent time entry.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editTimeEntry' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}editTimeEntry({
  id: 'latest',
})
```

### Select Projects

Generate the documented URL that selects projects in the sidebar of the main Timing app. Omit `projects` to select "All Activities".

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'selectProjects' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}selectProjects({
  projects: ['ProjectA', 'ProjectB'],
})
```

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'selectProjects' : 'timing' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'timing.'}}selectProjects()
```

## Generated URLs

```ts
startTimer({
  title: 'Some title',
  notes: 'Some\nnotes',
  project: 'Work',
  estimatedDuration: 600,
  startDate: '2022-04-01T12:00:00Z',
  startImmediately: false,
  center: true,
})
// => 'timing2helper://startTimer?title=Some%20title&notes=Some%0Anotes&project=Work&estimatedDuration=600&startDate=2022-04-01T12:00:00Z&startImmediately=false&center=true'

stopTimer({ hideNotification: true })
// => 'timing2helper://stopTimer?hideNotification=true'

createTimeEntry({
  title: 'Some title',
  notes: 'Some\nnotes',
  project: 'Work',
  startDate: '2022-04-01T12:00:00Z',
  endDate: '2022-04-01T12:30:00Z',
  createImmediately: false,
  center: true,
})
// => 'timing2helper://createTimeEntry?title=Some%20title&notes=Some%0Anotes&project=Work&startDate=2022-04-01T12:00:00Z&endDate=2022-04-01T12:30:00Z&createImmediately=false&center=true'

editTimeEntry({ id: 'latest' })
// => 'timing2helper://editTimeEntry/latest'

selectProjects({ projects: ['ProjectA', 'ProjectB'] })
// => 'timing2://selectProjects/ProjectA/ProjectB'

selectProjects()
// => 'timing2://selectProjects'
```

## Official Documentation

* [Timing URL Scheme Support](https://timingapp.com/help/url-schemes)
