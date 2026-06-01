import type { GoodReaderInternalFilePayload } from './shared'

/**
 * Open a file from GoodReader's internal file storage.
 *
 * @param payload GoodReader internal file payload.
 * @returns GoodReader internal file URL.
 * @example
 * openInternalFile({ path: 'Manuals/Guide.pdf' })
 * // => 'gropen://Manuals/Guide.pdf'
 *
 * @link https://www.goodreader.com/how-to-manage-files-in-goodreader
 */
export function openInternalFile(payload: GoodReaderInternalFilePayload) {
  const { path } = payload

  return `gropen://${path}`
}
