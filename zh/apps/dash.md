---
url: /protocol-launcher/zh/apps/dash.md
---

# Dash

[Dash](https://kapeli.com/dash) 是一款 macOS 文档浏览器和代码片段管理工具。**Protocol Launcher** 允许你生成用于搜索 Dash 和处理 Dash docset 的 URL。

## 使用

有两种方式可以使用此库：

* 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
* 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

## URL 方法

Dash 官方文档列出了 `dash://?query=...` 搜索 URL、`dash-plugin://...` 插件 URL、`dash-feed://...` feed 订阅 URL，以及 `dash-install://...` docset 安装 URL。本模块只暴露这些官方记录的形式。

### 搜索

生成官方记录的 URL，用来发起一次 Dash 搜索。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'search' : 'dash' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dash.'}}search({
  query: 'string',
})
```

### 搜索 Docsets

生成带 Dash docset keyword 或 Search Profile keyword trigger 的官方 `dash://` URL。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'searchDocsets' : 'dash' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dash.'}}searchDocsets({
  keyword: 'php',
  query: 'printf',
})
```

### 插件搜索

生成官方记录的插件 URL，用来向 Dash 传入逗号分隔的 docset keywords 和可选搜索词。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'pluginSearch' : 'dash' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dash.'}}pluginSearch({
  keys: 'python,django',
  query: 'string',
})
```

### 订阅 Feed

生成官方记录的 `dash-feed://` URL，用来让 Dash 订阅一个 docset feed。根据 Dash docset guide 的要求，feed URL 会进行 percent-encoding。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'subscribeFeed' : 'dash' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dash.'}}subscribeFeed({
  url: 'http://kapeli.com/feeds/NodeJS.xml',
})
```

### 安装 Docset

生成官方记录的 `dash-install://` URL，用来从 Dash downloads repo 条目安装 docset。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installDocset' : 'dash' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'dash.'}}installDocset({
  repoName: 'Ruby Docsets',
  entryName: 'cheatset',
  version: '1.3.3',
})
```

## 生成的 URL

```ts
search({ query: 'string' })
// => 'dash://?query=string'

searchDocsets({ keyword: 'php', query: 'printf' })
// => 'dash://?query=php:printf'

pluginSearch({ keys: 'python,django', query: 'string' })
// => 'dash-plugin://keys=python,django&query=string'

pluginSearch({ keys: 'python,django' })
// => 'dash-plugin://keys=python,django'

pluginSearch({ query: 'string' })
// => 'dash-plugin://query=string'

subscribeFeed({ url: 'http://kapeli.com/feeds/NodeJS.xml' })
// => 'dash-feed://http%3A%2F%2Fkapeli.com%2Ffeeds%2FNodeJS.xml'

installDocset({ repoName: 'Ruby Docsets', entryName: 'cheatset', version: '1.3.3' })
// => 'dash-install://repo_name=Ruby Docsets&entry_name=cheatset&version=1.3.3'
```

## 官方文档

* [Dash User Guide](https://kapeli.com/dash_guide)
* [Dash Plugin Development](https://kapeli.com/dash_plugins)
* [dash-install:// URL Format](https://kapeli.com/dash_install)
* [Docset Generation Guide](https://kapeli.com/docsets)
