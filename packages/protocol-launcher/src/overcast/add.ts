import { qs } from '@protocol-launcher/shared'

/**
 * Add podcast subscription payload definition.
 */
type Add = {
  /**
   * The podcast's RSS feed URL.
   *
   * @example 'https://example.com/podcast/rss'
   */
  url: string

  /**
   * A URL that the app should open after successfully subscribing.
   *
   * @example 'myapp://success'
   */
  xSuccess?: string
}

/**
 * Subscribe to a podcast RSS feed in Overcast using x-callback-url standard.
 *
 * @param payload Add podcast subscription payload.
 * @returns Overcast subscribe URL.
 * @example
 * add({
 *   url: 'https://example.com/podcast/rss',
 * })
 * // => 'overcast://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Fpodcast%2Frss'
 * @example
 * add({
 *   url: 'https://example.com/podcast/rss',
 *   xSuccess: 'myapp://success',
 * })
 * // => 'overcast://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Fpodcast%2Frss&x-success=myapp%3A%2F%2Fsuccess'
 * @link https://overcast.fm/podcasterinfo
 */
export function add(payload: Add) {
  const { url, xSuccess } = payload
  const params = qs({
    url,
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
  })

  return `overcast://x-callback-url/add${params}`
}
