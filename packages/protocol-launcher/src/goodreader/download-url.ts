import type { GoodReaderDownloadUrlPayload } from './shared'

/**
 * Download an HTTP or HTTPS URL into GoodReader.
 *
 * @param payload GoodReader download URL payload.
 * @returns GoodReader download URL using the official `ghttp` or `ghttps` scheme.
 * @throws When the URL scheme is not `http` or `https`.
 * @example
 * downloadUrl({ url: 'https://example.com/Guide.pdf' })
 * // => 'ghttps://example.com/Guide.pdf'
 *
 * @link https://www.goodreader.com/goodreader-networking-built-in-web-browser
 */
export function downloadUrl(payload: GoodReaderDownloadUrlPayload) {
  const { url } = payload

  if (url.startsWith('http://')) {
    return `g${url}`
  }

  if (url.startsWith('https://')) {
    return `g${url}`
  }

  throw new Error('Unsupported GoodReader download URL format.')
}
