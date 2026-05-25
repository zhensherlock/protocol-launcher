---
url: /protocol-launcher/apps/raycast.md
---

# Raycast

[Raycast](https://www.raycast.com/) is a launcher and productivity app for opening tools, running commands, managing windows, and extending macOS workflows from one command bar. **Protocol Launcher** generates Raycast deeplinks documented by the official Raycast developer and manual pages.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Extension Command

Generate a Raycast extension command deeplink. Raycast requires the owner or author, extension name, and command name from the extension manifest. Built-in extensions use `raycast` as the owner and slugified extension and command names.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'extensionCommand' : 'raycast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'raycast.'}}extensionCommand({
  authorOrOwner: '{{ extensionCommandParams.authorOrOwner }}',
  extensionName: '{{ extensionCommandParams.extensionName }}',
  commandName: '{{ extensionCommandParams.commandName }}',
  arguments: {
    title: '{{ extensionCommandParams.arguments.title }}',
  },
})

const withOptionsUrl = {{currentMethod === 'On-Demand' ? '' : 'raycast.'}}extensionCommand({
  authorOrOwner: '{{ extensionCommandWithOptionsParams.authorOrOwner }}',
  extensionName: '{{ extensionCommandWithOptionsParams.extensionName }}',
  commandName: '{{ extensionCommandWithOptionsParams.commandName }}',
  launchType: '{{ extensionCommandWithOptionsParams.launchType }}',
  context: {
    source: '{{ extensionCommandWithOptionsParams.context.source }}',
  },
  fallbackText: '{{ extensionCommandWithOptionsParams.fallbackText }}',
})
```

### Custom Window Management Command

Generate a Raycast custom window management command deeplink. A matching `name` opens an existing custom single-window command; omitting `name` creates a temporary command from the provided window arguments.

For Window Layout deeplinks, Raycast only supports the `name` argument.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'customWindowManagementCommand' : 'raycast' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'raycast.'}}customWindowManagementCommand({
  name: '{{ customWindowManagementCommandParams.name }}',
  position: '{{ customWindowManagementCommandParams.position }}',
  absoluteWidth: {{ customWindowManagementCommandParams.absoluteWidth }},
  relativeHeight: {{ customWindowManagementCommandParams.relativeHeight }},
  absoluteXOffset: {{ customWindowManagementCommandParams.absoluteXOffset }},
  absoluteYOffset: {{ customWindowManagementCommandParams.absoluteYOffset }},
})

const temporaryUrl = {{currentMethod === 'On-Demand' ? '' : 'raycast.'}}customWindowManagementCommand({
  position: '{{ temporaryWindowManagementCommandParams.position }}',
  relativeWidth: {{ temporaryWindowManagementCommandParams.relativeWidth }},
  relativeHeight: {{ temporaryWindowManagementCommandParams.relativeHeight }},
  relativeXOffset: {{ temporaryWindowManagementCommandParams.relativeXOffset }},
  relativeYOffset: {{ temporaryWindowManagementCommandParams.relativeYOffset }},
})
```

## Official Documentation

* [Raycast Deeplinks](https://developers.raycast.com/information/lifecycle/deeplinks)
* [Raycast Window Management Deeplinks](https://manual.raycast.com/window-management#deeplinks)
