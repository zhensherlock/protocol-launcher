---
url: /protocol-launcher/apps/documents-readdle.md
---

# Documents by Readdle

[Documents by Readdle](https://readdle.com/documents) is Readdle's file manager, media player, and document hub for iPhone and iPad. **Protocol Launcher** allows you to generate Documents URL scheme links to open files stored inside the app.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Open File

Open a file stored in the My Files section with the documented `rdocs:///folder/subfolder/file.pdf` form.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openFile' : 'documentsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'documentsReaddle.'}}openFile({
  path: 'folder/subfolder/file.pdf',
})
```

### Open Synced File

Open a file kept in Synced folders with the documented `rdocs:///SyncedFolders/` static path.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openSyncedFile' : 'documentsReaddle' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'documentsReaddle.'}}openSyncedFile({
  path: 'folder1/folder2/test.pdf',
})
```

Readdle notes that other app languages may require the translated version of the Synced folders part of the URL. Pass that segment as `syncedFoldersPath` when needed:

```ts-vue [{{currentMethod}}]
const localizedUrl = {{currentMethod === 'On-Demand' ? '' : 'documentsReaddle.'}}openSyncedFile({
  syncedFoldersPath: '同期フォルダ',
  path: 'folder1/folder2/test.pdf',
})
```

## Generated URLs

```ts
openFile({ path: 'folder/subfolder/file.pdf' })
// => 'rdocs:///folder/subfolder/file.pdf'

openSyncedFile({ path: 'folder1/folder2/test.pdf' })
// => 'rdocs:///SyncedFolders/folder1/folder2/test.pdf'

openSyncedFile({
  syncedFoldersPath: '同期フォルダ',
  path: 'folder1/folder2/test.pdf',
})
// => 'rdocs:///同期フォルダ/folder1/folder2/test.pdf'
```

## Official Documentation

* [Documents URL scheme from Safari](https://support.readdle.com/documents/transfer-share-your-files/transfer-files-from-safari-to-documents)
