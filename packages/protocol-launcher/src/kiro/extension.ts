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
 * Open extension details in Kiro.
 *
 * @param payload Open extension definition.
 * @returns Kiro open extension URL.
 * @example
 * openExtension({
 *   id: 'esbenp.prettier-vscode',
 * })
 * // => 'kiro:extension/esbenp.prettier-vscode'
 */
export function openExtension(payload: OpenExtension) {
  const { id } = payload
  return `kiro:extension/${id}`
}
