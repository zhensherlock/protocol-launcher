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
 * Open folder in Qoder
 *
 * @param payload Open folder definition.
 * @returns Qoder open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'qoder://file/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `qoder://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
