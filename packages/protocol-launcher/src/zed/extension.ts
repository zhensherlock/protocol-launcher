/**
 * Open extension definition.
 */
type OpenExtension = {
  /**
   * Extension identifier.
   *
   * @example 'html'
   * @link https://zed.dev/extensions
   */
  id: string
}

/**
 * Open extension details in Zed.
 *
 * @param payload Open extension definition.
 * @returns Zed open extension URL.
 * @example
 * openExtension({
 *   id: 'html',
 * })
 * // => 'zed://extension/html'
 * @link https://github.com/zed-industries/zed/blob/main/crates/zed/src/zed/open_listener.rs#L109
 */
export function openExtension(payload: OpenExtension) {
  const { id } = payload
  return `zed://extension/${id}`
}
