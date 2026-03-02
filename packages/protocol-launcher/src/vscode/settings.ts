/**
 * Open settings definition.
 */
type OpenSettings = {
  /**
   * Optional settings path.
   * Can be 'terminal.integrated.suggest.enabled', etc.
   */
  path?: string

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
 * openSettings({ path: 'terminal.integrated.suggest.enabled' })
 * // => 'vscode://settings/terminal.integrated.suggest.enabled'
 */
export function openSettings(payload: OpenSettings = {}) {
  const { path, openInNewWindow = false } = payload
  return `vscode://settings${path ? `/${path}` : ''}${openInNewWindow ? '?windowId=_blank' : ''}`
}
