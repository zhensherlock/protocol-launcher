---
url: /protocol-launcher/apps/pushcut.md
---

# Pushcut

[Pushcut](https://www.pushcut.io/) is an automation app. **Protocol Launcher** allows you to generate official Pushcut URL scheme links for opening Pushcut and its documented views.

Pushcut's official URL scheme starts with `pushcut://`. The documented open form is `pushcut://open/` followed by one of these view names: `notifications`, `triggers`, `widgets`, `server`, `account`, `runServer`, `monitorServer`, or `notificationsLog`.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Pushcut

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}open()
```

### Open View

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openView' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openView({
  view: 'notifications',
})
```

### Open Notifications

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotifications' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openNotifications()
```

### Open Triggers

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openTriggers' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openTriggers()
```

### Open Widgets

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWidgets' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openWidgets()
```

### Open Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openServer' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openServer()
```

### Open Account

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAccount' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openAccount()
```

### Run Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runServer' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}runServer()
```

### Monitor Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'monitorServer' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}monitorServer()
```

### Open Notifications Log

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openNotificationsLog' : 'pushcut' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pushcut.'}}openNotificationsLog()
```

## References

* [Pushcut URL Scheme](https://www.pushcut.io/support/url-scheme)
