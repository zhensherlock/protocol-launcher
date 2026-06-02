---
url: /protocol-launcher/apps/pdf-expert.md
---

# PDF Expert

[PDF Expert](https://pdfexpert.com/) is Readdle's PDF editor and reader for Mac, iPad, and iPhone. **Protocol Launcher** allows you to generate PDF Expert URL scheme links.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open Remote PDF

Save and open a direct PDF URL by adding the documented `PDFE` prefix.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openRemotePdf' : 'pdfExpert' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfExpert.'}}openRemotePdf({
  url: 'https://example.com/Guide.pdf',
})
```

### Open File

Open a file stored in PDF Expert's Documents tab with the documented `PDFEFILE:///Folder/Subfolder/File.pdf` form.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'pdfExpert' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfExpert.'}}openFile({
  path: 'Folder/Subfolder/File.pdf',
})
```

If folder names contain spaces, Readdle documents using `%20`; pass those escapes in `path`.

### Open Synced File

Open a file kept in Synced folders with the documented `pdfefile:///SyncedFolders/` static path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSyncedFile' : 'pdfExpert' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'pdfExpert.'}}openSyncedFile({
  path: 'folder1/folder2/test.pdf',
})
```

Readdle notes that other app languages may require the translated version of the Synced folders part of the URL. This helper generates the documented English static path `pdfefile:///SyncedFolders/`.

## References

* [Readdle PDF Expert URL schemes](https://support.readdle.com/pdfexpert/en_US/for-developers/url-schemes)
