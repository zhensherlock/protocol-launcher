/**
 * Open component payload definition.
 */
type OpenComponent = {
  /**
   * Component to open.
   *
   * @example 'bigpicture'
   * @example 'console'
   * @example 'downloads'
   * @example 'friends'
   * @example 'settings'
   */
  component:
    | 'activateproduct'
    | 'bigpicture'
    | 'console'
    | 'downloads'
    | 'friends'
    | 'games'
    | 'games/details'
    | 'games/grid'
    | 'games/list'
    | 'largegameslist'
    | 'minigameslist'
    | 'main'
    | 'music'
    | 'musicplayer'
    | 'mymedia'
    | 'news'
    | 'registerproduct'
    | 'screenshots'
    | 'servers'
    | 'settings'
    | 'tools'
  /**
   * Additional parameter for some components (e.g., screenshots gameid).
   *
   * @example '730'
   */
  param?: string
}

/**
 * Opens a Steam window/component.
 *
 * @param payload Open component payload.
 * @returns Steam open component URL.
 * @example
 * openComponent({ component: 'bigpicture' })
 * // => 'steam://open/bigpicture'
 * @example
 * openComponent({ component: 'console' })
 * // => 'steam://open/console'
 * @example
 * openComponent({ component: 'downloads' })
 * // => 'steam://open/downloads'
 * @example
 * openComponent({ component: 'friends' })
 * // => 'steam://open/friends'
 * @example
 * openComponent({ component: 'screenshots', param: '730' })
 * // => 'steam://open/screenshots/730'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function openComponent(payload: OpenComponent) {
  const { component, param } = payload
  if (param) {
    return `steam://open/${component}/${param}`
  }
  return `steam://open/${component}`
}
