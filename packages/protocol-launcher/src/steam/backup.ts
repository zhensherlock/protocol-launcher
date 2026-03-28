/**
 * Backup application payload definition.
 */
type Backup = {
  /**
   * Application ID to backup.
   * If not specified, nothing will be checked.
   *
   * @example 730
   */
  id?: string | number
}

/**
 * Opens up the Backup Wizard and checks the specified application.
 *
 * @param payload Backup payload.
 * @returns Steam backup URL.
 * @example
 * backup({ id: 730 })
 * // => 'steam://backup/730'
 * @example
 * backup({})
 * // => 'steam://backup'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function backup(payload: Backup = {}) {
  const { id } = payload
  return `steam://backup${id ? `/${id}` : ''}`
}
