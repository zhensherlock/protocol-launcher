---
url: /protocol-launcher/zh/apps/hammerspoon.md
---

# Hammerspoon

[Hammerspoon](https://www.hammerspoon.org/) 是一款 macOS 自动化工具，可以通过 Lua 脚本控制和扩展系统行为。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

### URL 事件

为通过 `hs.urlevent.bind` 注册的 callback 生成 Hammerspoon URL 事件。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'urlEvent' : 'hammerspoon' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'hammerspoon.'}}urlEvent({
  eventName: 'doThingA',
  params: {
    value: '1',
  },
})

const multiParamUrl = {{currentMethod === 'On-Demand' ? '' : 'hammerspoon.'}}urlEvent({
  eventName: 'someEventToHandle',
  params: {
    someParam: 'things',
    otherParam: 'stuff',
  },
})
```

## 官方文档

* [Hammerspoon hs.urlevent](https://www.hammerspoon.org/docs/hs.urlevent.html)
