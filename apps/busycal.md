---
url: /protocol-launcher/apps/busycal.md
---

# BusyCal

[BusyCal](https://www.busymac.com/busycal/) is a calendar app for macOS and iOS. **Protocol Launcher** allows you to generate BusyCal deep links to create events and tasks, open dates, and switch views.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### macOS: New Event and Task

Use BusyCal's `busycalevent://new/` URL with a natural-language string. Include calendar names such as `/Work` and URLs in angle brackets inside the description string, exactly as BusyCal documents; the helper only percent-encodes the path segment.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newEvent, newTask' : 'busycal' }} } from '{{ importPath }}'

const eventUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}newEvent({
  description: 'Staff meeting Thursday at 10am',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}newTask({
  description: 'Pay Taxes April 15!!! /Personal',
})
```

### macOS: Find, Date, and Filter

`find()` maps to `busycalevent://find/<Calendar>/<Title>/<DateTime>` or `busycalevent://find/<Calendar>/<Title>/<Date>`. Leave `calendar` undefined to search all calendars. `openFilter()` uses BusyCal's shared Calendar Set or Smart Filter handler.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'find, openDate, openFilter' : 'busycal' }} } from '{{ importPath }}'

const findUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}find({
  title: 'Buy Toner',
})

const dateUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}openDate({
  date: '2021-05-31',
})

const filterUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}openFilter({
  name: 'home',
})
```

### macOS: Quick Entry and Subscription

BusyCal documents Quick Entry URLs for a new event or task, and `webcal://` URLs for calendar subscriptions.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEventQuickEntry, openTaskQuickEntry, subscribeCalendar' : 'busycal' }} } from '{{ importPath }}'

const eventQuickEntryUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}openEventQuickEntry()
const taskQuickEntryUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}openTaskQuickEntry()
const subscriptionUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}subscribeCalendar({
  url: 'webcal://example.com/calendar.ics',
})
```

### macOS: Sync, DND, and Settings

BusyCal also documents URL handlers for forcing sync, setting Do Not Disturb minutes, logging level, and crash reporting. These URLs can change BusyCal state, so the docs show generated strings without launch buttons.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'syncCalDAV, syncWebDAV, setDoNotDisturb, setLogLevel, setCrashReporting' : 'busycal' }} } from '{{ importPath }}'

const caldavUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}syncCalDAV()
const webdavUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}syncWebDAV()
const dndUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}setDoNotDisturb({ minutes: 15 })
const loggingUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}setLogLevel({ level: 3 })
const crashReportingUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}setCrashReporting({ option: 1 })
```

### iOS

BusyCal for iOS uses `busycal://new/`, `busycal://date/`, and `busycal://launch/`. For `newIosEvent()` and `newIosTask()`, pass `autosave: true` or `autosave: 1` only when you want the documented auto-save behavior.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newIosEvent, newIosTask, openIosDate, launchIosView' : 'busycal' }} } from '{{ importPath }}'

const eventUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}newIosEvent({
  description: 'Baseball game tomorrow',
})

const taskUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}newIosTask({
  description: 'Call Bob tomorrow',
})

const dateUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}openIosDate({
  date: '2021-05-31',
})

const launchUrl = {{currentMethod === 'On-Demand' ? '' : 'busycal.'}}launchIosView({
  view: 'day',
})
```

## Generated URLs

```ts
newEvent({ description: 'Staff meeting Thursday at 10am' })
// => 'busycalevent://new/Staff%20meeting%20Thursday%20at%2010am'

newTask({ description: 'Pay Taxes April 15!!! /Personal' })
// => 'busycalevent://new/-Pay%20Taxes%20April%2015!!!%20%2FPersonal'

find({ title: 'Buy Toner' })
// => 'busycalevent://find//Buy%20Toner'

openDate({ date: '2021-05-31' })
// => 'busycalevent://date/2021-05-31'

openFilter({ name: 'home' })
// => 'busycal://filter/home'

openEventQuickEntry()
// => 'busycal://newEvent'

openTaskQuickEntry()
// => 'busycal://newTask'

subscribeCalendar({ url: 'webcal://example.com/calendar.ics' })
// => 'webcal://example.com/calendar.ics'

syncCalDAV()
// => 'busycalsync://caldav'

syncWebDAV()
// => 'busycalsync://webdav'

setDoNotDisturb({ minutes: 15 })
// => 'busycaldnd://15'

setLogLevel({ level: 3 })
// => 'busycalsetting://loglevel/3'

setCrashReporting({ option: 1 })
// => 'busycalsetting://crashreporting/1'

newIosEvent({ description: 'Project review 3pm /Work', autosave: 1 })
// => 'busycal://new/Project%20review%203pm%20%2FWork//1'

newIosTask({ description: 'Call Bob tomorrow' })
// => 'busycal://new/-Call%20Bob%20tomorrow'

newIosTask({ description: 'Buy Toner /Shopping <www.amazon.com>', autosave: true })
// => 'busycal://new/-Buy%20Toner%20%2FShopping%20%3Cwww.amazon.com%3E/true'

openIosDate({ date: 'now' })
// => 'busycal://date/now'

launchIosView({ view: 'tasks' })
// => 'busycal://launch/tasks'
```

## References

* [BusyCal macOS URL Handler](https://www.busymac.com/docs/busycal/70621-url-handler/)
* [BusyCal iOS URL Handler](https://www.busymac.com/docs/busycalios/139998-url-handler/)
