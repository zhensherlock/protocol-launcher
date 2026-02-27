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
 * Open settings in Lingma
 *
 * @param payload Open settings definition.
 * @returns Lingma open settings URL.
 * @example
 * openSettings()
 * // => 'lingma://settings'
 */
export function openSettings(payload: OpenSettings = {}) {
  const { openInNewWindow = false } = payload
  return `lingma://settings${openInNewWindow ? '?windowId=_blank' : ''}`
}
