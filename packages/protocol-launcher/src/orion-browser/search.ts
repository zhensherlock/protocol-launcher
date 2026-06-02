import { qs } from '@protocol-launcher/shared'

/**
 * Search definition.
 */
export interface Search {
  /**
   * The query to search in Orion Browser for iOS.
   */
  query: string
}

/**
 * Search in Orion Browser for iOS.
 *
 * @param payload Search command payload.
 * @returns Orion Browser search URL with the specified query.
 * @example
 * search({ query: 'privacy browser' })
 * // => 'orion://search?q=privacy%20browser'
 * @link https://browser.kagi.com/faq.html
 */
export function search(payload: Search) {
  const { query } = payload
  const params = qs({ q: query })

  return `orion://search${params}`
}
