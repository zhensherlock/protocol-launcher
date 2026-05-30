---
url: /protocol-launcher/zh/apps/microsoft-onenote.md
---

# Microsoft OneNote

[Microsoft OneNote](https://www.onenote.com/) 是 Microsoft 的数字笔记应用。**Protocol Launcher** 可以打开 Microsoft Graph 返回的官方 OneNote client URL。

## 使用方式

有两种使用此库的方式：

* 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
* 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

## 说明

Microsoft Graph 会在 page 和 notebook 资源上提供 OneNote 链接。`links` 属性包含 `oneNoteClientUrl.href` 和 `oneNoteWebUrl.href`。使用 `links.oneNoteClientUrl.href` 作为原生 OneNote client URL，并把这个已知 URL 传给 `openClientUrl`。helper 会校验文档记录的 `onenote:` 前缀和 HTTPS 目标，然后原样返回 URL。

不要根据 ID 自行拼接 OneNote page 或 notebook URL。Microsoft 文档记录的是从 Graph 返回的 `oneNoteClientUrl` 值打开客户端。

对于 Android，Microsoft 文档记录了一个额外步骤：启动 Intent 前，`oneNoteClientUrl` 中的 GUID 字符串必须包上 `{}`。`openAndroidClientUrl` 只用于这个文档记录的 Android client 流程。

### Open Client URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openClientUrl' : 'microsoftOneNote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftOneNote.'}}openClientUrl({
  href: 'onenote:https://...',
})
```

### Open Android Client URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAndroidClientUrl' : 'microsoftOneNote' }} } from '{{ importPath }}'

const oneNoteClientUrl = response.links.oneNoteClientUrl.href
const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftOneNote.'}}openAndroidClientUrl({ href: oneNoteClientUrl })
```

## 生成的 URL

```ts
openClientUrl(clientUrlParams)
// => 'onenote:https://...'
```

## 参考资料

* [Open the OneNote client](https://learn.microsoft.com/en-us/graph/open-onenote-client)
