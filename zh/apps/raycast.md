---
url: /protocol-launcher/zh/apps/raycast.md
---

# Raycast

[Raycast](https://www.raycast.com/) 是一款启动器和效率工具，可以从统一的命令栏打开工具、运行命令、管理窗口并扩展 macOS 工作流。**Protocol Launcher** 会根据 Raycast 官方开发者文档和用户手册生成 deeplink。

## 用法

有两种使用此库的方式：

* 按需导入（On-Demand）从子路径导入，支持 tree-shaking，保持打包体积小。
* 完整导入（Full Import）从根包导入，使用方便但包含所有应用模块。

生产构建请选择按需导入；完整导入适合快速脚本或演示。

### 扩展命令

生成 Raycast 扩展命令 deeplink。Raycast 需要扩展 manifest 中的 owner 或 author、extension name 和 command name。内置扩展使用 `raycast` 作为 owner，并使用 slugified 后的扩展名和命令名。

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

### 自定义窗口管理命令

生成 Raycast 自定义窗口管理命令 deeplink。提供匹配的 `name` 会打开已有的自定义单窗口命令；省略 `name` 时，Raycast 会根据提供的窗口参数创建临时命令。

对于 Window Layout deeplink，Raycast 只支持 `name` 参数。

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

## 官方文档

* [Raycast Deeplinks](https://developers.raycast.com/information/lifecycle/deeplinks)
* [Raycast Window Management Deeplinks](https://manual.raycast.com/window-management#deeplinks)
