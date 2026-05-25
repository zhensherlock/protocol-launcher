---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { customWindowManagementCommand, extensionCommand } from 'protocol-launcher/raycast';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  customWindowManagementCommandParams,
  extensionCommandParams,
  extensionCommandWithOptionsParams,
  temporaryWindowManagementCommandParams,
} from '../../.vitepress/constants/raycast';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/raycast' : 'protocol-launcher');
</script>

# Raycast

[Raycast](https://www.raycast.com/) is a launcher and productivity app. **Protocol Launcher** generates Raycast deeplinks documented by the official Raycast developer and manual pages: extension command deeplinks with the `raycast://extensions/...` format, and custom window management command deeplinks with the `raycast://customWindowManagementCommand` format.

Raycast asks for confirmation when an extension command is launched from a deeplink.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="extensionCommand(extensionCommandParams)" target="_self">
    Launch Extension Command
  </VPLink>
  <VPLink :href="extensionCommand(extensionCommandWithOptionsParams)" target="_self">
    Launch Extension Command with Options
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="customWindowManagementCommand(customWindowManagementCommandParams)" target="_self">
    Run Custom Window Management Command
  </VPLink>
  <VPLink :href="customWindowManagementCommand(temporaryWindowManagementCommandParams)" target="_self">
    Run Temporary Window Management Command
  </VPLink>
</div>

## Official Documentation

- [Raycast Deeplinks](https://developers.raycast.com/information/lifecycle/deeplinks)
- [Raycast Window Management Deeplinks](https://manual.raycast.com/window-management#deeplinks)
