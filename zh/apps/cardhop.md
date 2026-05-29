---
url: /protocol-launcher/zh/apps/cardhop.md
---

# Cardhop

[Cardhop](https://flexibits.com/cardhop) 是 Flexibits 出品的联系人应用。**Protocol Launcher** 可以生成 Cardhop 链接，用于打开应用、解析联系人操作、显示联系人或视图，以及打开官方支持的偏好设置路径。

## 使用

提供两种使用方式：

* 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
* 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

Flexibits 官方文档列出了 `x-cardhop://`、`parse`、`show` 和 `preferences` URL handler。本模块只覆盖这些已记录的入口和参数。

### 打开

打开 Cardhop。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'open' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}open()
```

### Parse

使用官方文档中的 `s` 文本参数打开 Cardhop 解析器。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}parse({
  s: 'call Mike',
})
```

使用 `list` 过滤结果；当解析出的新联系人需要立即添加时，可使用 Cardhop 官方记录的 `add` 值（`Y`、`y`、`T`、`t` 或 `1`-`9`）。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'parse' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}parse({
  s: 'Sarah Jones',
  list: 'Friends',
  add: '1',
})
```

### Show

按姓名或标识符显示联系人。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}show({
  contact: 'Mike Ross',
})
```

显示联系人时可带上官方记录的操作和列表过滤。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}show({
  id: 'REPLACE_WITH_CONTACT_ID',
  action: 'mail',
  list: 'Team',
})
```

显示 Cardhop 官方记录的视图。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'show' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}show({
  view: 'contacts',
  list: 'Friends',
})
```

### Preferences

打开 Cardhop 支持的偏好设置路径。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'preferences' : 'cardhop' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cardhop.'}}preferences({
  path: 'notifications',
})
```

## 官方文档

* [Cardhop for iOS: Integration with other apps](https://flexibits.com/cardhop-ios/help/integration-with-other-apps)
* [Cardhop for Mac: Integration with other apps](https://flexibits.com/cardhop/help/integration-with-other-apps)
