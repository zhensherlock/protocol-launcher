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
 * Open folder in Cursor
 *
 * @param payload Open folder definition.
 * @returns Cursor open folder URL.
 * @example
 * openFolder({
 *   path: '/etc/hosts',
 * })
 * // => 'cursor://file/etc/hosts'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `cursor://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
