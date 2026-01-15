/**
 * Open settings definition.
 */
type OpenSettings = {
  /**
   * Whether to open the settings in a new window.
   *
   * Defaults to `false`.
   */
  openInNewWindow?: boolean
}

/**
 * Open settings in Cursor
 *
 * @param payload Open settings definition.
 * @returns Cursor open settings URL.
 * @example
 * openSettings()
 * // => 'cursor://settings'
 */
export function openSettings(payload: OpenSettings = {}) {
  const { openInNewWindow = false } = payload
  return `cursor://settings${openInNewWindow ? '?windowId=_blank' : ''}`
}
