import type { OfficeDocumentPayload } from './shared'
import { officeDocumentUrl } from './shared'

/**
 * Open an Office document for editing.
 *
 * @param payload Office document payload.
 * @returns Office open-for-edit URI.
 * @example
 * openForEdit({
 *   scheme: 'ms-word',
 *   uri: 'https://contoso.com/documents/report.docx',
 * })
 * // => 'ms-word:ofe|u|https://contoso.com/documents/report.docx'
 *
 * @link https://learn.microsoft.com/en-us/office/client-developer/office-uri-schemes
 */
export function openForEdit(payload: OfficeDocumentPayload) {
  const { scheme, uri } = payload

  return officeDocumentUrl(scheme, 'ofe', uri)
}
