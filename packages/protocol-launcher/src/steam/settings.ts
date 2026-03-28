/**
 * Settings page payload definition.
 */
type Settings = {
  /**
   * Settings page to open.
   *
   * @example 'account'
   * @example 'downloads'
   */
  page?: 'account' | 'friends' | 'interface' | 'ingame' | 'downloads' | 'voice'
}

/**
 * Opens Steam settings page.
 *
 * @param payload Settings payload.
 * @returns Steam settings URL.
 * @example
 * settings({})
 * // => 'steam://settings/'
 * @example
 * settings({ page: 'account' })
 * // => 'steam://settings/account'
 * @example
 * settings({ page: 'downloads' })
 * // => 'steam://settings/downloads'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function settings(payload: Settings = {}) {
  const { page } = payload
  return `steam://settings/${page ?? ''}`
}
