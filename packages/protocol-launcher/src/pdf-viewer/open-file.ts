import type { OpenFilePayload } from './shared'
import { pdfViewerUrl } from './shared'

/**
 * Open a local file in PDF Viewer from its path.
 *
 * @param payload Open file payload.
 * @returns PDF Viewer open-file x-callback-url.
 * @example
 * openFile({ path: '/Quick Start.pdf' })
 * // => 'pdfviewer://x-callback-url/open-file?path=/Quick%20Start.pdf'
 *
 * @link https://pdfviewer.io/faq/ios-how-can-i-integrate-pdf-viewer-into-my-website-or-iphone-ipad-app/
 */
export function openFile(payload: OpenFilePayload) {
  const { path } = payload

  return pdfViewerUrl('open-file', { path })
}
