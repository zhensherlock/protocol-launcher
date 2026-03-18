import { qs } from '@protocol-launcher/shared'

/**
 * Search command payload definition.
 */
type Search = {
  /**
   * The search query.
   */
  query: string
}

/**
 * Search for apps in the App Store.
 *
 * @param payload Search command payload.
 * @returns App Store search URL.
 * @example
 * search({ query: 'things' })
 * // => 'itms-apps://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?media=software&term=things'
 */
export function search(payload: Search) {
  const { query } = payload
  const params = qs({
    media: 'software',
    term: query,
  })

  return `itms-apps://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search${params}`
}
