/**
 * Return Downcast's documented Chrome RSS Subscription Extension URL template.
 *
 * @returns Downcast feed URL subscription template.
 * @example
 * subscribeFeedUrl()
 * // => 'downcast://feed-url=%s'
 * @link https://support.downcast.fm/article/efmhyEOyOj-url-schemes-opening-feed-ur-ls-mac
 */
export function subscribeFeedUrl() {
  return 'downcast://feed-url=%s'
}
