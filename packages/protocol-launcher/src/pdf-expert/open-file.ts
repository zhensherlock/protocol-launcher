import type { PdfExpertFilePayload } from './shared'
import { pdfExpertFileUrl } from './shared'

/**
 * Open a file stored in PDF Expert's Documents tab.
 *
 * @param payload PDF Expert file payload.
 * @returns PDF Expert file URL scheme.
 * @example
 * openFile({ path: 'Folder/Subfolder/File.pdf' })
 * // => 'PDFEFILE:///Folder/Subfolder/File.pdf'
 *
 * @link https://support.readdle.com/pdfexpert/en_US/for-developers/url-schemes
 */
export function openFile(payload: PdfExpertFilePayload) {
  const { path } = payload

  return pdfExpertFileUrl('PDFEFILE', path)
}
