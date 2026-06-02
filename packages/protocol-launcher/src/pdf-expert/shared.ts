export interface PdfExpertRemotePdfPayload {
  /**
   * Direct PDF URL to save and open in PDF Expert.
   */
  url: string
}

export interface PdfExpertFilePayload {
  /**
   * Internal file path inside PDF Expert.
   */
  path: string
}

export function pdfExpertFileUrl(scheme: 'PDFEFILE' | 'pdfefile', path: string) {
  return `${scheme}://${pdfExpertPath(path)}`
}

export function pdfExpertSyncedFileUrl(path: string) {
  return pdfExpertFileUrl('pdfefile', `SyncedFolders/${path.replace(/^\/+/, '')}`)
}

function pdfExpertPath(path: string) {
  return `/${path.replace(/^\/+/, '')}`
}
