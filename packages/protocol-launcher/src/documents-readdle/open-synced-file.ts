import type { DocumentsReaddleSyncedFilePayload } from './shared'
import { documentsReaddleSyncedFileUrl } from './shared'

/**
 * Open a file kept in Documents by Readdle's Synced folders section.
 *
 * @param payload Documents by Readdle synced file payload.
 * @returns Documents by Readdle synced file URL scheme.
 * @example
 * openSyncedFile({ path: 'folder1/folder2/test.pdf' })
 * // => 'rdocs:///SyncedFolders/folder1/folder2/test.pdf'
 *
 * @link https://support.readdle.com/documents/transfer-share-your-files/transfer-files-from-safari-to-documents
 */
export function openSyncedFile(payload: DocumentsReaddleSyncedFilePayload) {
  const { path, syncedFoldersPath } = payload

  return documentsReaddleSyncedFileUrl(path, syncedFoldersPath)
}
