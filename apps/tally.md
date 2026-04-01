---
url: /protocol-launcher/apps/tally.md
---

# Tally

[Tally](https://agiletortoise.com/tally/) is a quick counting, scorekeeping, and habit tracking app for iPhone, iPad, and Apple Watch. **Protocol Launcher** allows you to generate deep links to increment, decrement, reset, and get tally values in Tally.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Tally

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}open()
```

### Increment Tally

Increase count of specified tally.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'increment' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}increment({
  tallySet: 'Game Score',
  tally: 'Player 1',
})
```

### Decrement Tally

Decrease count of specified tally.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'decrement' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}decrement({
  tallySet: 'Game Score',
  tally: 'Player 1',
})
```

### Reset Tally

Reset specified tally to its initial value.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'reset' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}reset({
  tallySet: 'Daily Habits',
  tally: 'Exercise',
})
```

### Get Tally Value

Get the current value of a specified tally. Requires a callback URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'get' : 'tally' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'tally.'}}get({
  tallySet: 'Daily Habits',
  tally: 'Exercise',
  'x-success': 'myapp://callback',
})
```
