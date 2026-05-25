---
url: /protocol-launcher/apps/hammerspoon.md
---

# Hammerspoon

[Hammerspoon](https://www.hammerspoon.org/) is a macOS automation tool that lets you script and control the system with Lua.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### URL Event

Generate a Hammerspoon URL event for a callback registered with `hs.urlevent.bind`.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'urlEvent' : 'hammerspoon' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hammerspoon.'}}urlEvent({
  eventName: 'doThingA',
  params: {
    value: '1',
  },
})

const multiParamUrl = {{currentMethod === 'On-Demand' ? '' : 'hammerspoon.'}}urlEvent({
  eventName: 'someEventToHandle',
  params: {
    someParam: 'things',
    otherParam: 'stuff',
  },
})
```

## Official Documentation

* [Hammerspoon hs.urlevent](https://www.hammerspoon.org/docs/hs.urlevent.html)
