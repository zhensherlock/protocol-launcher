/**
 * Arguments for opening an extension.
 */
type OpenExtension = {
  /**
   * The unique identifier of the extension to open.
   *
   * @example 'com.panic.Playdate'
   */
  id: string
}

/**
 * Open a specified extension in Nova’s Extension Library.
 *
 * @param payload Arguments for opening an extension.
 * @returns Nova open extension URL.
 * @example
 * openExtension({
 *   id: 'com.panic.Playdate',
 * })
 * // => 'nova://extension?id=com.panic.Playdate'
 * @link https://help.nova.app/projects/url-schema/#extension
 */
export function openExtension(payload: OpenExtension) {
  const { id } = payload
  return `nova://extension?id=${id}`
}
