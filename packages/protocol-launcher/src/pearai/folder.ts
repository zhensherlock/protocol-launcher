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
 * Open folder in PearAI.
 *
 * @param payload Open folder definition.
 * @returns PearAI open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'pearai://file/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `pearai://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
