/**
 * Install application payload definition.
 */
type Install = {
  /**
   * Application ID to install.
   *
   * @example 8230
   */
  id: string | number
}

/**
 * Installs an application.
 *
 * @param payload Install payload.
 * @returns Steam install URL.
 * @example
 * install({ id: 8230 })
 * // => 'steam://install/8230'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function install(payload: Install) {
  const { id } = payload
  return `steam://install/${id}`
}
