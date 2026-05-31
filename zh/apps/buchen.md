---
url: /protocol-launcher/zh/apps/buchen.md
---

# Buchen

[Buchen](https://www.borovia.co/) 是一款书签管理工具。**Protocol Launcher** 允许您生成 Buchen URL scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 注意事项

Buchen 官方支持页面只记录了以下 URL scheme 形式：

* `buchen://add-tag?name=<tag name>`
* `buchen://add?name=<bookmark name>&url=<url>&browser=<browser ?>`
* `buchen://go-bookmarks`
* `buchen://go-tags`
* `buchen://go-folders`

官方页面说明，任何包含 `?` 的参数块都是可选的，任何作为值传入的 URL 都必须进行 URL 编码。`addBookmark()` 会按查询参数值对书签 URL 进行百分号编码。可选的 `browser` 值限定为官方名称：`safari`、`edge`、`icab mobile`、`opera`、`brave`、`chrome`、`firefox`、`firefox focus`、`duckduckgo`、`quiche` 和 `jayson`。

Buchen 官方文档说明 `safari` 是默认浏览器的另一个名称，并说明浏览器在所有地方都使用这些名称，包括 Buchen JSON 导出文件。

### 添加标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addTag' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}addTag({
  name: 'reading list',
})
```

### 添加书签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}addBookmark({
  name: 'Protocol Launcher',
  url: 'https://www.example.com/',
})
```

### 添加带浏览器的书签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'addBookmark' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}addBookmark({
  name: 'Protocol Launcher',
  url: 'https://www.example.com/search?q=url scheme',
  browser: 'firefox focus',
})
```

### 前往书签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'goBookmarks' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}goBookmarks()
```

### 前往标签

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'goTags' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}goTags()
```

### 前往文件夹

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'goFolders' : 'buchen' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'buchen.'}}goFolders()
```

## 生成的 URL

```ts
addTag({
  name: 'reading list',
})
// => 'buchen://add-tag?name=reading%20list'

addBookmark({
  name: 'Protocol Launcher',
  url: 'https://www.example.com/',
})
// => 'buchen://add?name=Protocol%20Launcher&url=https%3A%2F%2Fwww.example.com%2F'

addBookmark({
  name: 'Protocol Launcher',
  url: 'https://www.example.com/search?q=url scheme',
  browser: 'firefox focus',
})
// => 'buchen://add?name=Protocol%20Launcher&url=https%3A%2F%2Fwww.example.com%2Fsearch%3Fq%3Durl%20scheme&browser=firefox%20focus'

goBookmarks()
// => 'buchen://go-bookmarks'

goTags()
// => 'buchen://go-tags'

goFolders()
// => 'buchen://go-folders'
```

## 官方文档

* [Buchen Supported URL Schemes](https://www.borovia.co/buchen.support.html)
