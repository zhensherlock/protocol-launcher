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
 * Invoke and show the search screen in Things.
 *
 * @param payload Search command payload.
 * @returns Things search URL.
 * @example
 * search({ query: 'vacation' })
 * // => 'things:///search?query=vacation'
 * @example
 * search({})
 * // => 'things:///search'
 * @link https://culturedcode.com/things/support/articles/2803573/#search
 */
export function search(payload: Search = {}) {
  const { query } = payload
  const params = new URLSearchParams({
    ...(query ? { query } : {}),
  })

  return `things:///search${params.size ? `?${params}` : ''}`
}
