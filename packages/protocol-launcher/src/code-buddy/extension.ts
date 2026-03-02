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
 * Open extension details in CodeBuddy.
 *
 * @param payload Open extension definition.
 * @returns CodeBuddy open extension URL.
 * @example
 * openExtension({
 *   id: 'esbenp.prettier-vscode',
 * })
 * // => 'codebuddy:extension/esbenp.prettier-vscode'
 */
export function openExtension(payload: OpenExtension) {
  const { id } = payload
  return `codebuddy:extension/${id}`
}
