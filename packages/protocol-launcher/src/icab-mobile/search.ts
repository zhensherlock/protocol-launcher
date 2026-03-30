import { qs } from '@protocol-launcher/shared'

/**
 * Search command payload definition.
 */
type Search = {
  /**
   * The search query.
   */
  query?: string
}

/**
 * Search in iCab Mobile.
 *
 * @param payload Search command payload.
 * @returns iCab Mobile search URL.
 * @example
 * search({ query: 'hello world' })
 * // => 'icabmobile://x-callback-url/search?query=hello%20world'
 * @example
 * search({})
 * // => 'icabmobile://x-callback-url/search'
 * @link http://www.icab.de/blog-archive/2012/07/01/icab-mobile-6-0-supports-x-callback-url/
 */
export function search(payload: Search = {}) {
  const { query } = payload
  const params = qs({
    ...(query ? { query } : {}),
  })

  return `icabmobile://x-callback-url/search${params}`
}
