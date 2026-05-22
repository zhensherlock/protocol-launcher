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

[Keyboard Maestro](https://www.keyboardmaestro.com/) 是一款用于创建和运行宏的 macOS 自动化应用。**Protocol Launcher** 会根据官方 URL Schemes 页面生成 Keyboard Maestro 链接：使用 `keyboardmaestro` scheme 的编辑器 URL，以及使用 `kmtrigger` scheme 的宏触发 URL。

## 用法

有两种使用此库的方式：

- 按需导入（On-Demand）从子路径导入，支持 tree-shaking，保持打包体积小。
- 完整导入（Full Import）从根包导入，使用方便但包含所有应用模块。

生产构建请选择按需导入；完整导入适合快速脚本或演示。

<SelectInstallationMethod v-model="currentMethod" />

### 输入用户名和序列号

生成官方文档中用于输入 Keyboard Maestro 用户名和序列号的编辑器 URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'enterUserAndSerial' : 'keyboardMaestro' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'keyboardMaestro.'}}enterUserAndSerial({
  user: '{{ userAndSerialParams.user }}',
  serial: '{{ userAndSerialParams.serial }}',
})
```

### 编辑宏或宏组

生成官方文档中用于按名称或 UUID 编辑宏或宏组的编辑器 URL。

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
    编辑宏
  </VPLink>
  <VPLink :href="editMacroOrGroup(editMacroUuidParams)" target="_self">
    通过 UUID 编辑宏
  </VPLink>
</div>

### 筛选宏

生成官方文档中用于筛选宏的编辑器 URL，也可以先选择宏组再筛选。

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
    筛选宏
  </VPLink>
  <VPLink :href="filterMacros(filterMacroGroupParams)" target="_self">
    选择宏组并筛选宏
  </VPLink>
</div>

### 筛选动作

生成官方文档中用于筛选动作的编辑器 URL，也可以先选择动作分类再筛选。

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
    筛选动作
  </VPLink>
  <VPLink :href="filterActions(filterActionCategoryParams)" target="_self">
    选择分类并筛选动作
  </VPLink>
</div>

### 触发宏

生成官方文档中的 `kmtrigger` URL，用于按名称或 UUID 触发一个处于 Active 且 Enabled 状态的宏，也可以带上触发值。

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

## 官方文档

- [Keyboard Maestro URL Schemes](https://wiki.keyboardmaestro.com/manual/URL_Schemes)
