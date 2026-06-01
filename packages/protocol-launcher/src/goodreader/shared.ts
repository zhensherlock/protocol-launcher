/**
 * GoodReader internal file payload definition.
 */
export type GoodReaderInternalFilePayload = {
  /**
   * Full internal path to a file inside GoodReader's file storage.
   */
  path: string
}

/**
 * GoodReader HTTP/HTTPS download payload definition.
 */
export type GoodReaderDownloadUrlPayload = {
  /**
   * HTTP or HTTPS URL to download into GoodReader.
   */
  url: string
}
