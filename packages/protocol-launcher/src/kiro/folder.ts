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
 * Open folder in Kiro
 *
 * @param payload Open folder definition.
 * @returns Kiro open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'kiro://file/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `kiro://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
