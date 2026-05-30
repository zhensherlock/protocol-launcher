export interface Subscribe {
  /**
   * Podcast feed URL without the leading `http://`, as required by Pocket Casts.
   *
   * @example 'example.com/podcast/rss'
   */
  feedUrlWithoutHttp: string
}

/**
 * Open Pocket Casts and follow the podcast specified by the feed URL.
 *
 * @param payload Subscribe podcast payload.
 * @returns Pocket Casts subscribe URL.
 * @example
 * subscribe({
 *   feedUrlWithoutHttp: 'example.com/podcast/rss',
 * })
 * // => 'pktc://subscribe/example.com/podcast/rss'
 * @link https://support.pocketcasts.com/knowledge-base/third-party-integration/
 */
export function subscribe(payload: Subscribe) {
  return `pktc://subscribe/${payload.feedUrlWithoutHttp}`
}
