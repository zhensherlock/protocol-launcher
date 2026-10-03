---
url: /protocol-launcher/zh/apps/ok-json.md
---

# OK JSON

[OK JSON](https://okjson.app/) 是一款 JSON 查看工具。**Protocol Launcher** 允许您生成 OK JSON URL scheme 链接。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 注意事项

官方参考现在列出七个动作，包括 download 和 curl。这两个动作会读取剪贴板，其中 curl 会执行剪贴板中的命令。

`newJson()` 接收原始 JSON 字符串，并将其序列化为官方的 URL 编码 `content` 查询参数。`runScript()` 接收不带 `.js` 扩展名的自定义脚本文件名，与官方脚本 URL 格式保持一致。

### 从剪贴板查看 JSON 字符串

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'paste' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}paste()
```

### 查看 JSON 字符串

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newJson' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}newJson({
  content: '{"hello":"world"}',
})
```

### 显示历史窗口

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'history' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}history()
```

### 显示脚本面板窗口

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'scriptsPanel' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}scriptsPanel()
```

### 运行脚本

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'runScript' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}runScript({
  scriptFileNameWithoutJsExtension: 'copy-minified-json',
})
```

### 下载剪贴板中的 URL

读取剪贴板中的 URL，下载内容并以 JSON 打开。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'download' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}download()
```

### 执行剪贴板中的 cURL

执行剪贴板中当前的 cURL 命令。打开此 URL 前，请先检查剪贴板中的命令。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'curl' : 'okJson' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'okJson.'}}curl()
```

## 生成的 URL

```ts
paste()
// => 'okjson://paste'

newJson({
  content: '{"hello":"world"}',
})
// => 'okjson://new?content=%7B%22hello%22%3A%22world%22%7D'

history()
// => 'okjson://history'

scriptsPanel()
// => 'okjson://scripts-panel'

runScript({
  scriptFileNameWithoutJsExtension: 'copy-minified-json',
})
// => 'okjson://script/copy-minified-json'
```

## 官方文档

* [OK JSON URL Schemes](https://docs.okjson.app/url-schemes)
