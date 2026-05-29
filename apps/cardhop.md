---
url: /protocol-launcher/apps/cardhop.md
---

# Cardhop

[Cardhop](https://flexibits.com/cardhop) is a contacts app from Flexibits. **Protocol Launcher** allows you to generate Cardhop links for opening the app, parsing contact actions, showing contacts or views, and opening supported preferences paths.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

Flexibits documents `x-cardhop://`, `parse`, `show`, and `preferences` URL handlers. This module only covers those documented handlers and parameters.

### Open

Open Cardhop.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}open()
```

### Parse

Open Cardhop's parser with the documented `s` text parameter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}parse({
  s: 'call Mike',
})
```

Use `list` to filter results, and use one of Cardhop's documented `add` values (`Y`, `y`, `T`, `t`, or `1`-`9`) when a parsed new contact should be added immediately.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}parse({
  s: 'Sarah Jones',
  list: 'Friends',
  add: '1',
})
```

### Show

Show a contact by name or identifier.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}show({
  contact: 'Mike Ross',
})
```

Show a contact with a documented action and list filter.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}show({
  id: 'REPLACE_WITH_CONTACT_ID',
  action: 'mail',
  list: 'Team',
})
```

Show one of Cardhop's documented views.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}show({
  view: 'contacts',
  list: 'Friends',
})
```

### Preferences

Open a supported Cardhop preferences path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preferences' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}preferences({
  path: 'notifications',
})
```

## Official Documentation

* [Cardhop for iOS: Integration with other apps](https://flexibits.com/cardhop-ios/help/integration-with-other-apps)
* [Cardhop for Mac: Integration with other apps](https://flexibits.com/cardhop/help/integration-with-other-apps)
