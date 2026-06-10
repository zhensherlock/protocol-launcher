---
url: /protocol-launcher/zh/apps/what3words.md
---

# what3words

[what3words](https://what3words.com/) 是一款用于通过 3 word address 查找和分享精确位置的定位应用。**Protocol Launcher** 允许你生成移动端链接，用来在 what3words app 中打开用户当前位置，或导航到一个 3 word address。

## 使用

有两种方式可以使用此库：

* 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
* 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

## URL 方法

what3words 官方 mobile linking 文档只列出两个受支持的 `w3w://show` URI 形式：`?currentlocation` 和 `?threewords=[word.word.word]`。本模块只暴露这些官方记录的形式。

### 显示当前位置

生成官方记录的 URL，在 what3words app 中打开用户当前位置。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showCurrentLocation' : 'what3words' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'what3words.'}}showCurrentLocation()
```

### 显示 3 Word Address

生成官方记录的 URL，在 what3words app 中导航到一个 3 word address。请以 `word.word.word` 形式传入地址。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'showThreeWords' : 'what3words' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'what3words.'}}showThreeWords({
  threeWords: 'daring.lion.race',
})
```

## 生成的 URL

```ts
showCurrentLocation()
// => 'w3w://show?currentlocation'

showThreeWords({ threeWords: 'daring.lion.race' })
// => 'w3w://show?threewords=daring.lion.race'
```

## 官方文档

* [Mobile linking to the what3words app](https://developer.what3words.com/tutorial/mobile-linking-to-the-what3words-app)
