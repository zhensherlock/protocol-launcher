/**
 * Open folder definition.
 */
type OpenFolder = {
  /**
   * Folder path.
   */
  path: string

  /**
   * Whether to open the folder in a new window.
   *
   * Defaults to `false`.
   */
  openInNewWindow?: boolean
}

/**
 * Open folder in CodeBuddy.
 *
 * @param payload Open folder definition.
 * @returns CodeBuddy open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'codebuddy://file/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `codebuddy://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
