/**
 * Navigation component payload definition.
 */
type Nav = {
  /**
   * Navigation component to open.
   * Opens a Steam window without making it active.
   *
   * @example 'console'
   * @example 'downloads'
   * @example 'games'
   */
  component:
    | 'console'
    | 'downloads'
    | 'games'
    | 'games/details'
    | 'games/grid'
    | 'games/list'
    | 'library/collection/hidden'
    | 'media'
    | 'music'
    | 'tools'
  /**
   * Additional parameter for some components.
   *
   * @example '730'
   */
  param?: string
}

/**
 * Opens a Steam navigation window without making it active.
 *
 * @param payload Navigation payload.
 * @returns Steam nav URL.
 * @example
 * nav({ component: 'console' })
 * // => 'steam://nav/console'
 * @example
 * nav({ component: 'downloads' })
 * // => 'steam://nav/downloads'
 * @example
 * nav({ component: 'games' })
 * // => 'steam://nav/games'
 * @example
 * nav({ component: 'games/details', param: '730' })
 * // => 'steam://nav/games/details/730'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function nav(payload: Nav) {
  const { component, param } = payload
  if (param) {
    return `steam://nav/${component}/${param}`
  }
  return `steam://nav/${component}`
}
