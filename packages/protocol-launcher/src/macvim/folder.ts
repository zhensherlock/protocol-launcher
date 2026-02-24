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
 * Open folder in MacVim
 *
 * @param payload Open folder definition.
 * @returns MacVim open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'mvim://open?url=file:///etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `mvim://open?url=file://${path}`
}
