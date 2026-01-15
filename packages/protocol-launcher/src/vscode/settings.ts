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
 * Open settings in VS Code
 *
 * @param payload Open settings definition.
 * @returns VS Code open settings URL.
 * @example
 * openSettings()
 * // => 'vscode://settings'
 */
export function openSettings(payload: OpenSettings = {}) {
  const { openInNewWindow = false } = payload
  return `vscode://settings${openInNewWindow ? '?windowId=_blank' : ''}`
}
