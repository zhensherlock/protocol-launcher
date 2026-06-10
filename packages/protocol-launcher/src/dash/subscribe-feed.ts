import { type DashFeedPayload, dashFeedUrl } from './shared'

export type SubscribeFeedPayload = DashFeedPayload

/**
 * Subscribe Dash to a docset feed using the documented `dash-feed://` URL scheme.
 *
 * @param payload Dash feed payload.
 * @returns Dash feed subscription URL.
 * @example
 * subscribeFeed({ url: 'http://kapeli.com/feeds/NodeJS.xml' })
 * // => 'dash-feed://http%3A%2F%2Fkapeli.com%2Ffeeds%2FNodeJS.xml'
 * @link https://kapeli.com/docsets
 */
export function subscribeFeed(payload: SubscribeFeedPayload) {
  return dashFeedUrl(payload.url)
}
