/**
 * Friends command payload definition.
 */
type Friends = {
  /**
   * Friend action to perform.
   */
  action?:
    | 'add'
    | 'message'
    | 'joinchat'
    | 'players'
    | 'status/away'
    | 'status/busy'
    | 'status/invisible'
    | 'status/trade'
    | 'status/play'
    | 'status/offline'
    | 'status/online'
  /**
   * Friend ID for actions that require it.
   *
   * @example '12345678'
   */
  id?: string
}

/**
 * Opens Friends window with optional action.
 *
 * @param payload Friends payload.
 * @returns Steam friends URL.
 * @example
 * friends({})
 * // => 'steam://friends/'
 * @example
 * friends({ action: 'add', id: '12345678' })
 * // => 'steam://friends/add/12345678'
 * @example
 * friends({ action: 'message', id: '12345678' })
 * // => 'steam://friends/message/12345678'
 * @example
 * friends({ action: 'status/online' })
 * // => 'steam://friends/status/online'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function friends(payload: Friends = {}) {
  const { action, id } = payload
  if (action && id) {
    return `steam://friends/${action}/${id}`
  }
  if (action) {
    return `steam://friends/${action}`
  }
  return 'steam://friends/'
}
