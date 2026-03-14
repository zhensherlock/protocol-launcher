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
 * Open folder in Trae.
 *
 * @param payload Open folder definition.
 * @returns Trae open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'trae://file/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `trae://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
