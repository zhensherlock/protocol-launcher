---
url: /protocol-launcher/zh/apps/fulcrum.md
---

# Fulcrum

[Fulcrum](https://www.fulcrumapp.com/) 是一款用于移动表单和记录采集的现场数据应用。**Protocol Launcher** 可以生成 Fulcrum URL action 链接。

## 使用方式

这个库有两种使用方式：

* On-Demand 从子路径导入，支持 tree-shaking，能让产物更小。
* Full Import 从根包导入，适合快速脚本或演示，但会包含全部 app 模块。

生产构建建议选择 On-Demand；快速脚本或 demo 可以选择 Full Import。

## URL Scheme

Fulcrum 官方文档列出了 mobile custom scheme `fulcrumapp://`，支持 `open`、`new-record` 和 `edit-record` 三个 action。官方列出的 mobile 参数包括打开时使用的 `form_id`，新建记录使用的 `form_id`、`project_id`、`status`、`latitude`、`longitude` 和 data-name attributes，以及编辑记录使用的 `record_id`、`project_id`、`status`、`latitude`、`longitude` 和 data-name attributes。

Fulcrum 也记录了 web links：`https://web.fulcrumapp.com/dash/{form_id}`、`https://web.fulcrumapp.com/records/new`、`https://web.fulcrumapp.com/records/{record_id}` 和 `https://web.fulcrumapp.com/records/{record_id}?mode=edit`。官方用于 Android/iOS 兼容跳转的示例是 `https://web.fulcrumapp.com/action/#new-record?form_id=123-xyz` 和 `https://web.fulcrumapp.com/action/#edit-record?record_id=xyz-123`。

### Open

启动 Fulcrum mobile，并可选择打开指定 form。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}open({
  formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24',
})
```

### New Record

创建一条 mobile record。自定义字段值会作为 Fulcrum data-name attributes 传入。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newRecord' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}newRecord({
  formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24',
  status: 'incomplete',
  attributes: {
    sq_footage: 2300,
    name: 'My Awesome Building',
    number_of_floors: 3,
  },
  latitude: 28.038046,
  longitude: -81.952514,
})
```

### Edit Record

通过 record ID 编辑已有 mobile record。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editRecord' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}editRecord({
  recordId: '11fb2a54-5158-4848-8695-c405c54525e4',
  status: 'incomplete',
  attributes: {
    sq_footage: 2300,
    name: 'SNI',
    number_of_floors: 3,
  },
  latitude: 28.038046,
  longitude: -81.952514,
})
```

### Open Web Form

在 Fulcrum web app 中打开 form。官方列出的 `mode` 值是 `map`、`split` 和 `table`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebForm' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}openWebForm({
  formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24',
  mode: 'split',
})
```

### Create Web Record

打开 Fulcrum web app 的新建记录页面。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'createWebRecord' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}createWebRecord()
```

### Open Web Record

在 Fulcrum web app 中打开已有 record。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWebRecord' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}openWebRecord({
  recordId: '11fb2a54-5158-4848-8695-c405c54525e4',
})
```

### Edit Web Record

以 web edit mode 打开已有 record。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editWebRecord' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}editWebRecord({
  recordId: '11fb2a54-5158-4848-8695-c405c54525e4',
})
```

### New Record Action

生成 Fulcrum 官方文档中的新建 mobile record web action redirect URL。官方 redirect 示例只指定了 `form_id`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newRecordAction' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}newRecordAction({
  formId: '123-xyz',
})
```

### Edit Record Action

生成 Fulcrum 官方文档中的编辑 mobile record web action redirect URL。官方 redirect 示例只指定了 `record_id`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'editRecordAction' : 'fulcrum' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'fulcrum.'}}editRecordAction({
  recordId: 'xyz-123',
})
```

## 生成的 URL

```ts
open({ formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24' })
// => 'fulcrumapp://open?form_id=c55adab9-916d-46e9-98aa-7a2388a77b24'

newRecord({
  formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24',
  attributes: { number_of_floors: 3, sq_footage: 2300 },
})
// => 'fulcrumapp://new-record?form_id=c55adab9-916d-46e9-98aa-7a2388a77b24&number_of_floors=3&sq_footage=2300'

editWebRecord({ recordId: '11fb2a54-5158-4848-8695-c405c54525e4' })
// => 'https://web.fulcrumapp.com/records/11fb2a54-5158-4848-8695-c405c54525e4?mode=edit'

newRecordAction({ formId: '123-xyz' })
// => 'https://web.fulcrumapp.com/action/#new-record?form_id=123-xyz'
```

## 官方文档

* [Fulcrum URL Actions](https://docs.fulcrumapp.com/docs/url-actions)
