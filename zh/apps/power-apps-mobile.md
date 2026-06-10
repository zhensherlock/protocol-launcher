---
url: /protocol-launcher/zh/apps/power-apps-mobile.md
---

# Power Apps Mobile

[Power Apps Mobile](https://powerapps.microsoft.com/) 是 Microsoft 用于在手机和平板上运行 Power Apps 的移动端应用。**Protocol Launcher** 允许你生成 Power Apps Mobile URL scheme 链接。

## 使用

有两种方式使用这个库：

* 按需从子路径导入，支持 tree-shaking 并保持 bundle 更小。
* 从根包完整导入，适合快速脚本或 demo，但会包含所有 app 模块。

生产构建建议使用按需导入；完整导入适合快速脚本或演示。

## 说明

本模块只封装 Microsoft 文档记录的 Power Apps mobile URL 格式：用于 model-driven app 的 `ms-apps://<org-url>_<app-id>`，用于 canvas app 的 `ms-apps:///providers/Microsoft.PowerApps/apps/<appID>`，以及用于 wrapped native mobile app 的 `ms-mobile-apps:///providers/Microsoft.PowerApps/apps/<appID>`。

对于 model-driven app，`orgUrl` 需要传入不带 `https://` 的组织 URL。Microsoft 将 `environmentId` 和 `appLogicalName` 标为新的 model-driven 链接必填项，并将 `environmentId` 标为新的 canvas app 链接必填项。Wrapped app 链接仅在移动设备上只安装了一个 wrapped app 时可用。

## URL 方法

### 打开 Model-Driven App

在 Power Apps mobile 中打开 model-driven app。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openModelDrivenApp' : 'powerAppsMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerAppsMobile.'}}openModelDrivenApp({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  appLogicalName: 'cr12_e567',
  restartApp: true,
  forceOfflineDataSync: true,
})
```

### 打开 Entity Record

在 model-driven app 中打开 `entityrecord` 表单。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEntityRecord' : 'powerAppsMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerAppsMobile.'}}openEntityRecord({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  appLogicalName: 'cr12_e567',
  etn: 'account',
  id: '00000000-1111-2222-3333-444444444444',
})
```

### 打开 Entity List

在 model-driven app 中打开 `entitylist` 视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEntityList' : 'powerAppsMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerAppsMobile.'}}openEntityList({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  appLogicalName: 'cr12_e567',
  etn: 'account',
  viewid: '11111111-2222-3333-4444-555555555555',
  viewType: 1039,
})
```

### 打开 Canvas App

在 Power Apps mobile 中打开 canvas app。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openCanvasApp' : 'powerAppsMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerAppsMobile.'}}openCanvasApp({
  appId: '11111111-2222-3333-4444-555555555555',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  restartApp: true,
})
```

### 打开 Wrapped App

打开通过 Power Apps wrap 创建的 wrapped native mobile app。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWrappedApp' : 'powerAppsMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'powerAppsMobile.'}}openWrappedApp({
  appId: '11111111-2222-3333-4444-555555555555',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  restartApp: true,
})
```

## 生成的 URL

```ts
openModelDrivenApp(modelDrivenAppParams)
// => 'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true'

openEntityRecord(entityRecordParams)
// => 'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=account&pagetype=entityrecord&id=00000000-1111-2222-3333-444444444444'

openCanvasApp(canvasAppParams)
// => 'ms-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&restartApp=true'

openWrappedApp(wrappedAppParams)
// => 'ms-mobile-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&restartApp=true'
```

## 官方文档

* [Use deep links with the Power Apps mobile app](https://learn.microsoft.com/en-us/power-apps/mobile/mobile-deep-links)
* [Use deep links with wrapped mobile apps](https://learn.microsoft.com/en-us/power-apps/maker/common/wrap/wrap-deep-links)
