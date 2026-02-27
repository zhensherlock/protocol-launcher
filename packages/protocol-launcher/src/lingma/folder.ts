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
 * Open folder in Lingma
 *
 * @param payload Open folder definition.
 * @returns Lingma open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'lingma://file/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `lingma://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
