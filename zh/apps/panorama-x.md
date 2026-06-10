---
url: /protocol-launcher/zh/apps/panorama-x.md
---

# Panorama X

[Panorama X](https://www.provue.com/panoramax/) 是 ProVUE Development 的 macOS 数据库应用。**Protocol Launcher** 可以生成 Panorama X URL。

## 使用

有两种方式可以使用此库：

* 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
* 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

## URL 方法

ProVUE 只记录了两个 `panoramax://x-callback-url` 动作：`run/database/procedure/label` 和 `wizard/wizard+name`（或 `wizard%20name`）。ProVUE 还在 `writepreference` statement 参考页中记录了单独的 `panoramax://writepreference?name=value` URL。下面的 helper 不添加任何其他 Panorama X 动作。

### 运行过程

生成官方记录的 x-callback-url `run` 动作。Panorama X 会把路径段作为数据库、过程和标签名称。可选的 `params` 会变成 query-string 数据，随回调 URL 传给 Panorama X。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runProcedure' : 'panoramaX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'panoramaX.'}}runProcedure({
  database: 'database',
  procedure: 'procedure',
  label: 'xCallbackURLSuccess',
})

const urlWithData = {{currentMethod === 'On-Demand' ? '' : 'panoramaX.'}}runProcedure({
  database: 'database',
  procedure: 'procedure',
  label: 'xCallbackURLSuccess',
  params: {
    buildnumber: 50353,
    apiVersion: 2,
  },
})
```

### 打开 Wizard

生成官方记录的 x-callback-url `wizard` 动作。ProVUE 的发布说明写到 Wizard 名称中的空格可编码为 `+` 或 `%20`；Protocol Launcher 使用标准 `%20` 编码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openWizard' : 'panoramaX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'panoramaX.'}}openWizard({
  wizardName: 'wizard name',
})
```

### 写入偏好设置

生成官方记录的 `writepreference` URL。Panorama X 会把 query key 作为偏好设置名称，把 query value 作为文本形式的偏好设置值。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'writePreference' : 'panoramaX' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'panoramaX.'}}writePreference({
  name: 'newwindowwidth',
  value: 800,
})
```

## 生成的 URL

```ts
runProcedure({ database: 'database', procedure: 'procedure', label: 'xCallbackURLSuccess' })
// => 'panoramax://x-callback-url/run/database/procedure/xCallbackURLSuccess'

runProcedure({
  database: 'database',
  procedure: 'procedure',
  label: 'xCallbackURLSuccess',
  params: { buildnumber: 50353, apiVersion: 2 },
})
// => 'panoramax://x-callback-url/run/database/procedure/xCallbackURLSuccess?buildnumber=50353&apiVersion=2'

openWizard({ wizardName: 'wizard name' })
// => 'panoramax://x-callback-url/wizard/wizard%20name'

writePreference({ name: 'newwindowwidth', value: 800 })
// => 'panoramax://writepreference?newwindowwidth=800'
```

## 官方文档

* [Panorama X 10.2 release notes](https://www.provue.com/panoramax/help/Release_10_2.html)
* [xcallbackurl statement](https://www.provue.com/panoramax/help/statement_xcallbackurl.html)
* [writepreference statement](https://www.provue.com/panoramax/help/statement_writepreference.html)
