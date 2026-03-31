import { qs } from '@protocol-launcher/shared'

/**
 * Search command payload definition.
 */
type Search = {
  /**
   * The category or name to be searched.
   *
   * @example 'Bars'
   * @example 'Public Transport'
   * @example 'Cafe'
   */
  search: string
}

/**
 * Search for a category or place name in Where To?.
 *
 * @param payload Search command payload.
 * @returns Where To? search URL.
 * @example
 * search({ search: 'Bars' })
 * // => 'whereto://?search=Bars'
 * @example
 * search({ search: 'Public Transport' })
 * // => 'whereto://?search=Public%20Transport'
 * @link https://www.futuretap.com/api/whereto
 */
export function search(payload: Search) {
  const { search } = payload
  const params = qs({ search })

  return `whereto://${params}`
}
