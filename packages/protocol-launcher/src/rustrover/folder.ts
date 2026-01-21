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
 * Open folder in RustRover
 *
 * @param payload Open folder definition.
 * @returns RustRover open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'rustrover://open?file=/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `rustrover://open?file=${path}`
}
