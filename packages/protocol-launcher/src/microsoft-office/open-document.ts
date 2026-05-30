import type { OfficeDocumentPayload } from './shared'
import { officeAbbreviatedUrl } from './shared'

/**
 * Open a document with the abbreviated Office URI scheme form.
 *
 * The abbreviated schema implies the `ofv` command and `u` argument descriptor.
 *
 * @param payload Office document payload.
 * @returns Office abbreviated document URI.
 * @example
 * openDocument({
 *   scheme: 'ms-word',
 *   uri: 'https://contoso.com/documents/report.docx',
 * })
 * // => 'ms-word:https://contoso.com/documents/report.docx'
 *
 * @link https://learn.microsoft.com/en-us/office/client-developer/office-uri-schemes
 */
export function openDocument(payload: OfficeDocumentPayload) {
  const { scheme, uri } = payload

  return officeAbbreviatedUrl(scheme, uri)
}
