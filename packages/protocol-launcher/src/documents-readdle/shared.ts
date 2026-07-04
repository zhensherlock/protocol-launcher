export interface DocumentsReaddleFilePayload {
  /**
   * Internal file path inside Documents.
   */
  path: string
}

export interface DocumentsReaddleSyncedFilePayload extends DocumentsReaddleFilePayload {
  /**
   * Static Synced folders path segment. Readdle documents `SyncedFolders` for
   * English and translated values for localized apps.
   */
  syncedFoldersPath?: string
}

export function documentsReaddleFileUrl(path: string) {
  return `rdocs:///${documentsReaddlePath(path)}`
}

export function documentsReaddleSyncedFileUrl(path: string, syncedFoldersPath = 'SyncedFolders') {
  return documentsReaddleFileUrl(`${documentsReaddlePath(syncedFoldersPath)}/${documentsReaddlePath(path)}`)
}

function documentsReaddlePath(path: string) {
  return path.replace(/^\/+/, '')
}
