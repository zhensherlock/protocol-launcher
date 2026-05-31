import type { DowncastFeedUrl } from './shared'

/**
 * Podcast feed subscription payload definition.
 */
export type Subscribe = {
  /**
   * A complete podcast feed URL using one of Downcast's documented feed schemes:
   * `itpc://`, `podcast://`, `feed://`, or `downcast://`.
   *
   * @example 'itpc://example.com/podcast/rss'
   */
  url: DowncastFeedUrl
}

/**
 * Open a Downcast-supported podcast feed URL to import a subscription.
 *
 * Downcast documents `itpc://`, `podcast://`, `feed://`, and `downcast://` as
 * feed URL schemes that launch Downcast and attempt to import the podcast at
 * that URL.
 *
 * @param payload Podcast feed subscription payload.
 * @returns Downcast-supported podcast feed URL.
 * @example
 * subscribe({
 *   url: 'itpc://example.com/podcast/rss',
 * })
 * // => 'itpc://example.com/podcast/rss'
 * @link https://support.downcast.fm/article/efmhyEOyOj-url-schemes-opening-feed-ur-ls-mac
 */
export function subscribe(payload: Subscribe) {
  return payload.url
}
