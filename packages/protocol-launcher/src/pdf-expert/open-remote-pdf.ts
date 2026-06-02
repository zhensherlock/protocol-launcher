import type { PdfExpertRemotePdfPayload } from './shared'

/**
 * Save and open a direct PDF URL in PDF Expert.
 *
 * @param payload PDF Expert remote PDF payload.
 * @returns PDF Expert remote PDF URL scheme.
 * @example
 * openRemotePdf({ url: 'https://example.com/Guide.pdf' })
 * // => 'PDFEhttps://example.com/Guide.pdf'
 *
 * @link https://support.readdle.com/pdfexpert/en_US/for-developers/url-schemes
 */
export function openRemotePdf(payload: PdfExpertRemotePdfPayload) {
  const { url } = payload

  return `PDFE${url}`
}
