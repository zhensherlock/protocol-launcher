/**
 * Open feed payload definition.
 */
export type OpenFeed = {
  /**
   * The feed URL to append after Reeder's documented reed:// prefix.
   *
   * @example 'feed-url.com'
   */
  url: string
}

/**
 * Open Reeder and automatically search for a feed at the specified URL.
 *
 * @param payload Open feed payload.
 * @returns Reeder feed search URL.
 * @example
 * openFeed({
 *   url: 'feed-url.com',
 * })
 * // => 'reed://feed-url.com'
 * @link https://reederapp.com/help/
 */
export function openFeed(payload: OpenFeed) {
  const { url } = payload

  return `reed://${url}`
}
