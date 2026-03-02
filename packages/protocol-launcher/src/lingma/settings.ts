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
 * Open settings in Lingma
 *
 * @param payload Open settings definition.
 * @returns Lingma open settings URL.
 * @example
 * openSettings({ path: 'terminal.integrated.suggest.enabled' })
 * // => 'lingma://settings/terminal.integrated.suggest.enabled'
 */
export function openSettings(payload: OpenSettings = {}) {
  const { path, openInNewWindow = false } = payload
  return `lingma://settings${path ? `/${path}` : ''}${openInNewWindow ? '?windowId=_blank' : ''}`
}
