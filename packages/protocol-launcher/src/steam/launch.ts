/**
 * Launch game payload definition.
 */
type Launch = {
  /**
   * Application ID to launch.
   *
   * @example 211
   */
  id: string | number
  /**
   * Optional launch arguments passed to the application.
   *
   * @example '-windowed -noborder'
   */
  args?: string
}

/**
 * Runs an application. It will be installed if necessary.
 *
 * @param payload Launch payload.
 * @returns Steam launch URL.
 * @example
 * launch({ id: 211 })
 * // => 'steam://run/211'
 * @example
 * launch({ id: 211, args: '-windowed' })
 * // => 'steam://run/211//-windowed/'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function launch(payload: Launch) {
  const { id, args } = payload
  if (args) {
    return `steam://run/${id}//${args}/`
  }
  return `steam://run/${id}`
}
