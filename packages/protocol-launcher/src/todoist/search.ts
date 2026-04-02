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
 * Search in Todoist.
 * On Android mobile and Desktop (9.10.0+).
 *
 * @param payload Search command payload.
 * @returns Todoist search URL.
 * @example
 * search({ query: 'Test & Today' })
 * // => 'todoist://search?query=Test%20%26%20Today'
 * @link https://developer.todoist.com/api/v1/#tag/Url-schemes
 */
export function search(payload: Search) {
  const { query } = payload
  const params = qs({ query })

  return `todoist://search${params}`
}
