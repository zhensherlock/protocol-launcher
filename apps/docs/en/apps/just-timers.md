---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SelectInstallationMethod } from '../../.vitepress/components';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/just-timers' : 'protocol-launcher');
</script>

# Just Timers

[Just Timers](https://justtimers.app/) is an iOS timer app. **Protocol Launcher** allows you to generate official URL scheme links for creating, deleting, pausing, resetting, restarting, and resuming timers.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Just Timers documents `justtimers://x-callback-url/[action]/?[parameter]=[value]` for individual timers and `justtimers://x-callback-url/[action]/all` for controlling all timers. The official page does not document callback query parameters such as `x-success` or `x-error`, so this module does not expose them.

Creating a timer requires `name` and either `duration` or `seconds`. New timers are active by default; pass `active: false` to create the timer paused.

### Create Timer With Duration

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}createTimer({
  name: 'Tea',
  duration: '2 minutes',
})
```

### Create Paused Timer With Seconds

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}createTimer({
  name: 'Tea',
  seconds: 120,
  active: false,
})
```

### Delete Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}deleteTimer({
  name: 'Tea',
})
```

### Pause All Timers

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pauseTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}pauseTimer({
  all: true,
})
```

### Reset Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resetTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}resetTimer({
  name: 'Tea',
})
```

### Restart Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'restartTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}restartTimer({
  name: 'Tea',
})
```

### Resume Timer

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'resumeTimer' : 'justTimers' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'justTimers.'}}resumeTimer({
  name: 'Tea',
})
```

## Generated URLs

```ts
createTimer({ name: 'Tea', duration: '2 minutes' })
// => 'justtimers://x-callback-url/new/?name=Tea&duration=2%20minutes'

createTimer({ name: 'Tea', seconds: 120, active: false })
// => 'justtimers://x-callback-url/new/?name=Tea&seconds=120&active=false'

deleteTimer({ name: 'Tea' })
// => 'justtimers://x-callback-url/delete/?name=Tea'

deleteTimer({ all: true })
// => 'justtimers://x-callback-url/delete/all'

pauseTimer({ name: 'Tea' })
// => 'justtimers://x-callback-url/pause/?name=Tea'

pauseTimer({ all: true })
// => 'justtimers://x-callback-url/pause/all'

resetTimer({ name: 'Tea' })
// => 'justtimers://x-callback-url/reset/?name=Tea'

resetTimer({ all: true })
// => 'justtimers://x-callback-url/reset/all'

restartTimer({ name: 'Tea' })
// => 'justtimers://x-callback-url/restart/?name=Tea'

restartTimer({ all: true })
// => 'justtimers://x-callback-url/restart/all'

resumeTimer({ name: 'Tea' })
// => 'justtimers://x-callback-url/resume/?name=Tea'

resumeTimer({ all: true })
// => 'justtimers://x-callback-url/resume/all'
```

## Official Documentation

- [Just Timers Shortcuts API](https://justtimers.app/help/shortcuts/)
