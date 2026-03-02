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
 * Open settings in CodeBuddy.
 *
 * @param payload Open settings definition.
 * @returns CodeBuddy open settings URL.
 * @example
 * openSettings({ path: 'terminal.integrated.suggest.enabled' })
 * // => 'codebuddy://settings/terminal.integrated.suggest.enabled'
 */
export function openSettings(payload: OpenSettings = {}) {
  const { path, openInNewWindow = false } = payload
  return `codebuddy://settings${path ? `/${path}` : ''}${openInNewWindow ? '?windowId=_blank' : ''}`
}
