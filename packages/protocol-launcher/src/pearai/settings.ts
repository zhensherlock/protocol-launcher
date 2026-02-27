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
 * Open settings in PearAI
 *
 * @param payload Open settings definition.
 * @returns PearAI open settings URL.
 * @example
 * openSettings()
 * // => 'pearai://settings'
 */
export function openSettings(payload: OpenSettings = {}) {
  const { openInNewWindow = false } = payload
  return `pearai://settings${openInNewWindow ? '?windowId=_blank' : ''}`
}
