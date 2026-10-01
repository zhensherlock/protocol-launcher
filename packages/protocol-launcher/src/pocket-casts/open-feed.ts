type OpenFeed = {
  /** RSS feed URL, with or without an HTTP/HTTPS scheme. */
  feedUrl: string
}

/**
 * Open an RSS feed in Pocket Casts Web. The user can then choose Follow.
 *
 * @param payload Podcast RSS feed URL.
 * @returns Pocket Casts Web feed link with the complete feed URL percent-encoded.
 * @example
 * openFeed({ feedUrl: 'https://example.com/feed.xml?format=rss' })
 * // => 'https://pocketcasts.com/follow/https%3A%2F%2Fexample.com%2Ffeed.xml%3Fformat%3Drss'
 * @link https://support.pocketcasts.com/knowledge-base/third-party-integration/
 */
export function openFeed(payload: OpenFeed) {
  return `https://pocketcasts.com/follow/${encodeURIComponent(payload.feedUrl)}`
}
