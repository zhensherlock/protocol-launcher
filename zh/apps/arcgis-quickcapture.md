---
url: /protocol-launcher/zh/apps/arcgis-quickcapture.md
---

# ArcGIS QuickCapture

[ArcGIS QuickCapture](https://www.esri.com/en-us/arcgis/products/arcgis-quickcapture/overview) 是 Esri 的快速现场数据采集应用。**Protocol Launcher** 可以生成 ArcGIS QuickCapture 启动链接。

## 使用方式

这个库有两种使用方式：

* On-Demand 从子路径导入，支持 tree-shaking，能让产物更小。
* Full Import 从根包导入，适合快速脚本或演示，但会包含全部 app 模块。

生产构建建议选择 On-Demand；快速脚本或 demo 可以选择 Full Import。

## URL Methods

Esri 官方文档列出了两种 QuickCapture 启动方式：以 `https://quickcapture.arcgis.app` 开头的 QuickCapture link，以及以 `arcgis-quickcapture://` 开头的 custom URL scheme。两种方式支持相同的 mobile app 参数。

本模块只暴露官方文档列出的参数：`itemID`、`portalUrl`、`externalBrowserSignIn`、`center`、`callback`、`action=press:<button GUID>`、`field:<field name>` 和 `userInput:<input id>`。

### Launch URL Scheme

使用官方 custom URL scheme 启动 QuickCapture。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchUrlScheme' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}launchUrlScheme({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: { '001': 'Alice' },
})
```

### Launch App Link

使用官方用于 iOS 和 Android 的 app link 启动 QuickCapture。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchAppLink' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}launchAppLink({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: { '001': 'Alice' },
})
```

### Open Project

通过项目 item ID 打开 QuickCapture 项目。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openProject' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}openProject({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  center: '37.8199,-122.4783,20',
})
```

### Open Portal

为指定 ArcGIS portal 打开 QuickCapture，并可请求使用外部浏览器登录。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPortal' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}openPortal({
  portalUrl: 'https://myorg.arcgis.com',
  externalBrowserSignIn: true,
})
```

### Press Button

通过官方文档中的 button GUID 按下 QuickCapture 按钮，并可填充字段值。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pressButton' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}pressButton({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  buttonID: '0c59c9d9-9b51-46b3-bb81-21149e6fddb4',
  fields: { diameter: '20' },
  callback: 'https://survey123.arcgis.app',
})
```

### Populate User Input

打开 QuickCapture 项目并填充官方文档中的 project user input 值。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'populateUserInput' : 'arcgisQuickCapture' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisQuickCapture.'}}populateUserInput({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: {
    '001': 'Alice',
    '002': 'Zone5',
  },
})
```

## 生成的 URL

```ts
launchUrlScheme({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: { '001': 'Alice' },
})
// => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice'

launchAppLink({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: { '001': 'Alice' },
})
// => 'https://quickcapture.arcgis.app/?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice'

openProject({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  center: '37.8199,-122.4783,20',
})
// => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&center=37.8199%2C-122.4783%2C20'

openPortal({
  portalUrl: 'https://myorg.arcgis.com',
  externalBrowserSignIn: true,
})
// => 'arcgis-quickcapture://?portalUrl=https%3A%2F%2Fmyorg.arcgis.com&externalBrowserSignIn=true'

pressButton({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  buttonID: '0c59c9d9-9b51-46b3-bb81-21149e6fddb4',
  fields: { diameter: '20' },
  callback: 'https://survey123.arcgis.app',
})
// => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&action=press%3A0c59c9d9-9b51-46b3-bb81-21149e6fddb4&field:diameter=20&callback=https%3A%2F%2Fsurvey123.arcgis.app'

populateUserInput({
  itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
  userInputs: { '001': 'Alice', '002': 'Zone5' },
})
// => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice&userInput:002=Zone5'
```

## 官方文档

* [Integrate with other apps](https://doc.arcgis.com/en/quickcapture/help/integratewithotherapps.htm)
