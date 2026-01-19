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
 * Open folder in IntelliJ IDEA
 *
 * @param payload Open folder definition.
 * @returns IntelliJ IDEA open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'idea://open?file=/etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `idea://open?file=${path}`
}
