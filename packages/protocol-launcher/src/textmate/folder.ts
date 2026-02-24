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
 * Open folder in TextMate
 *
 * @param payload Open folder definition.
 * @returns TextMate open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'txmt://open?url=file:///etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `txmt://open?url=file://${path}`
}
