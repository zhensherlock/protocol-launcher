/**
 * Uninstall application payload definition.
 */
type Uninstall = {
  /**
   * Application ID to uninstall.
   *
   * @example 8230
   */
  id: string | number
}

/**
 * Deletes the specified app's cache files.
 *
 * @param payload Uninstall payload.
 * @returns Steam uninstall URL.
 * @example
 * uninstall({ id: 8230 })
 * // => 'steam://uninstall/8230'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function uninstall(payload: Uninstall) {
  const { id } = payload
  return `steam://uninstall/${id}`
}
