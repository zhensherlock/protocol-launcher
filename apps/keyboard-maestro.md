---
url: /protocol-launcher/apps/keyboard-maestro.md
---

# Keyboard Maestro

[Keyboard Maestro](https://www.keyboardmaestro.com/) is a macOS automation app for creating and running macros. **Protocol Launcher** allows you to generate links for editing, filtering, and triggering Keyboard Maestro macros.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Enter Username And Serial Number

Generate the documented editor URL for entering a Keyboard Maestro username and serial number.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'enterUserAndSerial' : 'keyboardMaestro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}enterUserAndSerial({
  user: '{{ userAndSerialParams.user }}',
  serial: '{{ userAndSerialParams.serial }}',
})
```

### Edit Macro Or Macro Group

Generate the documented editor URL for editing a macro or macro group by name or UUID.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editMacroOrGroup' : 'keyboardMaestro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}editMacroOrGroup({
  macroOrGroup: '{{ editMacroNameParams.macroOrGroup }}',
})

const uuidUrl = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}editMacroOrGroup({
  macroOrGroup: '{{ editMacroUuidParams.macroOrGroup }}',
})
```

### Filter Macros

Generate the documented editor URL for filtering macros, optionally selecting a macro group first.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'filterMacros' : 'keyboardMaestro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}filterMacros({
  keyword: '{{ filterMacrosParams.keyword }}',
})

const groupUrl = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}filterMacros({
  group: '{{ filterMacroGroupParams.group }}',
  keyword: '{{ filterMacroGroupParams.keyword }}',
})
```

### Filter Actions

Generate the documented editor URL for filtering actions, optionally selecting an action category first.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'filterActions' : 'keyboardMaestro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}filterActions({
  keyword: '{{ filterActionsParams.keyword }}',
})

const categoryUrl = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}filterActions({
  category: '{{ filterActionCategoryParams.category }}',
  keyword: '{{ filterActionCategoryParams.keyword }}',
})
```

### Trigger Macro

Generate the documented `kmtrigger` URL for triggering an active and enabled macro by name or UUID, optionally with a trigger value.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'triggerMacro' : 'keyboardMaestro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}triggerMacro({
  macro: '{{ triggerMacroNameParams.macro }}',
})

const uuidUrl = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}triggerMacro({
  macro: '{{ triggerMacroUuidParams.macro }}',
})

const valueUrl = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}triggerMacro({
  macro: '{{ triggerMacroValueParams.macro }}',
  value: '{{ triggerMacroValueParams.value }}',
})

const uuidValueUrl = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}triggerMacro({
  macro: '{{ triggerMacroUuidValueParams.macro }}',
  value: '{{ triggerMacroUuidValueParams.value }}',
})
```

## Official Documentation

* [Keyboard Maestro URL Schemes](https://wiki.keyboardmaestro.com/manual/URL_Schemes)
