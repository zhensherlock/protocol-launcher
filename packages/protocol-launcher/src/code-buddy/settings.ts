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
 * Open settings in CodeBuddy.
 *
 * @param payload Open settings definition.
 * @returns CodeBuddy open settings URL.
 * @example
 * openSettings()
 * // => 'codebuddy://settings'
 */
export function openSettings(payload: OpenSettings = {}) {
  const { openInNewWindow = false } = payload
  return `codebuddy://settings${openInNewWindow ? '?windowId=_blank' : ''}`
}
