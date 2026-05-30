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

[Microsoft Office](https://www.microsoft.com/microsoft-365/) is Microsoft's productivity suite for creating and working with documents, spreadsheets, presentations, and other Office files. **Protocol Launcher** allows you to generate official Office URI Scheme links.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

## Notes

Microsoft documents these scheme names: `ms-word`, `ms-powerpoint`, `ms-excel`, `ms-visio`, `ms-access`, `ms-project`, `ms-publisher`, `ms-spd`, and `ms-infopath`.

The full command form is `scheme:command|descriptor|argument`. The helpers preserve document and template URI strings as provided, including the `:` and `/` characters that Microsoft defines as argument data inside command arguments. SharePoint Designer and InfoPath app launchers do not expose `newFromTemplate` because Microsoft does not document the `nft` command for those two schemes.

Document and template arguments must be valid `http` or `https` URIs. The helpers also enforce Microsoft's documented Office 2013 command-argument restrictions: path length is limited to 256 characters, except Excel where it is 216 characters, and path file names cannot contain `\ / : ? < > | " *`. When `saveLocation` is supplied for `newFromTemplate`, Microsoft requires it to point to the same host name as the template URI.

### Open Document

Use the abbreviated schema when you want the Office app to open a resource for viewing.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'microsoftOffice' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftOffice.'}}openDocument({
  scheme: 'ms-word',
  uri: 'https://contoso.com/documents/report.docx',
})
```

<div class="flex justify-center">
  <VPLink :href="openDocument(openDocumentParams)" target="_self">
    Open Word Document
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
    Edit Word Document
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
    View Excel Workbook
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
    Create PowerPoint From Template
  </VPLink>
</div>

### App Launchers

Use app launchers when the target Office app is known up front.

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

The package also exports `excel`, `visio`, `access`, `project`, `publisher`, `sharePointDesigner`, and `infoPath` launchers.

## Generated URLs

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

## References

- [Office URI Schemes](https://learn.microsoft.com/en-us/office/client-developer/office-uri-schemes)
