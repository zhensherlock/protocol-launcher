import type { Download } from './shared'
import { anyboxUrl } from './shared'

/**
 * Download a URL and save it to Anybox on macOS.
 *
 * @param payload Download URL payload.
 * @returns Anybox download URL.
 * @example
 * download({ url: 'https://example.com/file.pdf', tag: 'Reading' })
 * // => 'anybox://download?url=https%3A%2F%2Fexample.com%2Ffile.pdf&tag=Reading'
 * @link https://anybox.app/url-schemes
 */
export function download(payload: Download) {
  const { url, tag } = payload

  return anyboxUrl('download', {
    url,
    ...(tag ? { tag } : {}),
  })
}
