---
url: /protocol-launcher/zh/apps/omnioutliner.md
---

# OmniOutliner

[OmniOutliner](https://www.omnigroup.com/omnioutliner/) 是 The Omni Group 的大纲应用。**Protocol Launcher** 可以生成 OmniOutliner Omni Links 与 Legacy Links。

## 使用

有两种方式可以使用此库：

* 按需从子路径导入，支持 Tree Shaking 并保持包体积较小。
* 从根包完整导入更适合快速脚本或示例，但会包含全部应用模块。

生产构建建议使用按需导入；快速演示可以使用完整导入。

### 打开文档

Omni Links 支持 document（`doc`）links。请提供 OmniOutliner Connected Folder 中的 path、document name 和 Omni Links Folder ID。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'omnioutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openDocument({
  documentName: 'My Outline.ooutline',
  folder: 'iCloud Drive',
})
```

### 打开文档中的行

Document Omni Links 可以包含可选 Elements，每个 Element 都在 `folder` 参数之后用 `&` 追加。OmniOutliner 目前记录了用于 Focus 的 `focus`，以及用于 Row Selection 的 `row`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocumentRow' : 'omnioutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openDocumentRow({
  path: 'foo/bar',
  documentName: 'My Outline.ooutline',
  folder: 'Work Server 9070',
  focus: 'mDFTZpAeCb8',
  row: 'fh4Q0jgg5iB',
})
```

### 打开 Legacy Link

Legacy Links 只支持 `open` link type。只要包含目标位置的文档已经打开，它们就可以工作，并可包含可选的 `focus` 和 `row` Elements。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLegacyLink' : 'omnioutliner' }} } from '{{ importPath }}'

const openUrl = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openLegacyLink()

const rowUrl = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openLegacyLink({
  focus: 'nBZUyLQl3b6',
  row: 'j3NzslZpCi8',
})
```

### 打开已有链接

当你已经有从 OmniOutliner 复制出的完整 `omnioutliner:///doc/...` Omni Link 或 `omnioutliner:///open...` Legacy Link 时，可以使用 `openLink()`。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLink' : 'omnioutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openLink({
  url: 'omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive',
})
```

## 生成的 URL

```ts
openDocument({ documentName: 'My Outline.ooutline', folder: 'iCloud Drive' })
// => 'omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive'

openDocumentRow({
  path: 'foo/bar',
  documentName: 'My Outline.ooutline',
  folder: 'Work Server 9070',
  focus: 'mDFTZpAeCb8',
  row: 'fh4Q0jgg5iB',
})
// => 'omnioutliner:///doc/foo/bar/My%20Outline.ooutline?folder=Work%20Server%209070&focus=mDFTZpAeCb8&row=fh4Q0jgg5iB'

openLegacyLink()
// => 'omnioutliner:///open'

openLegacyLink({ focus: 'nBZUyLQl3b6', row: 'j3NzslZpCi8' })
// => 'omnioutliner:///open?focus=nBZUyLQl3b6&row=j3NzslZpCi8'
```

## 官方文档

* [OmniOutliner 6 Omni Links and Legacy Links](https://support.omnigroup.com/documentation/omnioutliner/universal/6.1/en/connect/)
