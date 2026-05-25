---
url: /protocol-launcher/zh/apps/keyboard-maestro.md
---

# Keyboard Maestro

[Keyboard Maestro](https://www.keyboardmaestro.com/) 是一款用于创建和运行宏的 macOS 自动化应用。**Protocol Launcher** 允许你生成用于编辑、筛选和触发 Keyboard Maestro 宏的链接。

## 用法

有两种使用此库的方式：

* 按需导入（On-Demand）从子路径导入，支持 tree-shaking，保持打包体积小。
* 完整导入（Full Import）从根包导入，使用方便但包含所有应用模块。

生产构建请选择按需导入；完整导入适合快速脚本或演示。

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

* [Keyboard Maestro URL Schemes](https://wiki.keyboardmaestro.com/manual/URL_Schemes)
