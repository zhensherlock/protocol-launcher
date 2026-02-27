/**
 * Open settings definition.
 */
type OpenSettings = {
  /**
   * Optional settings path.
   * Can be 'autosave', 'base_keymap', etc.
   *
   * @example 'autosave'
   * @link https://zed.dev/docs/reference/all-settings
   */
  path?: string
}

/**
 * Open settings in Zed.
 *
 * @param payload Open settings definition.
 * @returns Zed open settings URL.
 * @example
 * openSettings()
 * // => 'zed://settings'
 * @example
 * openSettings({ path: 'autosave' })
 * // => 'zed://settings/autosave'
 * @link https://github.com/zed-industries/zed/blob/main/crates/zed/src/zed/open_listener.rs#L129
 * @link https://zed.dev/docs/reference/all-settings
 */
export function openSettings(payload: OpenSettings = {}) {
  const { path = '' } = payload
  return `zed://settings/${path}`
}
