---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  editMacroOrGroup,
  enterUserAndSerial,
  filterActions,
  filterMacros,
  triggerMacro,
} from 'protocol-launcher/keyboard-maestro';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  editMacroNameParams,
  editMacroUuidParams,
  filterActionCategoryParams,
  filterActionsParams,
  filterMacroGroupParams,
  filterMacrosParams,
  triggerMacroNameParams,
  triggerMacroUuidParams,
  triggerMacroUuidValueParams,
  triggerMacroValueParams,
  userAndSerialParams,
} from '../../.vitepress/constants/keyboard-maestro';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/keyboard-maestro' : 'protocol-launcher');
</script>

# Keyboard Maestro

[Keyboard Maestro](https://www.keyboardmaestro.com/) is a macOS automation app for creating and running macros. **Protocol Launcher** generates Keyboard Maestro URLs documented by the official URL Schemes page: editor URLs with the `keyboardmaestro` scheme and macro trigger URLs with the `kmtrigger` scheme.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="editMacroOrGroup(editMacroNameParams)" target="_self">
    Edit Macro
  </VPLink>
  <VPLink :href="editMacroOrGroup(editMacroUuidParams)" target="_self">
    Edit Macro by UUID
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="filterMacros(filterMacrosParams)" target="_self">
    Filter Macros
  </VPLink>
  <VPLink :href="filterMacros(filterMacroGroupParams)" target="_self">
    Select Group and Filter Macros
  </VPLink>
</div>

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

<div class="flex flex-col gap-4 items-center">
  <VPLink :href="filterActions(filterActionsParams)" target="_self">
    Filter Actions
  </VPLink>
  <VPLink :href="filterActions(filterActionCategoryParams)" target="_self">
    Select Category and Filter Actions
  </VPLink>
</div>

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

- [Keyboard Maestro URL Schemes](https://wiki.keyboardmaestro.com/manual/URL_Schemes)
