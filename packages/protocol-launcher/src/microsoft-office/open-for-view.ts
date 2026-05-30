import type { OfficeDocumentPayload } from './shared'
import { officeDocumentUrl } from './shared'

/**
 * Open an Office document in read-only/view mode.
 *
 * @param payload Office document payload.
 * @returns Office open-for-view URI.
 * @example
 * openForView({
 *   scheme: 'ms-excel',
 *   uri: 'https://contoso.com/Q4/budget.xlsx',
 * })
 * // => 'ms-excel:ofv|u|https://contoso.com/Q4/budget.xlsx'
 *
 * @link https://learn.microsoft.com/en-us/office/client-developer/office-uri-schemes
 */
export function openForView(payload: OfficeDocumentPayload) {
  const { scheme, uri } = payload

  return officeDocumentUrl(scheme, 'ofv', uri)
}
