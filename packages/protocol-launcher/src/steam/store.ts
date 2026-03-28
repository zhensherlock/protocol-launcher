/**
 * Open store page payload definition.
 */
type Store = {
  /**
   * Application ID to open in the store.
   * If not specified, the default store page is opened.
   *
   * @example 8230
   */
  id?: string | number
}

/**
 * Opens up the store for an app.
 *
 * @param payload Store page payload.
 * @returns Steam store URL.
 * @example
 * store({ id: 8230 })
 * // => 'steam://store/8230'
 * @example
 * store({})
 * // => 'steam://store'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function store(payload: Store = {}) {
  const { id } = payload
  return `steam://store${id ? `/${id}` : ''}`
}
