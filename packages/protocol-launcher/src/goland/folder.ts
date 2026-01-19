/**
 * Open folder definition.
 */
type OpenFolder = {
  /**
   * Folder path.
   */
  path: string
}

/**
 * Open folder in GoLand
 *
 * @param payload Open folder definition.
 * @returns GoLand open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'goland://open?file=/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `goland://open?file=${path}`
}
