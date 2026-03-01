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
 * Open settings in Kiro
 *
 * @param payload Open settings definition.
 * @returns Kiro open settings URL.
 * @example
 * openSettings()
 * // => 'kiro://settings'
 */
export function openSettings(payload: OpenSettings = {}) {
  const { openInNewWindow = false } = payload
  return `kiro://settings${openInNewWindow ? '?windowId=_blank' : ''}`
}
