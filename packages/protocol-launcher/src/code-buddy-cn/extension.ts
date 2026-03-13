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
 * Open extension details in CodeBuddy China.
 *
 * @param payload Open extension definition.
 * @returns CodeBuddy China open extension URL.
 * @example
 * openExtension({
 *   id: 'esbenp.prettier-vscode',
 * })
 * // => 'codebuddycn:extension/esbenp.prettier-vscode'
 */
export function openExtension(payload: OpenExtension) {
  const { id } = payload
  return `codebuddycn:extension/${id}`
}
