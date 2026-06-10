---
url: /protocol-launcher/zh/apps/dynamics-365-field-service-mobile.md
---

# Dynamics 365 Field Service Mobile

[Dynamics 365 Field Service Mobile](https://learn.microsoft.com/en-us/dynamics365/guidance/resources/field-service-mobile-use-deep-links) 是 Microsoft 面向 Dynamics 365 Field Service 的移动端应用。**Protocol Launcher** 允许你生成 Dynamics 365 Field Service Mobile URL scheme 链接。

## 使用

有两种方式使用这个库：

* 按需从子路径导入，支持 tree-shaking 并保持 bundle 更小。
* 从根包完整导入，适合快速脚本或 demo，但会包含所有 app 模块。

生产构建建议使用按需导入；完整导入适合快速脚本或演示。

## 说明

本模块只封装 Microsoft 文档记录的 Field Service mobile deep link 格式：`ms-apps-fs://<org-url>_<app-id>?tenantId=<tenant-id>&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true`。

`orgUrl` 需要传入不带 `https://` 的组织 URL。Entity record 链接使用 `pagetype=entityrecord`；创建表单使用同一个 page type，并传入空白 `id`。Entity list 链接使用 `pagetype=entitylist`，并使用文档记录的 `Viewtype` 值：系统视图为 `1039`，个人视图为 `4230`。

## URL 方法

### 打开 Entity Record

在 Dynamics 365 Field Service mobile app 中打开 `entityrecord` 表单。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEntityRecord' : 'dynamics365FieldServiceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dynamics365FieldServiceMobile.'}}openEntityRecord({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  etn: 'bookableresourcebooking',
  id: '00000000-1111-2222-3333-444444444444',
})
```

### 创建 Entity Record

在 Dynamics 365 Field Service mobile app 中打开 `entityrecord` 创建表单。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createEntityRecord' : 'dynamics365FieldServiceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dynamics365FieldServiceMobile.'}}createEntityRecord({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  etn: 'bookableresourcebooking',
})
```

### 打开 Entity List

在 Dynamics 365 Field Service mobile app 中打开 `entitylist` 视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openEntityList' : 'dynamics365FieldServiceMobile' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dynamics365FieldServiceMobile.'}}openEntityList({
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  etn: 'bookableresourcebooking',
  viewid: '11111111-2222-3333-4444-555555555555',
  viewType: 1039,
})
```

## 生成的 URL

```ts
openEntityRecord(entityRecordParams)
// => 'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entityrecord&id=00000000-1111-2222-3333-444444444444'

createEntityRecord(createEntityRecordParams)
// => 'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entityrecord&id='

openEntityList(entityListParams)
// => 'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entitylist&viewid=11111111-2222-3333-4444-555555555555&Viewtype=1039'
```

## 官方文档

* [Use deep links to the Field Service mobile app](https://learn.microsoft.com/en-us/dynamics365/guidance/resources/field-service-mobile-use-deep-links)
