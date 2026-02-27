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
 * Open folder in BBEdit
 *
 * @param payload Open folder definition.
 * @returns BBEdit open folder URL.
 * @example
 * openFolder({
 *   path: '/etc',
 * })
 * // => 'x-bbedit://open?url=file:///etc'
 */
export function openFolder(payload: OpenFolder) {
  const { path } = payload
  return `x-bbedit://open?url=file://${path}`
}
