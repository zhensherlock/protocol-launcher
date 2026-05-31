---
url: /protocol-launcher/zh/apps/bike-outliner.md
---

# Bike Outliner

[Bike Outliner](https://www.hogbaysoftware.com/bike/) 是一款大纲软件。**Protocol Launcher** 可以生成 Bike Outliner row link 和 path row link。

## 使用

有两种方式可以使用此库：

* 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
* 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

## 说明

Bike Outliner 官方文档定义的 row link 形状为 `bike://<rootid>/<focusid>#<selectid>`。focused row id 和 selected row id 都是可选项。官方还定义了 `bike:///path/to/file.bike#row` 形式的 path row link。

此模块只暴露这些官方文档化的链接形式。当你已经有从 Bike Outliner 复制出的完整 Bike Outliner link 时，可以使用 `openRowLink()`。

### 打开行

使用文档 root id、可选的 focused row id 和可选的 selected row id 打开 Bike Outliner 并选中行。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRow' : 'bikeOutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bikeOutliner.'}}openRow({
  rootId: 'KOcw9x9N',
  focusId: 'ch',
  selectedId: 'zf',
})
```

### 打开路径行

使用文件路径定位 Bike Outliner outline 文件，然后通过 fragment id 选中对应行。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openPathRow' : 'bikeOutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bikeOutliner.'}}openPathRow({
  path: '/Users/jessegrosjean/Documents/todo.bike',
  selectedId: 'aF',
})
```

### 打开已有 Row Link

当你已经有完整 Bike Outliner row link 或 path row link 时，可以使用 `openRowLink()`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRowLink' : 'bikeOutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'bikeOutliner.'}}openRowLink({
  url: 'bike://KOcw9x9N/ch#zf',
})
```

## 生成的 URL

```ts
openRow({
  rootId: 'KOcw9x9N',
  focusId: 'ch',
  selectedId: 'zf',
})
// => 'bike://KOcw9x9N/ch#zf'

openPathRow({
  path: '/Users/jessegrosjean/Documents/todo.bike',
  selectedId: 'aF',
})
// => 'bike:///Users/jessegrosjean/Documents/todo.bike#aF'

openRowLink({ url: 'bike://KOcw9x9N/ch#zf' })
// => 'bike://KOcw9x9N/ch#zf'
```

## 官方文档

* [Bike Outliner Using Links](https://bikeguide.hogbaysoftware.com/using-bike/using-links)
