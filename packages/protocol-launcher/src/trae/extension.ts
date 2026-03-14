/**
 * Open extension definition.
 */
type OpenExtension = {
  /**
   * Extension identifier.
   *
   * @example 'esbenp.prettier-vscode'
   */
  id: string
}

/**
 * Open extension details in Trae.
 *
 * @param payload Open extension definition.
 * @returns Trae open extension URL.
 * @example
 * openExtension({
 *   id: 'esbenp.prettier-vscode',
 * })
 * // => 'trae:extension/esbenp.prettier-vscode'
 */
export function openExtension(payload: OpenExtension) {
  const { id } = payload
  return `trae:extension/${id}`
}
