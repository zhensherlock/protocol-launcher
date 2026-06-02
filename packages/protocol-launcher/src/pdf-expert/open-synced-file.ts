import type { PdfExpertFilePayload } from './shared'
import { pdfExpertSyncedFileUrl } from './shared'

/**
 * Open a file kept in PDF Expert's Synced folders section.
 *
 * @param payload PDF Expert synced file payload.
 * @returns PDF Expert synced file URL scheme.
 * @example
 * openSyncedFile({ path: 'folder1/folder2/test.pdf' })
 * // => 'pdfefile:///SyncedFolders/folder1/folder2/test.pdf'
 *
 * @link https://support.readdle.com/pdfexpert/en_US/for-developers/url-schemes
 */
export function openSyncedFile(payload: PdfExpertFilePayload) {
  const { path } = payload

  return pdfExpertSyncedFileUrl(path)
}
