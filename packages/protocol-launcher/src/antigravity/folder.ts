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
 * Open folder in Antigravity.
 *
 * @param payload Open folder definition.
 * @returns Antigravity open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'antigravity://file/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `antigravity://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
