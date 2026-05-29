import type { AddFilePayload } from './shared'
import { pdfViewerUrl } from './shared'

/**
 * Add a file to PDF Viewer.
 *
 * @param payload Add file payload.
 * @returns PDF Viewer add-file x-callback-url.
 * @example
 * addFile({ open: true, url: 'https://pspdfkit.com/downloads/case-study-box.pdf' })
 * // => 'pdfviewer://x-callback-url/add-file?open=true&url=https://pspdfkit.com/downloads/case-study-box.pdf'
 * @example
 * addFile({ open: false, filename: 'Document.pdf', data: 'JVBERi0xLjMKJcTl8uXrp/Og0MTGCg==' })
 * // => 'pdfviewer://x-callback-url/add-file?open=false&filename=Document.pdf&data=JVBERi0xLjMKJcTl8uXrp%2FOg0MTGCg%3D%3D'
 *
 * @link https://pdfviewer.io/faq/ios-how-can-i-integrate-pdf-viewer-into-my-website-or-iphone-ipad-app/
 */
export function addFile(payload: AddFilePayload) {
  const { open } = payload

  if ('url' in payload) {
    return pdfViewerUrl('add-file', {
      ...(open !== undefined ? { open } : {}),
      url: payload.url,
    })
  }

  return pdfViewerUrl('add-file', {
    ...(open !== undefined ? { open } : {}),
    filename: payload.filename,
    data: payload.data,
  })
}
