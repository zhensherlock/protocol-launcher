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
 * Open folder in CodeBuddy China.
 *
 * @param payload Open folder definition.
 * @returns CodeBuddy China open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'codebuddycn://file/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path, openInNewWindow = false } = payload
  return `codebuddycn://file${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
