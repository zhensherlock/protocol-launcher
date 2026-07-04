import type { DocumentsReaddleFilePayload } from './shared'
import { documentsReaddleFileUrl } from './shared'

/**
 * Open a file stored in the My Files section within Documents by Readdle.
 *
 * @param payload Documents by Readdle file payload.
 * @returns Documents by Readdle file URL scheme.
 * @example
 * openFile({ path: 'folder/subfolder/file.pdf' })
 * // => 'rdocs:///folder/subfolder/file.pdf'
 *
 * @link https://support.readdle.com/documents/transfer-share-your-files/transfer-files-from-safari-to-documents
 */
export function openFile(payload: DocumentsReaddleFilePayload) {
  const { path } = payload

  return documentsReaddleFileUrl(path)
}
