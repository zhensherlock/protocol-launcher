---
url: /protocol-launcher/zh/apps/barcuts.md
---

# BarCuts

[BarCuts](https://docs.actions.work/barcuts/) 是一款用于运行 Shortcuts workflows 的 macOS 菜单栏应用。**Protocol Launcher** 允许你生成 BarCuts URL scheme 链接，用于查询可用 workflows 或运行本机 workflows。

## 使用

有两种方式使用此库：

* On-Demand 从子路径导入，有利于 tree-shaking 并保持包体积较小。
* Full Import 从根包导入，写起来更方便，但会包含所有应用模块。

生产构建建议使用 On-Demand；快速脚本或演示可以使用 Full Import。

## 说明

BarCuts 官方文档记录了用于查询 active 和 global workflows 的 `barcuts://workflows`。这个请求可以包含 `x-success` 和 `x-error`；成功时，BarCuts 会调用 success URL，并附带包含 workflow 列表的 `data` 参数。

BarCuts 还记录了 `barcuts://run-workflow`，可使用 `id` 参数或 `title` 参数运行 workflow。可选的 `input` 参数会作为文本传给 workflow。Protocol Launcher 只暴露这些官方文档中明确写出的 URL 形态和参数。

### Workflows

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'workflows' : 'barcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'barcuts.'}}workflows({
  xSuccess: 'my-app://success',
  xError: 'my-app://failure',
})
```

### 通过 ID 运行 Workflow

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runWorkflowById' : 'barcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'barcuts.'}}runWorkflowById({
  id: '17620440-E9E8-4B5C-9C7A-9B60C24DD428',
})
```

### 通过标题运行 Workflow

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runWorkflowByTitle' : 'barcuts' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'barcuts.'}}runWorkflowByTitle({
  title: 'Workflow 1',
  input: 'My input text!',
})
```

## 生成的 URL

```ts
workflows()
// => 'barcuts://workflows'

workflows({
  xSuccess: 'my-app://success',
  xError: 'my-app://failure',
})
// => 'barcuts://workflows?x-success=my-app%3A%2F%2Fsuccess&x-error=my-app%3A%2F%2Ffailure'

runWorkflowById({
  id: '17620440-E9E8-4B5C-9C7A-9B60C24DD428',
})
// => 'barcuts://run-workflow?id=17620440-E9E8-4B5C-9C7A-9B60C24DD428'

runWorkflowById({
  id: '17620440-E9E8-4B5C-9C7A-9B60C24DD428',
  input: 'My input text!',
})
// => 'barcuts://run-workflow?id=17620440-E9E8-4B5C-9C7A-9B60C24DD428&input=My%20input%20text%21'

runWorkflowByTitle({
  title: 'Workflow 1',
  input: 'My input text!',
})
// => 'barcuts://run-workflow?title=Workflow%201&input=My%20input%20text%21'
```

## 官方文档

* [BarCuts URL Scheme: Active Workflows](https://docs.actions.work/barcuts/url-scheme/)
* [BarCuts URL Scheme: Run Workflow](https://docs.actions.work/barcuts/url-scheme-run-workflow/)
