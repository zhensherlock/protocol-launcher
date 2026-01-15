import { encodeUrlPayload } from '@protocol-launcher/shared'

/**
 * Thunder download URL definition.
 */
type DownloadUrl = {
  /**
   * Original download URL.
   */
  url: string
}

/**
 * Generate Thunder download URL.
 *
 * @param payload Download URL definition.
 * @returns Thunder protocol URL.
 * @example
 * downloadUrl({
 *   url: 'https://example.com/file.zip',
 * })
 * // => 'thunder://xxx'
 */
export function downloadUrl(payload: DownloadUrl) {
  const { url } = payload
  const encodedPayload = encodeUrlPayload(`AA${url}ZZ`, { encodeForUrl: false })
  return `thunder://${encodedPayload}`
}
