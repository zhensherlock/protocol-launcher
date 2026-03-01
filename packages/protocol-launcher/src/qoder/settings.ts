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
 * Open settings in Qoder.
 *
 * @param payload Open settings definition.
 * @returns Qoder open settings URL.
 * @example
 * openSettings()
 * // => 'qoder://settings'
 */
export function openSettings(payload: OpenSettings = {}) {
  const { openInNewWindow = false } = payload
  return `qoder://settings${openInNewWindow ? '?windowId=_blank' : ''}`
}
