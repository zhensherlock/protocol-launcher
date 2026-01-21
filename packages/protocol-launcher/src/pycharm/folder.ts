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
 * Open folder in PyCharm
 *
 * @param payload Open folder definition.
 * @returns PyCharm open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'pycharm://open?file=/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `pycharm://open?file=${path}`
}
