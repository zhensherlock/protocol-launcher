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
 * Open folder in PhpStorm
 *
 * @param payload Open folder definition.
 * @returns PhpStorm open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'phpstorm://open?file=/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `phpstorm://open?file=${path}`
}
