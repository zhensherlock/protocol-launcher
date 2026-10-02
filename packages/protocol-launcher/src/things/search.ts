import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams, hasCallbacks } from './callbacks'

/**
 * Search command payload definition.
 */
type Search = Callbacks & {
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
  const params = qs({
    ...(query ? { query } : {}),
    ...callbackParams(payload),
  })

  return `things://${hasCallbacks(payload) ? 'x-callback-url/' : '/'}search${params}`
}
