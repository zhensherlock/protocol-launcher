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
 * Open folder in WebStorm
 *
 * @param payload Open folder definition.
 * @returns WebStorm open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'webstorm://open?file=/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `webstorm://open?file=${path}`
}
