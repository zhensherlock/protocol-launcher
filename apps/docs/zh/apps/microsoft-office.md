---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import {
  newFromTemplate,
  openDocument,
  openForEdit,
  openForView,
} from 'protocol-launcher/microsoft-office';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  newFromTemplateParams,
  openDocumentParams,
  openForEditParams,
  openForViewParams,
} from '../../.vitepress/constants/microsoft-office';

const currentMethod = ref('On-Demand');
const importPath = computed(() =>
  currentMethod.value === 'On-Demand' ? 'protocol-launcher/microsoft-office' : 'protocol-launcher',
);
</script>

# Microsoft Office

[Microsoft Office](https://www.microsoft.com/microsoft-365/) 是 Microsoft 用于创建和处理文档、电子表格、演示文稿及其他 Office 文件的生产力套件。**Protocol Launcher** 可以生成官方 Office URI Scheme 链接。

## 使用方式

有两种使用此库的方式：

- 按需导入（On-Demand）：从子路径导入支持 tree-shaking，保持较小的打包体积。
- 完整导入（Full Import）：从根包导入更方便，但会包含所有应用模块。

生产构建建议选择按需导入；快速脚本或演示可以使用完整导入。

<SelectInstallationMethod v-model="currentMethod" />

## 说明

Microsoft 文档记录了这些 scheme 名称：`ms-word`、`ms-powerpoint`、`ms-excel`、`ms-visio`、`ms-access`、`ms-project`、`ms-publisher`、`ms-spd` 和 `ms-infopath`。

完整命令格式为 `scheme:command|descriptor|argument`。这些 helper 会原样保留文档和模板 URI 字符串，包括 Microsoft 定义为命令参数数据的 `:` 和 `/` 字符。SharePoint Designer 和 InfoPath 的 app launcher 不暴露 `newFromTemplate`，因为 Microsoft 没有为这两个 scheme 记录 `nft` 命令。

文档和模板参数必须是有效的 `http` 或 `https` URI。helper 也会执行 Microsoft 记录的 Office 2013 command-argument 限制：path 长度最多 256 个字符，Excel 为 216 个字符，path 中的文件名不能包含 `\ / : ? < > | " *`。为 `newFromTemplate` 提供 `saveLocation` 时，Microsoft 要求它与模板 URI 指向同一个 host name。

### Open Document

需要让 Office 应用以查看方式打开资源时，可以使用缩写 schema。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'microsoftOffice' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftOffice.'}}openDocument({
  scheme: 'ms-word',
  uri: 'https://contoso.com/documents/report.docx',
})
```

<div class="flex justify-center">
  <VPLink :href="openDocument(openDocumentParams)" target="_self">
    打开 Word 文档
  </VPLink>
</div>

### Open For Edit

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openForEdit' : 'microsoftOffice' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftOffice.'}}openForEdit({
  scheme: 'ms-word',
  uri: 'https://contoso.com/documents/report.docx',
})
```

<div class="flex justify-center">
  <VPLink :href="openForEdit(openForEditParams)" target="_self">
    编辑 Word 文档
  </VPLink>
</div>

### Open For View

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openForView' : 'microsoftOffice' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftOffice.'}}openForView({
  scheme: 'ms-excel',
  uri: 'https://contoso.com/Q4/budget.xlsx',
})
```

<div class="flex justify-center">
  <VPLink :href="openForView(openForViewParams)" target="_self">
    查看 Excel 工作簿
  </VPLink>
</div>

### New From Template

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'newFromTemplate' : 'microsoftOffice' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftOffice.'}}newFromTemplate({
  scheme: 'ms-powerpoint',
  templateUri: 'https://contoso.com/templates/status.potx',
  saveLocation: 'https://contoso.com/presentations/',
})
```

<div class="flex justify-center">
  <VPLink :href="newFromTemplate(newFromTemplateParams)" target="_self">
    从模板创建 PowerPoint
  </VPLink>
</div>

### App Launchers

目标 Office 应用已知时，可以使用 app launcher。

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'word, powerPoint' : 'microsoftOffice' }} } from '{{ importPath }}'

const editWordUrl = {{currentMethod === 'On-Demand' ? 'word' : 'microsoftOffice.word'}}.openForEdit({
  uri: 'https://contoso.com/documents/report.docx',
})

const newDeckUrl = {{currentMethod === 'On-Demand' ? 'powerPoint' : 'microsoftOffice.powerPoint'}}.newFromTemplate({
  templateUri: 'https://contoso.com/templates/status.potx',
  saveLocation: 'https://contoso.com/presentations/',
})
```

包中还导出 `excel`、`visio`、`access`、`project`、`publisher`、`sharePointDesigner` 和 `infoPath` launcher。

## 生成的 URL

```ts
openDocument(openDocumentParams)
// => 'ms-word:https://contoso.com/documents/report.docx'

openForEdit(openForEditParams)
// => 'ms-word:ofe|u|https://contoso.com/documents/report.docx'

openForView(openForViewParams)
// => 'ms-excel:ofv|u|https://contoso.com/Q4/budget.xlsx'

newFromTemplate(newFromTemplateParams)
// => 'ms-powerpoint:nft|u|https://contoso.com/templates/status.potx|s|https://contoso.com/presentations/'

word.openForEdit(wordDocumentParams)
// => 'ms-word:ofe|u|https://contoso.com/documents/report.docx'

powerPoint.newFromTemplate(powerPointTemplateParams)
// => 'ms-powerpoint:nft|u|https://contoso.com/templates/status.potx|s|https://contoso.com/presentations/'
```

## 参考资料

- [Office URI Schemes](https://learn.microsoft.com/en-us/office/client-developer/office-uri-schemes)
