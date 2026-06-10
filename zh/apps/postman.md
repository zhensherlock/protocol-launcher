---
url: /protocol-launcher/zh/apps/postman.md
---

# Postman

[Postman](https://www.postman.com/) 是一款用于构建、测试和协作 API 的平台。**Protocol Launcher** 允许你生成用于在 Postman 中打开本地 Flow 文件的 URL。

## 使用

有两种方式可以使用此库：

* 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
* 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

## URL 方法

Postman 官方 Native Git / Flows 文档列出了 `postman://app/flows/open?filePath=...` custom protocol 链接，用来打开本地 flows。生成后的 `filePath` 是 flow 文件的 URL 编码后绝对路径。本模块只暴露这个官方记录的形式。

### 打开本地 Flow

生成官方记录的深度链接，用来打开本地 Postman Flow 文件。传入未编码的绝对路径即可，Protocol Launcher 会在生成 URL 时负责编码。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLocalFlow' : 'postman' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'postman.'}}openLocalFlow({
  filePath: '/Users/username/GitHub/postman/flows/New flow.flow',
})
```

## 生成的 URL

```ts
openLocalFlow({ filePath: '/Users/username/GitHub/postman/flows/New flow.flow' })
// => 'postman://app/flows/open?filePath=%2FUsers%2Fusername%2FGitHub%2Fpostman%2Fflows%2FNew%20flow.flow'
```

## 官方文档

* [Manage flows with Native Git](https://learning.postman.com/docs/postman-flows/get-started/flows-native-git)
