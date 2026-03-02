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
 * Open extension details in Lingma.
 *
 * @param payload Open extension definition.
 * @returns Lingma open extension URL.
 * @example
 * openExtension({
 *   id: 'esbenp.prettier-vscode',
 * })
 * // => 'lingma:extension/esbenp.prettier-vscode'
 */
export function openExtension(payload: OpenExtension) {
  const { id } = payload
  return `lingma:extension/${id}`
}
