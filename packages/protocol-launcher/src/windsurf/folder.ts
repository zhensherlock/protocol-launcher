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
 * Open folder in Windsurf.
 *
 * @param payload Open folder definition.
 * @returns Windsurf open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'windsurf://file/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `windsurf://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
