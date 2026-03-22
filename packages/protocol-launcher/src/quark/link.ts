/**
 * Open link payload definition.
 */
type OpenLink = {
  /**
   * The URL to open.
   *
   * @example 'www.baidu.com'
   */
  url: string
}

/**
 * Open a URL in Quark browser.
 *
 * @param payload Open link payload.
 * @returns Quark link URL.
 * @example
 * openLink({
 *   url: 'www.baidu.com',
 * })
 * // => 'qklink://www.baidu.com'
 */
export function openLink(payload: OpenLink) {
  const { url } = payload
  return `qklink://${url}`
}
