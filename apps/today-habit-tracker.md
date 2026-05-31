---
url: /protocol-launcher/apps/today-habit-tracker.md
---

# Today Habit Tracker

[Today Habit Tracker](https://neybox.com/today-habit-tracker) is a habit tracking app. **Protocol Launcher** allows you to generate deep links to open habits, check in, revoke check-ins, and show habit lists in Today.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

Today action URLs use `today://x-callback-url/<action>`. The API fields `xSuccess` and `xError` generate the documented `x-success` and `x-error` query parameters.

### Open Habit

Open Today, jump to a specific habit, and retrieve information about that habit.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHabit' : 'todayHabitTracker' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todayHabitTracker.'}}openHabit({
  id: 'p14',
})
```

### Check In

Perform a check-in on a specific habit.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'checkIn' : 'todayHabitTracker' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todayHabitTracker.'}}checkIn({
  id: 'p14',
})
```

### Revoke Check-In

Revoke a check-in on a specific habit.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'revokeCheckIn' : 'todayHabitTracker' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todayHabitTracker.'}}revokeCheckIn({
  id: 'p14',
})
```

### Show Habits

Open Today's habit overview screen. The documented filter values are `today` and `all`; Today defaults to `today` when the filter is omitted.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showHabits' : 'todayHabitTracker' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todayHabitTracker.'}}showHabits({
  filter: 'all',
})
```

### x-callback-url

Today returns habit data on `x-success` for habit-specific actions, and returns habit title/id dictionaries plus totals for `showHabits`. Errors are returned through `x-error`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openHabit' : 'todayHabitTracker' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'todayHabitTracker.'}}openHabit({
  id: 'p14',
  xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=Habit Info',
  xError: 'shortcuts://x-callback-url/run-shortcut?name=Habit Error',
})
```

## Official Documentation

* [Today Action URLs Documentation](https://intercom.help/today_habit_tracker/en/articles/3745810-action-urls-documentation)
