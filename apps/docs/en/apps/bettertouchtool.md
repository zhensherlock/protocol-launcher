---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  addNewTrigger,
  cancelDelayedNamedTriggerExecution,
  deleteTrigger,
  executeAssignedActionsForTrigger,
  exportPreset,
  importPreset,
  importViaUrl,
  jsonImport,
  refreshWidget,
  revealElementInUi,
  runShortcut,
  runShortcutAsyncWithoutResponse,
  setNumberVariable,
  setPersistentNumberVariable,
  setPersistentStringVariable,
  setStringVariable,
  triggerAction,
  triggerNamed,
  triggerNamedAsyncWithoutResponse,
  updateMenubarItem,
  updateStreamDeckWidget,
  updateTouchBarWidget,
  updateTrigger,
} from 'protocol-launcher/bettertouchtool';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  addNewTriggerParams,
  cancelDelayedNamedTriggerExecutionParams,
  exportPresetParams,
  importPresetKeepExistingParams,
  importPresetParams,
  importViaUrlParams,
  importViaUrlUnzipParams,
  jsonImportParams,
  jsonImportUncompressParams,
  runShortcutAsyncParams,
  runShortcutParams,
  setNumberVariableParams,
  setPersistentNumberVariableParams,
  setPersistentStringVariableParams,
  setStringVariableParams,
  triggerActionParams,
  triggerNamedAsyncParams,
  triggerNamedCancelDelayedParams,
  triggerNamedParams,
  triggerNamedWithVariablesParams,
  triggerUuidParams,
  updateMenubarItemParams,
  updateStreamDeckWidgetParams,
  updateTouchBarWidgetParams,
  updateTriggerParams,
  widgetUuidParams,
} from '../../.vitepress/constants/bettertouchtool';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/bettertouchtool' : 'protocol-launcher');
</script>

# BetterTouchTool

[BetterTouchTool](https://folivora.ai/) is a macOS automation app. **Protocol Launcher** generates `btt://` URLs for the official BetterTouchTool Custom URL Scheme interfaces.

BetterTouchTool can require a `shared_secret` query parameter. Pass it as `sharedSecret` on query-based helpers when your BetterTouchTool advanced preferences require it.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Trigger Named

Run a named trigger, pass values to it as BetterTouchTool variables, or cancel its delayed execution.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'triggerNamed' : 'betterTouchTool' }} } from '{{ importPath }}'

const reviewUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerNamed({
  triggerName: 'Daily Review',
})

const projectUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerNamed({
  triggerName: 'Open Project',
  variables: {
    projectName: 'Protocol Launcher',
  },
})

const cancelUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerNamed({
  triggerName: 'Daily Review',
  cancelDelayed: 1,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="triggerNamed(triggerNamedParams)" target="_self">
    Run Daily Review
  </VPLink>
  <VPLink :href="triggerNamed(triggerNamedWithVariablesParams)" target="_self">
    Open Project with Variable
  </VPLink>
  <VPLink :href="triggerNamed(triggerNamedCancelDelayedParams)" target="_self">
    Cancel Delayed Daily Review
  </VPLink>
</div>

### Trigger Named Async Without Response

Run a named trigger asynchronously without waiting for a response.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'triggerNamedAsyncWithoutResponse' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerNamedAsyncWithoutResponse({
  triggerName: 'Refresh Dashboard',
})
```

<div class="flex justify-center">
  <VPLink :href="triggerNamedAsyncWithoutResponse(triggerNamedAsyncParams)" target="_self">
    Refresh Dashboard Asynchronously
  </VPLink>
</div>

### Cancel Delayed Named Trigger Execution

Cancel a pending delayed execution of a named trigger.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'cancelDelayedNamedTriggerExecution' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}cancelDelayedNamedTriggerExecution({
  triggerName: 'Daily Review',
})
```

<div class="flex justify-center">
  <VPLink :href="cancelDelayedNamedTriggerExecution(cancelDelayedNamedTriggerExecutionParams)" target="_self">
    Cancel Pending Daily Review
  </VPLink>
</div>

### Execute Assigned Actions For Trigger

Execute all assigned actions for an existing trigger identified by UUID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'executeAssignedActionsForTrigger' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}executeAssignedActionsForTrigger({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
})
```

<div class="flex justify-center">
  <VPLink :href="executeAssignedActionsForTrigger(triggerUuidParams)" target="_self">
    Execute Trigger Actions
  </VPLink>
</div>

### Trigger Action

Run a BetterTouchTool predefined action from an action JSON object.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'triggerAction' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}triggerAction({
  json: {
    BTTPredefinedActionType: 153,
    BTTPredefinedActionName: 'Move Mouse To Position',
    BTTMoveMouseToPosition: '{100, 10}',
    BTTMoveMouseRelative: '6',
  },
})
```

<div class="flex justify-center">
  <VPLink :href="triggerAction(triggerActionParams)" target="_self">
    Move Mouse To Position
  </VPLink>
</div>

### Refresh Widget

Run all scripts assigned to a script widget and update its contents.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'refreshWidget' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}refreshWidget({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
})
```

<div class="flex justify-center">
  <VPLink :href="refreshWidget(widgetUuidParams)" target="_self">
    Refresh Status Widget
  </VPLink>
</div>

### Update Touch Bar Widget

Update the contents of a Touch Bar Script Widget.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateTouchBarWidget' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}updateTouchBarWidget({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Build passed',
  iconPath: '/Users/andi/Desktop/status.png',
  backgroundColor: '200,200,100,255',
})
```

<div class="flex justify-center">
  <VPLink :href="updateTouchBarWidget(updateTouchBarWidgetParams)" target="_self">
    Show Build Status on Touch Bar
  </VPLink>
</div>

### Update Stream Deck Widget

Update the contents of a Stream Deck widget.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateStreamDeckWidget' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}updateStreamDeckWidget({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Deploy',
})
```

<div class="flex justify-center">
  <VPLink :href="updateStreamDeckWidget(updateStreamDeckWidgetParams)" target="_self">
    Update Stream Deck Deploy Button
  </VPLink>
</div>

### Update Menubar Item

Update the contents of a menu bar item.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateMenubarItem' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}updateMenubarItem({
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Ready',
})
```

<div class="flex justify-center">
  <VPLink :href="updateMenubarItem(updateMenubarItemParams)" target="_self">
    Update Menu Bar Status
  </VPLink>
</div>

### Update Trigger

Update the configuration of an existing trigger.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'updateTrigger' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}updateTrigger({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
  json: {
    BTTTouchBarButtonName: 'New Name2',
    BTTTriggerConfig: {
      BTTTouchBarItemIconHeight: 30,
    },
  },
})
```

<div class="flex justify-center">
  <VPLink :href="updateTrigger(updateTriggerParams)" target="_self">
    Rename Touch Bar Trigger
  </VPLink>
</div>

### Add New Trigger

Add a new trigger to BetterTouchTool from a trigger JSON object.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addNewTrigger' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}addNewTrigger({
  json: {
    BTTTriggerClass: 'BTTTriggerTypeKeyboardShortcut',
    BTTPredefinedActionType: 5,
    BTTPredefinedActionName: 'Mission Control',
    BTTAdditionalConfiguration: '1179658',
    BTTTriggerOnDown: 1,
    BTTEnabled: 1,
    BTTShortcutKeyCode: 2,
    BTTShortcutModifierKeys: 1179648,
    BTTOrder: 3,
  },
})
```

<div class="flex justify-center">
  <VPLink :href="addNewTrigger(addNewTriggerParams)" target="_self">
    Add Mission Control Shortcut
  </VPLink>
</div>

### Delete Trigger

Delete a BetterTouchTool trigger by UUID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'deleteTrigger' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}deleteTrigger({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
})
```

<div class="flex justify-center">
  <VPLink :href="deleteTrigger(triggerUuidParams)" target="_self">
    Delete Trigger
  </VPLink>
</div>

### Reveal Element In UI

Open the BetterTouchTool configuration UI and reveal an element by UUID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'revealElementInUi' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}revealElementInUi({
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
})
```

<div class="flex justify-center">
  <VPLink :href="revealElementInUi(triggerUuidParams)" target="_self">
    Reveal Trigger in BetterTouchTool
  </VPLink>
</div>

### Export Preset

Export a BetterTouchTool preset to a file.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'exportPreset' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}exportPreset({
  name: 'Focus Mode',
  outputPath: '/Users/andi/Desktop/FocusMode.bttpreset',
  compress: 1,
})
```

<div class="flex justify-center">
  <VPLink :href="exportPreset(exportPresetParams)" target="_self">
    Export Focus Mode Preset
  </VPLink>
</div>

### Import Preset

Import a BetterTouchTool preset from a file path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importPreset' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}importPreset({
  path: '/Users/andi/Desktop/FocusMode.bttpreset',
})

const keepExistingUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}importPreset({
  path: '/Users/andi/Desktop/FocusMode.bttpreset',
  replaceExisting: 0,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="importPreset(importPresetParams)" target="_self">
    Import Focus Mode Preset
  </VPLink>
  <VPLink :href="importPreset(importPresetKeepExistingParams)" target="_self">
    Import Without Replacing Existing Presets
  </VPLink>
</div>

### Run Shortcut

Run an Apple Shortcuts shortcut by name and wait for its result.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runShortcut' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}runShortcut({
  shortcutName: 'Start Focus',
  input: 'Protocol Launcher',
})
```

<div class="flex justify-center">
  <VPLink :href="runShortcut(runShortcutParams)" target="_self">
    Run Start Focus Shortcut
  </VPLink>
</div>

### Run Shortcut Async Without Response

Run an Apple Shortcuts shortcut asynchronously without waiting for a response.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runShortcutAsyncWithoutResponse' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}runShortcutAsyncWithoutResponse({
  shortcutName: 'Log Break',
  input: '5 minutes',
})
```

<div class="flex justify-center">
  <VPLink :href="runShortcutAsyncWithoutResponse(runShortcutAsyncParams)" target="_self">
    Log Break Asynchronously
  </VPLink>
</div>

### Set Persistent String Variable

Set a string variable that persists over BetterTouchTool relaunches.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setPersistentStringVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setPersistentStringVariable({
  variableName: 'currentProject',
  to: 'Protocol Launcher',
})
```

<div class="flex justify-center">
  <VPLink :href="setPersistentStringVariable(setPersistentStringVariableParams)" target="_self">
    Save Current Project
  </VPLink>
</div>

### Set String Variable

Set a string variable for the runtime of BetterTouchTool.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setStringVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setStringVariable({
  variableName: 'sessionState',
  to: 'reviewing',
})
```

<div class="flex justify-center">
  <VPLink :href="setStringVariable(setStringVariableParams)" target="_self">
    Set Session State
  </VPLink>
</div>

### Set Persistent Number Variable

Set a number variable that persists over BetterTouchTool relaunches.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setPersistentNumberVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setPersistentNumberVariable({
  variableName: 'focusGoalMinutes',
  to: 45,
})
```

<div class="flex justify-center">
  <VPLink :href="setPersistentNumberVariable(setPersistentNumberVariableParams)" target="_self">
    Save Focus Goal
  </VPLink>
</div>

### Set Number Variable

Set a number variable for the runtime of BetterTouchTool.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'setNumberVariable' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}setNumberVariable({
  variableName: 'currentPomodoro',
  to: 2,
})
```

<div class="flex justify-center">
  <VPLink :href="setNumberVariable(setNumberVariableParams)" target="_self">
    Set Current Pomodoro
  </VPLink>
</div>

### Import Via URL

Import a BetterTouchTool preset by providing a URL to download it from, optionally using the documented unzip path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'importViaUrl' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}importViaUrl({
  url: 'https://example.com/btt-presets/focus-mode.bttpreset',
})

const unzipUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}importViaUrl({
  url: 'https://example.com/btt-presets/focus-mode.zip',
  unzip: true,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="importViaUrl(importViaUrlParams)" target="_self">
    Import Focus Mode from URL
  </VPLink>
  <VPLink :href="importViaUrl(importViaUrlUnzipParams)" target="_self">
    Import Zipped Focus Mode from URL
  </VPLink>
</div>

### JSON Import

Import triggers directly via a base64-encoded JSON string in the URL.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'jsonImport' : 'betterTouchTool' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}jsonImport({
  encodedJson: 'BASE64_ENCODED_TRIGGER_JSON',
})

const uncompressUrl = {{currentMethod === 'On-Demand' ? '' : 'betterTouchTool.'}}jsonImport({
  encodedJson: 'BASE64_ENCODED_COMPRESSED_TRIGGER_JSON',
  uncompress: true,
})
```

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="jsonImport(jsonImportParams)" target="_self">
    Import Encoded Trigger JSON
  </VPLink>
  <VPLink :href="jsonImport(jsonImportUncompressParams)" target="_self">
    Import Compressed Trigger JSON
  </VPLink>
</div>

## Official Documentation

- [BetterTouchTool Custom URL Scheme](https://docs.folivora.ai/docs/scripting/url-scheme/)
