import { qs } from '@protocol-launcher/shared'

/**
 * Search payload definition.
 */
type Search = {
  /**
   * The search query for Spotlight search.
   */
  query?: string
}

/**
 * Trigger a Spotlight search in Hookmark using hook://search/ URL.
 *
 * @param payload Search payload.
 * @returns Hookmark search URL.
 * @example
 * openSearch({ query: 'project' })
 * // => 'hook://search/?query=project'
 * @example
 * openSearch({})
 * // => 'hook://search/'
 * @link https://hookproductivity.com/help/integration/url-scheme-selection-principles
 */
export function openSearch(payload: Search = {}) {
  const { query } = payload
  const params = qs({
    ...(query ? { query } : {}),
  })

  return `hook://search/${params}`
}
