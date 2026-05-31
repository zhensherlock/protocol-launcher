---
url: /protocol-launcher/apps/omnioutliner.md
---

# OmniOutliner

[OmniOutliner](https://www.omnigroup.com/omnioutliner/) is an outlining app from The Omni Group. **Protocol Launcher** allows you to generate OmniOutliner Omni Links and Legacy Links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Document

Omni Links support document (`doc`) links. Provide the path, document name, and Omni Links Folder ID from your OmniOutliner Connected Folder.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openDocument' : 'omnioutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openDocument({
  documentName: 'My Outline.ooutline',
  folder: 'iCloud Drive',
})
```

### Open Document Row

Document Omni Links can include optional Elements, each added after the `folder` parameter with `&`. OmniOutliner currently documents `focus` for Focus and `row` for Row Selection.

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

### Open Legacy Link

Legacy Links only support the `open` link type. They work as long as the document containing the destination is open, and can include optional `focus` and `row` Elements.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLegacyLink' : 'omnioutliner' }} } from '{{ importPath }}'

const openUrl = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openLegacyLink()

const rowUrl = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openLegacyLink({
  focus: 'nBZUyLQl3b6',
  row: 'j3NzslZpCi8',
})
```

### Open Existing Link

Use `openLink()` when you already have a full `omnioutliner:///doc/...` Omni Link or `omnioutliner:///open...` Legacy Link copied from OmniOutliner.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openLink' : 'omnioutliner' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'omnioutliner.'}}openLink({
  url: 'omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive',
})
```

## Generated URLs

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

## Official Documentation

* [OmniOutliner 6 Omni Links and Legacy Links](https://support.omnigroup.com/documentation/omnioutliner/universal/6.1/en/connect/)
