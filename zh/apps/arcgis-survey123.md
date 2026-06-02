---
url: /protocol-launcher/zh/apps/arcgis-survey123.md
---

# ArcGIS Survey123

[ArcGIS Survey123](https://www.esri.com/en-us/arcgis/products/arcgis-survey123/overview) 是 Esri 面向表单式现场数据采集的应用。**Protocol Launcher** 可以生成 ArcGIS Survey123 URL scheme 链接。

## 使用方式

这个库有两种使用方式：

* On-Demand 从子路径导入，支持 tree-shaking，能让产物更小。
* Full Import 从根包导入，适合快速脚本或演示，但会包含全部 app 模块。

生产构建建议选择 On-Demand；快速脚本或 demo 可以选择 Full Import。

## URL Scheme

Esri 官方文档列出了四种 Survey123 启动模式：Web app share URL `https://survey123.arcgis.com/share/ID`、field app app link `https://survey123.arcgis.app`、field app custom scheme `arcgis-survey123://`，以及 Survey123 Connect scheme `arcgis-survey123connect://`。

Field app 支持官方文档中的 URL 参数 `center`、`field:<question name>`、`portalUrl`、`itemID`、`download`、`action`、`folder`、`callback`、`callback:<status>`、`filter`、`update` 和 `q:<query parameter>`。Web app 将 survey item ID 放在路径中，并支持官方文档列出的 web app 参数 `signIn`、`isOrgSignIn`、`center`、`field:<question name>`、`portalUrl`、`open`、`hide`、`locale`、`mode`、`globalId`、`recalculate`、`version`、`token`、`autoReload`、`autoRefresh`、`encodeUrlParams` 和 `width`。Survey123 Connect 只接受 `portalUrl` 和 `itemID`。

### Launch Field App

使用 custom URL scheme 启动 Survey123 field app。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchFieldApp' : 'arcgisSurvey123' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisSurvey123.'}}launchFieldApp({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
  center: '37.8199,-122.4783,20',
})
```

### Launch Field App Link

使用官方建议用于 iOS 和 Android app-to-app 链接的 app link 启动 Survey123 field app。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchFieldAppLink' : 'arcgisSurvey123' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisSurvey123.'}}launchFieldAppLink({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
})
```

### Launch Web App

在 Survey123 web app 中打开 survey。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchWebApp' : 'arcgisSurvey123' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisSurvey123.'}}launchWebApp({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
  center: '37.8199,-122.4783',
})
```

### Launch Connect

在 Survey123 Connect 中打开 survey。Esri 官方文档说明 `portalUrl` 和 `itemID` 都是必需参数。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'launchConnect' : 'arcgisSurvey123' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'arcgisSurvey123.'}}launchConnect({
  portalUrl: 'https://www.arcgis.com',
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
})
```

## 生成的 URL

```ts
launchFieldApp({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
  center: '37.8199,-122.4783,20',
})
// => 'arcgis-survey123://?itemID=36ff9e8c13e042a58cfce4ad87f55d19&field:surname=Klauser&center=37.8199%2C-122.4783%2C20'

launchFieldAppLink({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
})
// => 'https://survey123.arcgis.app?itemID=36ff9e8c13e042a58cfce4ad87f55d19&field:surname=Klauser'

launchWebApp({
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
  fields: { surname: 'Klauser' },
  center: '37.8199,-122.4783',
})
// => 'https://survey123.arcgis.com/share/36ff9e8c13e042a58cfce4ad87f55d19?field:surname=Klauser&center=37.8199%2C-122.4783'

launchConnect({
  portalUrl: 'https://www.arcgis.com',
  itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
})
// => 'arcgis-survey123connect://?portalUrl=https%3A%2F%2Fwww.arcgis.com&itemID=36ff9e8c13e042a58cfce4ad87f55d19'
```

## 官方文档

* [Integrate with other apps](https://doc.arcgis.com/en/survey123/get-started/integratewithotherapps.htm)
* [Launch the field app](https://doc.arcgis.com/en/survey123/get-started/integrate-launchfieldapp.htm)
* [Launch the web app](https://doc.arcgis.com/en/survey123/get-started/integrate-launchwebapp.htm)
* [Launch Survey123 Connect](https://doc.arcgis.com/en/survey123/get-started/integrate-launchconnect.htm)
